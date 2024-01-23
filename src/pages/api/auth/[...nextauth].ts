import { api } from "src/blitz-server"
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google"
import { NextAuthAdapter, BlitzNextAuthOptions } from "@blitzjs/auth/next-auth"
import { OAuthConfig } from "next-auth/providers"
import { User } from "@prisma/client"
import db from "db"
import { Role } from "types"

const ADMIN_USER_EMAIL = ["shankaranarayanan.m.s@gmail.com"]

// TODO: Store the user profile in the database with google profile image and other attributes
const config: BlitzNextAuthOptions<[OAuthConfig<GoogleProfile>]> = {
  successRedirectUrl: "/",
  errorRedirectUrl: "/",
  debug: true,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  callback: async (user, account, profile, session) => {
    console.log("The information AUTH  ", { user, account, profile, session })
    let newUser: User
    try {
      if (user.email) {
        newUser = await db.user.findFirstOrThrow({ where: { email: { equals: user.email } } })
      } else {
        newUser = await db.user.findFirstOrThrow({ where: { name: { equals: user.name } } })
      }
    } catch (e) {
      newUser = await db.user.create({
        data: {
          email: user.email!,
          name: user.name || "unknown",
          role: user.email && ADMIN_USER_EMAIL.includes(user.email) ? "ADMIN" : "USER",
          emailVerified: profile.email_verified,
          familyName: profile.family_name,
          givenName: profile.given_name,
          picture: profile.picture,
        },
      })
      console.log("NEW USER CATCH ---- ", newUser)
    }

    await session.$create({ userId: newUser.id, role: newUser.role as Role })
    return { redirectUrl: "/" }
  },
}

export default api(NextAuthAdapter(config))
