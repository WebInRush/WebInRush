import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";
require("dotenv").config();

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  jwt: {},
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
    LinkedInProvider({
      clientId: (process.env.LINKEDIN_ID as string) || "",
      clientSecret: (process.env.LINKEDIN_SECRET as string) || "",
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
