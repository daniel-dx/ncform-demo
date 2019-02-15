const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        vue$: resolve("node_modules/vue/dist/vue.esm.js")
      }
    }
  }
};
