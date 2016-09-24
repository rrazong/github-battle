var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = '41605495d7bc4b93b62f2d545c2cfa48',
    sentryApp = '94146',
    sentryUrl = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;

Raven.config(sentryUrl).install();

ReactDOM.render(
  routes,
  document.getElementById('app')
);
