/** @type {import('next').NextConfig} */

const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

const nextConfig = {
  output: "standalone",
  experimental: {
    serverComponentsExternalPackages: ["@azure/storage-blob"],
  },
};

module.exports = nextConfig;
