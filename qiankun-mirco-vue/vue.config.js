const { name } = require("./package");
const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = defineConfig({
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    // output: {
    //   library: `${name}-[name]`,
    //   libraryTarget: "umd", // 把微应用打包成 umd 库格式
    //   jsonpFunction: `webpackJsonp_${name}`,
    // },
  },
})