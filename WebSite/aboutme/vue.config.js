const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'? '././':'/',
  configureWebpack:{
    module:{
      rules:[
        {
          test: /\.md$/,
          use: 'text-loader'
        }
      ]
    }
  }
})
