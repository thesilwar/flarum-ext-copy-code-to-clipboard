const path = require("path");
const config = require("flarum-webpack-config-v2")();

config.entry = path.resolve(__dirname, "forum.js");
config.output = {
  ...config.output,
  filename: "forum.js",
  path: path.resolve(__dirname, "dist/v2"),
};

module.exports = config;
