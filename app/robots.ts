import type { MetadataRoute } from "next";
import { env } from "@/server/env";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", env.BETTER_AUTH_URL).toString(),
  };
}
