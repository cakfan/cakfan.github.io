import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: "/cakfan.github.io",
  assetPrefix: "/cakfan.github.io",
};

export default nextConfig;
