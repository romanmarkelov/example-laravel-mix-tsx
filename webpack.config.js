const path = require('path');

const ASSETS_PATH = 'src';

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, `${ASSETS_PATH}/`),
    },
  },
};
