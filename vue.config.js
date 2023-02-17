const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Offline Notes',
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    //workboxPluginMode: 'GenerateSW',
    workbox: {
      config: {
        debug: true
      }
    },
    //workboxPluginMode: 'GenerateSW',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './service-worker.js'
    }
  }
})
