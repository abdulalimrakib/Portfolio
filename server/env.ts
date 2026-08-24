import "server-only";
import { z } from "zod";

/**
 * Centralized, validated environment configuration.
 *
 * Import `env` from here instead of reading `process.env` directly anywhere
 * else in the app. This fails fast with a clear error at startup if a
 * required variable is missing or malformed, instead of surfacing as a
 * confusing runtime error later.
 *
 * This module is server-only (see the `server-only` import above) — importing
 * it from a Client Component will fail the build.
 */
const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  // No hostname constraint: local dev connects to "localhost", which
  // z.regexes.domain (a public-DNS-name pattern) would wrongly reject.
  DATABASE_URL: z
    .url({ protocol: /^postgresql?$/ })
    .describe(
      "PostgreSQL connection string, e.g. postgresql://user:pass@host:5432/db",
    ),

  BETTER_AUTH_SECRET: z
    .string()
    .min(
      32,
      "BETTER_AUTH_SECRET must be at least 32 characters (openssl rand -base64 32)",
    ),

  BETTER_AUTH_URL: z
    .url()
    .describe("Base URL of this app, e.g. http://localhost:3000"),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    "❌ Invalid environment variables:",
    z.treeifyError(parsed.error),
  );
  throw new Error("Invalid environment variables — see the errors above.");
}

export const env = parsed.data;
