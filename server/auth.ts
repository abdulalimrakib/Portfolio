import "server-only";
import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { prismaAdapter } from "@better-auth/prisma-adapter";
import { env } from "./env";
import { db } from "./db";

/**
 * Better Auth server instance.
 *
 * This wires up the database adapter, secret, and base URL so the
 * environment is ready for real authentication — registration, login,
 * sessions, password reset, email verification, OAuth, etc. can all be
 * turned on here as the app needs them (see https://www.better-auth.com/docs).
 *
 * No login/register UI is built on top of this yet; only the plumbing
 * (this config + the /api/auth/[...all] route handler) exists so the
 * environment is functional out of the box.
 */
export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  secret: env.BETTER_AUTH_SECRET,
  baseURL: env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
  },
  // Must be the last plugin: lets Better Auth set cookies from Server
  // Actions / Route Handlers using Next.js's cookies() API.
  plugins: [nextCookies()],
});
