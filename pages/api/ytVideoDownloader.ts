import type { NextApiRequest, NextApiResponse } from "next";
import { getInfo } from "ytdl-core";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;
  try {
    const info = await getInfo(url as string);
    const title = info.videoDetails.title;
    const video = info.formats
      .map(
        ({ qualityLabel, url, hasAudio, hasVideo }) =>
          hasAudio && hasVideo && { qualityLabel, url }
      )
      .filter(Boolean);
    res.status(200).json({
      title,
      video,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
}
