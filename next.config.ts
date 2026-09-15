import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/strapi/:path*",
        destination: "http://183.82.117.36:2334/api/:path*",
      },
      {
        source: "/uploads/:path*",
        destination: "http://183.82.117.36:2334/uploads/:path*",
      },
    ];
  },
};

export default nextConfig;
