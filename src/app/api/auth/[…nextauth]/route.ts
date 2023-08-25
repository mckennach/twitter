import NextAuth from "next-auth"
import type { AuthOptions } from "next-auth"
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions: AuthOptions = {
  providers: [
    TwitterProvider({
        clientId: process.env.TWITTER_CLIENT_ID as string,
        clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
        version: "2.0", // opt-in to Twitter OAuth 2.0
    })
  ],
  session: { strategy: "jwt" }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }