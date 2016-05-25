import http from 'http';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';
import ReactDOM from 'react-dom/server';
import configureStore from '../app/store';
import routes from '../app/routes.jsx';

http.createServer((req, res) => {
  if (req.url !== '/favicon.ico') {
    if (!/\.js$/.test(req.url)) {
      res.setHeader('content-type', 'text/html');
      match(
        { routes, location: req.url },
        (err, redirectLocation, renderProps) => {
          if (renderProps) {
            const store = configureStore({
              page: 1,
              params: {
                address: 'test',
                name: '',
              },
            });
            const html = fs.readFileSync(path.join(__dirname, '../index.html')).toString();
            
            //          new Promise((resolve, reject) => route.getComponent(renderProps.location, resolve)
       
            const content = ReactDOM.renderToString(
              <Provider store={store}>
                <RouterContext {...renderProps} />
              </Provider>
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
