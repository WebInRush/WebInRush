import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
require("dotenv").config();

export const authOptions = {
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: (process.env.GOOGLE_CLIENT_ID as string) || "",
      clientSecret: (process.env.GOOGLE_CLIENT_SECRET as string) || "",
    }),
    GitHubProvider({
      clientId: (process.env.GITHUB_ID as string) || "",
      clientSecret: (process.env.GITHUB_SECRET as string) || "",
    }),
  ],
};

export default NextAuth(authOptions);
