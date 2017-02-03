'use strict';

require('babel-polyfill');

var _reactHotLoader = require('react-hot-loader');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Root2 = require('./components/_Root/_Root');

var _Root3 = _interopRequireDefault(_Root2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// IE polyfill for promises
(0, _reactDom.render)(_react2.default.createElement(
  _reactHotLoader.AppContainer,
  null,
  _react2.default.createElement(_Root3.default, null)
), document.getElementById('root-entry'));

// Handle hot reloading requests from Webpack
if (module.hot) {
  module.hot.accept('./components/_Root/_Root', function () {
    //If we receive a HMR request for our App container, then
    //reload it using require (we can't do this dynamically with import)
    var NextApp = require('./components/_Root/_Root').default;

    // And render it into the root element again
    (0, _reactDom.render)(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(NextApp, null)
    ), document.getElementById('root-entry'));
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;