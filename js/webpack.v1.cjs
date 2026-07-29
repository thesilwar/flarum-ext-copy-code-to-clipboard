const path = require("path");
const config = require("flarum-webpack-config-v1")();

config.entry = path.resolve(__dirname, "forum.js");
config.output = {
  ...config.output,
  filename: "forum.js",
  path: path.resolve(__dirname, "dist/v1"),
};

module.exports = config;
