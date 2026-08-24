import { config as loadEnv } from "dotenv";
import { defineConfig } from "prisma/config";

// Only used by the Prisma CLI (generate/migrate/studio/db push), run outside
// of Next.js. Next.js itself loads .env.local on its own for the app.
loadEnv({ path: ".env.local" });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
