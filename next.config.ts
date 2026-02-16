import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: isGitHubPagesBuild ? basePath : "",
  assetPrefix: isGitHubPagesBuild && basePath ? `${basePath}/` : undefined
};

export default nextConfig;
