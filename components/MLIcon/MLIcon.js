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

var icons = {
  alert_outline: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("rect", { x: "11", y: "10", width: "2", height: "4" }),
    _react2.default.createElement("rect", { x: "11", y: "15", width: "2", height: "2" }),
    _react2.default.createElement("path", { d: "M21.71,19.13,13.06,3.85A1.31,1.31,0,0,0,12,3.08a1.31,1.31,0,0,0-1.08.77L2.26,19.13c-.59,1-.11,1.87,1.08,1.87H20.63C21.82,21,22.3,20.15,21.71,19.13ZM4.63,19,12,6l7.35,13Z" })
  ),
  alert: _react2.default.createElement("path", { d: "M21.71,19.13,13.06,3.85a1.14,1.14,0,0,0-2.16,0L2.26,19.13c-.59,1-.11,1.87,1.08,1.87H20.63C21.82,21,22.3,20.15,21.71,19.13ZM13,17H11V15h2Zm0-3H11V10h2Z" }),
  arrow_left: _react2.default.createElement("polygon", { points: "21 11 5.84 11 13.33 3.52 11.92 2.1 3.43 10.59 3.43 10.59 2.02 12 3.43 13.41 11.92 21.9 13.33 20.48 5.84 13 21 13 21 11" }),
  arrow_right: _react2.default.createElement("polygon", { points: "3.02 11 18.17 11 10.68 3.52 12.1 2.1 20.58 10.59 20.58 10.59 22 12 20.58 13.41 12.1 21.9 10.68 20.48 18.17 13 3.02 13 3.02 11" }),
  bar_chart: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("rect", { x: "16", y: "3", width: "4", height: "18" }),
    _react2.default.createElement("rect", { x: "10", y: "9", width: "4", height: "12" }),
    _react2.default.createElement("rect", { x: "4", y: "14", width: "4", height: "7" })
  ),
  book: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M7,2H5.05A1,1,0,0,0,4,3V21a1,1,0,0,0,1.05,1H7Z" }),
    _react2.default.createElement(
      "g",
      null,
      _react2.default.createElement("rect", { x: "11", y: "7", width: "6", height: "2" }),
      _react2.default.createElement("path", { d: "M20,2H8V22H20Zm-2,8H10V6h8Z" })
    )
  ),
  bookmark_outline: _react2.default.createElement("path", { d: "M17,2H6.94A1,1,0,0,0,6,3V22l6-3,6,3V3A1,1,0,0,0,17,2ZM16,18.74l-3.1-1.55L12,16.74l-.86.44L8,18.76V4h8Z" }),
  bookmark: _react2.default.createElement("path", { d: "M17,2H6.94A1,1,0,0,0,6,3V22l6-3,6,3V3A1,1,0,0,0,17,2Z", fillRule: "evenodd" }),
  box: _react2.default.createElement("path", { d: "M4,20H20V9H4Zm4-8h8v2H8ZM3,4V8H21V4Z", fillRule: "evenodd" }),
  calendar: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M20,4H18V2H16V4H8V2H6V4H4A1,1,0,0,0,3,5V21a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V5A1,1,0,0,0,20,4ZM5,20V10H19V20Z" }),
    _react2.default.createElement("rect", { x: "7", y: "12", width: "2", height: "2" }),
    _react2.default.createElement("rect", { x: "11", y: "12", width: "2", height: "2" }),
    _react2.default.createElement("rect", { x: "15", y: "12", width: "2", height: "2" }),
    _react2.default.createElement("rect", { x: "15", y: "16", width: "2", height: "2" }),
    _react2.default.createElement("rect", { x: "11", y: "16", width: "2", height: "2" }),
    _react2.default.createElement("rect", { x: "7", y: "16", width: "2", height: "2" })
  ),
  cancel: _react2.default.createElement("polygon", { points: "19.82 5.59 18.41 4.18 12 10.59 5.59 4.18 4.18 5.59 10.59 12 4.18 18.41 5.59 19.82 12 13.41 18.41 19.82 19.82 18.41 13.41 12 19.82 5.59" }),
  caret_down: _react2.default.createElement("polygon", { points: "2 6 12.02 18.02 22.04 6 2 6", fillRule: "evenodd" }),
  check: _react2.default.createElement("polygon", { points: "8.42 17.96 21 5.83 19.59 4.42 7.81 15.77 3.44 11.4 2.02 12.81 6.37 17.16 6.36 17.17 7.77 18.58 7.78 18.57 7.79 18.58 8.42 17.96" }),
  checkbox: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("polygon", { points: "8.36 15.17 9.77 16.58 9.78 16.57 9.79 16.58 10.17 16.2 18 8.83 16.59 7.42 9.82 13.79 7.44 11.4 6.02 12.81 8.37 15.16 8.36 15.17" }),
    _react2.default.createElement("path", { d: "M20,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,19H5V5H19Z" })
  ),
  chevron_down: _react2.default.createElement("polygon", { points: "20.47 6.34 11.98 14.83 3.5 6.34 2.08 7.76 11.98 17.66 13.4 16.24 21.88 7.76 20.47 6.34" }),
  chevron_left: _react2.default.createElement("polygon", { points: "17.27 3.52 15.86 2.1 7.38 10.59 7.38 10.59 5.96 12 7.38 13.41 15.86 21.9 17.27 20.48 8.79 12 17.27 3.52" }),
  chevron_right: _react2.default.createElement("polygon", { points: "16.48 10.59 16.48 10.59 8 2.1 6.59 3.52 15.07 12 6.59 20.48 8 21.9 16.48 13.41 17.9 12 16.48 10.59" }),
  chevron_up: _react2.default.createElement("polygon", { points: "12 6.34 10.59 7.76 2.1 16.24 3.52 17.66 12 9.17 20.48 17.66 21.9 16.24 12 6.34" }),
  clipboard: _react2.default.createElement("path", { d: "M18.94,4H14.53A2.5,2.5,0,0,0,12,1.54,2.46,2.46,0,0,0,9.47,4H4.94a1,1,0,0,0-1,1V21a1,1,0,0,0,1,1h14a1,1,0,0,0,1-1V5A1,1,0,0,0,18.94,4ZM12,3a1,1,0,1,1-1,1A1,1,0,0,1,12,3Zm6,17h-12V6H8a.94.94,0,0,0,0,.1V7A1,1,0,0,0,9,8h6a1,1,0,0,0,1-1V6h1.94Z", fillRule: "evenodd" }),
  clock: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }),
    _react2.default.createElement("polygon", { points: "13.04 11 13.04 6 11.04 6 11.04 11 11.04 13 13.04 13 18.04 13 18.04 11 13.04 11" })
  ),
  comment_highlight: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M17,16H10.24l-.54.45L8,17.82V16H4V6h9l2-2H3A1,1,0,0,0,2,5V17a1,1,0,0,0,1,1H6v4l4.94-4H18a1,1,0,0,0,1-1V12l-2,2.13Z", fillRule: "evenodd" }),
    _react2.default.createElement("path", { d: "M22.43,3.73,21.26,2.54a.69.69,0,0,0-1,0l-1,1,2.08,2.17,1.05-1A.69.69,0,0,0,22.43,3.73Z", fillRule: "evenodd" }),
    _react2.default.createElement("polygon", { points: "12.93 9.96 12.93 12.06 14.99 12.06 20.68 6.38 18.58 4.21 12.93 9.96", fillRule: "evenodd" }),
    _react2.default.createElement("rect", { x: "6", y: "13", width: "9", height: "1" })
  ),
  comment_microphone: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M20,2H4A1,1,0,0,0,3,3V17a1,1,0,0,0,1,1H7v4l4.94-4H20a1,1,0,0,0,1-1V3A1,1,0,0,0,20,2ZM19,16H11.24l-.54.45L9,17.82V16H5V4H19Z" }),
    _react2.default.createElement(
      "g",
      null,
      _react2.default.createElement("rect", { x: "10.57", y: "5.49", width: "2.83", height: "5.52", rx: "1.41", ry: "1.41" }),
      _react2.default.createElement("path", { d: "M15.48,9.53a.5.5,0,0,0-1,0,2.49,2.49,0,1,1-5,0,.5.5,0,0,0-1,0,3.51,3.51,0,0,0,3,3.47v1a.5.5,0,0,0,1,0V13A3.51,3.51,0,0,0,15.48,9.53Z" })
    )
  ),
  comment_question: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M20,2H4A1,1,0,0,0,3,3V17a1,1,0,0,0,1,1H7v4l4.94-4H20a1,1,0,0,0,1-1V3A1,1,0,0,0,20,2ZM19,16H11.24l-.54.45L9,17.82V16H5V4H19Z" }),
    _react2.default.createElement("path", { d: "M11,8.08a1.35,1.35,0,0,1,.21-.45,1,1,0,0,1,.35-.31A1.08,1.08,0,0,1,12,7.2a1,1,0,0,1,.69.24A1,1,0,0,1,13,8.2a.91.91,0,0,1-.11.5,1.49,1.49,0,0,1-.3.37l-.41.33a2.8,2.8,0,0,0-.42.39A2.21,2.21,0,0,0,11.21,11v.6h1.45l0-.52a1.28,1.28,0,0,1,.22-.45,2.14,2.14,0,0,1,.39-.39l.47-.34a2.3,2.3,0,0,0,.45-.42,2.14,2.14,0,0,0,.34-.59A2.37,2.37,0,0,0,14.72,8a2,2,0,0,0-.14-.69,1.92,1.92,0,0,0-.46-.69,2.55,2.55,0,0,0-.85-.54A3.47,3.47,0,0,0,12,5.91a2.84,2.84,0,0,0-1.1.21,2.44,2.44,0,0,0-.84.57,2.61,2.61,0,0,0-.54.86,3.17,3.17,0,0,0-.2,1.1H10.9A2.25,2.25,0,0,1,11,8.08Z" }),
    _react2.default.createElement("rect", { x: "11.16", y: "12.45", width: "1.54", height: "1.56" })
  ),
  comment_text: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M20,2H4A1,1,0,0,0,3,3V17a1,1,0,0,0,1,1H7v4l4.94-4H20a1,1,0,0,0,1-1V3A1,1,0,0,0,20,2ZM19,16H11.24l-.54.45L9,17.82V16H5V4H19Z" }),
    _react2.default.createElement("rect", { x: "7", y: "7", width: "10", height: "2" }),
    _react2.default.createElement("rect", { x: "7", y: "11", width: "6", height: "2" })
  ),
  comment_thumbs_up: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M20,2H4A1,1,0,0,0,3,3V17a1,1,0,0,0,1,1H7v4l4.94-4H20a1,1,0,0,0,1-1V3A1,1,0,0,0,20,2ZM19,16H11.24l-.54.45L9,17.82V16H5V4H19Z" }),
    _react2.default.createElement(
      "g",
      null,
      _react2.default.createElement("path", { d: "M16.52,9.05a.45.45,0,0,0-.45-.51H12.85s.46-1.27.73-2.08-.1-1.33-.59-.84L10.23,8.39a.77.77,0,0,0-.23.56v4.44a.17.17,0,0,0,.17.17H15a.79.79,0,0,0,.73-.48s.84-3,.84-3.08Z" }),
      _react2.default.createElement("rect", { x: "7.47", y: "8.56", width: "1.48", height: "4.98" })
    )
  ),
  comment: _react2.default.createElement("path", { d: "M20,2H4A1,1,0,0,0,3,3V17a1,1,0,0,0,1,1H7v4l4.94-4H20a1,1,0,0,0,1-1V3A1,1,0,0,0,20,2ZM19,16H11.24l-.54.45L9,17.82V16H5V4H19Z" }),
  cursor: _react2.default.createElement("path", { d: "M3,13V4A1,1,0,0,1,4,3H20a1,1,0,0,1,1,1v9l-9,7Z", fillRule: "evenodd" }),
  dock_left: _react2.default.createElement("path", { d: "M20,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,19H9V5H19Z" }),
  dock_right: _react2.default.createElement("path", { d: "M20,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM5,5H15V19H5Z" }),
  dock_top: _react2.default.createElement("path", { d: "M20,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM5,19V9H19V19Z" }),
  document: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M19,2H5A1,1,0,0,0,4,3V21a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1ZM6,20V4H18V20Z" }),
    _react2.default.createElement("polygon", { points: "16 7 8 7 8 9 16 9 16 7 16 7" }),
    _react2.default.createElement("polygon", { points: "16 11 8 11 8 13 16 13 16 11 16 11" }),
    _react2.default.createElement("polygon", { points: "14 15 8 15 8 17 14 17 14 15 14 15" })
  ),
  download: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("polygon", { points: "19 14 19 18 5 18 5 14 3 14 3 18 3 20 5.5 20 19.5 20 21 20 21 18 21 14 19 14", fillRule: "evenodd" }),
    _react2.default.createElement("polygon", { points: "12 15 16 11 13 11 13 4 11 4 11 11 8 11 12 15", fillRule: "evenodd" })
  ),
  edit: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M20.69,5,19,3.29a1,1,0,0,0-1.41,0L16.18,4.7l3,3.13,1.51-1.41A1,1,0,0,0,20.69,5Z", fillRule: "evenodd" }),
    _react2.default.createElement("polygon", { points: "3 17.98 3 21 5.97 21 18.17 8.82 15.14 5.68 3 17.98", fillRule: "evenodd" })
  ),
  eraser: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("polygon", { points: "9.58 20.98 20.96 20.98 20.96 18.98 11.46 18.98 9.58 20.98" }),
    _react2.default.createElement("path", { d: "M21.78,7.9,16.25,2.37a1.19,1.19,0,0,0-1.68,0L7.88,9.06,2.46,14.47a1.19,1.19,0,0,0,0,1.68L7.29,21h3.08l4.75-4.75,6.65-6.65A1.19,1.19,0,0,0,21.78,7.9ZM9.79,19H8.18L4.28,15.21l5-4.78L13.84,15Z" })
  ),
  expand: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M19,19H5V5h6.92l-2-2H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V14l-2-2Z", fillRule: "evenodd" }),
    _react2.default.createElement("polygon", { points: "13.98 3 16.84 5.87 9.36 13.36 10.77 14.77 18.26 7.28 21 10.02 21 3 13.98 3", fillRule: "evenodd" })
  ),
  grid_4: _react2.default.createElement("path", { d: "M3,10h7V3H3ZM14,3v7h7V3ZM3,21h7V14H3Zm11,0h7V14H14Z", fillRule: "evenodd" }),
  grid_9: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("rect", { x: "2", y: "3", width: "5", height: "5" }),
    _react2.default.createElement("rect", { x: "9", y: "3", width: "5", height: "5" }),
    _react2.default.createElement("rect", { x: "16", y: "3", width: "5", height: "5" }),
    _react2.default.createElement("rect", { x: "2", y: "10", width: "5", height: "5" }),
    _react2.default.createElement("rect", { x: "9", y: "10", width: "5", height: "5" }),
    _react2.default.createElement("rect", { x: "16", y: "10", width: "5", height: "5" }),
    _react2.default.createElement("rect", { x: "2", y: "17", width: "5", height: "5" }),
    _react2.default.createElement("rect", { x: "9", y: "17", width: "5", height: "5" }),
    _react2.default.createElement("rect", { x: "16", y: "17", width: "5", height: "5" })
  ),
  head: _react2.default.createElement("path", { d: "M20.6,13.32,19.07,11a1,1,0,0,1-.13-.8,6.14,6.14,0,0,0,.17-1.41C19.11,5,15.82,2,11.77,2S4.43,5,4.43,8.77c0,.12,0,.24,0,.36h0v0c0,3.27,2.14,5.75,2.6,8.46a22.13,22.13,0,0,1,0,3.3,1,1,0,0,0,1,1h4.67a1,1,0,0,0,1-1.14c-.2-2.15,2-.45,3.77-1,.84-.27,1.3-2.83,1.48-4.08a1,1,0,0,1,.77-.84l.19,0A1,1,0,0,0,20.6,13.32ZM16,8.23c-2.51,2.3-1.52,4.33-4.3,4.33s-5-1.94-5-4.33,2.26-4,5-4S17.79,6.62,16,8.23Z" }),
  heart_outline: _react2.default.createElement("path", { d: "M16,4a5,5,0,0,0-4,2A5,5,0,0,0,3,9,4.52,4.52,0,0,0,4,11.9C4.61,12.66,12,20,12,20s7.32-7.14,8-8.11A4.54,4.54,0,0,0,21,9,5,5,0,0,0,16,4Zm2.42,6.71c-.41.53-3.36,3.5-6.4,6.49C8.91,14.09,5.85,11,5.49,10.61A2.59,2.59,0,0,1,5,9,3,3,0,0,1,8,6a3.5,3.5,0,0,1,2.4,1.23L12,9l1.61-1.77A3.51,3.51,0,0,1,16,6a3,3,0,0,1,3,3A2.54,2.54,0,0,1,18.43,10.71Z" }),
  heart: _react2.default.createElement("path", { d: "M16,4a5,5,0,0,0-4,2A5,5,0,0,0,3,9,4.52,4.52,0,0,0,4,11.9C4.61,12.66,12,20,12,20s7.32-7.14,8-8.11A4.54,4.54,0,0,0,21,9,5,5,0,0,0,16,4Z" }),
  help_outline: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }),
    _react2.default.createElement("rect", { x: "11.05", y: "15.03", width: "1.95", height: "1.98" }),
    _react2.default.createElement("path", { d: "M14.82,7.68A3.24,3.24,0,0,0,13.74,7a4.41,4.41,0,0,0-1.67-.27,3.61,3.61,0,0,0-1.4.26,3.11,3.11,0,0,0-1.07.72,3.31,3.31,0,0,0-.69,1.1,4,4,0,0,0-.26,1.39h2.07a2.86,2.86,0,0,1,.08-.71,1.72,1.72,0,0,1,.26-.58,1.31,1.31,0,0,1,.45-.39,1.37,1.37,0,0,1,.65-.15,1.21,1.21,0,0,1,.88.31,1.29,1.29,0,0,1,.32,1,1.15,1.15,0,0,1-.13.63,1.9,1.9,0,0,1-.39.46q-.24.21-.52.42a3.56,3.56,0,0,0-.53.5,2.81,2.81,0,0,0-.68,1.58V14H13l.06-.66a1.63,1.63,0,0,1,.28-.58,2.72,2.72,0,0,1,.5-.5l.6-.44a2.92,2.92,0,0,0,.58-.53,2.71,2.71,0,0,0,.44-.75,3,3,0,0,0,.18-1.11,2.54,2.54,0,0,0-.18-.88A2.44,2.44,0,0,0,14.82,7.68Z" })
  ),
  help: _react2.default.createElement("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,15h-2V15h2Zm2.4-6.46a2.71,2.71,0,0,1-.44.75,2.92,2.92,0,0,1-.58.53l-.6.44a2.72,2.72,0,0,0-.5.5,1.63,1.63,0,0,0-.28.58L13,14H11.12v-.76a2.81,2.81,0,0,1,.68-1.58,3.56,3.56,0,0,1,.53-.5q.28-.21.52-.42a1.9,1.9,0,0,0,.39-.46,1.15,1.15,0,0,0,.13-.63,1.29,1.29,0,0,0-.32-1,1.21,1.21,0,0,0-.88-.31,1.37,1.37,0,0,0-.65.15,1.31,1.31,0,0,0-.45.39,1.72,1.72,0,0,0-.26.58,2.86,2.86,0,0,0-.08.71H8.66A4,4,0,0,1,8.92,8.8a3.31,3.31,0,0,1,.69-1.1A3.11,3.11,0,0,1,10.68,7a3.61,3.61,0,0,1,1.4-.26A4.41,4.41,0,0,1,13.74,7a3.24,3.24,0,0,1,1.08.68,2.44,2.44,0,0,1,.58.88,2.54,2.54,0,0,1,.18.88A3,3,0,0,1,15.4,10.55Z" }),
  highlight: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("rect", { x: "4", y: "19", width: "16", height: "2" }),
    _react2.default.createElement("path", { d: "M18.69,5.41a1,1,0,0,0,0-1.41L17,2.29a1,1,0,0,0-1.41,0L14.18,3.7l3,3.13Z", fillRule: "evenodd" }),
    _react2.default.createElement("polygon", { points: "16.17 7.82 13.14 4.68 4 13.97 4 17 6.97 17 16.17 7.82", fillRule: "evenodd" })
  ),
  home: _react2.default.createElement("polygon", { points: "20.92 12 11.94 3.02 2.96 12 5 12 5 21 10 21 10 14 14 14 14 21 19 21 19 12 20.92 12" }),
  info: _react2.default.createElement("path", { d: "M12,2c-5.486,0 -10,4.514 -10,10c0,5.486 4.514,10 10,10c5.486,0 10,-4.514 10,-10c0,-5.486 -4.514,-10 -10,-10Zm-1,15l2,0l0,-7.253l-2,0l0,7.253Zm2,-10.253l-2,0l0,2l2,0l0,-2Z" }),
  info_outline: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M12,2c-5.486,0 -10,4.514 -10,10c0,5.486 4.514,10 10,10c5.486,0 10,-4.514 10,-10c0,-5.486 -4.514,-10 -10,-10Zm0,18c-4.389,0 -8,-3.611 -8,-8c0,-4.389 3.611,-8 8,-8c4.389,0 8,3.611 8,8c0,4.389 -3.611,8 -8,8l0,0Z", fillRule: "nonzero" }),
    _react2.default.createElement("rect", { height: "7.253", width: "2", x: "11", y: "9.747" }),
    _react2.default.createElement("rect", { height: "2", width: "2", x: "11", y: "6.747" })
  ),
  item_add: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M5,5H17v7h2V4a1,1,0,0,0-1-1H4A1,1,0,0,0,3,4V18a1,1,0,0,0,1,1h8V17L5,17Z" }),
    _react2.default.createElement("polygon", { points: "22 17 19 17 19 14 17 14 17 17 14 17 14 19 17 19 17 22 19 22 19 19 22 19 22 17" })
  ),
  item_copy: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M18,17V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V17a1,1,0,0,0,1,1H17A1,1,0,0,0,18,17Zm-2-1H4V4H16Z" }),
    _react2.default.createElement("path", { d: "M21,7H20V20H6v1a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V8A1,1,0,0,0,21,7Z" })
  ),
  item_edit: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M21.69,4,20,2.29a1,1,0,0,0-1.41,0L17.18,3.7l3,3.13,1.51-1.41A1,1,0,0,0,21.69,4Z" }),
    _react2.default.createElement("polygon", { points: "8 16 10.97 16 19.17 7.82 16.14 4.68 8 12.97 8 16" }),
    _react2.default.createElement("path", { d: "M19,19H5V5h5.92l2-2H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V11l-2,2Z" })
  ),
  item_remove: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M5,5H17v7h2V4a1,1,0,0,0-1-1H4A1,1,0,0,0,3,4V18a1,1,0,0,0,1,1h8V17L5,17Z" }),
    _react2.default.createElement("polygon", { points: "22.04 15.38 20.62 13.96 18 16.59 15.38 13.96 13.96 15.38 16.59 18 13.96 20.62 15.38 22.04 18 19.41 20.62 22.04 22.04 20.62 19.41 18 22.04 15.38" })
  ),
  link: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M19.68,4.31a4.36,4.36,0,0,0-6.13,0L9.68,8.15a4.36,4.36,0,0,0,0,6.13l1.54-1.54a2.18,2.18,0,0,1,0-3l3.87-3.87A2.18,2.18,0,0,1,18.17,8.9L17,10.06a3.59,3.59,0,0,1,.27,2.81l2.44-2.44A4.36,4.36,0,0,0,19.68,4.31Z" }),
    _react2.default.createElement("path", { d: "M12.75,11.24a2.18,2.18,0,0,1,0,3L8.91,18.16a2.18,2.18,0,0,1-3.08-3.08L7,13.92a3.59,3.59,0,0,1-.27-2.81L4.29,13.54a4.36,4.36,0,0,0,6.16,6.16l3.87-3.87a4.36,4.36,0,0,0,0-6.13Z" })
  ),
  list_left: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("rect", { x: "8", y: "3", width: "13", height: "3" }),
    _react2.default.createElement("rect", { x: "3", y: "3", width: "3", height: "3" }),
    _react2.default.createElement("rect", { x: "3", y: "10", width: "3", height: "3" }),
    _react2.default.createElement("rect", { x: "3", y: "17", width: "3", height: "3" }),
    _react2.default.createElement("rect", { x: "8", y: "10", width: "13", height: "3" }),
    _react2.default.createElement("rect", { x: "8", y: "17", width: "13", height: "3" })
  ),
  list_right: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("rect", { x: "3", y: "3", width: "13", height: "3" }),
    _react2.default.createElement("rect", { x: "18", y: "3", width: "3", height: "3" }),
    _react2.default.createElement("rect", { x: "18", y: "10", width: "3", height: "3" }),
    _react2.default.createElement("rect", { x: "18", y: "17", width: "3", height: "3" }),
    _react2.default.createElement("rect", { x: "3", y: "10", width: "13", height: "3" }),
    _react2.default.createElement("rect", { x: "3", y: "17", width: "13", height: "3" })
  ),
  maximize: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M20,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,19H5V5H19Z" }),
    _react2.default.createElement("polygon", { points: "11 17 13 17 13 13 17 13 17 11 13 11 13 7 11 7 11 11 7 11 7 13 11 13 11 17" })
  ),
  menu: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("rect", { x: "3", y: "3", width: "18", height: "3" }),
    _react2.default.createElement("rect", { x: "3", y: "10", width: "18", height: "3" }),
    _react2.default.createElement("rect", { x: "3", y: "17", width: "18", height: "3" })
  ),
  microphone: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("rect", { x: "9.14", y: "2.97", width: "5.72", height: "11.18", rx: "2.86", ry: "2.86" }),
    _react2.default.createElement("path", { d: "M19.08,11.15a1,1,0,1,0-2,0,5.05,5.05,0,1,1-10.11,0,1,1,0,0,0-2,0,7.1,7.1,0,0,0,6.06,7v2a1,1,0,0,0,2,0v-2A7.1,7.1,0,0,0,19.08,11.15Z" })
  ),
  minimize: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M20,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,19H5V5H19Z" }),
    _react2.default.createElement("rect", { x: "7", y: "15", width: "10", height: "2" })
  ),
  minus: _react2.default.createElement("rect", { x: "3", y: "11", width: "18", height: "2" }),
  more: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("circle", { cx: "3.99", cy: "12", r: "1.96" }),
    _react2.default.createElement("circle", { cx: "11.99", cy: "12", r: "1.96" }),
    _react2.default.createElement("circle", { cx: "19.99", cy: "12", r: "1.96" })
  ),
  mortar_board: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("polygon", { points: "12.36 9.24 6.2 13.18 12 16.89 24.02 9.22 12 1.54 -0.02 9.22 4.83 12.31 10.96 8.39 12.36 9.24" }),
    _react2.default.createElement("polygon", { points: "4.99 14.09 4.99 17.41 12 22 19.01 17.41 19.01 14.09 12 18.65 4.99 14.09" })
  ),
  move: _react2.default.createElement("polygon", { points: "22.05 12 19 8.95 19 11 13 11 13 5 15.05 5 12 1.95 8.95 5 11 5 11 11 5 11 5 8.95 1.95 12 5 15.05 5 13 11 13 11 19 8.95 19 12 22.05 15.05 19 13 19 13 13 19 13 19 15.05 22.05 12", fillRule: "evenodd" }),
  not: _react2.default.createElement("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM4,12A8,8,0,0,1,16.82,5.66l-11.37,11A8,8,0,0,1,4,12Zm8,8A8,8,0,0,1,6.79,18.1l11.45-11A8,8,0,0,1,12,20Z" }),
  pause: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }),
    _react2.default.createElement("rect", { x: "9", y: "8", width: "2", height: "8" }),
    _react2.default.createElement("rect", { x: "13", y: "8", width: "2", height: "8" })
  ),
  person: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M12,12.92c2.6,0,4.61-3,4.61-5.84S15.15,2,12,2,7.37,4.25,7.37,7.08,9.39,12.92,12,12.92Z" }),
    _react2.default.createElement("path", { d: "M12,15.54c-5.31,0-9.65-4.2-9.93,5.41a1,1,0,0,0,1,1H20.92a1,1,0,0,0,1-1C21.63,11.37,17.29,15.54,12,15.54Z" })
  ),
  play: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }),
    _react2.default.createElement("polygon", { points: "9 17.03 16.98 12.01 9 7.03 9 17.03", fillRule: "evenodd" })
  ),
  plus: _react2.default.createElement("polygon", { points: "21 11 13 11 13 3 11 3 11 11 3 11 3 13 11 13 11 21 13 21 13 13 21 13 21 11" }),
  pointer_outline: _react2.default.createElement("path", { d: "M8.95,6.56l6.92,6.34L13,13.57l2.28,5.1-1.65.71-2.28-5.22L9,16,8.95,6.56M6.92,2,7,20l3.51-2.73,2,4.69,5.34-2.31L15.81,15,20,14,6.92,2Z" }),
  pointer: _react2.default.createElement("path", { d: "M6.92,2,7,20l3.51-2.73,2,4.69,5.34-2.31L15.81,15,20,14,6.92,2Z" }),
  print: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M21,8H3A1,1,0,0,0,2,9v8a1,1,0,0,0,1,1H5v4H19V18h2a1,1,0,0,0,1-1V9A1,1,0,0,0,21,8ZM6,12H4V10H6Zm11,6v2H7V16H17Z" }),
    _react2.default.createElement("rect", { x: "5.96", y: "2.02", width: "12.04", height: "4.98" })
  ),
  search: _react2.default.createElement("path", { d: "M16.35,14.94a8.08,8.08,0,1,0-1.43,1.4l5.37,5.37,1.41-1.41ZM10,16a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z" }),
  spreadsheet: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M18,4V20H6V4H18m1-2H5A1,1,0,0,0,4,3V21a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1Z" }),
    _react2.default.createElement("path", { d: "M8,7V17h8V7Zm6,2v2H10V9Zm-4,6V13h4v2Z" })
  ),
  stop: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }),
    _react2.default.createElement("rect", { x: "8", y: "8", width: "8", height: "8" })
  ),
  text_size: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("polygon", { points: "21 4 10 4 10 7 14 7 14 20 17 20 17 7 21 7 21 4", fillRule: "evenodd" }),
    _react2.default.createElement("polygon", { points: "3 14 6 14 6 20 9 20 9 14 12 14 12 11 3 11 3 14", fillRule: "evenodd" })
  ),
  thumbs_down: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M22.08,13.11a1,1,0,0,1-1,1.12H14s1,2.8,1.62,4.59c.53,1.58-.23,2.93-1.31,1.85C12.7,19.12,8.5,14.59,8.5,14.59A1.71,1.71,0,0,1,8,13.36V3.53a.38.38,0,0,1,.38-.38H18.62a1.74,1.74,0,0,1,1.61,1.07s1.86,6.59,1.86,6.82Z" }),
    _react2.default.createElement("rect", { x: "3", y: "3.22", width: "3", height: "11" })
  ),
  thumbs_up: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M22.08,11.1a1,1,0,0,0-1-1.12H14s1-2.8,1.62-4.59c.53-1.58-.23-2.93-1.31-1.85C12.7,5.1,8.5,9.62,8.5,9.62A1.71,1.71,0,0,0,8,10.86v9.83a.38.38,0,0,0,.38.38H18.62A1.74,1.74,0,0,0,20.23,20s1.86-6.59,1.86-6.82Z" }),
    _react2.default.createElement("rect", { x: "3", y: "10", width: "3", height: "11" })
  ),
  tools: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M20.74,6.41a1,1,0,0,0,0-1.41L19,3.29a1,1,0,0,0-1.41,0L16.22,4.7l3,3.13Z" }),
    _react2.default.createElement("polygon", { points: "3.04 17.98 3.04 21 6.01 21 10.9 16.12 7.87 13.09 3.04 17.98" }),
    _react2.default.createElement("polygon", { points: "18.21 8.82 15.18 5.68 13.05 7.84 16.12 10.91 18.21 8.82" }),
    _react2.default.createElement("path", { d: "M10.55,7.47A3.75,3.75,0,0,0,5.71,3.26L7.14,4.68A1.74,1.74,0,1,1,4.68,7.14L3.26,5.72a3.75,3.75,0,0,0,4.21,4.84l9.72,9.72a2.18,2.18,0,0,0,3.09-3.09Zm8.65,11.74a.76.76,0,1,1,0-1.08A.76.76,0,0,1,19.21,19.21Z" })
  ),
  trash: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M6.224,20.977l11.644,0c0.702,-0.023 1.256,-0.341 1.255,-0.721l0.884,-13.689l-16.014,0l0.897,13.689c0,0.395 0.602,0.721 1.334,0.721Z" }),
    _react2.default.createElement("path", { d: "M21,4.963c0,-0.25 -0.202,-0.453 -0.452,-0.453l-17.093,0c-0.25,0 -0.452,0.203 -0.452,0.453l0,0.905c0,0.25 0.202,0.453 0.452,0.453l17.093,0c0.25,0 0.452,-0.203 0.452,-0.453l0,-0.905Z" }),
    _react2.default.createElement("path", { d: "M12.018,3.251c0.984,0 1.783,0.636 1.783,1.418c0,0.783 -3.567,0.783 -3.567,0c0,-0.782 0.799,-1.418 1.784,-1.418Z" })
  ),
  trending: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M21.908,9.6l-8.15,7.853l-3.921,-3.853l-1.916,-1.88l-5.986,5.986l-1.865,-1.865l7.833,-7.833l3.781,3.71l2.092,2.055l6.302,-6.072l1.83,1.899Z", id: "Path" }),
    _react2.default.createElement("path", { d: "M16.035,5.697l7.912,0l0,7.912l-7.912,-7.912Z", id: "Rectangle" })
  ),
  upload: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("polygon", { points: "19 14 19 18 5 18 5 14 3 14 3 18 3 20 5.5 20 19.5 20 21 20 21 18 21 14 19 14", fillRule: "evenodd" }),
    _react2.default.createElement("polygon", { points: "11 15 13 15 13 8 16 8 12 4 8 8 11 8 11 15", fillRule: "evenodd" })
  ),
  video: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("polygon", { points: "9 7.63 9 16.37 15.97 11.98 9 7.63" }),
    _react2.default.createElement("path", { d: "M20,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,19H5V5H19Z" })
  ),
  x: _react2.default.createElement("polygon", { points: "19.82 5.59 18.41 4.18 12 10.59 5.59 4.18 4.18 5.59 10.59 12 4.18 18.41 5.59 19.82 12 13.41 18.41 19.82 19.82 18.41 13.41 12 19.82 5.59" }),
  zoom_in: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M10,1.92a8,8,0,1,0,4.88,14.42l5.37,5.37,1.41-1.41-5.35-5.35A8,8,0,0,0,10,1.92ZM10,16a6,6,0,1,1,6-6,6,6,0,0,1-6,6Z" }),
    _react2.default.createElement("polygon", { points: "11 6.13 8.92 6.13 8.92 8.92 6.13 8.92 6.13 11 8.92 11 8.92 13.79 11 13.79 11 11 13.79 11 13.79 8.92 11 8.92 11 6.13 11 6.13" })
  ),
  zoom_out: _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M10,1.92a8,8,0,1,0,4.88,14.42l5.37,5.37,1.41-1.41-5.35-5.35A8,8,0,0,0,10,1.92ZM10,16a6,6,0,1,1,6-6,6,6,0,0,1-6,6Z" }),
    _react2.default.createElement("polygon", { points: "13.79 8.92 6.13 8.92 6.13 11 13.79 11 13.79 8.92 13.79 8.92" })
  )
};

