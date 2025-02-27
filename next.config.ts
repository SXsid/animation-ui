import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.wallstreetzen.com",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "assets.streamlinehq.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
