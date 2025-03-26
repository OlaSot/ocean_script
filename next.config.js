/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'], 
    minimumCacheTTL: 60, 
  },
  reactStrictMode: true,
  experimental: {
    serverActions: {}, 
  },
};
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({});
module.exports = nextConfig;
