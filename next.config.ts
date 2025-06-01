/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',             // Enables static export
  basePath: '/portfolio',       // IMPORTANT for GitHub Pages path
  images: {
    unoptimized: true,          // Required if using next/image
  },
  trailingSlash: true           // Required to make all routes work on GitHub Pages
};

module.exports = nextConfig;
