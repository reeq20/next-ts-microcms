const { resolve } = require("path");
require("dotenv").config();

const nextConfig = {
  webpack: config => {
    config.resolve.alias["~"] = resolve(__dirname, "src");
    return config;
  },
  exportTrailingSlash: true,
  env: {
    API_KEY: process.env.API_KEY,
    SECRET_KEY: process.env.SECRET_KEY,
    END_POINT: process.env.END_POINT
  }
};

module.exports = nextConfig;
