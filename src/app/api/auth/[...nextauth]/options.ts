import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { NotFoundBoundary } from "next/dist/client/components/not-found-boundary";
import { NextResponse } from "next/server";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  // callbacks :{
  //   async signIn({account, profile}) {
  //     if(account.provider==='google') {
  //       return profile.image
  //     }
  //     return true
  //   }
  // } ,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
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
        const user = {
          id: "23",
          name: "king",
          password: "king",
          email: "austinnze1000@gmail.com",
        };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages : {
    signIn: '/auth/signin',
  }
};
