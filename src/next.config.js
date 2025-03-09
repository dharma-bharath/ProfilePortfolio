/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true, // Prevents CSS processing issues
  },
};

module.exports = nextConfig;
