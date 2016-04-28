require('babel-register');

const http = require('http');
const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOM = require('react-dom/server');
const Router = require('react-router');
const routes = require('../app/routes.jsx');

http.createServer((req, res) => {
  if (req.url !== '/favicon.ico') {
    if (!/\.js$/.test(req.url)) {
      res.setHeader('content-type', 'text/html');
      Router.match(
        { routes, location: req.url },
        (err, redirectLocation, renderProps) => {
          if (renderProps) {
            const html = fs.readFileSync(path.join(__dirname, '../index.html'));
            const content = ReactDOM.renderToString(
                React.createElement(Router.RouterContext, renderProps)
            );
            res.end(html.replace('<div id="app">', `<div id="app">${content}</div>`));
          }
        }
      );
    } else {
      res.setHeader('content-type', 'text/javascript');
      fs.createReadStream(path.join(__dirname, '..', req.url)).pipe(res);
    }
  }
}).listen(3000);
