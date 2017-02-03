'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  clear: both\n'], ['\n  clear: both\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 6px;\n  cursor: pointer;\n  &:hover {\n    background-color: ', ';\n  }\n'], ['\n  padding: 6px;\n  cursor: pointer;\n  &:hover {\n    background-color: ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  text-decoration: none;\n'], ['\n  text-decoration: none;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../index');

var _MarkerOrb = require('../MarkerOrb/MarkerOrb');

var _MarkerOrb2 = _interopRequireDefault(_MarkerOrb);

require('../../assets/styles/fonts.css');

var _colors = require('../colors.js');

var _colors2 = _interopRequireDefault(_colors);

var _root = require('./_root.css');

var _root2 = _interopRequireDefault(_root);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _componentPlayground = require('component-playground');

var _componentPlayground2 = _interopRequireDefault(_componentPlayground);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _MLButton = require('../MLButton/MLButton.md');

var _MLButton2 = _interopRequireDefault(_MLButton);

var _MLToggle = require('../MLToggle/MLToggle.md');

var _MLToggle2 = _interopRequireDefault(_MLToggle);

var _MLMenu = require('../MLMenu/MLMenu.md');

var _MLMenu2 = _interopRequireDefault(_MLMenu);

var _MLIcon = require('../MLIcon/MLIcon.md');

var _MLIcon2 = _interopRequireDefault(_MLIcon);

var _MLAccordion = require('../MLAccordion/MLAccordion.md');

var _MLAccordion2 = _interopRequireDefault(_MLAccordion);

