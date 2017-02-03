'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MLIcon = require('../MLIcon/MLIcon');

var _MLIcon2 = _interopRequireDefault(_MLIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MLAlert = function (_Component) {
  _inherits(MLAlert, _Component);

  function MLAlert(props) {
    _classCallCheck(this, MLAlert);

    return _possibleConstructorReturn(this, (MLAlert.__proto__ || Object.getPrototypeOf(MLAlert)).call(this, props));
  }

  _createClass(MLAlert, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          alertType = _props.alertType,
          icon = _props.icon;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_MLIcon2.default, { type: icon, title: alertType, fill: '#666666' }),
        text
      );
    }
  }]);

  return MLAlert;
}(_react.Component);

MLAlert.defaultProps = {};

MLAlert.propTypes = {
  text: _react.PropTypes.string.isRequired,
  icon: _react.PropTypes.string.isRequired,
  alertType: _react.PropTypes.string.isRequired
};

var _default = MLAlert;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MLAlert, 'MLAlert', 'src/components/MLAlert/MLAlert.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/MLAlert/MLAlert.js');
}();

;