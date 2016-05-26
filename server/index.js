require('babel-register');

const app = require('./app').default;

if (!module.parent) {
  app.listen(3000);
}

module.exports = app;
