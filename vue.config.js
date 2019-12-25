// const path = require('path');
// module.exports = {
//     publicPath: process.env.env_MODE_ENV === 'production' ? '':'/',
//     outputDir: process.env.env_MODE_ENV === 'production' ? 'dist':'devdist',
//     lintDnSave: true,

//     chainWebpack: (config)=>{

//     },
//     configureWebpack: (config)=>{

//     },
//     productionSourceMap: false,

    // css:{
    //     extract: true,
    //     sourceMap: false,
    //     loaderOptions:{
    //         sass: {
    //             data: '@import "./src/styles/main.scss";'
    //         }
    //     },
    //     modules: false
    // },

//     parallel: require('os').cpus().length > 1,

//     pwa: {},

//     devServer: {
//         open: false,
//         host: '0.0.0.0',
//         port: 8000,
//         https: false,
//         hot: true,
//         hotOnly: false,
//         proxy: null,
//         overlay:{
//             warnings: true,
//             errors:true
//         },
//         before: app => {

//         }
//     },

//     plugInOptions: {}
// }


const path = require("path");
const resolve = function(dir) {
  return path.join(__dirname, dir);
};
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: true, // 是否开启eslint保存检测
  productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@v", resolve("src/views"))
      .set("@c", resolve("src/components"))
      .set("@u", resolve("src/utils"))
      .set("@s", resolve("src/service")); /* 别名配置 */
    config.optimization.runtimeChunk("single");
  },

  css: {
    loaderOptions: {
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `data` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        prependData: '@import "~@/styles/main.scss";'
      }
    }
  },

  devServer: {
    // host: "localhost",
    /* 本地ip地址 */
    host: "0.0.0.0",
    port: "8080",
    hot: true,
    /* 自动打开浏览器 */
    open: false,
    overlay: {
      warning: false,
      error: true
    },
    /* 跨域代理 */
    proxy: null
  }
};
