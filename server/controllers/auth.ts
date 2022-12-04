import { db } from "../connect";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  // check if user exists
  const q = `SELECT * FROM users WHERE username = ?`;
  db.query(q, [req.body.username], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else if (result.length > 0) {
      res.status(400).send("User already exists!");
    } else {
      // create user
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const q =
        "INSERT INTO users (`username`, `email`, `password`, `name`) VALUES (?)";
      const values = [req.body.username, req.body.email, hash, req.body.name];
      db.query(q, [values], (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send("User has been created successfully!");
        }
      });
    }
  });
  // create a new user
  // hash password
};
export const login = async (req: Request, res: Response) => {
  const q = "SELECT * FROM users WHERE username = ?";
  db.query(q, [req.body.username], (err, result) => {
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
        res
          .cookie("token", token, { httpOnly: true })
          .status(200)
          .send({ user: userWithoutPassword });
        // res.status(200).send("User has been logged in successfully!");
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
    .clearCookie("token", {
      secure: true,
      httpOnly: true,
      sameSite: "none",
    })
    .send("User has been logged out successfully!");
};
