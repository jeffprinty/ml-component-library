'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: inline-block;\n\n  font-family: \'Source Sans Pro\',sans-serif;\n  font-size: 15px;\n  line-height: 33px;\n  color: ', ';\n  \n  height: 34px;\n  padding: ', ';\n  margin: 5px;\n  \n  background-color: ', '\n\n  border: ', ';\n  border-radius: 3px;\n  \n  text-decoration: none;\n  cursor: pointer;\n  \n  &:hover {\n    opacity: 0.8;\n  }\n\n  &:disabled {\n    cursor: default\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 6px rgba(0,117,142,1);\n  }\n'], ['\n  position: relative;\n  display: inline-block;\n\n  font-family: \'Source Sans Pro\',sans-serif;\n  font-size: 15px;\n  line-height: 33px;\n  color: ', ';\n  \n  height: 34px;\n  padding: ', ';\n  margin: 5px;\n  \n  background-color: ', '\n\n  border: ', ';\n  border-radius: 3px;\n  \n  text-decoration: none;\n  cursor: pointer;\n  \n  &:hover {\n    opacity: 0.8;\n  }\n\n  &:disabled {\n    cursor: default\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 6px rgba(0,117,142,1);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  line-height: 30px;\n  margin-left: ', ';\n'], ['\n  line-height: 30px;\n  margin-left: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  top: 4px;\n  vertical-align: middle;\n  color: ', ';\n'], ['\n  position: relative;\n  top: 4px;\n  vertical-align: middle;\n  color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Layout = _styledComponents2.default.div(_templateObject, function (props) {
  return props.primary ? Colors.pure_white : Colors.aqua;
}, function (props) {
  return props.icon ? '0 15px 0 12px' : '0 15px';
}, function (props) {
  return props.primary ? Colors.aqua : 'transparent';
}, function (props) {
  return props.primary ? 'none' : '1px solid ' + Colors.aqua;
});
var Title = _styledComponents2.default.span(_templateObject2, function (props) {
  return props.icon ? '8px' : '0';
});
var Icon = _styledComponents2.default.span(_templateObject3, function (props) {
  return props.primary ? Colors.pure_white : Colors.aqua;
});

// const SpecialLayout = styled.Layout`
// `

// const MLLayout = ({ title, btnClass, btnType, onClick, icon, style }) => {

var MLLayout = function (_Component) {
  _inherits(MLLayout, _Component);

  function MLLayout() {
    _classCallCheck(this, MLLayout);

    return _possibleConstructorReturn(this, (MLLayout.__proto__ || Object.getPrototypeOf(MLLayout)).apply(this, arguments));
  }

  _createClass(MLLayout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onClick = _props.onClick,
          icon = _props.icon,
          title = _props.title,
          primary = _props.primary;

      return _react2.default.createElement(
        Layout,
        _extends({}, this.props, {
          onClick: onClick }),
        icon ? _react2.default.createElement(
          Icon,
          null,
          _react2.default.createElement(MLIcon, { title: title, type: icon, fill: primary ? Colors.pure_white : Colors.aqua })
        ) : null,
        _react2.default.createElement(
          Title,
          this.props,
          title
        )
      );
    }
  }]);

  return MLLayout;
}(_react.Component);

MLLayout.defaultProps = {
  btnClass: 'default',
  btnType: ''
};

MLLayout.propTypes = {
  title: _react.PropTypes.string.isRequired,
  btnClass: _react.PropTypes.string,
  btnType: _react.PropTypes.string,
  onClick: _react.PropTypes.func,
  primary: _react.PropTypes.bool,
  icon: _react.PropTypes.string
};

var _default = MLLayout;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Layout, 'Layout', 'src/MLLayout/MLLayout.js');

  __REACT_HOT_LOADER__.register(Title, 'Title', 'src/MLLayout/MLLayout.js');

  __REACT_HOT_LOADER__.register(Icon, 'Icon', 'src/MLLayout/MLLayout.js');

  __REACT_HOT_LOADER__.register(MLLayout, 'MLLayout', 'src/MLLayout/MLLayout.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/MLLayout/MLLayout.js');
}();

;