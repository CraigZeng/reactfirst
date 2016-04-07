require('babel-register');

var http = require('http');
var fs = require('fs');
var path = require('path');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('../app/R.jsx');


http.createServer(function(req, res) {
    if (req.url !== '/favicon.ico') {
        if (!/\.js$/.test(req.url)) {
            res.setHeader('content-type', 'text/html');
            Router.match({ routes: new routes.default().render(), location: req.url }, function(err, redirectLocation, renderProps) {
                if (renderProps) {
                    var html = new String(fs.readFileSync(path.join(__dirname, '../index.html')));
                    var content = ReactDOM.renderToString(React.createElement(Router.RouterContext, renderProps));
                    res.end(html.replace('<div id="app">', '<div id="app">' + content + '</div>'));
                }
            });
        }
        else {
            res.setHeader('content-type', 'text/javascript');
            fs.createReadStream(path.join(__dirname, '..', req.url)).pipe(res);
        } 
    }
}).listen(3000);