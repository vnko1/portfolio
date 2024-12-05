/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FORM_URL: process.env.FORM_URL,
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;
