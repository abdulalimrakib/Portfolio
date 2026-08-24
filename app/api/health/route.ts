import { db } from "@/server/db";

/**
 * Health check endpoint — verifies the app can reach PostgreSQL.
 * Useful for local verification, container/orchestrator health probes,
 * and CI smoke checks.
 */
export async function GET() {
  try {
    await db.$queryRaw`SELECT 1`;
    return Response.json({ status: "ok", database: "connected" });
  } catch (error) {
    console.error("Health check failed:", error);
    return Response.json(
      { status: "error", database: "unreachable" },
      { status: 503 },
    );
  }
}
