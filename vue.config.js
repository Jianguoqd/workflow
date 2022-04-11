const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap: true,
  lintOnSave: false,
  pages: {
    index: {
      entry: 'src/index.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  }
}
