/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { BASE_URL: process.env.BASE_URL, FORM_URL: process.env.FORM_URL },
};

module.exports = nextConfig;
