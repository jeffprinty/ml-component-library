'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  height: auto;\n  width: 100%;\n  background: #ffffff;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.2);\n'], ['\n  height: auto;\n  width: 100%;\n  background: #ffffff;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.2);\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 18px 23px; \n  position: relative;\n  display: flex;\n  vertical-align: baseline;\n  cursor: pointer;\n\n  user-select: none;\n\n  border-bottom: 1px solid #dddddd;\n  margin-bottom: 18px;  \n'], ['\n  padding: 18px 23px; \n  position: relative;\n  display: flex;\n  vertical-align: baseline;\n  cursor: pointer;\n\n  user-select: none;\n\n  border-bottom: 1px solid #dddddd;\n  margin-bottom: 18px;  \n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\n'], ['\n\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  line-height: 22px;\n  margin-left: 8px;\n'], ['\n  line-height: 22px;\n  margin-left: 8px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    padding: 23px;\n    padding-top: 0; \n    box-sizing: border-box;\n    color: #383838;\n    word-wrap: break-word;\n'], ['\n    padding: 23px;\n    padding-top: 0; \n    box-sizing: border-box;\n    color: #383838;\n    word-wrap: break-word;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mlReactCdlIcons = require('ml-react-cdl-icons');

var _mlReactCdlIcons2 = _interopRequireDefault(_mlReactCdlIcons);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Accordion = _styledComponents2.default.div(_templateObject);
var AccordionTitle = _styledComponents2.default.div(_templateObject2);
var AccordionIcon = _styledComponents2.default.span(_templateObject3);
var TitleText = _styledComponents2.default.span(_templateObject4);
var AccordionContent = _styledComponents2.default.div(_templateObject5);

var MLAccordion = function (_Component) {
  _inherits(MLAccordion, _Component);

  function MLAccordion(props) {
    _classCallCheck(this, MLAccordion);

    var _this = _possibleConstructorReturn(this, (MLAccordion.__proto__ || Object.getPrototypeOf(MLAccordion)).call(this, props));

    _this._openDrawer = function () {
      return _this.___openDrawer__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(MLAccordion, [{
    key: '___openDrawer__REACT_HOT_LOADER__',
    value: function ___openDrawer__REACT_HOT_LOADER__(e) {
      if (!!e.key && e.key !== 'Enter') {
        return false;
      }
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          children = _props.children;
      var isOpen = this.state.isOpen;

      return _react2.default.createElement(
        Accordion,
        null,
        _react2.default.createElement(
          AccordionTitle,
          {
            role: 'tab',
            tabIndex: '0',
            'aria-expanded': isOpen,
            onKeyDown: this._openDrawer,
            onClick: this._openDrawer },
          _react2.default.createElement(
            AccordionIcon,
            null,
            isOpen ? _react2.default.createElement(_mlReactCdlIcons2.default, { type: 'minus', title: 'Collapse', fill: '#666666' }) : _react2.default.createElement(_mlReactCdlIcons2.default, { type: 'plus', title: 'Expand', fill: '#666666' })
          ),
          _react2.default.createElement(
            TitleText,
            null,
            title
          )
        ),
        _react2.default.createElement(
          AccordionContent,
          { style: { display: isOpen ? 'block' : 'none' } },
          children
        )
      );
    }
  }]);

  return MLAccordion;
}(_react.Component);

MLAccordion.defaultProps = {
  button: null
};

MLAccordion.propTypes = {
  title: _react.PropTypes.string.isRequired,
  children: _react.PropTypes.string
};

var _default = MLAccordion;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Accordion, 'Accordion', 'src/components/MLAccordionList/MLAccordionList.js');

  __REACT_HOT_LOADER__.register(AccordionTitle, 'AccordionTitle', 'src/components/MLAccordionList/MLAccordionList.js');

  __REACT_HOT_LOADER__.register(AccordionIcon, 'AccordionIcon', 'src/components/MLAccordionList/MLAccordionList.js');

  __REACT_HOT_LOADER__.register(TitleText, 'TitleText', 'src/components/MLAccordionList/MLAccordionList.js');

  __REACT_HOT_LOADER__.register(AccordionContent, 'AccordionContent', 'src/components/MLAccordionList/MLAccordionList.js');

  __REACT_HOT_LOADER__.register(MLAccordion, 'MLAccordion', 'src/components/MLAccordionList/MLAccordionList.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/MLAccordionList/MLAccordionList.js');
}();

;