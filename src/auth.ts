
import type { NextAuthOptions } from "next-auth"

import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"

// create server auth function
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"



export const config: NextAuthOptions = {
    providers: [
        FacebookProvider({
            clientId: '',
            clientSecret: ''
          }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          const { email, password } = credentials ?? {};
  
          // Replace with your actual authentication logic
          // if (email === "srka780@gmail.com" ) {
          //   return ;
          // }


          if (email !== "srka780@gmail.com") {
            throw new Error("Invalid email.");
          }
  
          if (password !== "123456") {
            throw new Error("Invalid password.");
          }

  
          return { id: "1", name: "Sharif", email };
        },
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET, // Set this in .env.local
    session: {
      strategy: "jwt",
    },
    callbacks: {
        async signIn({user, account, profile}) {
            console.log("callback user = ", user)
            console.log("callback account = ", account)
            console.log("callback profile = ", profile)
            return true
        },
    },
    pages: {
      signIn: "/login", // Custom login page (optional)
    //   error: "/login", // Custom error page (optional)
    },
  }



//   // Use it in server contexts
export default function auth(
    ...args:
      | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
      | [NextApiRequest, NextApiResponse]
      | []
  ) {
    return getServerSession(...args, config)
}