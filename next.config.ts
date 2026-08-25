import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js dev mode blocks cross-origin requests to its own JS/CSS chunks
  // by default (only "localhost" is trusted). Opening the dev server from
  // another device's browser via a LAN IP — e.g. http://192.168.50.59:3001 —
  // gets those chunk requests silently 403'd, which is why the page loads
  // but looks blank/unstyled and nothing is interactive. This only relaxes
  // that check in `next dev`; it has no effect on `next build`/`next start`.
  // Adjust the subnet below (or add another entry) if your LAN differs.
  allowedDevOrigins: ["192.168.50.*"],
  async headers() {
    return [
      {
        // Baseline hardening for every response. Add a Content-Security-Policy
        // here once the app's actual script/style/image origins are known —
        // it's too app-specific to guess safely in a starter config.
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
