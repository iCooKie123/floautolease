const glob = require("glob");
const path = require("path");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

module.exports = {
  plugins: [
    new PurgeCSSPlugin({
      paths: glob.sync(path.join(__dirname, "src/**/*"), { nodir: true }),
    }),
  ],
};
