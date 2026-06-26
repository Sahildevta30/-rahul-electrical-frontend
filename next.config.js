/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["res.cloudinary.com"] },
  output: 'standalone',
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};
module.exports = nextConfig;