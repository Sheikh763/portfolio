/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // required for static export
  basePath: '/portfolio', // required for GitHub Pages subfolder
  images: {
    unoptimized: true, // avoids Image Optimization issues
  },
};

module.exports = nextConfig;
