module.exports = {
  pwa: {
    workboxOptions: {
        skipWaiting: true
    },
    themeColor: '#222'
  },
  // css: {
  //   loaderOptions: {
  //     // pass options to sass-loader
  //     sass: {
  //       // @/ is an alias to src/
  //       // so this assumes you have a file named `src/scss/variables.scss`
  //       data: `@import "@/scss/_variables.scss";`
  //     }
  //   }
  // }
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/dndas-pocketdm/'
  //   : '/'
}