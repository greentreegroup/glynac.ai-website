import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/checkout",
        destination: "/pricing", // Redirect to pricing page after checkout
      },
      {
        source: "/success",
        destination: "/pricing", // Redirect to pricing page after success
      },
      {
        source: "/cancel",
        destination: "/pricing", // Redirect to pricing page after cancel
      },
    ];
  },
};

export default nextConfig;
