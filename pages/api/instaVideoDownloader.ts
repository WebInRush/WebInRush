import { NextApiRequest, NextApiResponse } from "next";
// if in production, import puppeteer-core and set executablePath to the path of your chrome executable file (e.g. /usr/bin/chromium-browser) and pass it to the launch function as an option (e.g. executablePath: '/usr/bin/chromium-browser')
let puppeteer: any;
let chrome: {
  defaultViewport: any;
  args: string[];
  executablePath: Promise<string>;
  headless: boolean;
};
if (process.env.NODE_ENV === "production") {
  puppeteer = require("puppeteer-core");
  chrome = require("chrome-aws-lambda");
} else {
  puppeteer = require("puppeteer");
}

const getVideo = async (url: string) => {
  let option: any = {
    headless: true,
  };
  if (process.env.NODE_ENV === "production") {
    option = {
      ...option,
      args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
      defaultViewport: chrome.defaultViewport,
    };
  }
  const browser = await puppeteer.launch(option);
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector("video", {
    visible: true,
  });
  const data = await page.evaluate(() => {
    const video = document.querySelector("video");
    const poster = document.querySelector("img");
    const title = document.querySelector("title");
    return {
      title: title?.textContent,
      poster: poster?.getAttribute("src"),
      src: video?.getAttribute("src"),
    };
  });
  await browser.close();
  return data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { urls } = req.body;
  const videoPromises = urls.map(async (url: string) => {
    return await getVideo(url);
  });
  let videos = await Promise.all(videoPromises);
  res.status(200).json([...videos]);
}