var MLIcon = function (_Component) {
  _inherits(MLIcon, _Component);

  function MLIcon() {
    _classCallCheck(this, MLIcon);

    return _possibleConstructorReturn(this, (MLIcon.__proto__ || Object.getPrototypeOf(MLIcon)).apply(this, arguments));
  }

  _createClass(MLIcon, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          type = _props.type,
          width = _props.width,
          height = _props.height,
          fill = _props.fill,
          viewBox = _props.viewBox,
          className = _props.className;

      return _react2.default.createElement(
        "svg",
        { className: className, width: width, height: height, viewBox: viewBox, fill: fill },
        _react2.default.createElement(
          "title",
          null,
          title
        ),
        icons[type]
      );
    }
  }]);

  return MLIcon;
}(_react.Component);

MLIcon.defaultProps = {
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: '#ffffff',
  className: ''
};
MLIcon.listIcons = Object.keys(icons);

MLIcon.propTypes = {
  type: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string.isRequired,
  fill: _react.PropTypes.string,
  width: _react.PropTypes.string,
  height: _react.PropTypes.string,
  viewBox: _react.PropTypes.string,
  className: _react.PropTypes.string
};

var _default = MLIcon;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(icons, "icons", "src/components/MLIcon/MLIcon.js");

  __REACT_HOT_LOADER__.register(MLIcon, "MLIcon", "src/components/MLIcon/MLIcon.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/MLIcon/MLIcon.js");
}();

;