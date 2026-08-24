import "server-only";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "./env";

/**
 * Prisma Client singleton.
 *
 * `next dev` hot-reloads server modules on every edit, which would create a
 * new PrismaClient (and a new DB connection pool) each time without this
 * global-caching pattern. In production a fresh module instance per process
 * is fine, so the cache is only used outside production.
 *
 * Prisma 7 requires an explicit driver adapter at runtime (the old implicit
 * query-engine-binary connection is gone) — see prisma.config.ts for the CLI
 * side of the same DATABASE_URL.
 */
const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log: env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
