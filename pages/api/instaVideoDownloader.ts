import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

const getVideo = async (url: string) => {
  const browser = await puppeteer.launch({
    headless: true,
  });
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
