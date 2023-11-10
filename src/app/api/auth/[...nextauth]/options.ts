import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { NotFoundBoundary } from "next/dist/client/components/not-found-boundary";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          type: "text",
          label: "Username",
          placeholder: "Enter username",
        },
        password: {
          type: "text",
          label: "Password",
          placeholder: "Enter password",
        },
      },
      async authorize(credentials) {

        //This is where I should retrieve user data wherever is is stored example from a login form

        //.......hardcoding a user ........
        const user = { id: "23", name: "king", password: "king" };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user
        } else {
            return null
        }
      },
    }),
  ],
};
