/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    PHONE_NUMBER_ID: process.env.PHONE_NUMBER_ID,
    RECIPIENT_WAID: process.env.RECIPIENT_WAID,
  },
};

module.exports = nextConfig;
