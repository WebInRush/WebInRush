import { NextApiRequest, NextApiResponse } from "next";
import connectMongoDB from "../../../database/connect";
import Users from "../../../model/Schema";
import bcrypt from "bcryptjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectMongoDB().catch((err: { message: string }) =>
    res.status(400).json({ message: err.message })
  );
  // only post method allowed
  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ message: "Form Data not found." });
    const { name, email, password } = req.body;
    // check if user exists
    const checkExists = await Users.findOne({ email });
    if (!!checkExists) {
      return res.status(400).json({ message: "User already exists." });
    }
    // hash password
    Users.create(
      {
        name,
        email,
        password: await bcrypt.hash(password, 12),
      },
      function (err: Error, data: { name: string; email: string }) {
        if (err) return res.status(500).json({ message: err.message });
        res.status(201).json({ user: data });
      }
    );
  } else {
    res.status(405).json({
      message: "HTTP method not valid, only POST method is allowed",
    });
  }
}
