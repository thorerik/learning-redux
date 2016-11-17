var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// load foundation-sites
$(document).foundation();

// load our own custom styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>Boilerplate</p>,
  document.getElementById('app')
);

//require('./redux-example.jsx');
require('./redux-example.jsx');
