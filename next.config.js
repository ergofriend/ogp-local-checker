const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  cssLoaderOptions: {
    javascriptEnabled: true
  }
});
