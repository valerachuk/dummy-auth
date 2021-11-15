const path = require('path');

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('@components', path.resolve('src/components/'))
      .set('@views', path.resolve('src/views/'))
      .set('@services', path.resolve('src/services/'))
      .set('@constants', path.resolve('src/constants'));

    config.module
      .rule('text')
      .test(/\.(csv|txt)$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();
  }
};
