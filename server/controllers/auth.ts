import { db } from "../connect";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  // check if user exists
  const q = `SELECT * FROM users WHERE email = ?`;
  db.query(q, [req.body.email], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else if (result.length > 0) {
      res.status(409).send("User already exists!");
    } else {
      // create user
      // hash password
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const q = "INSERT INTO users (`name`, `email`, `password`) VALUES (?)";
      const values = [req.body.name, req.body.email, hash];
      db.query(q, [values], (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send("User has been created successfully!");
        }
      });
    }
  });
};
export const login = async (req: Request, res: Response) => {
  const q = "SELECT * FROM users WHERE email = ?";
  db.query(q, [req.body.email], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else if (result.length > 0) {
      const user = result[0];
      const isMatch = bcrypt.compareSync(req.body.password, user.password);
      if (isMatch) {
        const token = jwt.sign(
          { id: user.id },
          process.env.JWT_SECRET || "secretkey"
        );
        const { password, ...userWithoutPassword } = user;
        // set cookie
        res
          .cookie("accessToken", token, {
            expires: new Date(Date.now() + 3600000 * 1000 * 120),
            sameSite: "none",
            secure: true,
            httpOnly: true,
          })
          .status(200)
          .json({ user: userWithoutPassword });
      } else {
        res.status(400).send("Invalid credentials!");
      }
    } else {
      res.status(400).send("Invalid credentials!");
    }
  });
};
export const logout = async (req: Request, res: Response) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      httpOnly: true,
      sameSite: "none",
    })
    .send("User has been logged out successfully!");
};
