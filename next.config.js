/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  env: {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    PHONE_NUMBER_ID: process.env.PHONE_NUMBER_ID,
    RECIPIENT_WAID: process.env.RECIPIENT_WAID,
  },
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "~@styles/variables.scss";`,
  },
};

module.exports = nextConfig;
