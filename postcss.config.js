module.exports = {
  plugins: [
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          autoprefixer: true,
          removeAll: true,
        },
      }]
    })
  ]
}