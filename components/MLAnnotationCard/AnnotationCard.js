'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mlReactCdlIcons = require('ml-react-cdl-icons');

var _mlReactCdlIcons2 = _interopRequireDefault(_mlReactCdlIcons);

var _annotationCard = require('./annotationCard.css');

var _annotationCard2 = _interopRequireDefault(_annotationCard);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import css from '../HighlightList/highlightList.css';


var deleteTimeout = void 0;

var AnnotationCard = function (_Component) {
  _inherits(AnnotationCard, _Component);

  function AnnotationCard(props) {
    _classCallCheck(this, AnnotationCard);

    var _this = _possibleConstructorReturn(this, (AnnotationCard.__proto__ || Object.getPrototypeOf(AnnotationCard)).call(this, props));

    _this.hideMe = function () {
      return _this.__hideMe__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.unHide = function () {
      return _this.__unHide__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      visible: true
    };
    return _this;
  }

  _createClass(AnnotationCard, [{
    key: '__hideMe__REACT_HOT_LOADER__',
    value: function __hideMe__REACT_HOT_LOADER__(syncId) {
      var _props = this.props,
          deleteCallback = _props.deleteCallback,
          obj = _props.highlightObject;
      var visible = this.state.visible;

      this.setState({ visible: false });
      deleteTimeout = setTimeout(function () {
        deleteCallback(obj.syncId);
      }, 5000);
    }
  }, {
    key: '__unHide__REACT_HOT_LOADER__',
    value: function __unHide__REACT_HOT_LOADER__() {
      clearTimeout(deleteTimeout);
      this.setState({ visible: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          hasNote = _props2.hasNote,
          deleteCallback = _props2.deleteCallback,
          markerData = _props2.markerData,
          obj = _props2.highlightObject;

      var hideThenDelete = this.hideMe.bind(this, obj.syncId);
      if (this.state.visible === true) {
        return _react2.default.createElement(
          'div',
          { className: _annotationCard2.default['box'] },
          _react2.default.createElement(
            'div',
            { className: _annotationCard2.default['header'] },
            _react2.default.createElement(
              'div',
              { className: _annotationCard2.default['headerIcon'] },
              _react2.default.createElement(_mlReactCdlIcons2.default, { className: _annotationCard2.default['headerIcon'], iconType: hasNote ? 'item_edit' : 'highlight', iconTitle: 'Highlight Icon' })
            ),
            _react2.default.createElement(
              'div',
              { className: _annotationCard2.default['headerText'] },
              hasNote ? 'You made a note' : 'You added a highlight'
            ),
            _react2.default.createElement(
              'div',
              { className: _annotationCard2.default['edit'] },
              _react2.default.createElement(
                'span',
                { className: _annotationCard2.default['headerButton'], onClick: hideThenDelete },
                _react2.default.createElement(
                  'div',
                  { className: _annotationCard2.default['headerText'] },
                  'Delete'
                ),
                _react2.default.createElement(_mlReactCdlIcons2.default, { className: _annotationCard2.default['headerIcon'], iconType: 'eraser', iconTitle: 'Delete Note' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _annotationCard2.default['content'] },
            _react2.default.createElement(
              'blockquote',
              { className: _annotationCard2.default['blockquote'], style: { backgroundColor: obj.vstColor } },
              obj.selectedText
            ),
            _react2.default.createElement(
              'div',
              { className: _annotationCard2.default['noteText'] },
              obj.noteText
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _annotationCard2.default['gutter'] },
            _react2.default.createElement(
              'div',
              { className: _annotationCard2.default['location'] },
              _react2.default.createElement(
                'div',
                { className: _annotationCard2.default['label'] },
                ' ',
                markerData.label
              ),
              obj.cfi
            ),
            _react2.default.createElement(
              'div',
              { className: _annotationCard2.default['modified'] },
              (0, _moment2.default)(obj.lastModifiedAt, 'ddd, DD MMM YYYY HH:mm:ss ZZ').fromNow()
            )
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: _annotationCard2.default['box'], onClick: this.unHide },
          _react2.default.createElement(
            'div',
            { className: _annotationCard2.default['header'], style: { color: '#DA1B2C', cursor: 'pointer' } },
            _react2.default.createElement(
              'div',
              { className: _annotationCard2.default['headerIcon'] },
              _react2.default.createElement(_mlReactCdlIcons2.default, { className: _annotationCard2.default['headerIcon'], iconType: 'info_outline', iconTitle: 'Info' })
            ),
            _react2.default.createElement(
              'div',
              { className: _annotationCard2.default['headerText'] },
              hasNote ? 'You deleted a note' : 'You deleted a highlight'
            ),
            _react2.default.createElement(
              'div',
              { className: _annotationCard2.default['edit'] },
              _react2.default.createElement(
                'span',
                { className: _annotationCard2.default['headerButton'] },
                _react2.default.createElement(
                  'div',
                  { className: _annotationCard2.default['headerText'] },
                  'Undo?'
                )
              )
            )
          )
        );
      }
    }
  }]);

  return AnnotationCard;
}(_react.Component);

AnnotationCard.propTypes = {
  hasNote: _react.PropTypes.bool.isRequired,
  deleteCallback: _react.PropTypes.func.isRequired,
  highlightObject: _react.PropTypes.object.isRequired,
  markerData: _react.PropTypes.object.isRequired
};
var _default = AnnotationCard;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(deleteTimeout, 'deleteTimeout', 'src/components/MLAnnotationCard/AnnotationCard.js');

  __REACT_HOT_LOADER__.register(AnnotationCard, 'AnnotationCard', 'src/components/MLAnnotationCard/AnnotationCard.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/MLAnnotationCard/AnnotationCard.js');
}();

;