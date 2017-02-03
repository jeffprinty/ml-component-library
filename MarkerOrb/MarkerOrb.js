"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import css from './MarkerOrb.css';

var MarkerOrb = function (_Component) {
  _inherits(MarkerOrb, _Component);

  function MarkerOrb(props) {
    _classCallCheck(this, MarkerOrb);

    var _this = _possibleConstructorReturn(this, (MarkerOrb.__proto__ || Object.getPrototypeOf(MarkerOrb)).call(this, props));

    _this.clickEvent = function () {
      return _this.__clickEvent__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this._handleMouseEnter = function () {
      return _this.___handleMouseEnter__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this._handleMouseLeave = function () {
      return _this.___handleMouseLeave__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      hovering: false
    };
    return _this;
  }

  _createClass(MarkerOrb, [{
    key: "__clickEvent__REACT_HOT_LOADER__",
    value: function __clickEvent__REACT_HOT_LOADER__(globalId) {
      this.props.onClick(globalId);
    }
  }, {
    key: "___handleMouseEnter__REACT_HOT_LOADER__",
    value: function ___handleMouseEnter__REACT_HOT_LOADER__() {
      this.setState({
        hovering: true
      });
    }
  }, {
    key: "___handleMouseLeave__REACT_HOT_LOADER__",
    value: function ___handleMouseLeave__REACT_HOT_LOADER__() {
      this.setState({
        hovering: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          label = _props.label,
          isSelected = _props.isSelected,
          markerColor = _props.markerColor,
          circleColor = _props.circleColor,
          globalId = _props.globalId,
          className = _props.className,
          noX = _props.noX,
          style = _props.style;

      var _clickEvent = this.clickEvent.bind(this, globalId);
      if (isSelected === true || this.state.hovering === true) {
        if (noX === true) {
          return _react2.default.createElement(
            "div",
            {
              onMouseEnter: this._handleMouseEnter,
              onMouseLeave: this._handleMouseLeave,
              className: className,
              style: style },
            _react2.default.createElement(
              "svg",
              {
                "aria-label": label,
                role: "radio",
                tabIndex: "0",
                onClick: _clickEvent,
                fill: markerColor,
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg" },
              _react2.default.createElement(
                "title",
                null,
                label
              ),
              _react2.default.createElement("circle", { cx: "11.786", cy: "12.095", r: "10.328", style: { fill: 'none', stroke: circleColor, strokeWidth: '1.47px' } }),
              _react2.default.createElement("circle", { cx: "12", cy: "11.951", r: "8.366" })
            )
          );
        } else {
          return _react2.default.createElement(
            "div",
            { onMouseEnter: this._handleMouseEnter, onMouseLeave: this._handleMouseLeave, className: className, style: style },
            _react2.default.createElement(
              "svg",
              {
                "aria-label": label,
                role: "radio",
                tabIndex: 0,
                onClick: _clickEvent,
                fill: markerColor,
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg" },
              _react2.default.createElement(
                "title",
                null,
                label
              ),
              _react2.default.createElement("circle", { id: globalId, cx: "11.786", cy: "12.095", r: "10.328", style: { fill: 'none', stroke: circleColor, strokeWidth: '1.47px' } }),
              _react2.default.createElement("path", { d: "M12,20.317c-4.617,0 -8.366,-3.748 -8.366,-8.366c0,-4.617 3.749,-8.365 8.366,-8.365c4.617,0 8.366,3.748 8.366,8.365c0,4.618 -3.749,8.366 -8.366,8.366Zm5.282,-12.113l-2,-1.695l-3.379,3.927l-3.78,-4.183l-1.797,1.779l4.145,3.75l-4.099,3.554l2.025,2.083l3.506,-4.062l3.754,4.056l1.941,-1.839l-4.043,-3.848l3.727,-3.522Z" })
            )
          );
        }
      } else {
        return _react2.default.createElement(
          "div",
          { onMouseEnter: this._handleMouseEnter, onMouseLeave: this._handleMouseLeave, className: className, style: style },
          _react2.default.createElement(
            "svg",
            {
              "aria-label": label,
              role: "radio",
              tabIndex: 0,
              onClick: _clickEvent,
              fill: markerColor,
              height: "24",
              viewBox: "0 0 24 24",
              width: "24",
              xmlns: "http://www.w3.org/2000/svg" },
            _react2.default.createElement(
              "title",
              null,
              label
            ),
            _react2.default.createElement("circle", { id: globalId, cx: "12", cy: "11.951", r: "8.366" })
          )
        );
      }
    }
  }]);

  return MarkerOrb;
}(_react.Component);

MarkerOrb.defaultProps = {
  noX: false,
  circleColor: '#ffffff',
  label: ''
};

MarkerOrb.propTypes = {
  onClick: _react.PropTypes.func,
  label: _react.PropTypes.string,
  isSelected: _react.PropTypes.bool,
  style: _react.PropTypes.object,
  markerColor: _react.PropTypes.string,
  circleColor: _react.PropTypes.string,
  globalId: _react.PropTypes.string,
  className: _react.PropTypes.string,
  noX: _react.PropTypes.bool
};

var _default = MarkerOrb;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MarkerOrb, "MarkerOrb", "src/MarkerOrb/MarkerOrb.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/MarkerOrb/MarkerOrb.js");
}();

;