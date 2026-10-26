import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  experimental: {
    agentUpgrade: "security",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
