// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      const newArgs = args;
      newArgs[0].title = 'Find A Coach';
      return newArgs;
    });
  },
};
