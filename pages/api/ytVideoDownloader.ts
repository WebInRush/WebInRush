import type { NextApiRequest, NextApiResponse } from "next";
import { getInfo } from "ytdl-core";
import getUrls from "get-urls";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { url } = req.query;
  url = Array.from(getUrls(url as string))[0];
  try {
    const info = await getInfo(url as string);
    const title = info.videoDetails.title;
    const video = info.formats
      .map(
        ({ qualityLabel, url, hasAudio, hasVideo, audioBitrate, container }) =>
          hasAudio && {
            container,
            audioBitrate,
            hasAudio,
            hasVideo,
            qualityLabel,
            url,
          }
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
