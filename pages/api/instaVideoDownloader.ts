import axios from "axios";
import cheerio from "cheerio";
import { NextApiRequest, NextApiResponse } from "next";
import { chromium } from "playwright-core";

export async function getVideoSrc(instagramUrl: string): Promise<string> {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(instagramUrl);
  await page.waitForSelector("video", { state: "visible" });

  const videoSrc = await page.$eval("video", (video: any) => {
    return (video as HTMLVideoElement).src;
  });

  await browser.close();

  return videoSrc;
}

const getVideoUrl = async (link: string) => {
  try {
    const response = await axios.get(link);
    const $ = cheerio.load(response.data);
    const title = $("title").text();
    const poster = $("meta[property='og:image']").attr("content");
    const src = await getVideoSrc(link)
      .then((src) => src)
      .catch((err) => null);
    if (src) {
      return {
        title,
        poster,
        src,
      };
    }
    return {
      title,
      poster,
    };
  } catch (error) {
    console.error(`Error retrieving video URL: ${error}`);
    return null;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { urls } = req.body;
  const videoPromises = urls.map(async (url: string) => {
    return await getVideoUrl(url);
  });
  let videos = await Promise.all(videoPromises);
  res.status(200).json([...videos]);
}
