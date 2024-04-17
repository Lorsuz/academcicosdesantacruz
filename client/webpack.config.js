const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  // ... outras configurações do webpack

  resolve: {
    plugins: [
      new TsconfigPathsPlugin({ configFile: './tsconfig.json' })
    ]
  }
};
