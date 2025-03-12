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
  swcMinify: true, 
};

module.exports = nextConfig;
