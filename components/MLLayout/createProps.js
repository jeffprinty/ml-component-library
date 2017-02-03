'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createProps;
function createProps(propTypes, props, className) {
  var newProps = {};

  Object.keys(props).filter(function (key) {
    return key === 'children' || !propTypes[key];
  }).forEach(function (key) {
    return newProps[key] = props[key];
  });

  return Object.assign({}, newProps, { className: className });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(createProps, 'createProps', 'src/components/MLLayout/createProps.js');
}();

;