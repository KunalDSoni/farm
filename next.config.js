/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so GitHub Pages can serve the site from /docs
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  }
};

module.exports = nextConfig;
