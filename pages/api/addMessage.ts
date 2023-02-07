import redis from "../../redis";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res
      .status(405)
      .json({ error: "Method not allowed. Only POST requests are allowed." });
    return;
  }

  try {
    const { message } = req.body;
    message ?? res.status(404).json({ error: "No message provided." });
    const newMessage = {
      ...message,
      createdAt: Date.now(),
    };
    // Push to redis db
    await redis.hset("messages", newMessage.id, JSON.stringify(newMessage));
    res.status(200).json({ message: newMessage });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
