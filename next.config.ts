import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // OptionWheel (react-bits, kept unmodified) doesn't null its rAF ref on
  // cleanup, so StrictMode's dev double-mount freezes its layout loop and the
  // options stack at center. Disabling StrictMode keeps the component original.
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
    ],
  },
};

export default nextConfig;
