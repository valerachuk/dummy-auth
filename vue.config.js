module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: './',
  module: {
    rules: [
      {
        test: /\.txt/,
        type: 'asset/source'
      }
    ]
  }
};
