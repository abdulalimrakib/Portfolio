// @vitest-environment node
//
// Runs in the "node" environment (not the project default "jsdom") because
// server/env.ts imports the `server-only` package, which throws as soon as
// it detects a browser-like `window` global — exactly what jsdom provides.
import { describe, it, expect, beforeEach, vi } from "vitest";

const validEnv = {
  NODE_ENV: "test",
  DATABASE_URL: "postgresql://user:pass@localhost:5432/db",
  BETTER_AUTH_SECRET: "a".repeat(32),
  BETTER_AUTH_URL: "http://localhost:3000",
};

describe("server/env", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.unstubAllEnvs();
  });

  it("parses a valid environment", async () => {
    for (const [key, value] of Object.entries(validEnv)) {
      vi.stubEnv(key, value);
    }

    const { env } = await import("@/server/env");

    expect(env.DATABASE_URL).toBe(validEnv.DATABASE_URL);
    expect(env.BETTER_AUTH_URL).toBe(validEnv.BETTER_AUTH_URL);
  });

  it("throws when DATABASE_URL is missing", async () => {
    for (const [key, value] of Object.entries(validEnv)) {
      vi.stubEnv(key, value);
    }
    vi.stubEnv("DATABASE_URL", "");

    await expect(import("@/server/env")).rejects.toThrow();
  });

  it("throws when BETTER_AUTH_SECRET is too short", async () => {
    for (const [key, value] of Object.entries(validEnv)) {
      vi.stubEnv(key, value);
    }
    vi.stubEnv("BETTER_AUTH_SECRET", "too-short");

    await expect(import("@/server/env")).rejects.toThrow();
  });
});
