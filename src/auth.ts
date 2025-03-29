import type { NextAuthOptions, Session } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

// create server auth function
import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { getServerSession } from "next-auth";

declare module "next-auth" {
  interface User {
    accessBearer?: string;
    verify: boolean;
  }
  interface Session {
    user?: {
      name: string | null;
      email: string | null;
      image?: string | null;
      verify: boolean | null;
    } | null;
    accessBearer?: string;
  }
}

export const config: NextAuthOptions = {
  providers: [
    FacebookProvider({
      clientId: "",
      clientSecret: "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};

        if (email !== "srka780@gmail.com") {
          throw new Error("Invalid email.");
        }

        if (password !== "123456") {
          throw new Error("Invalid password.");
        }

        return { 
          id: "1243252476", 
          name: "Sharif", 
          email, 
          accessBearer: "sdfgfdg", 
          verify: false 
        };

      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Set this in .env.local
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (
          account &&
          profile &&
          (account?.provider === "google" || account?.provider === "facebook")
        ) {
          try {
            const res = await fetch("http://localhost:4000/web/oauth_check", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: account.providerAccountId,
                provider: account.provider,
                profileImage: (profile as any).picture || "" as string,
                firstName: (profile as any).given_name || "" as string,
                lastName: (profile as any).family_name || "" as string,
                email: profile.email as string,
                verify: (profile as any).email_verified as boolean,
              }),
            }).then((res) => res.json());

            if(res?.success){
              return true
            }
            console.log("listen to db server with auth.ts Error <<<< ", res)
            throw new Error(`Error in signIn callback - ${account.provider}`);
          } catch (e) {
            console.log("listen to db server with auth.ts <<<< Error -> ", e);
            throw new Error("Error in signIn callback");
          }
      }
      return true;
    },
    async jwt({ token, user, account, profile }) {

      // callback for credentials provider setup
      if(account && user.email && (account?.provider === "credentials")){
        token.accessBearer = user.accessBearer as string;
        token.verify = user.verify as boolean;
      }


      // TODO: add token to db server and ensure account isExist and profile isExist
      if( account && profile && (account?.provider === "google" || account?.provider === "facebook")){
        // fetch to db server and get token
        // const res = await fetch("http://localhost:4000/web/oauth_check", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     userId: account.providerAccountId,
        //     provider: account.provider,
        //     profileImage: (profile as any).picture || "" as string,
        //     firstName: (profile as any).given_name || "" as string,
        //     lastName: (profile as any).family_name || "" as string,
        //     email: profile.email as string,
        //     verify: (profile as any).email_verified as boolean,
        //   }),
        // }).then((res) => res.json());

        token.accessBearer = "losdfjhgbsdgfghj" as string;
        token.verify = true as boolean;

        // TODO: setup jwt token
        // token.verify = res.verify as boolean
        // token.accessBearer = accessBearer.verify as string;

      }
      
      return token;
      
    },
    async session({session, token }) {

      console.log(" callback session - session ===================== ", session)
      console.log(" callback session - token ===================== ", token)

      
      if (session.user) {
        session.accessBearer = token.accessBearer as string;
        session.user.verify = token.verify as boolean;
      }

      return session;
    },
  },
  pages: {
    signIn: "/login", // Custom login page (optional)
    error: "/login", // Custom error page (optional)
  },
};

//   // Use it in server contexts
export default function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config);
}
