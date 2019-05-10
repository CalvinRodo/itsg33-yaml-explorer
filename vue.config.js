// vue.config.js
module.exports = {
  // THere are some known issues with multi-page apps
  // jand using HTML history.pushState routing
  /* publicPath: "./", */
  publicPath: process.env.NODE_ENV === 'production' ? '/itsg33-yaml-explorer/' : '/',

  configureWebpack: {
    devtool: 'source-map'
  }
}
