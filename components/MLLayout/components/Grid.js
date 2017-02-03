'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Grid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _createProps = require('../createProps');

var _createProps2 = _interopRequireDefault(_createProps);

var _flexboxGrid = require('../flexboxGrid.css');

var _flexboxGrid2 = _interopRequireDefault(_flexboxGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  fluid: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  tagName: _react.PropTypes.string,
  children: _react.PropTypes.node
};

function Grid(props) {
  var containerClass = _flexboxGrid2.default[props.fluid ? 'container-fluid' : 'container'];
  var className = (0, _classnames2.default)(props.className, containerClass);

  return _react2.default.createElement(props.tagName || 'div', (0, _createProps2.default)(propTypes, props, className));
}

Grid.propTypes = propTypes;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'src/components/MLLayout/components/Grid.js');

  __REACT_HOT_LOADER__.register(Grid, 'Grid', 'src/components/MLLayout/components/Grid.js');
}();

;