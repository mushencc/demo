const axios_default_ip =
  process.env.NODE_ENV == "dev"
    ? "http://192.168.0.101"
    :'http://123.157.155.34:8092'
process.env.VUE_APP_BASE_URL = axios_default_ip;
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: "static",
  indexPath: "index.html",
  productionSourceMap: process.env.NODE_ENV === "development",
  devServer: {
    proxy: {
      "/proxy": {
        target: axios_default_ip,
        ws: true, // proxy websockets
        changeOrigin: true,
        pathRewrite: {
          "^/proxy": "", // rewrite path
        },
      },
    }
    },
  chainWebpack: config => {
    config.resolve.symlinks(true)
  },
  lintOnSave: false, //禁用eslint  便于开发
}
