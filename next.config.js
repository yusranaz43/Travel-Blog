/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable React strict mode
  trailingSlash: false,  // Ensure clean URLs
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Allow Sanity image domain
      },
    ],
  },
};

module.exports = nextConfig;
