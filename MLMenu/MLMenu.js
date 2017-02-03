'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  position: relative; \n'], ['\n  display: inline-block;\n  position: relative; \n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 34px;\n  line-height: 34px;\n  color: ', ';\n  padding-right: 14px;\n  text-align: right;\n\n  &:hover {\n    cursor: pointer;\n    color: #080808;\n  }\n'], ['\n  height: 34px;\n  line-height: 34px;\n  color: ', ';\n  padding-right: 14px;\n  text-align: right;\n\n  &:hover {\n    cursor: pointer;\n    color: #080808;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  fill: #00758E;\n  &:hover {\n    fill: #080808;  \n  }\n'], ['\n  fill: #00758E;\n  &:hover {\n    fill: #080808;  \n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: block;\n  visibility: hidden;\n  opacity: 0;\n  position: absolute;\n  top: -15px;\n  width: 200px;\n  background: #f8f8f8;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.2);\n  z-index: 500;\n  font-size: 15px;\n  \n  -webkit-transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);\n  -moz-transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);\n  -ms-transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);\n  transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);\n'], ['\n  display: block;\n  visibility: hidden;\n  opacity: 0;\n  position: absolute;\n  top: -15px;\n  width: 200px;\n  background: #f8f8f8;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.2);\n  z-index: 500;\n  font-size: 15px;\n  \n  -webkit-transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);\n  -moz-transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);\n  -ms-transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);\n  transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0px;\n  width: 200px;\n  background: #f8f8f8;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.2);\n  opacity: 0;\n  z-index: 500;\n  font-size: 15px;\n  \n  -webkit-transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);\n  -moz-transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);\n  -ms-transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);\n  transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);\n  display: block;\n  visibility: \'visible\';\n  opacity: 1 !important;\n  top: -5px !important;\n  display: block !important;\n'], ['\n  position: absolute;\n  top: 0px;\n  width: 200px;\n  background: #f8f8f8;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.2);\n  opacity: 0;\n  z-index: 500;\n  font-size: 15px;\n  \n  -webkit-transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);\n  -moz-transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);\n  -ms-transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);\n  transition:top .3s cubic-bezier(0,.8,.4,1), opacity .3s cubic-bezier(0,.8,.4,1);\n  display: block;\n  visibility: \'visible\';\n  opacity: 1 !important;\n  top: -5px !important;\n  display: block !important;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n\n  display: block;\n  padding: 12px 15px;\n  border-bottom: 1px solid #dddddd;\n  width: 100%;\n  box-sizing: border-box; \n\n  color: #00758E; \n  text-decoration: none;\n\n  cursor: pointer;\n\n  &:hover {\n    background: #eeeeee;\n    text-decoration: none;\n    color: #080808; \n  }\n'], ['\n\n  display: block;\n  padding: 12px 15px;\n  border-bottom: 1px solid #dddddd;\n  width: 100%;\n  box-sizing: border-box; \n\n  color: #00758E; \n  text-decoration: none;\n\n  cursor: pointer;\n\n  &:hover {\n    background: #eeeeee;\n    text-decoration: none;\n    color: #080808; \n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Dropdown = _styledComponents2.default.div(_templateObject);
var DropdownTitle = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.isOpen ? '#080808' : '#00758E';
});
var Chevron = _styledComponents2.default.span(_templateObject3);
var DropdownClosed = _styledComponents2.default.ul(_templateObject4);
var DropdownOpen = _styledComponents2.default.ul(_templateObject5);
var DropdownItem = _styledComponents2.default.li(_templateObject6);

var MLMenu = function (_Component) {
  _inherits(MLMenu, _Component);

  function MLMenu(props) {
    _classCallCheck(this, MLMenu);

    var _this = _possibleConstructorReturn(this, (MLMenu.__proto__ || Object.getPrototypeOf(MLMenu)).call(this, props));

    _this._openMenu = function () {
      return _this.___openMenu__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this._clickItem = function () {
      return _this.___clickItem__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      title: props.title,
      isOpen: false
    };
    return _this;
  }

  _createClass(MLMenu, [{
    key: '___openMenu__REACT_HOT_LOADER__',
    value: function ___openMenu__REACT_HOT_LOADER__() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: '___clickItem__REACT_HOT_LOADER__',
    value: function ___clickItem__REACT_HOT_LOADER__(click) {
      console.log(click);
      this.props.itemSelected(click);
      this.setState({
        title: click,
        isOpen: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          title = _state.title,
          isOpen = _state.isOpen;
      var itemArray = this.props.itemArray;


      var DrawerDiv = isOpen ? DropdownOpen : DropdownClosed;

      return _react2.default.createElement(
        Dropdown,
        null,
        _react2.default.createElement(
          DropdownTitle,
          { role: 'tab', onClick: this._openMenu },
          title,
          _react2.default.createElement(
            Chevron,
            null,
            _react2.default.createElement(
              'svg',
              { width: '8px', height: '6px', viewBox: '0 0 8 6', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
              _react2.default.createElement(
                'g',
                null,
                _react2.default.createElement('polygon', { points: '0 0 4 5.19614188 8 0' })
              )
            )
          )
        ),
        _react2.default.createElement(
          DrawerDiv,
          null,
          itemArray.map(function (itemName) {
            var clickItem = _this2._clickItem.bind(_this2, itemName);
            return _react2.default.createElement(
              DropdownItem,
              {
                onClick: clickItem,
                tabIndex: '0',
                role: 'button',
                key: itemName },
              itemName
            );
          })
        )
      );
    }
  }]);

  return MLMenu;
}(_react.Component);

MLMenu.defaultProps = {
  itemArray: []
};

MLMenu.propTypes = {
  title: _react.PropTypes.string.isRequired,
  itemArray: _react.PropTypes.array.isRequired,
  itemSelected: _react.PropTypes.func.isRequired
};

var _default = MLMenu;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Dropdown, 'Dropdown', 'src/MLMenu/MLMenu.js');

  __REACT_HOT_LOADER__.register(DropdownTitle, 'DropdownTitle', 'src/MLMenu/MLMenu.js');

  __REACT_HOT_LOADER__.register(Chevron, 'Chevron', 'src/MLMenu/MLMenu.js');

  __REACT_HOT_LOADER__.register(DropdownClosed, 'DropdownClosed', 'src/MLMenu/MLMenu.js');

  __REACT_HOT_LOADER__.register(DropdownOpen, 'DropdownOpen', 'src/MLMenu/MLMenu.js');

  __REACT_HOT_LOADER__.register(DropdownItem, 'DropdownItem', 'src/MLMenu/MLMenu.js');

  __REACT_HOT_LOADER__.register(MLMenu, 'MLMenu', 'src/MLMenu/MLMenu.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/MLMenu/MLMenu.js');
}();

;