var _index2 = require('../MLLayout/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Demo = _styledComponents2.default.div(_templateObject);

var Mi = _styledComponents2.default.li(_templateObject2, _colors2.default.very_light_aqua);
var NavLink = _styledComponents2.default.a(_templateObject3);

var _Root = function (_Component) {
  _inherits(_Root, _Component);

  function _Root(props) {
    _classCallCheck(this, _Root);

    var _this = _possibleConstructorReturn(this, (_Root.__proto__ || Object.getPrototypeOf(_Root)).call(this, props));

    _this._goTo = function () {
      return _this.___goTo__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      toggleA: true
    };
    return _this;
  }

  _createClass(_Root, [{
    key: '___goTo__REACT_HOT_LOADER__',
    value: function ___goTo__REACT_HOT_LOADER__(e) {
      console.log('click', e.target);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _index2.Grid,
        null,
        _react2.default.createElement(
          _index2.Row,
          null,
          _react2.default.createElement(
            _index2.Col,
            { xs: 1, md: 2 },
            _react2.default.createElement(
              'div',
              { style: { position: 'fixed' } },
              _react2.default.createElement(
                'h2',
                null,
                'Macmillan CDL'
              ),
              _react2.default.createElement(
                'ul',
                null,
                ['Toggle', 'Button', 'Menu', 'Accordion', 'AccordionList', 'Card'].map(function (key, i) {
                  return _react2.default.createElement(
                    Mi,
                    { key: i },
                    _react2.default.createElement(
                      NavLink,
                      { href: '#' + key },
                      key
                    )
                  );
                })
              )
            )
          ),
          _react2.default.createElement(
            _index2.Col,
            { xs: 11, md: 10 },
            _react2.default.createElement(
              'div',
              { className: _root2.default['container'] },
              _react2.default.createElement(
                Demo,
                null,
                _react2.default.createElement('a', { title: 'toggle' }),
                _react2.default.createElement(
                  'h2',
                  null,
                  'Toggle Switch'
                ),
                _react2.default.createElement(_componentPlayground2.default, { codeText: require('raw!../MLToggle/MLToggle.example'), scope: { React: _react2.default, ReactDOM: _reactDom2.default, MLToggle: _index.MLToggle } }),
                _react2.default.createElement(_MLToggle2.default, null)
              ),
              _react2.default.createElement(
                Demo,
                null,
                _react2.default.createElement('a', { name: 'Button' }),
                _react2.default.createElement(
                  'h2',
                  null,
                  'Button'
                ),
                _react2.default.createElement(_componentPlayground2.default, {
                  codeText: require('raw!../MLButton/MLButton.example'),
                  scope: { React: _react2.default, ReactDOM: _reactDom2.default, MLButton: _index.MLButton, Colors: _colors2.default, MLIcon: _index.MLIcon } }),
                _react2.default.createElement(_MLButton2.default, null)
              ),
              _react2.default.createElement(
                Demo,
                null,
                _react2.default.createElement('a', { name: 'Menu' }),
                _react2.default.createElement(
                  'h2',
                  null,
                  'Menu'
                ),
                _react2.default.createElement(_componentPlayground2.default, {
                  codeText: require('raw!../MLMenu/MLMenu.example'),
                  scope: { React: _react2.default, ReactDOM: _reactDom2.default, MLMenu: _index.MLMenu } }),
                _react2.default.createElement(_MLMenu2.default, null)
              ),
              _react2.default.createElement(
                Demo,
                null,
                _react2.default.createElement('a', { name: 'Accordion' }),
                _react2.default.createElement(
                  'h2',
                  null,
                  'Accordion'
                ),
                _react2.default.createElement(_componentPlayground2.default, {
                  codeText: require('raw!../MLAccordion/MLAccordion.example'),
                  scope: { React: _react2.default, ReactDOM: _reactDom2.default, MLAccordion: _index.MLAccordion } }),
                _react2.default.createElement(_MLAccordion2.default, null)
              ),
              _react2.default.createElement(
                Demo,
                null,
                _react2.default.createElement('a', { name: 'AccordionList' }),
                _react2.default.createElement(
                  'h2',
                  null,
                  'AccordionList [WIP]'
                ),
                _react2.default.createElement(_componentPlayground2.default, {
                  codeText: require('raw!../MLAccordionList/MLAccordionList.example'),
                  scope: { React: _react2.default, ReactDOM: _reactDom2.default, MLAccordionList: _index.MLAccordionList } })
              ),
              _react2.default.createElement(
                Demo,
                null,
                _react2.default.createElement('a', { name: 'Card' }),
                _react2.default.createElement(
                  'h2',
                  null,
                  'Card'
                ),
                _react2.default.createElement(_componentPlayground2.default, {
                  codeText: require('raw!../MLCard/MLCard.example'),
                  scope: { React: _react2.default, ReactDOM: _reactDom2.default, MLCard: _index.MLCard, MLButton: _index.MLButton } })
              ),
              _react2.default.createElement(
                Demo,
                null,
                _react2.default.createElement('a', { name: 'Icon' }),
                _react2.default.createElement(
                  'h2',
                  null,
                  'Icon'
                ),
                _react2.default.createElement(_componentPlayground2.default, { codeText: require('raw!../MLIcon/MLIcon.example'), scope: { React: _react2.default, ReactDOM: _reactDom2.default, MLIcon: _index.MLIcon, Colors: _colors2.default } }),
                _react2.default.createElement(_MLIcon2.default, null)
              ),
              _react2.default.createElement(
                'div',
                { className: _root2.default['demoWrap'] },
                _react2.default.createElement(
                  'h2',
                  null,
                  'Color Palette'
                ),
                Object.keys(_colors2.default).map(function (color, i) {
                  var colorHex = _colors2.default[color];
                  return _react2.default.createElement(
                    'div',
                    { key: i, className: _root2.default['colorGrid'], style: { backgroundColor: colorHex } },
                    color,
                    _react2.default.createElement('br', null),
                    colorHex
                  );
                })
              ),
              _react2.default.createElement(
                'div',
                { className: _root2.default['demoWrap'] },
                _react2.default.createElement(
                  'h2',
                  null,
                  'Icon Reference'
                ),
                _react2.default.createElement(
                  'div',
                  { className: _root2.default['iconGrid'] },
                  _index.MLIcon.listIcons.map(function (title, i) {
                    return _react2.default.createElement(
                      'span',
                      { className: _root2.default['iconWrap'], key: i },
                      _react2.default.createElement(_index.MLIcon, { fill: 'black', type: title, title: title }),
                      _react2.default.createElement(
                        'span',
                        { className: _root2.default['iconName'] },
                        title
                      )
                    );
                  })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: _root2.default['demoWrap'] },
                _react2.default.createElement(
                  'h2',
                  null,
                  'MarkerOrb'
                ),
                _react2.default.createElement(
                  'section',
                  { className: _root2.default['demoRow'] },
                  _react2.default.createElement(
                    'div',
                    { className: _root2.default['demoExample'] },
                    _react2.default.createElement(
                      'div',
                      { className: _root2.default['markerWrap'], role: 'radiogroup' },
                      ['#ffafaf', '#ffc196', '#faf2a9', '#acdba2', '#aee5d3', '#a2d6dd', '#b0daff', '#e5c6e3', '#edb0ce', '#dddddd'].map(function (color, i) {
                        return _react2.default.createElement(_MarkerOrb2.default, {
                          className: _root2.default['marker'],
                          key: i,
                          label: color,
                          onClick: function onClick(data) {
                            return console.log(data);
                          },
                          markerColor: color,
                          noX: true,
                          isSelected: false });
                      })
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return _Root;
}(_react.Component);

var _default = _Root;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Demo, 'Demo', 'src/_Root/_Root.js');

  __REACT_HOT_LOADER__.register(Mi, 'Mi', 'src/_Root/_Root.js');

  __REACT_HOT_LOADER__.register(NavLink, 'NavLink', 'src/_Root/_Root.js');

  __REACT_HOT_LOADER__.register(_Root, '_Root', 'src/_Root/_Root.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/_Root/_Root.js');
}();

;