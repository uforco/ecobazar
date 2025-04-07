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
      id: string | null;
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
        const res = await fetch(`${process.env.DB_SERVER_URL}/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            provider: "credentials",
            email,
            password
          }),
        })
        const authorizationHeader = res?.headers?.get("authorization");
        if (!authorizationHeader) {
          // //console.log("Authorization header is null or undefined");
          const errorData = await res.json()
          throw new Error(errorData?.error)
        }
        const data = await res.json()
        // //console.log(" check headers ", authorizationHeader.split(" ")[1]);
        return {
          id: data?.userInfo?.userId,
          name: data?.userInfo?.fullname,
          ...data?.userInfo,
          image: data?.userInfo?.profileImage,
          accessBearer: authorizationHeader.split(" ")[1],
        }
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
            const res = await fetch(`${process.env.DB_SERVER_URL}/oauth_check`, {
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
            // //console.log("listen to db server with auth.ts Error <<<< ", res)
            throw new Error(`Error in signIn callback - ${account.provider}`);
          } catch (e) {
            // //console.log("listen to db server with auth.ts <<<< Error -> ", e);
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

      if(account && (account?.provider === "google" || account?.provider === "facebook")){
        // fetch to db server and get token
        const res = await fetch(`${process.env.DB_SERVER_URL}/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user.id,
            provider: account.provider,
            email: token.email as string
          }),
        })
        const authorizationHeader = res?.headers?.get("authorization");
        if (!authorizationHeader) {
          // //console.log("Authorization header is null or undefined");
          const errorData = await res.json()
          throw new Error(errorData?.error)
        }
        const data = await res.json()
        token.sub = data?.userInfo?.userId as string;
        token.name = data?.userInfo?.fullname as string;
        token.picture = data?.userInfo?.profileImage as string;
        token.accessBearer = authorizationHeader.split(" ")[1] as string;
        token.verify = data?.userInfo?.verify as boolean;
        return token;
      }
      return token;
    },
    async session({session, token }) {

      //console.log("session", token);

      if (session.user) {
        session.accessBearer = token.accessBearer as string;
        session.user.verify = token.verify as boolean;
        session.user.id = token.sub as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/system/login", // Custom login page (optional)
    error: "/system/login", // Custom error page (optional)
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
