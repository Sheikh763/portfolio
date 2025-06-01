/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // if you have this for static export
  images: {
    unoptimized: true, // disables image optimization
  },
}

module.exports = nextConfig;
