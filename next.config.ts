<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "localhost" },
      { hostname: "randomuser.me" },
      { hostname: "images.unsplash.com" },
=======
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost" },
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "images.unsplash.com" },
>>>>>>> 3b9121cbd8d32815f6e881aa17ca5bcaa56c6e91
    ],
  },
  experimental: {
    optimizeCss: true,
  },
<<<<<<< HEAD
  // Reduce CSS preload warnings
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups.styles = {
        name: 'styles',
        test: /\.(css|scss)$/,
        chunks: 'all',
        enforce: true,
      };
=======
  webpack: (
    config: any,
    { dev, isServer }: { dev: boolean; isServer: boolean }
  ) => {
    // Ensure splitChunks exists and is not false before modifying
    if (
      !dev &&
      !isServer &&
      config.optimization?.splitChunks &&
      config.optimization.splitChunks !== false
    ) {
      const splitChunks = config.optimization.splitChunks;
      if (typeof splitChunks === "object" && splitChunks.cacheGroups) {
        splitChunks.cacheGroups.styles = {
          name: "styles",
          test: /\.(css|scss)$/,
          chunks: "all",
          enforce: true,
        };
      }
>>>>>>> 3b9121cbd8d32815f6e881aa17ca5bcaa56c6e91
    }
    return config;
  },
};

export default nextConfig;
