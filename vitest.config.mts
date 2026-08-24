import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

const rootDir = import.meta.dirname;

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/unit/setup.ts"],
    include: ["tests/unit/**/*.test.{ts,tsx}"],
    // Playwright owns tests/e2e — keep Vitest out of it.
    exclude: ["node_modules/**", "tests/e2e/**", ".next/**"],
  },
  resolve: {
    alias: {
      "@": rootDir,
      // `server-only` unconditionally throws unless a bundler aliases it
      // away — Next.js does this internally for server bundles. Vitest has
      // no such bundler step, so alias it the same way Next.js does.
      "server-only": path.join(rootDir, "node_modules/server-only/empty.js"),
    },
  },
});
