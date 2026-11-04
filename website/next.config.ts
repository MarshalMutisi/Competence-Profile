import type { NextConfig } from "next";

// Static export: `npm run build` writes a plain website to /out that any static host can serve.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
