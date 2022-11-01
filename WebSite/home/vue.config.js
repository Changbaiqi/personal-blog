const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'? '././':'/',
  // outputDir: 'dist',
  // chainWebpack: (config)=>{
  //   config.resolve.alias
  //   .set('img',resolve('public/img'))
  // }
})
