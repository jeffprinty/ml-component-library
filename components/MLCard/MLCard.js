'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  height: auto;\n  min-height: 160px; \n  width: 100%;\n  background: #ffffff;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.2);\n'], ['\n  height: auto;\n  min-height: 160px; \n  width: 100%;\n  background: #ffffff;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.2);\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 18px 23px; \n  position: relative;\n  display: flex;\n  vertical-align: baseline;\n  border-bottom: 1px solid #dddddd;\n  margin-bottom: 18px;  \n'], ['\n  padding: 18px 23px; \n  position: relative;\n  display: flex;\n  vertical-align: baseline;\n  border-bottom: 1px solid #dddddd;\n  margin-bottom: 18px;  \n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  flex: 3;\n  font-weight: normal;\n  font-size: 18px;\n  color: #080808;\n  padding: 0;\n'], ['\n  flex: 3;\n  font-weight: normal;\n  font-size: 18px;\n  color: #080808;\n  padding: 0;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    margin: -5px 0 -5px 5px;\n    flex : 1;\n    text-align: right;\n  '], ['\n    margin: -5px 0 -5px 5px;\n    flex : 1;\n    text-align: right;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    padding: 23px;\n    padding-top: 0; \n    box-sizing: border-box;\n    color: #383838;\n'], ['\n    padding: 23px;\n    padding-top: 0; \n    box-sizing: border-box;\n    color: #383838;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Card = _styledComponents2.default.div(_templateObject);
var CardTitle = _styledComponents2.default.div(_templateObject2);
var TitleText = _styledComponents2.default.div(_templateObject3);
var HeaderButton = _styledComponents2.default.div(_templateObject4);
var CardContent = _styledComponents2.default.div(_templateObject5);

var MLCard = function (_Component) {
  _inherits(MLCard, _Component);

  function MLCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MLCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MLCard.__proto__ || Object.getPrototypeOf(MLCard)).call.apply(_ref, [this].concat(args))), _this), _this._openMenu = function () {
      var _this2;

      return (_this2 = _this).___openMenu__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MLCard, [{
    key: '___openMenu__REACT_HOT_LOADER__',
    value: function ___openMenu__REACT_HOT_LOADER__() {
      this.setState({
        menuOpen: !this.state.menuOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          content = _props.content,
          button = _props.button;

      return _react2.default.createElement(
        Card,
        null,
        _react2.default.createElement(
          CardTitle,
          null,
          _react2.default.createElement(
            TitleText,
            null,
            title
          ),
          _react2.default.createElement(
            HeaderButton,
            null,
            button
          )
        ),
        _react2.default.createElement(
          CardContent,
          null,
          content
        )
      );
    }
  }]);

  return MLCard;
}(_react.Component);

MLCard.defaultProps = {
  button: null
};

MLCard.propTypes = {
  title: _react.PropTypes.string.isRequired,
  content: _react.PropTypes.string.isRequired,
  button: _react.PropTypes.element
};

var _default = MLCard;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Card, 'Card', 'src/components/MLCard/MLCard.js');

  __REACT_HOT_LOADER__.register(CardTitle, 'CardTitle', 'src/components/MLCard/MLCard.js');

  __REACT_HOT_LOADER__.register(TitleText, 'TitleText', 'src/components/MLCard/MLCard.js');

  __REACT_HOT_LOADER__.register(HeaderButton, 'HeaderButton', 'src/components/MLCard/MLCard.js');

  __REACT_HOT_LOADER__.register(CardContent, 'CardContent', 'src/components/MLCard/MLCard.js');

  __REACT_HOT_LOADER__.register(MLCard, 'MLCard', 'src/components/MLCard/MLCard.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/MLCard/MLCard.js');
}();

;