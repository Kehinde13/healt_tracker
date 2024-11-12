import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  eslint: {
    ignoreDuringBuilds: true,  // Disables ESLint checks during builds
  }
};

export default nextConfig;
