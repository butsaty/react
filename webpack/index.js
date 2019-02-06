const serverConfig = require('./webpack.server');
const clientConfig = require('./webpack.client');

module.exports = [clientConfig, serverConfig];

// if (process.env.NODE_ENV === 'production')
//   module.exports = [
//     require('./webpack.prod.js'),
//     serverConfig
//   ];
// else
  // module.exports = [
  //   require('./webpack.dev.js'),
  //   serverConfig
  // ];
