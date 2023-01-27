import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongoDB from "../../../database/connect";
import Users from "../../../model/Schema";
import { compare } from "bcryptjs";
require("dotenv").config();

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: (process.env.GOOGLE_ID as string) || "",
      clientSecret: (process.env.GOOGLE_SECRET as string) || "",
    }),
    GitHubProvider({
      clientId: (process.env.GITHUB_ID as string) || "",
      clientSecret: (process.env.GITHUB_SECRET as string) || "",
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize: async (credentials, _req) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        connectMongoDB().catch(() => {
          error: "Connection Failed!";
        });
        // check if user is logged in
        const result = await Users.findOne({ email });
        if (!result) {
          throw new Error("User not found, PLease Sign Up!");
        }
        // check if password is correct
        const checkPassword = await compare(password, result.password);
        if (!checkPassword || result.password !== password) {
          throw new Error("Invalid Credentials!");
        }
        if (!!result) return result;
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
