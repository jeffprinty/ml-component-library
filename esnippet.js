"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define("Library", [], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Library = t() : e.Library = t();
}(undefined, function () {
  return function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;var r = n[o] = { exports: {}, id: o, loaded: !1 };return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports;
    }var n = {};return t.m = e, t.c = n, t.p = "", t(0);
  }([function (e, t, n) {
    e.exports = n(22);
  }, function (e, t) {
    function n() {
      throw new Error("setTimeout has not been defined");
    }function o() {
      throw new Error("clearTimeout has not been defined");
    }function r(e) {
      if (u === setTimeout) return setTimeout(e, 0);if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);try {
        return u(e, 0);
      } catch (t) {
        try {
          return u.call(null, e, 0);
        } catch (t) {
          return u.call(this, e, 0);
        }
      }
    }function i(e) {
      if (d === clearTimeout) return clearTimeout(e);if ((d === o || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);try {
        return d(e);
      } catch (t) {
        try {
          return d.call(null, e);
        } catch (t) {
          return d.call(this, e);
        }
      }
    }function a() {
      g && f && (g = !1, f.length ? h = f.concat(h) : m = -1, h.length && l());
    }function l() {
      if (!g) {
        var e = r(a);g = !0;for (var t = h.length; t;) {
          for (f = h, h = []; ++m < t;) {
            f && f[m].run();
          }m = -1, t = h.length;
        }f = null, g = !1, i(e);
      }
    }function c(e, t) {
      this.fun = e, this.array = t;
    }function s() {}var u,
        d,
        p = e.exports = {};!function () {
      try {
        u = "function" == typeof setTimeout ? setTimeout : n;
      } catch (e) {
        u = n;
      }try {
        d = "function" == typeof clearTimeout ? clearTimeout : o;
      } catch (e) {
        d = o;
      }
    }();var f,
        h = [],
        g = !1,
        m = -1;p.nextTick = function (e) {
      var t = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
        t[n - 1] = arguments[n];
      }h.push(new c(e, t)), 1 !== h.length || g || r(l);
    }, c.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = s, p.addListener = s, p.once = s, p.off = s, p.removeListener = s, p.removeAllListeners = s, p.emit = s, p.binding = function (e) {
      throw new Error("process.binding is not supported");
    }, p.cwd = function () {
      return "/";
    }, p.chdir = function (e) {
      throw new Error("process.chdir is not supported");
    }, p.umask = function () {
      return 0;
    };
  }, function (e, t, n) {
    (function (t) {
      "use strict";
      var o = n(11),
          r = o;"production" !== t.env.NODE_ENV && !function () {
        var e = function e(_e) {
          for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) {
            n[o - 1] = arguments[o];
          }var r = 0,
              i = "Warning: " + _e.replace(/%s/g, function () {
            return n[r++];
          });"undefined" != typeof console && console.error(i);try {
            throw new Error(i);
          } catch (e) {}
        };r = function r(t, n) {
          if (void 0 === n) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if (0 !== n.indexOf("Failed Composite propType: ") && !t) {
            for (var o = arguments.length, r = Array(o > 2 ? o - 2 : 0), i = 2; i < o; i++) {
              r[i - 2] = arguments[i];
            }e.apply(void 0, [n].concat(r));
          }
        };
      }(), e.exports = r;
    }).call(t, n(1));
  }, function (e, t, n) {
    (function (t) {
      "use strict";
      function n(e, t, n, r, i, a, l, c) {
        if (o(t), !e) {
          var s;if (void 0 === t) s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
            var u = [n, r, i, a, l, c],
                d = 0;s = new Error(t.replace(/%s/g, function () {
              return u[d++];
            })), s.name = "Invariant Violation";
          }throw s.framesToPop = 1, s;
        }
      }var o = function o(e) {};"production" !== t.env.NODE_ENV && (o = function o(e) {
        if (void 0 === e) throw new Error("invariant requires an error message argument");
      }), e.exports = n;
    }).call(t, n(1));
  }, function (e, t, n) {
    (function (t) {
      "use strict";
      function o(e) {
        if ("production" !== t.env.NODE_ENV && f.call(e, "ref")) {
          var n = Object.getOwnPropertyDescriptor(e, "ref").get;if (n && n.isReactWarning) return !1;
        }return void 0 !== e.ref;
      }function r(e) {
        if ("production" !== t.env.NODE_ENV && f.call(e, "key")) {
          var n = Object.getOwnPropertyDescriptor(e, "key").get;if (n && n.isReactWarning) return !1;
        }return void 0 !== e.key;
      }function i(e, n) {
        var o = function o() {
          l || (l = !0, "production" !== t.env.NODE_ENV ? d(!1, "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", n) : void 0);
        };o.isReactWarning = !0, Object.defineProperty(e, "key", { get: o, configurable: !0 });
      }function a(e, n) {
        var o = function o() {
          c || (c = !0, "production" !== t.env.NODE_ENV ? d(!1, "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", n) : void 0);
        };o.isReactWarning = !0, Object.defineProperty(e, "ref", { get: o, configurable: !0 });
      }var l,
          c,
          s = n(9),
          u = n(10),
          d = n(2),
          p = n(17),
          f = Object.prototype.hasOwnProperty,
          h = n(19),
          g = { key: !0, ref: !0, __self: !0, __source: !0 },
          m = function m(e, n, o, r, i, a, l) {
        var c = { $$typeof: h, type: e, key: n, ref: o, props: l, _owner: a };return "production" !== t.env.NODE_ENV && (c._store = {}, p ? (Object.defineProperty(c._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(c, "_self", { configurable: !1, enumerable: !1, writable: !1, value: r }), Object.defineProperty(c, "_source", { configurable: !1, enumerable: !1, writable: !1, value: i })) : (c._store.validated = !1, c._self = r, c._source = i), Object.freeze && (Object.freeze(c.props), Object.freeze(c))), c;
      };m.createElement = function (e, n, l) {
        var c,
            s = {},
            d = null,
            p = null,
            _ = null,
            y = null;if (null != n) {
          o(n) && (p = n.ref), r(n) && (d = "" + n.key), _ = void 0 === n.__self ? null : n.__self, y = void 0 === n.__source ? null : n.__source;for (c in n) {
            f.call(n, c) && !g.hasOwnProperty(c) && (s[c] = n[c]);
          }
        }var v = arguments.length - 2;if (1 === v) s.children = l;else if (v > 1) {
          for (var b = Array(v), E = 0; E < v; E++) {
            b[E] = arguments[E + 2];
          }"production" !== t.env.NODE_ENV && Object.freeze && Object.freeze(b), s.children = b;
        }if (e && e.defaultProps) {
          var A = e.defaultProps;for (c in A) {
            void 0 === s[c] && (s[c] = A[c]);
          }
        }if ("production" !== t.env.NODE_ENV && (d || p) && ("undefined" == typeof s.$$typeof || s.$$typeof !== h)) {
          var w = "function" == typeof e ? e.displayName || e.name || "Unknown" : e;d && i(s, w), p && a(s, w);
        }return m(e, d, p, _, y, u.current, s);
      }, m.createFactory = function (e) {
        var t = m.createElement.bind(null, e);return t.type = e, t;
      }, m.cloneAndReplaceKey = function (e, t) {
        var n = m(e.type, t, e.ref, e._self, e._source, e._owner, e.props);return n;
      }, m.cloneElement = function (e, t, n) {
        var i,
            a = s({}, e.props),
            l = e.key,
            c = e.ref,
            d = e._self,
            p = e._source,
            h = e._owner;if (null != t) {
          o(t) && (c = t.ref, h = u.current), r(t) && (l = "" + t.key);var _;e.type && e.type.defaultProps && (_ = e.type.defaultProps);for (i in t) {
            f.call(t, i) && !g.hasOwnProperty(i) && (void 0 === t[i] && void 0 !== _ ? a[i] = _[i] : a[i] = t[i]);
          }
        }var y = arguments.length - 2;if (1 === y) a.children = n;else if (y > 1) {
          for (var v = Array(y), b = 0; b < y; b++) {
            v[b] = arguments[b + 2];
          }a.children = v;
        }return m(e.type, l, c, d, p, h, a);
      }, m.isValidElement = function (e) {
        return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e && e.$$typeof === h;
      }, e.exports = m;
    }).call(t, n(1));
  }, function (e, t) {
    "use strict";
    function n(e) {
      for (var t = arguments.length - 1, n = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, o = 0; o < t; o++) {
        n += "&args[]=" + encodeURIComponent(arguments[o + 1]);
      }n += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";var r = new Error(n);throw r.name = "Invariant Violation", r.framesToPop = 1, r;
    }e.exports = n;
  }, function (e, t) {
    e.exports = function () {
      var e = [];return e.toString = function () {
        for (var e = [], t = 0; t < this.length; t++) {
          var n = this[t];n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1]);
        }return e.join("");
      }, e.i = function (t, n) {
        "string" == typeof t && (t = [[null, t, ""]]);for (var o = {}, r = 0; r < this.length; r++) {
          var i = this[r][0];"number" == typeof i && (o[i] = !0);
        }for (r = 0; r < t.length; r++) {
          var a = t[r];"number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
        }
      }, e;
    };
  }, function (e, t, n) {
    "use strict";
    e.exports = n(36);
  }, function (e, t, n) {
    function o(e, t) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n],
            r = f[o.id];if (r) {
          r.refs++;for (var i = 0; i < r.parts.length; i++) {
            r.parts[i](o.parts[i]);
          }for (; i < o.parts.length; i++) {
            r.parts.push(s(o.parts[i], t));
          }
        } else {
          for (var a = [], i = 0; i < o.parts.length; i++) {
            a.push(s(o.parts[i], t));
          }f[o.id] = { id: o.id, refs: 1, parts: a };
        }
      }
    }function r(e) {
      for (var t = [], n = {}, o = 0; o < e.length; o++) {
        var r = e[o],
            i = r[0],
            a = r[1],
            l = r[2],
            c = r[3],
            s = { css: a, media: l, sourceMap: c };n[i] ? n[i].parts.push(s) : t.push(n[i] = { id: i, parts: [s] });
      }return t;
    }function i(e, t) {
      var n = m(),
          o = v[v.length - 1];if ("top" === e.insertAt) o ? o.nextSibling ? n.insertBefore(t, o.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), v.push(t);else {
        if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t);
      }
    }function a(e) {
      e.parentNode.removeChild(e);var t = v.indexOf(e);t >= 0 && v.splice(t, 1);
    }function l(e) {
      var t = document.createElement("style");return t.type = "text/css", i(e, t), t;
    }function c(e) {
      var t = document.createElement("link");return t.rel = "stylesheet", i(e, t), t;
    }function s(e, t) {
      var n, o, r;if (t.singleton) {
        var i = y++;n = _ || (_ = l(t)), o = u.bind(null, n, i, !1), r = u.bind(null, n, i, !0);
      } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(t), o = p.bind(null, n), r = function r() {
        a(n), n.href && URL.revokeObjectURL(n.href);
      }) : (n = l(t), o = d.bind(null, n), r = function r() {
        a(n);
      });return o(e), function (t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;o(e = t);
        } else r();
      };
    }function u(e, t, n, o) {
      var r = n ? "" : o.css;if (e.styleSheet) e.styleSheet.cssText = b(t, r);else {
        var i = document.createTextNode(r),
            a = e.childNodes;a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
      }
    }function d(e, t) {
      var n = t.css,
          o = t.media;if (o && e.setAttribute("media", o), e.styleSheet) e.styleSheet.cssText = n;else {
        for (; e.firstChild;) {
          e.removeChild(e.firstChild);
        }e.appendChild(document.createTextNode(n));
      }
    }function p(e, t) {
      var n = t.css,
          o = t.sourceMap;o && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");var r = new Blob([n], { type: "text/css" }),
          i = e.href;e.href = URL.createObjectURL(r), i && URL.revokeObjectURL(i);
    }var f = {},
        h = function h(e) {
      var t;return function () {
        return "undefined" == typeof t && (t = e.apply(this, arguments)), t;
      };
    },
        g = h(function () {
      return (/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
      );
    }),
        m = h(function () {
      return document.head || document.getElementsByTagName("head")[0];
    }),
        _ = null,
        y = 0,
        v = [];e.exports = function (e, t) {
      t = t || {}, "undefined" == typeof t.singleton && (t.singleton = g()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");var n = r(e);return o(n, t), function (e) {
        for (var i = [], a = 0; a < n.length; a++) {
          var l = n[a],
              c = f[l.id];c.refs--, i.push(c);
        }if (e) {
          var s = r(e);o(s, t);
        }for (var a = 0; a < i.length; a++) {
          var c = i[a];if (0 === c.refs) {
            for (var u = 0; u < c.parts.length; u++) {
              c.parts[u]();
            }delete f[c.id];
          }
        }
      };
    };var b = function () {
      var e = [];return function (t, n) {
        return e[t] = n, e.filter(Boolean).join("\n");
      };
    }();
  }, function (e, t) {
    "use strict";
    function n(e) {
      if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e);
    }function o() {
      try {
        if (!Object.assign) return !1;var e = new String("abc");if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;for (var t = {}, n = 0; n < 10; n++) {
          t["_" + String.fromCharCode(n)] = n;
        }var o = Object.getOwnPropertyNames(t).map(function (e) {
          return t[e];
        });if ("0123456789" !== o.join("")) return !1;var r = {};return "abcdefghijklmnopqrst".split("").forEach(function (e) {
          r[e] = e;
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
      } catch (e) {
        return !1;
      }
    }var r = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;e.exports = o() ? Object.assign : function (e, t) {
      for (var o, a, l = n(e), c = 1; c < arguments.length; c++) {
        o = Object(arguments[c]);for (var s in o) {
          r.call(o, s) && (l[s] = o[s]);
        }if (Object.getOwnPropertySymbols) {
          a = Object.getOwnPropertySymbols(o);for (var u = 0; u < a.length; u++) {
            i.call(o, a[u]) && (l[a[u]] = o[a[u]]);
          }
        }
      }return l;
    };
  }, function (e, t) {
    "use strict";
    var n = { current: null };e.exports = n;
  }, function (e, t) {
    "use strict";
    function n(e) {
      return function () {
        return e;
      };
    }var o = function o() {};o.thatReturns = n, o.thatReturnsFalse = n(!1), o.thatReturnsTrue = n(!0), o.thatReturnsNull = n(null), o.thatReturnsThis = function () {
      return this;
    }, o.thatReturnsArgument = function (e) {
      return e;
    }, e.exports = o;
  }, function (e, t, n) {
    (function (t) {
      "use strict";
      var n = {};"production" !== t.env.NODE_ENV && Object.freeze(n), e.exports = n;
    }).call(t, n(1));
  }, function (e, t, n) {
    (function (t) {
      "use strict";
      function o(e, t, n) {
        this.props = e, this.context = t, this.refs = l, this.updater = n || i;
      }var r = n(5),
          i = n(15),
          a = n(17),
          l = n(12),
          c = n(3),
          s = n(2);if (o.prototype.isReactComponent = {}, o.prototype.setState = function (e, n) {
        "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e && null != e ? "production" !== t.env.NODE_ENV ? c(!1, "setState(...): takes an object of state variables to update or a function which returns an object of state variables.") : r("85") : void 0, this.updater.enqueueSetState(this, e), n && this.updater.enqueueCallback(this, n, "setState");
      }, o.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this), e && this.updater.enqueueCallback(this, e, "forceUpdate");
      }, "production" !== t.env.NODE_ENV) {
        var u = { isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."], replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."] },
            d = function d(e, n) {
          a && Object.defineProperty(o.prototype, e, { get: function get() {
              "production" !== t.env.NODE_ENV ? s(!1, "%s(...) is deprecated in plain JavaScript React classes. %s", n[0], n[1]) : void 0;
            } });
        };for (var p in u) {
          u.hasOwnProperty(p) && d(p, u[p]);
        }
      }e.exports = o;
    }).call(t, n(1));
  }, function (e, t, n) {
    (function (t) {
      "use strict";
      function o(e) {
        var t = Function.prototype.toString,
            n = Object.prototype.hasOwnProperty,
            o = RegExp("^" + t.call(n).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");try {
          var r = t.call(e);return o.test(r);
        } catch (e) {
          return !1;
        }
      }function r(e) {
        var t = s(e);if (t) {
          var n = t.childIDs;u(e), n.forEach(r);
        }
      }function i(e, t, n) {
        return "\n    in " + (e || "Unknown") + (t ? " (at " + t.fileName.replace(/^.*[\\\/]/, "") + ":" + t.lineNumber + ")" : n ? " (created by " + n + ")" : "");
      }function a(e) {
        return null == e ? "#empty" : "string" == typeof e || "number" == typeof e ? "#text" : "string" == typeof e.type ? e.type : e.type.displayName || e.type.name || "Unknown";
      }function l(e) {
        var n,
            o = k.getDisplayName(e),
            r = k.getElement(e),
            a = k.getOwnerID(e);return a && (n = k.getDisplayName(a)), "production" !== t.env.NODE_ENV ? y(r, "ReactComponentTreeHook: Missing React element for debugID %s when building stack", e) : void 0, i(o, r && r._source, n);
      }var c,
          s,
          u,
          d,
          p,
          f,
          h,
          g = n(5),
          m = n(10),
          _ = n(3),
          y = n(2),
          v = "function" == typeof Array.from && "function" == typeof Map && o(Map) && null != Map.prototype && "function" == typeof Map.prototype.keys && o(Map.prototype.keys) && "function" == typeof Set && o(Set) && null != Set.prototype && "function" == typeof Set.prototype.keys && o(Set.prototype.keys);if (v) {
        var b = new Map(),
            E = new Set();c = function c(e, t) {
          b.set(e, t);
        }, s = function s(e) {
          return b.get(e);
        }, u = function u(e) {
          b.delete(e);
        }, d = function d() {
          return Array.from(b.keys());
        }, p = function p(e) {
          E.add(e);
        }, f = function f(e) {
          E.delete(e);
        }, h = function h() {
          return Array.from(E.keys());
        };
      } else {
        var A = {},
            w = {},
            x = function x(e) {
          return "." + e;
        },
            C = function C(e) {
          return parseInt(e.substr(1), 10);
        };c = function c(e, t) {
          var n = x(e);A[n] = t;
        }, s = function s(e) {
          var t = x(e);return A[t];
        }, u = function u(e) {
          var t = x(e);delete A[t];
        }, d = function d() {
          return Object.keys(A).map(C);
        }, p = function p(e) {
          var t = x(e);w[t] = !0;
        }, f = function f(e) {
          var t = x(e);delete w[t];
        }, h = function h() {
          return Object.keys(w).map(C);
        };
      }var O = [],
          k = { onSetChildren: function onSetChildren(e, n) {
          var o = s(e);o ? void 0 : "production" !== t.env.NODE_ENV ? _(!1, "Item must have been set") : g("144"), o.childIDs = n;for (var r = 0; r < n.length; r++) {
            var i = n[r],
                a = s(i);a ? void 0 : "production" !== t.env.NODE_ENV ? _(!1, "Expected hook events to fire for the child before its parent includes it in onSetChildren().") : g("140"), null == a.childIDs && "object" == _typeof(a.element) && null != a.element ? "production" !== t.env.NODE_ENV ? _(!1, "Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().") : g("141") : void 0, a.isMounted ? void 0 : "production" !== t.env.NODE_ENV ? _(!1, "Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().") : g("71"), null == a.parentID && (a.parentID = e), a.parentID !== e ? "production" !== t.env.NODE_ENV ? _(!1, "Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).", i, a.parentID, e) : g("142", i, a.parentID, e) : void 0;
          }
        }, onBeforeMountComponent: function onBeforeMountComponent(e, t, n) {
          var o = { element: t, parentID: n, text: null, childIDs: [], isMounted: !1, updateCount: 0 };c(e, o);
        }, onBeforeUpdateComponent: function onBeforeUpdateComponent(e, t) {
          var n = s(e);n && n.isMounted && (n.element = t);
        }, onMountComponent: function onMountComponent(e) {
          var n = s(e);n ? void 0 : "production" !== t.env.NODE_ENV ? _(!1, "Item must have been set") : g("144"), n.isMounted = !0;var o = 0 === n.parentID;o && p(e);
        }, onUpdateComponent: function onUpdateComponent(e) {
          var t = s(e);t && t.isMounted && t.updateCount++;
        }, onUnmountComponent: function onUnmountComponent(e) {
          var t = s(e);if (t) {
            t.isMounted = !1;var n = 0 === t.parentID;n && f(e);
          }O.push(e);
        }, purgeUnmountedComponents: function purgeUnmountedComponents() {
          if (!k._preventPurging) {
            for (var e = 0; e < O.length; e++) {
              var t = O[e];r(t);
            }O.length = 0;
          }
        }, isMounted: function isMounted(e) {
          var t = s(e);return !!t && t.isMounted;
        }, getCurrentStackAddendum: function getCurrentStackAddendum(e) {
          var t = "";if (e) {
            var n = a(e),
                o = e._owner;t += i(n, e._source, o && o.getName());
          }var r = m.current,
              l = r && r._debugID;return t += k.getStackAddendumByID(l);
        }, getStackAddendumByID: function getStackAddendumByID(e) {
          for (var t = ""; e;) {
            t += l(e), e = k.getParentID(e);
          }return t;
        }, getChildIDs: function getChildIDs(e) {
          var t = s(e);return t ? t.childIDs : [];
        }, getDisplayName: function getDisplayName(e) {
          var t = k.getElement(e);return t ? a(t) : null;
        }, getElement: function getElement(e) {
          var t = s(e);return t ? t.element : null;
        }, getOwnerID: function getOwnerID(e) {
          var t = k.getElement(e);return t && t._owner ? t._owner._debugID : null;
        }, getParentID: function getParentID(e) {
          var t = s(e);return t ? t.parentID : null;
        }, getSource: function getSource(e) {
          var t = s(e),
              n = t ? t.element : null,
              o = null != n ? n._source : null;return o;
        }, getText: function getText(e) {
          var t = k.getElement(e);return "string" == typeof t ? t : "number" == typeof t ? "" + t : null;
        }, getUpdateCount: function getUpdateCount(e) {
          var t = s(e);return t ? t.updateCount : 0;
        }, getRootIDs: h, getRegisteredIDs: d };e.exports = k;
    }).call(t, n(1));
  }, function (e, t, n) {
    (function (t) {
      "use strict";
      function o(e, n) {
        if ("production" !== t.env.NODE_ENV) {
          var o = e.constructor;"production" !== t.env.NODE_ENV ? r(!1, "%s(...): Can only update a mounted or mounting component. This usually means you called %s() on an unmounted component. This is a no-op. Please check the code for the %s component.", n, n, o && (o.displayName || o.name) || "ReactClass") : void 0;
        }
      }var r = n(2),
          i = { isMounted: function isMounted(e) {
          return !1;
        }, enqueueCallback: function enqueueCallback(e, t) {}, enqueueForceUpdate: function enqueueForceUpdate(e) {
          o(e, "forceUpdate");
        }, enqueueReplaceState: function enqueueReplaceState(e, t) {
          o(e, "replaceState");
        }, enqueueSetState: function enqueueSetState(e, t) {
          o(e, "setState");
        } };e.exports = i;
    }).call(t, n(1));
  }, function (e, t, n) {
    (function (t) {
      "use strict";
      var n = {};"production" !== t.env.NODE_ENV && (n = { prop: "prop", context: "context", childContext: "child context" }), e.exports = n;
    }).call(t, n(1));
  }, function (e, t, n) {
    (function (t) {
      "use strict";
      var n = !1;if ("production" !== t.env.NODE_ENV) try {
        Object.defineProperty({}, "x", { get: function get() {} }), n = !0;
      } catch (e) {}e.exports = n;
    }).call(t, n(1));
  }, function (e, t) {
    "use strict";
    function n(e) {
      var t = e && (o && e[o] || e[r]);if ("function" == typeof t) return t;
    }var o = "function" == typeof Symbol && Symbol.iterator,
        r = "@@iterator";e.exports = n;
  }, function (e, t) {
    "use strict";
    var n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;e.exports = n;
  }, function (e, t, n) {
    (function (t) {
      "use strict";
      function o() {
        if (c.current) {
          var e = c.current.getName();if (e) return " Check the render method of `" + e + "`.";
        }return "";
      }function r(e) {
        var t = o();if (!t) {
          var n = "string" == typeof e ? e : e.displayName || e.name;n && (t = " Check the top-level render call using <" + n + ">.");
        }return t;
      }function i(e, n) {
        if (e._store && !e._store.validated && null == e.key) {
          e._store.validated = !0;var o = g.uniqueKey || (g.uniqueKey = {}),
              i = r(n);if (!o[i]) {
            o[i] = !0;var a = "";e && e._owner && e._owner !== c.current && (a = " It was passed a child from " + e._owner.getName() + "."), "production" !== t.env.NODE_ENV ? h(!1, 'Each child in an array or iterator should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.%s', i, a, s.getCurrentStackAddendum(e)) : void 0;
          }
        }
      }function a(e, t) {
        if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) if (Array.isArray(e)) for (var n = 0; n < e.length; n++) {
          var o = e[n];u.isValidElement(o) && i(o, t);
        } else if (u.isValidElement(e)) e._store && (e._store.validated = !0);else if (e) {
          var r = f(e);if (r && r !== e.entries) for (var a, l = r.call(e); !(a = l.next()).done;) {
            u.isValidElement(a.value) && i(a.value, t);
          }
        }
      }function l(e) {
        var n = e.type;if ("function" == typeof n) {
          var o = n.displayName || n.name;n.propTypes && d(n.propTypes, e.props, "prop", o, e, null), "function" == typeof n.getDefaultProps && ("production" !== t.env.NODE_ENV ? h(n.getDefaultProps.isReactClassApproved, "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.") : void 0);
        }
      }var c = n(10),
          s = n(14),
          u = n(4),
          d = n(43),
          p = n(17),
          f = n(18),
          h = n(2),
          g = {},
          m = { createElement: function createElement(e, n, r) {
          var i = "string" == typeof e || "function" == typeof e;if (!i && "function" != typeof e && "string" != typeof e) {
            var c = "";(void 0 === e || "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e && 0 === Object.keys(e).length) && (c += " You likely forgot to export your component from the file it's defined in."), c += o(), "production" !== t.env.NODE_ENV ? h(!1, "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", null == e ? e : typeof e === "undefined" ? "undefined" : _typeof(e), c) : void 0;
          }var s = u.createElement.apply(this, arguments);if (null == s) return s;if (i) for (var d = 2; d < arguments.length; d++) {
            a(arguments[d], e);
          }return l(s), s;
        }, createFactory: function createFactory(e) {
          var n = m.createElement.bind(null, e);return n.type = e, "production" !== t.env.NODE_ENV && p && Object.defineProperty(n, "type", { enumerable: !1, get: function get() {
              return "production" !== t.env.NODE_ENV ? h(!1, "Factory.type is deprecated. Access the class directly before passing it to createFactory.") : void 0, Object.defineProperty(this, "type", { value: e }), e;
            } }), n;
        }, cloneElement: function cloneElement(e, t, n) {
          for (var o = u.cloneElement.apply(this, arguments), r = 2; r < arguments.length; r++) {
            a(arguments[r], o.type);
          }return l(o), o;
        } };e.exports = m;
    }).call(t, n(1));
  }, function (e, t) {
    "use strict";
    var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports = n;
  }, function (e, t, n) {
    "use strict";
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var l = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];for (var o in n) {
          Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
      }return e;
    },
        c = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }(),
        s = n(7),
        u = o(s),
        d = n(46),
        p = o(d),
        f = n(26),
        h = o(f),
        g = n(23),
        m = o(g);n(50), n(51);var _ = function _() {
      var e = document.createElement("script");document.getElementById("root-entry"), e.src = "https://jigsaw-dev.vitalsource.com/assets/v1/jigsaw/box.js", e.async = !1, document.head.appendChild(e), console.log("SCRIPT added");
    },
        y = 0,
        v = 0,
        b = function (e) {
      function t(e) {
        r(this, t);var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return n.receiveViewer = function () {
          return n.__receiveViewer__REACT_HOT_LOADER__.apply(n, arguments);
        }, n.receiveJigsaw = function () {
          return n.__receiveJigsaw__REACT_HOT_LOADER__.apply(n, arguments);
        }, n._refreshHighlights = function () {
          return n.___refreshHighlights__REACT_HOT_LOADER__.apply(n, arguments);
        }, n._eventHandler = function () {
          return n.___eventHandler__REACT_HOT_LOADER__.apply(n, arguments);
        }, n._highlightEvents = function () {
          return n.___highlightEvents__REACT_HOT_LOADER__.apply(n, arguments);
        }, n._manipulateHighlight = function () {
          return n.___manipulateHighlight__REACT_HOT_LOADER__.apply(n, arguments);
        }, n._showNewHighlightModal = function () {
          return n.___showNewHighlightModal__REACT_HOT_LOADER__.apply(n, arguments);
        }, n._showHighlightModal = function () {
          return n.___showHighlightModal__REACT_HOT_LOADER__.apply(n, arguments);
        }, n._hideHighlightModal = function () {
          return n.___hideHighlightModal__REACT_HOT_LOADER__.apply(n, arguments);
        }, n._updateNoteText = function () {
          return n.___updateNoteText__REACT_HOT_LOADER__.apply(n, arguments);
        }, n.highlightRender = function () {
          return n.__highlightRender__REACT_HOT_LOADER__.apply(n, arguments);
        }, n.state = { jigsawMounted: !1, containerDimensions: {}, highlightPosition: { x: 200, y: 200, arrow: "top" }, highlightVisible: !1, markerId: !1, markerObject: {}, currentSyncId: "", noteText: "", highlightData: null, highlightObject: {}, highlightArray: [], currentCFI: "" }, _(), n;
      }return a(t, e), c(t, [{ key: "componentWillMount", value: function value() {
          console.log("WILL MOUNT"), this.state.jigsawMounted || this.waitForJigsaw();
        } }, { key: "__receiveViewer__REACT_HOT_LOADER__", value: function value(e, t, n) {
          var o = this.props,
              r = o.start,
              i = o.stop,
              a = o.cfi;e.Snippet.enter({ start: r, stop: i, cfi: a }, function (e) {
            console.log("snippet err", e);
          }), this.setState({ highlightArray: t }), console.log("view", e, this.props);
        } }, { key: "__receiveJigsaw__REACT_HOT_LOADER__", value: function value(e) {
          this.jigsaw = e, this._refreshHighlights();
        } }, { key: "___refreshHighlights__REACT_HOT_LOADER__", value: function value(e) {
          var t = this;this.jigsaw.Viewer.Book.getHighlights(function (e) {
            var n = e.data,
                o = n.markers,
                r = n.highlights;console.log("_refreshHighlights", e.data), "ok" == e.status && o && !function () {
              var e = {};o.map(function (t, n) {
                e[t.globalId] = t;
              }), t.setState({ highlightArray: r, markerObject: e });
            }();
          });
        } }, { key: "___eventHandler__REACT_HOT_LOADER__", value: function value(e, t, n) {
          var o = this,
              r = this;!function () {
            switch (e.type) {case "book:selectionWithPosition":
                var i = Math.abs(t.eventPosition.top - t.selectionRect.top),
                    a = Math.abs(t.eventPosition.top - t.selectionRect.bottom),
                    l = "top";v = y;var c = t.eventPosition.top + 10,
                    s = i < a;s && (l = "bottom", c = t.selectionRect.top - 42);var u = t.eventPosition.left - 160,
                    d = { x: u, y: Math.floor(c), arrow: l };o._showNewHighlightModal(d, t);break;case "book:click":case "book:selectionCancelled":
                o._hideHighlightModal(t);break;case "page:ready":
                n.Viewport.getContainerDimensions(function (e) {
                  r.setState({ containerDimensions: e.data });
                });break;case "highlight:click":
                var p = t.position,
                    f = p.height,
                    h = (p.left, p.width, p.top),
                    g = parseInt(h + f + 10),
                    m = o.state.containerDimensions.width,
                    _ = Math.floor(m / 2) - 160;n.Book.getHighlights(function (e) {
                  var n = e.data,
                      o = (n.markers, n.highlights),
                      i = o.find(function (e) {
                    return e.syncId === t.syncId;
                  });"ok" == e.status && r._showHighlightModal({ x: _, y: g }, i, t.syncId, !0);
                });break;case "noteicon:click":
                var b = o.state.highlightArray.find(function (e) {
                  return e.syncId === t.syncId;
                });o._showHighlightModal({ x: 40, y: t.position.top - 12, arrow: "left" }, b, t.syncId, !0);break;case "page:scroll":
                var E = Math.abs((v - y) / 2);o.state.highlightVisible === !0 && E > 10 && o.setState({ highlightVisible: !1 }), y = t.scrollTop;break;default:
                console.log("other event", e, t);}
          }();
        } }, { key: "___highlightEvents__REACT_HOT_LOADER__", value: function value(e) {
          switch (e) {case "close":
              this._hideHighlightModal(), this._refreshHighlights();}
        } }, { key: "___manipulateHighlight__REACT_HOT_LOADER__", value: function value(e, t, n, o) {
          console.log(":::: manipulateHighlight", e, t, n, o);var r = this;switch (t) {case "delete":
              this.jigsaw.Viewer.Book.deleteHighlight(e, function (t) {
                r.setState({ highlightVisible: !1 }), console.log(":::: deleted", e, t);
              });break;case "update":
              e ? this.jigsaw.Viewer.Book.updateHighlight(e, { markerId: n, noteText: o }, function (t) {
                r.setState({ markerId: n }), console.log(":::: updated!", e, t);
              }) : this.jigsaw.Viewer.Book.highlightCurrentSelection({ markerId: n, noteText: o }, function (e) {
                console.log(":: Highlight created", e.data.highlight.syncId);
              }), this._refreshHighlights(), this.setState({ markerId: n });}
        } }, { key: "___showNewHighlightModal__REACT_HOT_LOADER__", value: function value(e, t) {
          this.setState({ highlightVisible: !0, highlightData: t, highlightPosition: { x: e.x, y: e.y, arrow: e.arrow }, noteText: "", currentSyncId: "", markerId: !1 });
        } }, { key: "___showHighlightModal__REACT_HOT_LOADER__", value: function value(e, t, n) {
          this.setState({ noteText: t.noteText, currentSyncId: n, highlightData: t, highlightVisible: !0, highlightPosition: e, markerId: t.markerId });
        } }, { key: "___hideHighlightModal__REACT_HOT_LOADER__", value: function value() {
          this.setState({ highlightVisible: !1, markerId: !1 });
        } }, { key: "___updateNoteText__REACT_HOT_LOADER__", value: function value(e) {
          this.setState({ noteText: e });
        } }, { key: "waitForJigsaw", value: function value() {
          var e = this,
              t = setInterval(function () {
            window.Jigsaw && (clearInterval(t), e.setState({ jigsawMounted: !0 }));
          }, 200);
        } }, { key: "__highlightRender__REACT_HOT_LOADER__", value: function value() {
          var e = this.state,
              t = (e.currentCFI, e.currentSyncId),
              n = e.highlightData,
              o = e.highlightVisible,
              r = e.highlightPosition,
              i = e.markerObject,
              a = e.markerId,
              l = e.noteText;return this.props.highlightsEnabled ? u.default.createElement(m.default, { highlightPosition: r, highlightVisible: o, highlightData: n, highlightEvents: this._highlightEvents, noteText: l, onNoteUpdate: this._updateNoteText, manipulateHighlight: this._manipulateHighlight, syncId: t, markerObject: i, selectedMarkerId: a }) : null;
        } }, { key: "render", value: function value() {
          return console.log("RENDER eSnippet"), this.state.jigsawMounted ? u.default.createElement("div", { className: p.default.container }, u.default.createElement(h.default, l({}, this.props, { eventHandler: this._eventHandler, dispatchJigsaw: this.receiveJigsaw, dispatchViewer: this.receiveViewer })), this.highlightRender()) : null;
        } }]), t;
    }(s.Component);b.defaultProps = { highlightsEnabled: !1 }, b.propTypes = { vbid: s.PropTypes.string.isRequired, cfi: s.PropTypes.string, start: s.PropTypes.string, stop: s.PropTypes.string, cb: s.PropTypes.func, highlightsEnabled: s.PropTypes.bool };var E = b;t.default = E, function () {
      "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(_, "addJigsaw", "/Users/jeffprinty/dev/sprint4/rt_client/src/components/ESnippet/ESnippet.js"), __REACT_HOT_LOADER__.register(y, "scrollTop", "/Users/jeffprinty/dev/sprint4/rt_client/src/components/ESnippet/ESnippet.js"), __REACT_HOT_LOADER__.register(v, "lastScroll", "/Users/jeffprinty/dev/sprint4/rt_client/src/components/ESnippet/ESnippet.js"), __REACT_HOT_LOADER__.register(b, "ESnippet", "/Users/jeffprinty/dev/sprint4/rt_client/src/components/ESnippet/ESnippet.js"), __REACT_HOT_LOADER__.register(E, "default", "/Users/jeffprinty/dev/sprint4/rt_client/src/components/ESnippet/ESnippet.js"));
    }();
  }, function (e, t, n) {
    "use strict";
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var l = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
    },
        c = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];for (var o in n) {
          Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
      }return e;
    },
        s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }(),
        u = n(7),
        d = o(u),
        p = n(47),
        f = o(p),
        h = n(33),
        g = o(h),
        m = n(24),
        _ = o(m),
        y = n(25),
        v = o(y),
        b = "",
        E = function (e) {
      function t(e) {
        r(this, t);var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return n._showNote = function () {
          return n.___showNote__REACT_HOT_LOADER__.apply(n, arguments);
        }, n._hideNote = function () {
          return n.___hideNote__REACT_HOT_LOADER__.apply(n, arguments);
        }, n._selectHighlightColor = function () {
          return n.___selectHighlightColor__REACT_HOT_LOADER__.apply(n, arguments);
        }, n._clickHighlightButton = function () {
          return n.___clickHighlightButton__REACT_HOT_LOADER__.apply(n, arguments);
        }, n._saveAndClose = function () {
          return n.___saveAndClose__REACT_HOT_LOADER__.apply(n, arguments);
        }, n._cancelAndDelete = function () {
          return n.___cancelAndDelete__REACT_HOT_LOADER__.apply(n, arguments);
        }, n._textareaChange = function () {
          return n.___textareaChange__REACT_HOT_LOADER__.apply(n, arguments);
        }, n._hoverLabel = function () {
          return n.___hoverLabel__REACT_HOT_LOADER__.apply(n, arguments);
        }, n._labelDisplay = function () {
          return n.___labelDisplay__REACT_HOT_LOADER__.apply(n, arguments);
        }, n.state = c({}, e, { noteVisible: !1, labelText: "", labelColor: "#FFFFFF" }), n;
      }return a(t, e), s(t, [{ key: "componentWillReceiveProps", value: function value(e, t) {
          var n = e.syncId,
              o = this.props.syncId;n !== o ? this.setState(c({}, e, { noteVisible: !1 })) : this.setState(e);
        } }, { key: "___showNote__REACT_HOT_LOADER__", value: function value() {
          this.props.selectedMarkerId === !1 && (console.log("selecte defaultt", Object.keys(this.props.markerObject)[0]), this._selectHighlightColor(Object.keys(this.props.markerObject)[0])), this.setState({ noteVisible: !0 });
        } }, { key: "___hideNote__REACT_HOT_LOADER__", value: function value() {
          this.setState({ noteVisible: !1 });
        } }, { key: "___selectHighlightColor__REACT_HOT_LOADER__", value: function value(e) {
          "" === this.props.selectedMarkerId ? this.props.manipulateHighlight(null, "update", e, this.state.noteText) : e === this.props.selectedMarkerId ? "" == this.state.noteText && this.props.manipulateHighlight(this.props.syncId, "delete", !1) : this.props.manipulateHighlight(this.props.syncId, "update", e, this.state.noteText);
        } }, { key: "___clickHighlightButton__REACT_HOT_LOADER__", value: function value() {
          this._selectHighlightColor(Object.keys(this.props.markerObject)[0]), this.props.highlightEvents("close");
        } }, { key: "___saveAndClose__REACT_HOT_LOADER__", value: function value() {
          this.props.manipulateHighlight(this.props.syncId, "update", this.state.selectedMarkerId, this.state.noteText), this.props.highlightEvents("close");
        } }, { key: "___cancelAndDelete__REACT_HOT_LOADER__", value: function value(e) {
          this.props.highlightEvents("close");
        } }, { key: "___textareaChange__REACT_HOT_LOADER__", value: function value(e) {
          this.props.onNoteUpdate(e.target.value), this.setState({ noteText: e.target.value });
        } }, { key: "___hoverLabel__REACT_HOT_LOADER__", value: function value(e) {
          this.setState({ labelText: e.label, labelColor: e.vstColor });
        } }, { key: "___labelDisplay__REACT_HOT_LOADER__", value: function value() {
          var e = this.state,
              t = e.labelColor,
              n = e.labelText;if ("" !== n) return d.default.createElement("span", { style: { color: t }, className: f.default.labelDisplay }, n);
        } }, { key: "render", value: function value() {
          var e = this,
              t = this.props,
              n = t.highlightVisible,
              o = t.highlightPosition,
              r = (t.highlightData, t.markerObject),
              i = t.selectedMarkerId,
              a = t.syncId,
              c = t.noteText,
              s = this.state.noteVisible;if (0 == n) return null;var u = function () {
            var t = s,
                n = "" !== e.props.noteText,
                l = a !== !1,
                u = e,
                p = e._saveAndClose.bind(e, a),
                h = e._cancelAndDelete.bind(e, a),
                m = f.default.container;return "top" === o.arrow ? m = f.default.containerWithArrow : "bottom" === o.arrow ? m = f.default.containerWithTopArrow : "left" === o.arrow && (m = f.default.containerWithLeftArrow), { v: d.default.createElement("div", { style: { left: o.x, top: o.y }, className: m }, d.default.createElement("div", { className: s ? f.default.hidden : f.default.highlightWrap }, d.default.createElement("div", { className: f.default.topBar }, d.default.createElement("div", { className: f.default.orbList }, Object.keys(r).map(function (e, t) {
                var n = r[e],
                    o = r[n.globalId];return d.default.createElement(v.default, { key: n.globalId, markerColor: n.vstColor, globalId: n.globalId, markerObject: o, clickFunc: u._selectHighlightColor, hoverFunc: u._hoverLabel, noX: !0, className: f.default.orb, isSelected: i == n.globalId });
              })), d.default.createElement("div", { className: f.default.labelWrap }, e._labelDisplay()), d.default.createElement("div", { name: "edit", className: f.default.editCancelBtn, style: { display: "none" } }, t ? d.default.createElement("div", { className: f.default.icon, onClick: e._hideNote }, d.default.createElement(g.default, { iconType: "cancel", iconTitle: "cancel" })) : d.default.createElement("div", { className: f.default.icon, onClick: e._showNote }, d.default.createElement(g.default, { iconType: "edit", iconTitle: "add note" })))), d.default.createElement("div", { className: f.default.highlightActions }, d.default.createElement("div", { className: f.default.highlightActionsBtn, style: { display: l ? "none" : "flex" }, onClick: e._clickHighlightButton }, d.default.createElement("div", { className: f.default.actionBtnIcon }, d.default.createElement(g.default, { iconType: "highlight", iconTitle: "Add Highlight" })), d.default.createElement("span", { className: f.default.actionBtnText }, "Add Highlight")), d.default.createElement("div", { className: f.default.highlightActionsBtn, onClick: e._showNote }, d.default.createElement("div", { className: f.default.actionBtnIcon }, d.default.createElement(g.default, { iconType: "item_edit", iconTitle: "Add Note" })), d.default.createElement("span", { className: f.default.actionBtnText }, n ? "View Note" : "Add Note")))), d.default.createElement("div", { className: s ? f.default["note-wrap"] : f.default.hidden, style: { backgroundColor: r[i].vstColor } }, d.default.createElement("textarea", { value: c, className: f.default.noteTextarea, onChange: e._textareaChange }), d.default.createElement("div", { className: f.default.buttonWrap }, d.default.createElement(_.default, { onClick: h, btnClass: "secondary", style: { textDecoration: "underline", fontSize: 14, color: "#0F758D", border: "none" }, title: "Cancel" }), d.default.createElement(_.default, { onClick: p, btnClass: "primary", style: { fontSize: 14 }, title: "Save" })))) };
          }();return "object" === ("undefined" == typeof u ? "undefined" : l(u)) ? u.v : void 0;
        } }]), t;
    }(u.Component);E.defaultProps = { markerObject: {} }, E.propTypes = { highlightVisible: u.PropTypes.bool, noteText: u.PropTypes.string, highlightPosition: u.PropTypes.object, highlightEvents: u.PropTypes.func, onNoteUpdate: u.PropTypes.func, updateNoteText: u.PropTypes.func, markerObject: u.PropTypes.object, syncId: u.PropTypes.string };var A = E;t.default = A, function () {
      "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(b, "currentNoteText", "/Users/jeffprinty/dev/sprint4/rt_client/src/components/HighlightModal/HighlightModal.js"), __REACT_HOT_LOADER__.register(E, "HighlightModal", "/Users/jeffprinty/dev/sprint4/rt_client/src/components/HighlightModal/HighlightModal.js"), __REACT_HOT_LOADER__.register(A, "default", "/Users/jeffprinty/dev/sprint4/rt_client/src/components/HighlightModal/HighlightModal.js"));
    }();
  }, function (e, t, n) {
    "use strict";
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var l = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }(),
        c = n(7),
        s = o(c),
        u = n(48),
        d = o(u),
        p = function (e) {
      function t(e) {
        return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      }return a(t, e), l(t, [{ key: "render", value: function value() {
          var e = this.props,
              t = e.title,
              n = e.btnClass,
              o = e.secondary,
              r = e.onClick,
              i = e.icon,
              a = e.style;return s.default.createElement("button", { className: d.default.button + " " + d.default[n] + " " + d.default[o], style: a, onClick: r }, i, t);
        } }]), t;
    }(c.Component);p.defaultProps = { btnClass: "default", secondary: "" }, p.propTypes = { title: c.PropTypes.string.isRequired, btnClass: c.PropTypes.string, secondary: c.PropTypes.string, onClick: c.PropTypes.func };var f = p;t.default = f, function () {
      "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(p, "MLButton", "/Users/jeffprinty/dev/sprint4/rt_client/src/components/MLButton/MLButton.js"), __REACT_HOT_LOADER__.register(f, "default", "/Users/jeffprinty/dev/sprint4/rt_client/src/components/MLButton/MLButton.js"));
    }();
  }, function (e, t, n) {
    "use strict";
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var l = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }(),
        c = n(7),
        s = o(c),
        u = function (e) {
      function t(e) {
        r(this, t);var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return n.clickEvent = function () {
          return n.__clickEvent__REACT_HOT_LOADER__.apply(n, arguments);
        }, n._handleMouseEnter = function () {
          return n.___handleMouseEnter__REACT_HOT_LOADER__.apply(n, arguments);
        }, n._handleMouseLeave = function () {
          return n.___handleMouseLeave__REACT_HOT_LOADER__.apply(n, arguments);
        }, n.state = { hovering: !1 }, n;
      }return a(t, e), l(t, [{ key: "__clickEvent__REACT_HOT_LOADER__", value: function value(e) {
          this.props.clickFunc(e);
        } }, { key: "___handleMouseEnter__REACT_HOT_LOADER__", value: function value(e) {
          this.props.hoverFunc(e), this.setState({ hovering: !0 });
        } }, { key: "___handleMouseLeave__REACT_HOT_LOADER__", value: function value() {
          this.props.hoverFunc(""), this.setState({ hovering: !1 });
        } }, { key: "render", value: function value() {
          var e = this.props,
              t = e.a11yTitle,
              n = e.isSelected,
              o = e.markerColor,
              r = e.circleColor,
              i = e.markerObject,
              a = e.globalId,
              l = e.className,
              c = e.noX,
              u = (e.hoverChange, e.style),
              d = this.clickEvent.bind(this, a),
              p = this._handleMouseEnter.bind(this, i),
              f = this._handleMouseLeave.bind(this, i);return 1 == n || this.state.hovering === !0 ? c === !0 ? s.default.createElement("div", { onMouseEnter: p, onMouseLeave: f, className: l, style: u }, s.default.createElement("svg", { onClick: d, fill: o, height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" }, s.default.createElement("title", null, t), s.default.createElement("circle", { cx: "11.786", cy: "12.095", r: "10.328", style: { fill: "none", stroke: r, strokeWidth: "1.47px" } }), s.default.createElement("circle", { cx: "12", cy: "11.951", r: "8.366" }))) : s.default.createElement("div", { onMouseEnter: p, onMouseLeave: f, className: l, style: u }, s.default.createElement("svg", { onClick: d, fill: o, height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" }, s.default.createElement("title", null, t), s.default.createElement("circle", { id: a, cx: "11.786", cy: "12.095", r: "10.328", style: { fill: "none", stroke: r, strokeWidth: "1.47px" } }), s.default.createElement("path", { d: "M12,20.317c-4.617,0 -8.366,-3.748 -8.366,-8.366c0,-4.617 3.749,-8.365 8.366,-8.365c4.617,0 8.366,3.748 8.366,8.365c0,4.618 -3.749,8.366 -8.366,8.366Zm5.282,-12.113l-2,-1.695l-3.379,3.927l-3.78,-4.183l-1.797,1.779l4.145,3.75l-4.099,3.554l2.025,2.083l3.506,-4.062l3.754,4.056l1.941,-1.839l-4.043,-3.848l3.727,-3.522Z" }))) : s.default.createElement("div", { onMouseEnter: p, onMouseLeave: this.mouseLeave, className: l, style: u }, s.default.createElement("svg", { onClick: d, fill: o, height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" }, s.default.createElement("title", null, t), s.default.createElement("circle", { id: a, cx: "12", cy: "11.951", r: "8.366" })));
        } }]), t;
    }(c.Component);u.defaultProps = { noX: !1, circleColor: "#ffffff", hoverFunc: function hoverFunc() {
        return !1;
      } }, u.propTypes = { clickFunc: c.PropTypes.func.isRequired, hoverFunc: c.PropTypes.func, isSelected: c.PropTypes.bool, markerColor: c.PropTypes.string, markerObject: c.PropTypes.object, globalId: c.PropTypes.string, className: c.PropTypes.string, noX: c.PropTypes.bool };var d = u;t.default = d, function () {
      "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(u, "MarkerOrb", "/Users/jeffprinty/dev/sprint4/rt_client/src/components/MarkerOrb/MarkerOrb.js"), __REACT_HOT_LOADER__.register(d, "default", "/Users/jeffprinty/dev/sprint4/rt_client/src/components/MarkerOrb/MarkerOrb.js"));
    }();
  }, function (e, t, n) {
    "use strict";
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var l = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }(),
        c = n(7),
        s = o(c),
        u = n(49),
        d = o(u),
        p = function (e) {
      function t() {
        var e, n, o, a;r(this, t);for (var l = arguments.length, c = Array(l), s = 0; s < l; s++) {
          c[s] = arguments[s];
        }return n = o = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))), o.viewer_ready = function () {
          var e;return (e = o).__viewer_ready__REACT_HOT_LOADER__.apply(e, arguments);
        }, o.JigsawCtrl = function () {
          var e;return (e = o).__JigsawCtrl__REACT_HOT_LOADER__.apply(e, arguments);
        }, a = n, i(o, a);
      }return a(t, e), l(t, [{ key: "componentWillReceiveProps", value: function value(e) {
          var t = e.cfi,
              n = e.start,
              o = e.stop,
              r = e.vbid,
              i = e.cb,
              a = this.props,
              l = a.cfi,
              c = a.start,
              s = a.stop,
              u = a.vbid,
              d = a.cb,
              p = void 0,
              f = void 0;t === l && n === c && o === s && r === u && i === d || (p = document.getElementById("content"), f = document.getElementsByTagName("iframe")[0], p.removeChild(f), this.JigsawCtrl(r, t, n, o));
        } }, { key: "shouldComponentUpdate", value: function value(e, t) {
          var n = e.cfi,
              o = e.start,
              r = e.stop,
              i = e.vbid,
              a = e.cb,
              l = this.props,
              c = l.cfi,
              s = l.start,
              u = l.stop,
              d = l.vbid,
              p = l.cb;return n !== c || o !== s || r !== u || i !== d || a !== p;
        } }, { key: "componentDidMount", value: function value() {
          var e = this.props,
              t = e.cfi,
              n = e.start,
              o = e.stop,
              r = e.vbid;e.cb, this.JigsawCtrl(r, t, n, o);
        } }, { key: "__viewer_ready__REACT_HOT_LOADER__", value: function value(e) {
          var t = ["book:navigationRequested", "book:click", "book:selectionWithPosition", "book:pagebreak", "book:touchstart", "book:touchend", "book:touchmove", "book:keyup", "book:keydown", "book:keypress", "page:ready", "page:load", "page:unload", "page:resize", "page:scroll", "user:signout", "highlight:click", "noteicon:click"],
              n = this,
              o = !0,
              r = !1,
              i = void 0;try {
            for (var a, l = t[Symbol.iterator](); !(o = (a = l.next()).done); o = !0) {
              var c = a.value;n.Viewer.bind(c, function (e, t) {
                n.props.eventHandler(e, t, n.Viewer);
              });
            }
          } catch (e) {
            r = !0, i = e;
          } finally {
            try {
              !o && l.return && l.return();
            } finally {
              if (r) throw i;
            }
          }this.props.dispatchJigsaw(n), console.log("VIEWERREADY", e);
        } }, { key: "__JigsawCtrl__REACT_HOT_LOADER__", value: function value(e, t, n, o) {
          var r = this,
              i = this.props,
              a = i.highlightsEnabled,
              l = i.dispatchViewer;this.init = function () {
            var i = { vbid: e, el: "content", brand: "ml-learning-curve", highlightsEnabled: a };i = n && o ? Object.assign(i, { cfi: t, contentRange: "," + n + "," + o }) : Object.assign(i, {}), r.Viewer = Jigsaw.createPageViewer(i, r.viewer_ready), l(r.Viewer);
          }, this.init();
        } }, { key: "render", value: function value() {
          return console.log("RENDER vsReader"), s.default.createElement("div", { id: "content", className: d.default.content });
        } }]), t;
    }(c.Component);p.propTypes = { vbid: c.PropTypes.string.isRequired, cfi: c.PropTypes.string, start: c.PropTypes.string, stop: c.PropTypes.string, cb: c.PropTypes.func, dispatchViewer: c.PropTypes.func, dispatchJigsaw: c.PropTypes.func };var f = p;t.default = f, function () {
      "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(p, "VSReader", "/Users/jeffprinty/dev/sprint4/rt_client/src/components/VSReader/VSReader.js"), __REACT_HOT_LOADER__.register(f, "default", "/Users/jeffprinty/dev/sprint4/rt_client/src/components/VSReader/VSReader.js"));
    }();
  }, function (e, t, n) {
    t = e.exports = n(6)(), t.push([e.id, ".ESnippet__container--34nWdTrEF5{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%;position:relative}", ""]), t.locals = { container: "ESnippet__container--34nWdTrEF5" };
  }, function (e, t, n) {
    t = e.exports = n(6)(), t.push([e.id, '.HighlightModal__container--19E5_8gN4h,.HighlightModal__containerWithArrow--3yyHwme3DZ,.HighlightModal__containerWithLeftArrow--117QRn-dpO,.HighlightModal__containerWithTopArrow--1bnVVO-ayC{position:absolute;top:250px;width:240px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;left:200px;background-color:#152a34;border-radius:4px;overflow:hidden;box-shadow:3px 3px 7px -2px rgba(0,0,0,.5)}.HighlightModal__containerWithArrow--3yyHwme3DZ:after{bottom:100%;left:50%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(21,42,52,0);border-bottom-color:#152a34;border-width:6px;margin-left:-6px}.HighlightModal__containerWithTopArrow--1bnVVO-ayC:after{top:100%;left:50%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(21,42,52,0);border-top-color:#152a34;border-width:6px;margin-left:-6px}.HighlightModal__containerWithLeftArrow--117QRn-dpO:after{right:100%;top:20px;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(21,42,52,0);border-right-color:#152a34;border-width:6px;margin-top:-6px}.HighlightModal__note-wrap--36tT9-oX6w{width:100%;padding:6px}.HighlightModal__hidden--117mczEPND{display:none}.HighlightModal__noteTextarea--3Braqv8c5x{width:100%;min-height:5em;height:100%;border:1px solid #c8c8c8;border-radius:4px;padding:4px 8px;font-weight:300;resize:none;box-sizing:border-box}.HighlightModal__note-textarea--1VGuWyvrSQ:focus{outline:none}.HighlightModal__highlightWrap--3rHGGlGOFp{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:space-between;-ms-flex-align:space-between;align-items:space-between;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.HighlightModal__highlightExpanded--3Yt-1f4nks{height:100px}.HighlightModal__topBar--1rWugEoxmg{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:6px}.HighlightModal__orbList--2Z9mH50ctz{-ms-flex-line-pack:start;align-content:flex-start}.HighlightModal__orb--1FiTcm5c6J{padding:0 4px;display:inline}.HighlightModal__labelWrap--3yMRWw7FUf{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:3px;text-align:center}.HighlightModal__labelDisplay--fa01K7eTyb{border-radius:3px;padding:3px 8px;font-size:small;text-align:left}.HighlightModal__icon--3DMepEDEqF{fill:#fff;margin-left:auto;height:24px;width:24px}.HighlightModal__buttonWrap--hzxhWyLEWc{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;text-align:right}.HighlightModal__save-btn--1l8SqGljlM{background-color:#0f758d;color:#a1cbd4;border:none;border-radius:4px;font-size:10pt;padding:8px}.HighlightModal__cancel-btn--40JlC21ubQ{color:#0f758d;border:none;background-color:transparent;font-size:10pt}.HighlightModal__editCancelBtn--2AwEeiVxZn{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.HighlightModal__highlightActionsBtn--P9RwPx7tyG{height:36px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:6px;color:#fff;background-color:#00758e;cursor:pointer}.HighlightModal__highlightActionsBtn--P9RwPx7tyG:hover{background-color:#205460}.HighlightModal__actionBtnIcon--AmbJPCTFmP{display:inline;vertical-align:sub;margin-left:6px}.HighlightModal__actionBtnText--2Cc8BWrKZB{vertical-align:middle;line-height:24px;padding-left:10px;font-size:13px;font-weight:200}', ""]), t.locals = { container: "HighlightModal__container--19E5_8gN4h", containerWithArrow: "HighlightModal__containerWithArrow--3yyHwme3DZ", containerWithTopArrow: "HighlightModal__containerWithTopArrow--1bnVVO-ayC", containerWithLeftArrow: "HighlightModal__containerWithLeftArrow--117QRn-dpO", "note-wrap": "HighlightModal__note-wrap--36tT9-oX6w", hidden: "HighlightModal__hidden--117mczEPND", noteTextarea: "HighlightModal__noteTextarea--3Braqv8c5x", "note-textarea": "HighlightModal__note-textarea--1VGuWyvrSQ", highlightWrap: "HighlightModal__highlightWrap--3rHGGlGOFp", highlightExpanded: "HighlightModal__highlightExpanded--3Yt-1f4nks", topBar: "HighlightModal__topBar--1rWugEoxmg", orbList: "HighlightModal__orbList--2Z9mH50ctz", orb: "HighlightModal__orb--1FiTcm5c6J", labelWrap: "HighlightModal__labelWrap--3yMRWw7FUf", labelDisplay: "HighlightModal__labelDisplay--fa01K7eTyb", icon: "HighlightModal__icon--3DMepEDEqF", buttonWrap: "HighlightModal__buttonWrap--hzxhWyLEWc", "save-btn": "HighlightModal__save-btn--1l8SqGljlM", "cancel-btn": "HighlightModal__cancel-btn--40JlC21ubQ", editCancelBtn: "HighlightModal__editCancelBtn--2AwEeiVxZn", highlightActionsBtn: "HighlightModal__highlightActionsBtn--P9RwPx7tyG", actionBtnIcon: "HighlightModal__actionBtnIcon--AmbJPCTFmP", actionBtnText: "HighlightModal__actionBtnText--2Cc8BWrKZB" };
  }, function (e, t, n) {
    t = e.exports = n(6)(), t.push([e.id, ".MLButton__button--3RkHw2xDKT,a.MLButton__button--3RkHw2xDKT{position:relative;display:inline-block;font-family:Source Sans Pro,sans-serif;font-size:15px;height:34px;line-height:33px;padding:0 15px;margin:5px;border:none;border-radius:3px;-webkit-border-radius:3px;-ms-border-radius:3px;-moz-border-radius:3px;text-decoration:none;cursor:pointer}.MLButton__button--3RkHw2xDKT:hover,a.MLButton__button--3RkHw2xDKT:hover{opacity:.8}.MLButton__button--3RkHw2xDKT:disabled:hover,a.MLButton__button--3RkHw2xDKT:disabled:hover{opacity:1;cursor:default}.MLButton__button--3RkHw2xDKT:focus,a.MLButton__button--3RkHw2xDKT:focus{outline:none;box-shadow:0 0 6px #00758e}.MLButton__button--3RkHw2xDKT.MLButton__primary--23K3jS1dEk,a.MLButton__button--3RkHw2xDKT.MLButton__primary--23K3jS1dEk{color:#fff;background:#00758e}.MLButton__button--3RkHw2xDKT.MLButton__primary--23K3jS1dEk:disabled,a.MLButton__button--3RkHw2xDKT.MLButton__primary--23K3jS1dEk:disabled{color:#fff;background:#ddd}.MLButton__button--3RkHw2xDKT.MLButton__secondary--4YtO-PNVg4,a.MLButton__button--3RkHw2xDKT.MLButton__secondary--4YtO-PNVg4{color:#00758e;background:transparent;border:1px solid #00758e}.MLButton__button--3RkHw2xDKT.MLButton__secondary--4YtO-PNVg4:hover,a.MLButton__button--3RkHw2xDKT.MLButton__secondary--4YtO-PNVg4:hover{opacity:1;background:rgba(0,117,142,.1)}.MLButton__button--3RkHw2xDKT.MLButton__secondary--4YtO-PNVg4:disabled,a.MLButton__button--3RkHw2xDKT.MLButton__secondary--4YtO-PNVg4:disabled{color:#ddd;background:transparent;border:1px solid #ddd}.MLButton__button--3RkHw2xDKT.MLButton__primary--23K3jS1dEk.MLButton__red--369ida_K09{background-color:#da1b2c}.MLButton__button--3RkHw2xDKT.MLButton__secondary--4YtO-PNVg4.MLButton__red--369ida_K09{border-color:#da1b2c;color:#da1b2c}.MLButton__button--3RkHw2xDKT.MLButton__primary--23K3jS1dEk.MLButton__green--18SU-0DwZd{background-color:#3b822e}.MLButton__button--3RkHw2xDKT.MLButton__secondary--4YtO-PNVg4.MLButton__green--18SU-0DwZd{color:#3b822e;border-color:#3b822e}.MLButton__button--3RkHw2xDKT.MLButton__secondary--4YtO-PNVg4.MLButton__green--18SU-0DwZd:hover,a.MLButton__button--3RkHw2xDKT.MLButton__secondary--4YtO-PNVg4.MLButton__green--18SU-0DwZd:hover{opacity:1;background:rgba(59,130,46,.1)}.MLButton__button--3RkHw2xDKT.MLButton__secondary--4YtO-PNVg4.MLButton__red--369ida_K09:hover,a.MLButton__button--3RkHw2xDKT.MLButton__secondary--4YtO-PNVg4.MLButton__red--369ida_K09:hover{opacity:1;background:rgba(218,27,44,.1)}.MLButton__button--3RkHw2xDKT.MLButton__icon--1Ap9L-l4ri svg{position:absolute;top:8px;left:11px;width:16px;height:16px}.MLButton__button--3RkHw2xDKT.MLButton__icon--1Ap9L-l4ri{padding-left:34px}.MLButton__button--3RkHw2xDKT.MLButton__primary--23K3jS1dEk.MLButton__icon--1Ap9L-l4ri svg{fill:#fff}.MLButton__button--3RkHw2xDKT.MLButton__secondary--4YtO-PNVg4.MLButton__icon--1Ap9L-l4ri svg{fill:#00758e}", ""]), t.locals = { button: "MLButton__button--3RkHw2xDKT", primary: "MLButton__primary--23K3jS1dEk", secondary: "MLButton__secondary--4YtO-PNVg4", red: "MLButton__red--369ida_K09", green: "MLButton__green--18SU-0DwZd", icon: "MLButton__icon--1Ap9L-l4ri" };
  }, function (e, t, n) {
    t = e.exports = n(6)(), t.push([e.id, ".VSReader__content--2QBhMjnqUp{height:100%;width:100%;overflow:hidden}.VSReader__content--2QBhMjnqUp>iframe{height:100%;width:100%}", ""]), t.locals = { content: "VSReader__content--2QBhMjnqUp" };
  }, function (e, t, n) {
    t = e.exports = n(6)(), t.push([e.id, "/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}", "", { version: 3, sources: ["/./assets/styles/globals/normalizer.css"], names: [], mappings: "AAAA,4EAA4E,AAY5E,KACE,uBAAwB,AACxB,iBAAkB,AAClB,0BAA2B,AAC3B,6BAA+B,CAChC,AASD,KACE,QAAU,CACX,AAMD,wCAME,aAAe,CAChB,AAOD,GACE,cAAe,AACf,cAAiB,CAClB,AAUD,uBAGE,aAAe,CAChB,AAMD,OACE,eAAiB,CAClB,AAOD,GACE,uBAAwB,AACxB,SAAU,AACV,gBAAkB,CACnB,AAOD,IACE,gCAAkC,AAClC,aAAe,CAChB,AAUD,EACE,6BAA8B,AAC9B,oCAAsC,CACvC,AAOD,iBAEE,eAAiB,CAClB,AAOD,YACE,mBAAoB,AACpB,0BAA2B,AAC3B,gCAAkC,CACnC,AAMD,SAEE,oBAAqB,AASrB,kBAAoB,CARrB,AAgBD,cAGE,gCAAkC,AAClC,aAAe,CAChB,AAMD,IACE,iBAAmB,CACpB,AAMD,KACE,sBAAuB,AACvB,UAAY,CACb,AAMD,MACE,aAAe,CAChB,AAOD,QAEE,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,uBAAyB,CAC1B,AAED,IACE,aAAgB,CACjB,AAED,IACE,SAAY,CACb,AASD,YAEE,oBAAsB,CACvB,AAMD,sBACE,aAAc,AACd,QAAU,CACX,AAMD,IACE,iBAAmB,CACpB,AAMD,eACE,eAAiB,CAClB,AAUD,sCAKE,uBAAwB,AACxB,eAAgB,AAChB,iBAAkB,AAClB,QAAU,CACX,AAOD,aAEE,gBAAkB,CACnB,AAOD,cAEE,mBAAqB,CACtB,AAQD,qDAIE,yBAA2B,CAC5B,AAMD,wHAIE,kBAAmB,AACnB,SAAW,CACZ,AAMD,4GAIE,6BAA+B,CAChC,AAMD,SACE,wBAA0B,AAC1B,aAAc,AACd,0BAA+B,CAChC,AASD,OACE,sBAAuB,AACvB,cAAe,AACf,cAAe,AACf,eAAgB,AAChB,UAAW,AACX,kBAAoB,CACrB,AAOD,SACE,qBAAsB,AACtB,uBAAyB,CAC1B,AAMD,SACE,aAAe,CAChB,AAOD,6BAEE,sBAAuB,AACvB,SAAW,CACZ,AAMD,kFAEE,WAAa,CACd,AAOD,cACE,6BAA8B,AAC9B,mBAAqB,CACtB,AAMD,qFAEE,uBAAyB,CAC1B,AAOD,6BACE,0BAA2B,AAC3B,YAAc,CACf,AAUD,aAEE,aAAe,CAChB,AAMD,QACE,iBAAmB,CACpB,AASD,OACE,oBAAsB,CACvB,AAiBD,kBACE,YAAc,CACf", file: "normalizer.css", sourcesContent: ['/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type="button"], /* 1 */\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-cancel-button,\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n'],
      sourceRoot: "webpack://" }]);
  }, function (e, t, n) {
    t = e.exports = n(6)(), t.push([e.id, "*,:after,:before{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}#root-entry,body,html{width:100%;height:100%;margin:0;padding:0;font-family:Source Sans Pro;font-weight:300;font-size:16px;background-color:#fff}ul{margin:0;padding:0;list-style:none}", "", { version: 3, sources: ["/./assets/styles/globals/resets.css"], names: [], mappings: "AAAE,iBACA,2BAA4B,AAC5B,8BAA+B,AAC/B,qBAAuB,CACxB,AAED,sBACE,WAAY,AACZ,YAAa,AACb,SAAU,AACV,UAAW,AAKX,4BAA+B,AAC/B,gBAAiB,AACjB,eAAgB,AAChB,qBAA0B,CAC3B,AAMD,GACE,SAAU,AACV,UAAW,AACX,eAAiB,CAClB", file: "resets.css", sourcesContent: ["  *, *:before, *:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nhtml, body, #root-entry {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n\n  /* display: flex;\n  flex-flow: column nowrap;\n  align-items: center; */\n  font-family: 'Source Sans Pro';\n  font-weight: 300;\n  font-size: 16px;\n  background-color: #ffffff;\n}\n\n#root-entry > div {\n  /* height: 100vh; */\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n"], sourceRoot: "webpack://" }]), t.locals = { "root-entry": "root-entry" };
  }, function (e, t, n) {
    var o, r, i;!function (a, l) {
      r = [t, n(7)], o = l, i = "function" == typeof o ? o.apply(t, r) : o, !(void 0 !== i && (e.exports = i));
    }(this, function (e, t) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function r(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
      }function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(e, "__esModule", { value: !0 });var a = n(t),
          l = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
          }
        }return function (t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t;
        };
      }(),
          c = { alert_outline: a.default.createElement("g", null, a.default.createElement("rect", { x: "11", y: "10", width: "2", height: "4" }), a.default.createElement("rect", { x: "11", y: "15", width: "2", height: "2" }), a.default.createElement("path", { d: "M21.71,19.13,13.06,3.85A1.31,1.31,0,0,0,12,3.08a1.31,1.31,0,0,0-1.08.77L2.26,19.13c-.59,1-.11,1.87,1.08,1.87H20.63C21.82,21,22.3,20.15,21.71,19.13ZM4.63,19,12,6l7.35,13Z" })), alert: a.default.createElement("path", { d: "M21.71,19.13,13.06,3.85a1.14,1.14,0,0,0-2.16,0L2.26,19.13c-.59,1-.11,1.87,1.08,1.87H20.63C21.82,21,22.3,20.15,21.71,19.13ZM13,17H11V15h2Zm0-3H11V10h2Z" }), arrow_left: a.default.createElement("polygon", { points: "21 11 5.84 11 13.33 3.52 11.92 2.1 3.43 10.59 3.43 10.59 2.02 12 3.43 13.41 11.92 21.9 13.33 20.48 5.84 13 21 13 21 11" }), arrow_right: a.default.createElement("polygon", { points: "3.02 11 18.17 11 10.68 3.52 12.1 2.1 20.58 10.59 20.58 10.59 22 12 20.58 13.41 12.1 21.9 10.68 20.48 18.17 13 3.02 13 3.02 11" }), bar_chart: a.default.createElement("g", null, a.default.createElement("rect", { x: "16", y: "3", width: "4", height: "18" }), a.default.createElement("rect", { x: "10", y: "9", width: "4", height: "12" }), a.default.createElement("rect", { x: "4", y: "14", width: "4", height: "7" })), book: a.default.createElement("g", null, a.default.createElement("path", { d: "M7,2H5.05A1,1,0,0,0,4,3V21a1,1,0,0,0,1.05,1H7Z" }), a.default.createElement("g", null, a.default.createElement("rect", { x: "11", y: "7", width: "6", height: "2" }), a.default.createElement("path", { d: "M20,2H8V22H20Zm-2,8H10V6h8Z" }))), bookmark_outline: a.default.createElement("path", { d: "M17,2H6.94A1,1,0,0,0,6,3V22l6-3,6,3V3A1,1,0,0,0,17,2ZM16,18.74l-3.1-1.55L12,16.74l-.86.44L8,18.76V4h8Z" }), bookmark: a.default.createElement("path", { d: "M17,2H6.94A1,1,0,0,0,6,3V22l6-3,6,3V3A1,1,0,0,0,17,2Z", fillRule: "evenodd" }), box: a.default.createElement("path", { d: "M4,20H20V9H4Zm4-8h8v2H8ZM3,4V8H21V4Z", fillRule: "evenodd" }), calendar: a.default.createElement("g", null, a.default.createElement("path", { d: "M20,4H18V2H16V4H8V2H6V4H4A1,1,0,0,0,3,5V21a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V5A1,1,0,0,0,20,4ZM5,20V10H19V20Z" }), a.default.createElement("rect", { x: "7", y: "12", width: "2", height: "2" }), a.default.createElement("rect", { x: "11", y: "12", width: "2", height: "2" }), a.default.createElement("rect", { x: "15", y: "12", width: "2", height: "2" }), a.default.createElement("rect", { x: "15", y: "16", width: "2", height: "2" }), a.default.createElement("rect", { x: "11", y: "16", width: "2", height: "2" }), a.default.createElement("rect", { x: "7", y: "16", width: "2", height: "2" })), cancel: a.default.createElement("polygon", { points: "19.82 5.59 18.41 4.18 12 10.59 5.59 4.18 4.18 5.59 10.59 12 4.18 18.41 5.59 19.82 12 13.41 18.41 19.82 19.82 18.41 13.41 12 19.82 5.59" }), caret_down: a.default.createElement("polygon", { points: "2 6 12.02 18.02 22.04 6 2 6", fillRule: "evenodd" }), check: a.default.createElement("polygon", { points: "8.42 17.96 21 5.83 19.59 4.42 7.81 15.77 3.44 11.4 2.02 12.81 6.37 17.16 6.36 17.17 7.77 18.58 7.78 18.57 7.79 18.58 8.42 17.96" }), checkbox: a.default.createElement("g", null, a.default.createElement("polygon", { points: "8.36 15.17 9.77 16.58 9.78 16.57 9.79 16.58 10.17 16.2 18 8.83 16.59 7.42 9.82 13.79 7.44 11.4 6.02 12.81 8.37 15.16 8.36 15.17" }), a.default.createElement("path", { d: "M20,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,19H5V5H19Z" })), chevron_down: a.default.createElement("polygon", { points: "20.47 6.34 11.98 14.83 3.5 6.34 2.08 7.76 11.98 17.66 13.4 16.24 21.88 7.76 20.47 6.34" }), chevron_left: a.default.createElement("polygon", { points: "17.27 3.52 15.86 2.1 7.38 10.59 7.38 10.59 5.96 12 7.38 13.41 15.86 21.9 17.27 20.48 8.79 12 17.27 3.52" }), chevron_right: a.default.createElement("polygon", { points: "16.48 10.59 16.48 10.59 8 2.1 6.59 3.52 15.07 12 6.59 20.48 8 21.9 16.48 13.41 17.9 12 16.48 10.59" }), chevron_up: a.default.createElement("polygon", { points: "12 6.34 10.59 7.76 2.1 16.24 3.52 17.66 12 9.17 20.48 17.66 21.9 16.24 12 6.34" }), clipboard: a.default.createElement("path", { d: "M18.94,4H14.53A2.5,2.5,0,0,0,12,1.54,2.46,2.46,0,0,0,9.47,4H4.94a1,1,0,0,0-1,1V21a1,1,0,0,0,1,1h14a1,1,0,0,0,1-1V5A1,1,0,0,0,18.94,4ZM12,3a1,1,0,1,1-1,1A1,1,0,0,1,12,3Zm6,17h-12V6H8a.94.94,0,0,0,0,.1V7A1,1,0,0,0,9,8h6a1,1,0,0,0,1-1V6h1.94Z", fillRule: "evenodd" }), clock: a.default.createElement("g", null, a.default.createElement("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }), a.default.createElement("polygon", { points: "13.04 11 13.04 6 11.04 6 11.04 11 11.04 13 13.04 13 18.04 13 18.04 11 13.04 11" })), comment_highlight: a.default.createElement("g", null, a.default.createElement("path", { d: "M17,16H10.24l-.54.45L8,17.82V16H4V6h9l2-2H3A1,1,0,0,0,2,5V17a1,1,0,0,0,1,1H6v4l4.94-4H18a1,1,0,0,0,1-1V12l-2,2.13Z", fillRule: "evenodd" }), a.default.createElement("path", { d: "M22.43,3.73,21.26,2.54a.69.69,0,0,0-1,0l-1,1,2.08,2.17,1.05-1A.69.69,0,0,0,22.43,3.73Z", fillRule: "evenodd" }), a.default.createElement("polygon", { points: "12.93 9.96 12.93 12.06 14.99 12.06 20.68 6.38 18.58 4.21 12.93 9.96", fillRule: "evenodd" }), a.default.createElement("rect", { x: "6", y: "13", width: "9", height: "1" })), comment_microphone: a.default.createElement("g", null, a.default.createElement("path", { d: "M20,2H4A1,1,0,0,0,3,3V17a1,1,0,0,0,1,1H7v4l4.94-4H20a1,1,0,0,0,1-1V3A1,1,0,0,0,20,2ZM19,16H11.24l-.54.45L9,17.82V16H5V4H19Z" }), a.default.createElement("g", null, a.default.createElement("rect", { x: "10.57", y: "5.49", width: "2.83", height: "5.52", rx: "1.41", ry: "1.41" }), a.default.createElement("path", { d: "M15.48,9.53a.5.5,0,0,0-1,0,2.49,2.49,0,1,1-5,0,.5.5,0,0,0-1,0,3.51,3.51,0,0,0,3,3.47v1a.5.5,0,0,0,1,0V13A3.51,3.51,0,0,0,15.48,9.53Z" }))), comment_question: a.default.createElement("g", null, a.default.createElement("path", { d: "M20,2H4A1,1,0,0,0,3,3V17a1,1,0,0,0,1,1H7v4l4.94-4H20a1,1,0,0,0,1-1V3A1,1,0,0,0,20,2ZM19,16H11.24l-.54.45L9,17.82V16H5V4H19Z" }), a.default.createElement("path", { d: "M11,8.08a1.35,1.35,0,0,1,.21-.45,1,1,0,0,1,.35-.31A1.08,1.08,0,0,1,12,7.2a1,1,0,0,1,.69.24A1,1,0,0,1,13,8.2a.91.91,0,0,1-.11.5,1.49,1.49,0,0,1-.3.37l-.41.33a2.8,2.8,0,0,0-.42.39A2.21,2.21,0,0,0,11.21,11v.6h1.45l0-.52a1.28,1.28,0,0,1,.22-.45,2.14,2.14,0,0,1,.39-.39l.47-.34a2.3,2.3,0,0,0,.45-.42,2.14,2.14,0,0,0,.34-.59A2.37,2.37,0,0,0,14.72,8a2,2,0,0,0-.14-.69,1.92,1.92,0,0,0-.46-.69,2.55,2.55,0,0,0-.85-.54A3.47,3.47,0,0,0,12,5.91a2.84,2.84,0,0,0-1.1.21,2.44,2.44,0,0,0-.84.57,2.61,2.61,0,0,0-.54.86,3.17,3.17,0,0,0-.2,1.1H10.9A2.25,2.25,0,0,1,11,8.08Z" }), a.default.createElement("rect", { x: "11.16", y: "12.45", width: "1.54", height: "1.56" })), comment_text: a.default.createElement("g", null, a.default.createElement("path", { d: "M20,2H4A1,1,0,0,0,3,3V17a1,1,0,0,0,1,1H7v4l4.94-4H20a1,1,0,0,0,1-1V3A1,1,0,0,0,20,2ZM19,16H11.24l-.54.45L9,17.82V16H5V4H19Z" }), a.default.createElement("rect", { x: "7", y: "7", width: "10", height: "2" }), a.default.createElement("rect", { x: "7", y: "11", width: "6", height: "2" })), comment_thumbs_up: a.default.createElement("g", null, a.default.createElement("path", { d: "M20,2H4A1,1,0,0,0,3,3V17a1,1,0,0,0,1,1H7v4l4.94-4H20a1,1,0,0,0,1-1V3A1,1,0,0,0,20,2ZM19,16H11.24l-.54.45L9,17.82V16H5V4H19Z" }), a.default.createElement("g", null, a.default.createElement("path", { d: "M16.52,9.05a.45.45,0,0,0-.45-.51H12.85s.46-1.27.73-2.08-.1-1.33-.59-.84L10.23,8.39a.77.77,0,0,0-.23.56v4.44a.17.17,0,0,0,.17.17H15a.79.79,0,0,0,.73-.48s.84-3,.84-3.08Z" }), a.default.createElement("rect", { x: "7.47", y: "8.56", width: "1.48", height: "4.98" }))), comment: a.default.createElement("path", { d: "M20,2H4A1,1,0,0,0,3,3V17a1,1,0,0,0,1,1H7v4l4.94-4H20a1,1,0,0,0,1-1V3A1,1,0,0,0,20,2ZM19,16H11.24l-.54.45L9,17.82V16H5V4H19Z" }), cursor: a.default.createElement("path", { d: "M3,13V4A1,1,0,0,1,4,3H20a1,1,0,0,1,1,1v9l-9,7Z", fillRule: "evenodd" }), dock_left: a.default.createElement("path", { d: "M20,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,19H9V5H19Z" }), dock_right: a.default.createElement("path", { d: "M20,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM5,5H15V19H5Z" }), dock_top: a.default.createElement("path", { d: "M20,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM5,19V9H19V19Z" }), document: a.default.createElement("g", null, a.default.createElement("path", { d: "M19,2H5A1,1,0,0,0,4,3V21a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1ZM6,20V4H18V20Z" }), a.default.createElement("polygon", { points: "16 7 8 7 8 9 16 9 16 7 16 7" }), a.default.createElement("polygon", { points: "16 11 8 11 8 13 16 13 16 11 16 11" }), a.default.createElement("polygon", { points: "14 15 8 15 8 17 14 17 14 15 14 15" })), download: a.default.createElement("g", null, a.default.createElement("polygon", { points: "19 14 19 18 5 18 5 14 3 14 3 18 3 20 5.5 20 19.5 20 21 20 21 18 21 14 19 14", fillRule: "evenodd" }), a.default.createElement("polygon", { points: "12 15 16 11 13 11 13 4 11 4 11 11 8 11 12 15", fillRule: "evenodd" })), edit: a.default.createElement("g", null, a.default.createElement("path", { d: "M20.69,5,19,3.29a1,1,0,0,0-1.41,0L16.18,4.7l3,3.13,1.51-1.41A1,1,0,0,0,20.69,5Z", fillRule: "evenodd" }), a.default.createElement("polygon", { points: "3 17.98 3 21 5.97 21 18.17 8.82 15.14 5.68 3 17.98", fillRule: "evenodd" })), eraser: a.default.createElement("g", null, a.default.createElement("polygon", { points: "9.58 20.98 20.96 20.98 20.96 18.98 11.46 18.98 9.58 20.98" }), a.default.createElement("path", { d: "M21.78,7.9,16.25,2.37a1.19,1.19,0,0,0-1.68,0L7.88,9.06,2.46,14.47a1.19,1.19,0,0,0,0,1.68L7.29,21h3.08l4.75-4.75,6.65-6.65A1.19,1.19,0,0,0,21.78,7.9ZM9.79,19H8.18L4.28,15.21l5-4.78L13.84,15Z" })), expand: a.default.createElement("g", null, a.default.createElement("path", { d: "M19,19H5V5h6.92l-2-2H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V14l-2-2Z", fillRule: "evenodd" }), a.default.createElement("polygon", { points: "13.98 3 16.84 5.87 9.36 13.36 10.77 14.77 18.26 7.28 21 10.02 21 3 13.98 3", fillRule: "evenodd" })), grid_4: a.default.createElement("path", { d: "M3,10h7V3H3ZM14,3v7h7V3ZM3,21h7V14H3Zm11,0h7V14H14Z", fillRule: "evenodd" }), grid_9: a.default.createElement("g", null, a.default.createElement("rect", { x: "2", y: "3", width: "5", height: "5" }), a.default.createElement("rect", { x: "9", y: "3", width: "5", height: "5" }), a.default.createElement("rect", { x: "16", y: "3", width: "5", height: "5" }), a.default.createElement("rect", { x: "2", y: "10", width: "5", height: "5" }), a.default.createElement("rect", { x: "9", y: "10", width: "5", height: "5" }), a.default.createElement("rect", { x: "16", y: "10", width: "5", height: "5" }), a.default.createElement("rect", { x: "2", y: "17", width: "5", height: "5" }), a.default.createElement("rect", { x: "9", y: "17", width: "5", height: "5" }), a.default.createElement("rect", { x: "16", y: "17", width: "5", height: "5" })), head: a.default.createElement("path", { d: "M20.6,13.32,19.07,11a1,1,0,0,1-.13-.8,6.14,6.14,0,0,0,.17-1.41C19.11,5,15.82,2,11.77,2S4.43,5,4.43,8.77c0,.12,0,.24,0,.36h0v0c0,3.27,2.14,5.75,2.6,8.46a22.13,22.13,0,0,1,0,3.3,1,1,0,0,0,1,1h4.67a1,1,0,0,0,1-1.14c-.2-2.15,2-.45,3.77-1,.84-.27,1.3-2.83,1.48-4.08a1,1,0,0,1,.77-.84l.19,0A1,1,0,0,0,20.6,13.32ZM16,8.23c-2.51,2.3-1.52,4.33-4.3,4.33s-5-1.94-5-4.33,2.26-4,5-4S17.79,6.62,16,8.23Z" }), heart_outline: a.default.createElement("path", { d: "M16,4a5,5,0,0,0-4,2A5,5,0,0,0,3,9,4.52,4.52,0,0,0,4,11.9C4.61,12.66,12,20,12,20s7.32-7.14,8-8.11A4.54,4.54,0,0,0,21,9,5,5,0,0,0,16,4Zm2.42,6.71c-.41.53-3.36,3.5-6.4,6.49C8.91,14.09,5.85,11,5.49,10.61A2.59,2.59,0,0,1,5,9,3,3,0,0,1,8,6a3.5,3.5,0,0,1,2.4,1.23L12,9l1.61-1.77A3.51,3.51,0,0,1,16,6a3,3,0,0,1,3,3A2.54,2.54,0,0,1,18.43,10.71Z" }), heart: a.default.createElement("path", { d: "M16,4a5,5,0,0,0-4,2A5,5,0,0,0,3,9,4.52,4.52,0,0,0,4,11.9C4.61,12.66,12,20,12,20s7.32-7.14,8-8.11A4.54,4.54,0,0,0,21,9,5,5,0,0,0,16,4Z" }), help_outline: a.default.createElement("g", null, a.default.createElement("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }), a.default.createElement("rect", { x: "11.05", y: "15.03", width: "1.95", height: "1.98" }), a.default.createElement("path", { d: "M14.82,7.68A3.24,3.24,0,0,0,13.74,7a4.41,4.41,0,0,0-1.67-.27,3.61,3.61,0,0,0-1.4.26,3.11,3.11,0,0,0-1.07.72,3.31,3.31,0,0,0-.69,1.1,4,4,0,0,0-.26,1.39h2.07a2.86,2.86,0,0,1,.08-.71,1.72,1.72,0,0,1,.26-.58,1.31,1.31,0,0,1,.45-.39,1.37,1.37,0,0,1,.65-.15,1.21,1.21,0,0,1,.88.31,1.29,1.29,0,0,1,.32,1,1.15,1.15,0,0,1-.13.63,1.9,1.9,0,0,1-.39.46q-.24.21-.52.42a3.56,3.56,0,0,0-.53.5,2.81,2.81,0,0,0-.68,1.58V14H13l.06-.66a1.63,1.63,0,0,1,.28-.58,2.72,2.72,0,0,1,.5-.5l.6-.44a2.92,2.92,0,0,0,.58-.53,2.71,2.71,0,0,0,.44-.75,3,3,0,0,0,.18-1.11,2.54,2.54,0,0,0-.18-.88A2.44,2.44,0,0,0,14.82,7.68Z" })), help: a.default.createElement("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,15h-2V15h2Zm2.4-6.46a2.71,2.71,0,0,1-.44.75,2.92,2.92,0,0,1-.58.53l-.6.44a2.72,2.72,0,0,0-.5.5,1.63,1.63,0,0,0-.28.58L13,14H11.12v-.76a2.81,2.81,0,0,1,.68-1.58,3.56,3.56,0,0,1,.53-.5q.28-.21.52-.42a1.9,1.9,0,0,0,.39-.46,1.15,1.15,0,0,0,.13-.63,1.29,1.29,0,0,0-.32-1,1.21,1.21,0,0,0-.88-.31,1.37,1.37,0,0,0-.65.15,1.31,1.31,0,0,0-.45.39,1.72,1.72,0,0,0-.26.58,2.86,2.86,0,0,0-.08.71H8.66A4,4,0,0,1,8.92,8.8a3.31,3.31,0,0,1,.69-1.1A3.11,3.11,0,0,1,10.68,7a3.61,3.61,0,0,1,1.4-.26A4.41,4.41,0,0,1,13.74,7a3.24,3.24,0,0,1,1.08.68,2.44,2.44,0,0,1,.58.88,2.54,2.54,0,0,1,.18.88A3,3,0,0,1,15.4,10.55Z" }), highlight: a.default.createElement("g", null, a.default.createElement("rect", { x: "4", y: "19", width: "16", height: "2" }), a.default.createElement("path", { d: "M18.69,5.41a1,1,0,0,0,0-1.41L17,2.29a1,1,0,0,0-1.41,0L14.18,3.7l3,3.13Z", fillRule: "evenodd" }), a.default.createElement("polygon", { points: "16.17 7.82 13.14 4.68 4 13.97 4 17 6.97 17 16.17 7.82", fillRule: "evenodd" })), home: a.default.createElement("polygon", { points: "20.92 12 11.94 3.02 2.96 12 5 12 5 21 10 21 10 14 14 14 14 21 19 21 19 12 20.92 12" }), info: a.default.createElement("path", { d: "M12,2c-5.486,0 -10,4.514 -10,10c0,5.486 4.514,10 10,10c5.486,0 10,-4.514 10,-10c0,-5.486 -4.514,-10 -10,-10Zm-1,15l2,0l0,-7.253l-2,0l0,7.253Zm2,-10.253l-2,0l0,2l2,0l0,-2Z" }), info_outline: a.default.createElement("g", null, a.default.createElement("path", { d: "M12,2c-5.486,0 -10,4.514 -10,10c0,5.486 4.514,10 10,10c5.486,0 10,-4.514 10,-10c0,-5.486 -4.514,-10 -10,-10Zm0,18c-4.389,0 -8,-3.611 -8,-8c0,-4.389 3.611,-8 8,-8c4.389,0 8,3.611 8,8c0,4.389 -3.611,8 -8,8l0,0Z", fillRule: "nonzero" }), a.default.createElement("rect", { height: "7.253", width: "2", x: "11", y: "9.747" }), a.default.createElement("rect", { height: "2", width: "2", x: "11", y: "6.747" })), item_add: a.default.createElement("g", null, a.default.createElement("path", { d: "M5,5H17v7h2V4a1,1,0,0,0-1-1H4A1,1,0,0,0,3,4V18a1,1,0,0,0,1,1h8V17L5,17Z" }), a.default.createElement("polygon", { points: "22 17 19 17 19 14 17 14 17 17 14 17 14 19 17 19 17 22 19 22 19 19 22 19 22 17" })), item_copy: a.default.createElement("g", null, a.default.createElement("path", { d: "M18,17V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V17a1,1,0,0,0,1,1H17A1,1,0,0,0,18,17Zm-2-1H4V4H16Z" }), a.default.createElement("path", { d: "M21,7H20V20H6v1a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V8A1,1,0,0,0,21,7Z" })), item_edit: a.default.createElement("g", null, a.default.createElement("path", { d: "M21.69,4,20,2.29a1,1,0,0,0-1.41,0L17.18,3.7l3,3.13,1.51-1.41A1,1,0,0,0,21.69,4Z" }), a.default.createElement("polygon", { points: "8 16 10.97 16 19.17 7.82 16.14 4.68 8 12.97 8 16" }), a.default.createElement("path", { d: "M19,19H5V5h5.92l2-2H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V11l-2,2Z" })), item_remove: a.default.createElement("g", null, a.default.createElement("path", { d: "M5,5H17v7h2V4a1,1,0,0,0-1-1H4A1,1,0,0,0,3,4V18a1,1,0,0,0,1,1h8V17L5,17Z" }), a.default.createElement("polygon", { points: "22.04 15.38 20.62 13.96 18 16.59 15.38 13.96 13.96 15.38 16.59 18 13.96 20.62 15.38 22.04 18 19.41 20.62 22.04 22.04 20.62 19.41 18 22.04 15.38" })), link: a.default.createElement("g", null, a.default.createElement("path", { d: "M19.68,4.31a4.36,4.36,0,0,0-6.13,0L9.68,8.15a4.36,4.36,0,0,0,0,6.13l1.54-1.54a2.18,2.18,0,0,1,0-3l3.87-3.87A2.18,2.18,0,0,1,18.17,8.9L17,10.06a3.59,3.59,0,0,1,.27,2.81l2.44-2.44A4.36,4.36,0,0,0,19.68,4.31Z" }), a.default.createElement("path", { d: "M12.75,11.24a2.18,2.18,0,0,1,0,3L8.91,18.16a2.18,2.18,0,0,1-3.08-3.08L7,13.92a3.59,3.59,0,0,1-.27-2.81L4.29,13.54a4.36,4.36,0,0,0,6.16,6.16l3.87-3.87a4.36,4.36,0,0,0,0-6.13Z" })), list_left: a.default.createElement("g", null, a.default.createElement("rect", { x: "8", y: "3", width: "13", height: "3" }), a.default.createElement("rect", { x: "3", y: "3", width: "3", height: "3" }), a.default.createElement("rect", { x: "3", y: "10", width: "3", height: "3" }), a.default.createElement("rect", { x: "3", y: "17", width: "3", height: "3" }), a.default.createElement("rect", { x: "8", y: "10", width: "13", height: "3" }), a.default.createElement("rect", { x: "8", y: "17", width: "13", height: "3" })), list_right: a.default.createElement("g", null, a.default.createElement("rect", { x: "3", y: "3", width: "13", height: "3" }), a.default.createElement("rect", { x: "18", y: "3", width: "3", height: "3" }), a.default.createElement("rect", { x: "18", y: "10", width: "3", height: "3" }), a.default.createElement("rect", { x: "18", y: "17", width: "3", height: "3" }), a.default.createElement("rect", { x: "3", y: "10", width: "13", height: "3" }), a.default.createElement("rect", { x: "3", y: "17", width: "13", height: "3" })), maximize: a.default.createElement("g", null, a.default.createElement("path", { d: "M20,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,19H5V5H19Z" }), a.default.createElement("polygon", { points: "11 17 13 17 13 13 17 13 17 11 13 11 13 7 11 7 11 11 7 11 7 13 11 13 11 17" })), menu: a.default.createElement("g", null, a.default.createElement("rect", { x: "3", y: "3", width: "18", height: "3" }), a.default.createElement("rect", { x: "3", y: "10", width: "18", height: "3" }), a.default.createElement("rect", { x: "3", y: "17", width: "18", height: "3" })), microphone: a.default.createElement("g", null, a.default.createElement("rect", { x: "9.14", y: "2.97", width: "5.72", height: "11.18", rx: "2.86", ry: "2.86" }), a.default.createElement("path", { d: "M19.08,11.15a1,1,0,1,0-2,0,5.05,5.05,0,1,1-10.11,0,1,1,0,0,0-2,0,7.1,7.1,0,0,0,6.06,7v2a1,1,0,0,0,2,0v-2A7.1,7.1,0,0,0,19.08,11.15Z" })), minimize: a.default.createElement("g", null, a.default.createElement("path", { d: "M20,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,19H5V5H19Z" }), a.default.createElement("rect", { x: "7", y: "15", width: "10", height: "2" })), minus: a.default.createElement("rect", { x: "3", y: "11", width: "18", height: "2" }), more: a.default.createElement("g", null, a.default.createElement("circle", { cx: "3.99", cy: "12", r: "1.96" }), a.default.createElement("circle", { cx: "11.99", cy: "12", r: "1.96" }), a.default.createElement("circle", { cx: "19.99", cy: "12", r: "1.96" })), mortar_board: a.default.createElement("g", null, a.default.createElement("polygon", { points: "12.36 9.24 6.2 13.18 12 16.89 24.02 9.22 12 1.54 -0.02 9.22 4.83 12.31 10.96 8.39 12.36 9.24" }), a.default.createElement("polygon", { points: "4.99 14.09 4.99 17.41 12 22 19.01 17.41 19.01 14.09 12 18.65 4.99 14.09" })), move: a.default.createElement("polygon", { points: "22.05 12 19 8.95 19 11 13 11 13 5 15.05 5 12 1.95 8.95 5 11 5 11 11 5 11 5 8.95 1.95 12 5 15.05 5 13 11 13 11 19 8.95 19 12 22.05 15.05 19 13 19 13 13 19 13 19 15.05 22.05 12", fillRule: "evenodd" }), not: a.default.createElement("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM4,12A8,8,0,0,1,16.82,5.66l-11.37,11A8,8,0,0,1,4,12Zm8,8A8,8,0,0,1,6.79,18.1l11.45-11A8,8,0,0,1,12,20Z" }), pause: a.default.createElement("g", null, a.default.createElement("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }), a.default.createElement("rect", { x: "9", y: "8", width: "2", height: "8" }), a.default.createElement("rect", { x: "13", y: "8", width: "2", height: "8" })), person: a.default.createElement("g", null, a.default.createElement("path", { d: "M12,12.92c2.6,0,4.61-3,4.61-5.84S15.15,2,12,2,7.37,4.25,7.37,7.08,9.39,12.92,12,12.92Z" }), a.default.createElement("path", { d: "M12,15.54c-5.31,0-9.65-4.2-9.93,5.41a1,1,0,0,0,1,1H20.92a1,1,0,0,0,1-1C21.63,11.37,17.29,15.54,12,15.54Z" })), play: a.default.createElement("g", null, a.default.createElement("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }), a.default.createElement("polygon", { points: "9 17.03 16.98 12.01 9 7.03 9 17.03", fillRule: "evenodd" })), plus: a.default.createElement("polygon", { points: "21 11 13 11 13 3 11 3 11 11 3 11 3 13 11 13 11 21 13 21 13 13 21 13 21 11" }), pointer_outline: a.default.createElement("path", { d: "M8.95,6.56l6.92,6.34L13,13.57l2.28,5.1-1.65.71-2.28-5.22L9,16,8.95,6.56M6.92,2,7,20l3.51-2.73,2,4.69,5.34-2.31L15.81,15,20,14,6.92,2Z" }), pointer: a.default.createElement("path", { d: "M6.92,2,7,20l3.51-2.73,2,4.69,5.34-2.31L15.81,15,20,14,6.92,2Z" }), print: a.default.createElement("g", null, a.default.createElement("path", { d: "M21,8H3A1,1,0,0,0,2,9v8a1,1,0,0,0,1,1H5v4H19V18h2a1,1,0,0,0,1-1V9A1,1,0,0,0,21,8ZM6,12H4V10H6Zm11,6v2H7V16H17Z" }), a.default.createElement("rect", { x: "5.96", y: "2.02", width: "12.04", height: "4.98" })), search: a.default.createElement("path", { d: "M16.35,14.94a8.08,8.08,0,1,0-1.43,1.4l5.37,5.37,1.41-1.41ZM10,16a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z" }), spreadsheet: a.default.createElement("g", null, a.default.createElement("path", { d: "M18,4V20H6V4H18m1-2H5A1,1,0,0,0,4,3V21a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1Z" }), a.default.createElement("path", { d: "M8,7V17h8V7Zm6,2v2H10V9Zm-4,6V13h4v2Z" })), stop: a.default.createElement("g", null, a.default.createElement("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }), a.default.createElement("rect", { x: "8", y: "8", width: "8", height: "8" })), text_size: a.default.createElement("g", null, a.default.createElement("polygon", { points: "21 4 10 4 10 7 14 7 14 20 17 20 17 7 21 7 21 4", fillRule: "evenodd" }), a.default.createElement("polygon", { points: "3 14 6 14 6 20 9 20 9 14 12 14 12 11 3 11 3 14", fillRule: "evenodd" })), thumbs_down: a.default.createElement("g", null, a.default.createElement("path", { d: "M22.08,13.11a1,1,0,0,1-1,1.12H14s1,2.8,1.62,4.59c.53,1.58-.23,2.93-1.31,1.85C12.7,19.12,8.5,14.59,8.5,14.59A1.71,1.71,0,0,1,8,13.36V3.53a.38.38,0,0,1,.38-.38H18.62a1.74,1.74,0,0,1,1.61,1.07s1.86,6.59,1.86,6.82Z" }), a.default.createElement("rect", { x: "3", y: "3.22", width: "3", height: "11" })), thumbs_up: a.default.createElement("g", null, a.default.createElement("path", { d: "M22.08,11.1a1,1,0,0,0-1-1.12H14s1-2.8,1.62-4.59c.53-1.58-.23-2.93-1.31-1.85C12.7,5.1,8.5,9.62,8.5,9.62A1.71,1.71,0,0,0,8,10.86v9.83a.38.38,0,0,0,.38.38H18.62A1.74,1.74,0,0,0,20.23,20s1.86-6.59,1.86-6.82Z" }), a.default.createElement("rect", { x: "3", y: "10", width: "3", height: "11" })), tools: a.default.createElement("g", null, a.default.createElement("path", { d: "M20.74,6.41a1,1,0,0,0,0-1.41L19,3.29a1,1,0,0,0-1.41,0L16.22,4.7l3,3.13Z" }), a.default.createElement("polygon", { points: "3.04 17.98 3.04 21 6.01 21 10.9 16.12 7.87 13.09 3.04 17.98" }), a.default.createElement("polygon", { points: "18.21 8.82 15.18 5.68 13.05 7.84 16.12 10.91 18.21 8.82" }), a.default.createElement("path", { d: "M10.55,7.47A3.75,3.75,0,0,0,5.71,3.26L7.14,4.68A1.74,1.74,0,1,1,4.68,7.14L3.26,5.72a3.75,3.75,0,0,0,4.21,4.84l9.72,9.72a2.18,2.18,0,0,0,3.09-3.09Zm8.65,11.74a.76.76,0,1,1,0-1.08A.76.76,0,0,1,19.21,19.21Z" })), trash: a.default.createElement("g", null, a.default.createElement("path", { d: "M6.224,20.977l11.644,0c0.702,-0.023 1.256,-0.341 1.255,-0.721l0.884,-13.689l-16.014,0l0.897,13.689c0,0.395 0.602,0.721 1.334,0.721Z" }), a.default.createElement("path", { d: "M21,4.963c0,-0.25 -0.202,-0.453 -0.452,-0.453l-17.093,0c-0.25,0 -0.452,0.203 -0.452,0.453l0,0.905c0,0.25 0.202,0.453 0.452,0.453l17.093,0c0.25,0 0.452,-0.203 0.452,-0.453l0,-0.905Z" }), a.default.createElement("path", { d: "M12.018,3.251c0.984,0 1.783,0.636 1.783,1.418c0,0.783 -3.567,0.783 -3.567,0c0,-0.782 0.799,-1.418 1.784,-1.418Z" })), upload: a.default.createElement("g", null, a.default.createElement("polygon", { points: "19 14 19 18 5 18 5 14 3 14 3 18 3 20 5.5 20 19.5 20 21 20 21 18 21 14 19 14", fillRule: "evenodd" }), a.default.createElement("polygon", { points: "11 15 13 15 13 8 16 8 12 4 8 8 11 8 11 15", fillRule: "evenodd" })), video: a.default.createElement("g", null, a.default.createElement("polygon", { points: "9 7.63 9 16.37 15.97 11.98 9 7.63" }), a.default.createElement("path", { d: "M20,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,19H5V5H19Z" })), x: a.default.createElement("polygon", { points: "19.82 5.59 18.41 4.18 12 10.59 5.59 4.18 4.18 5.59 10.59 12 4.18 18.41 5.59 19.82 12 13.41 18.41 19.82 19.82 18.41 13.41 12 19.82 5.59" }), zoom_in: a.default.createElement("g", null, a.default.createElement("path", { d: "M10,1.92a8,8,0,1,0,4.88,14.42l5.37,5.37,1.41-1.41-5.35-5.35A8,8,0,0,0,10,1.92ZM10,16a6,6,0,1,1,6-6,6,6,0,0,1-6,6Z" }), a.default.createElement("polygon", { points: "11 6.13 8.92 6.13 8.92 8.92 6.13 8.92 6.13 11 8.92 11 8.92 13.79 11 13.79 11 11 13.79 11 13.79 8.92 11 8.92 11 6.13 11 6.13" })), zoom_out: a.default.createElement("g", null, a.default.createElement("path", { d: "M10,1.92a8,8,0,1,0,4.88,14.42l5.37,5.37,1.41-1.41-5.35-5.35A8,8,0,0,0,10,1.92ZM10,16a6,6,0,1,1,6-6,6,6,0,0,1-6,6Z" }), a.default.createElement("polygon", { points: "13.79 8.92 6.13 8.92 6.13 11 13.79 11 13.79 8.92 13.79 8.92" })) },
          s = function (e) {
        function t() {
          return o(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }return i(t, e), l(t, [{ key: "render", value: function value() {
            var e = this.props,
                t = e.iconTitle,
                n = e.iconType,
                o = e.iconWidth,
                r = e.iconHeight,
                i = e.iconFill,
                l = e.viewBox,
                s = e.className;return a.default.createElement("svg", { className: s, width: o, height: r, viewBox: l, fill: i }, a.default.createElement("title", null, t), c[n]);
          } }]), t;
      }(t.Component);s.defaultProps = { iconWidth: "24", iconHeight: "24", viewBox: "0 0 24 24", iconFill: "#ffffff", className: "" }, s.propTypes = { iconType: t.PropTypes.string.isRequired, iconTitle: t.PropTypes.string.isRequired, iconFill: t.PropTypes.string, iconWidth: t.PropTypes.string, iconHeight: t.PropTypes.string, viewBox: t.PropTypes.string, className: t.PropTypes.string }, e.default = s;
    });
  }, function (e, t) {
    "use strict";
    function n(e) {
      var t = /[=:]/g,
          n = { "=": "=0", ":": "=2" },
          o = ("" + e).replace(t, function (e) {
        return n[e];
      });return "$" + o;
    }function o(e) {
      var t = /(=0|=2)/g,
          n = { "=0": "=", "=2": ":" },
          o = "." === e[0] && "$" === e[1] ? e.substring(2) : e.substring(1);return ("" + o).replace(t, function (e) {
        return n[e];
      });
    }var r = { escape: n, unescape: o };e.exports = r;
  }, function (e, t, n) {
    (function (t) {
      "use strict";
      var o = n(5),
          r = n(3),
          i = function i(e) {
        var t = this;if (t.instancePool.length) {
          var n = t.instancePool.pop();return t.call(n, e), n;
        }return new t(e);
      },
          a = function a(e, t) {
        var n = this;if (n.instancePool.length) {
          var o = n.instancePool.pop();return n.call(o, e, t), o;
        }return new n(e, t);
      },
          l = function l(e, t, n) {
        var o = this;if (o.instancePool.length) {
          var r = o.instancePool.pop();return o.call(r, e, t, n), r;
        }return new o(e, t, n);
      },
          c = function c(e, t, n, o) {
        var r = this;if (r.instancePool.length) {
          var i = r.instancePool.pop();return r.call(i, e, t, n, o), i;
        }return new r(e, t, n, o);
      },
          s = function s(e) {
        var n = this;e instanceof n ? void 0 : "production" !== t.env.NODE_ENV ? r(!1, "Trying to release an instance into a pool of a different type.") : o("25"), e.destructor(), n.instancePool.length < n.poolSize && n.instancePool.push(e);
      },
          u = 10,
          d = i,
          p = function p(e, t) {
        var n = e;return n.instancePool = [], n.getPooled = t || d, n.poolSize || (n.poolSize = u), n.release = s, n;
      },
          f = { addPoolingTo: p, oneArgumentPooler: i, twoArgumentPooler: a, threeArgumentPooler: l, fourArgumentPooler: c };e.exports = f;
    }).call(t, n(1));
  }, function (e, t, n) {
    (function (t) {
      "use strict";
      var o = n(9),
          r = n(37),
          i = n(13),
          a = n(41),
          l = n(38),
          c = n(39),
          s = n(4),
          u = n(40),
          d = n(42),
          p = n(44),
          f = n(2),
          h = s.createElement,
          g = s.createFactory,
          m = s.cloneElement;if ("production" !== t.env.NODE_ENV) {
        var _ = n(20);h = _.createElement, g = _.createFactory, m = _.cloneElement;
      }var y = o;if ("production" !== t.env.NODE_ENV) {
        var v = !1;y = function y() {
          return "production" !== t.env.NODE_ENV ? f(v, "React.__spread is deprecated and should not be used. Use Object.assign directly or another helper function with similar semantics. You may be seeing this warning due to your compiler. See https://fb.me/react-spread-deprecation for more details.") : void 0, v = !0, o.apply(null, arguments);
        };
      }var b = { Children: { map: r.map, forEach: r.forEach, count: r.count, toArray: r.toArray, only: p }, Component: i, PureComponent: a, createElement: h, cloneElement: m, isValidElement: s.isValidElement, PropTypes: u, createClass: l.createClass, createFactory: g, createMixin: function createMixin(e) {
          return e;
        }, DOM: c, version: d, __spread: y };e.exports = b;
    }).call(t, n(1));
  }, function (e, t, n) {
    "use strict";
    function o(e) {
      return ("" + e).replace(b, "$&/");
    }function r(e, t) {
      this.func = e, this.context = t, this.count = 0;
    }function i(e, t, n) {
      var o = e.func,
          r = e.context;o.call(r, t, e.count++);
    }function a(e, t, n) {
      if (null == e) return e;var o = r.getPooled(t, n);_(e, i, o), r.release(o);
    }function l(e, t, n, o) {
      this.result = e, this.keyPrefix = t, this.func = n, this.context = o, this.count = 0;
    }function c(e, t, n) {
      var r = e.result,
          i = e.keyPrefix,
          a = e.func,
          l = e.context,
          c = a.call(l, t, e.count++);Array.isArray(c) ? s(c, r, n, m.thatReturnsArgument) : null != c && (g.isValidElement(c) && (c = g.cloneAndReplaceKey(c, i + (!c.key || t && t.key === c.key ? "" : o(c.key) + "/") + n)), r.push(c));
    }function s(e, t, n, r, i) {
      var a = "";null != n && (a = o(n) + "/");var s = l.getPooled(t, a, r, i);_(e, c, s), l.release(s);
    }function u(e, t, n) {
      if (null == e) return e;var o = [];return s(e, o, null, t, n), o;
    }function d(e, t, n) {
      return null;
    }function p(e, t) {
      return _(e, d, null);
    }function f(e) {
      var t = [];return s(e, t, null, m.thatReturnsArgument), t;
    }var h = n(35),
        g = n(4),
        m = n(11),
        _ = n(45),
        y = h.twoArgumentPooler,
        v = h.fourArgumentPooler,
        b = /\/+/g;r.prototype.destructor = function () {
      this.func = null, this.context = null, this.count = 0;
    }, h.addPoolingTo(r, y), l.prototype.destructor = function () {
      this.result = null, this.keyPrefix = null, this.func = null, this.context = null, this.count = 0;
    }, h.addPoolingTo(l, v);var E = { forEach: a, map: u, mapIntoWithKeyPrefixInternal: s, count: p, toArray: f };e.exports = E;
  }, function (e, t, n) {
    (function (t) {
      "use strict";
      function o(e) {
        return e;
      }function r(e, n, o) {
        for (var r in n) {
          n.hasOwnProperty(r) && ("production" !== t.env.NODE_ENV ? E("function" == typeof n[r], "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.", e.displayName || "ReactClass", _[o], r) : void 0);
        }
      }function i(e, n) {
        var o = x.hasOwnProperty(n) ? x[n] : null;O.hasOwnProperty(n) && ("OVERRIDE_BASE" !== o ? "production" !== t.env.NODE_ENV ? b(!1, "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", n) : f("73", n) : void 0), e && ("DEFINE_MANY" !== o && "DEFINE_MANY_MERGED" !== o ? "production" !== t.env.NODE_ENV ? b(!1, "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", n) : f("74", n) : void 0);
      }function a(e, n) {
        if (n) {
          "function" == typeof n ? "production" !== t.env.NODE_ENV ? b(!1, "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object.") : f("75") : void 0, m.isValidElement(n) ? "production" !== t.env.NODE_ENV ? b(!1, "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.") : f("76") : void 0;var o = e.prototype,
              r = o.__reactAutoBindPairs;n.hasOwnProperty(A) && C.mixins(e, n.mixins);for (var a in n) {
            if (n.hasOwnProperty(a) && a !== A) {
              var l = n[a],
                  c = o.hasOwnProperty(a);if (i(c, a), C.hasOwnProperty(a)) C[a](e, l);else {
                var d = x.hasOwnProperty(a),
                    p = "function" == typeof l,
                    h = p && !d && !c && n.autobind !== !1;if (h) r.push(a, l), o[a] = l;else if (c) {
                  var g = x[a];!d || "DEFINE_MANY_MERGED" !== g && "DEFINE_MANY" !== g ? "production" !== t.env.NODE_ENV ? b(!1, "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.", g, a) : f("77", g, a) : void 0, "DEFINE_MANY_MERGED" === g ? o[a] = s(o[a], l) : "DEFINE_MANY" === g && (o[a] = u(o[a], l));
                } else o[a] = l, "production" !== t.env.NODE_ENV && "function" == typeof l && n.displayName && (o[a].displayName = n.displayName + "_" + a);
              }
            }
          }
        } else if ("production" !== t.env.NODE_ENV) {
          var _ = typeof n === "undefined" ? "undefined" : _typeof(n),
              y = "object" === _ && null !== n;"production" !== t.env.NODE_ENV ? E(y, "%s: You're attempting to include a mixin that is either null or not an object. Check the mixins included by the component, as well as any mixins they include themselves. Expected object but got %s.", e.displayName || "ReactClass", null === n ? null : _) : void 0;
        }
      }function l(e, n) {
        if (n) for (var o in n) {
          var r = n[o];if (n.hasOwnProperty(o)) {
            var i = o in C;i ? "production" !== t.env.NODE_ENV ? b(!1, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', o) : f("78", o) : void 0;var a = o in e;a ? "production" !== t.env.NODE_ENV ? b(!1, "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", o) : f("79", o) : void 0, e[o] = r;
          }
        }
      }function c(e, n) {
        e && n && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? void 0 : "production" !== t.env.NODE_ENV ? b(!1, "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.") : f("80");for (var o in n) {
          n.hasOwnProperty(o) && (void 0 !== e[o] ? "production" !== t.env.NODE_ENV ? b(!1, "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.", o) : f("81", o) : void 0, e[o] = n[o]);
        }return e;
      }function s(e, t) {
        return function () {
          var n = e.apply(this, arguments),
              o = t.apply(this, arguments);if (null == n) return o;if (null == o) return n;var r = {};return c(r, n), c(r, o), r;
        };
      }function u(e, t) {
        return function () {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }function d(e, n) {
        var o = n.bind(e);if ("production" !== t.env.NODE_ENV) {
          o.__reactBoundContext = e, o.__reactBoundMethod = n, o.__reactBoundArguments = null;var r = e.constructor.displayName,
              i = o.bind;o.bind = function (a) {
            for (var l = arguments.length, c = Array(l > 1 ? l - 1 : 0), s = 1; s < l; s++) {
              c[s - 1] = arguments[s];
            }if (a !== e && null !== a) "production" !== t.env.NODE_ENV ? E(!1, "bind(): React component methods may only be bound to the component instance. See %s", r) : void 0;else if (!c.length) return "production" !== t.env.NODE_ENV ? E(!1, "bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See %s", r) : void 0, o;var u = i.apply(o, arguments);return u.__reactBoundContext = e, u.__reactBoundMethod = n, u.__reactBoundArguments = c, u;
          };
        }return o;
      }function p(e) {
        for (var t = e.__reactAutoBindPairs, n = 0; n < t.length; n += 2) {
          var o = t[n],
              r = t[n + 1];e[o] = d(e, r);
        }
      }var f = n(5),
          h = n(9),
          g = n(13),
          m = n(4),
          _ = n(16),
          y = n(15),
          v = n(12),
          b = n(3),
          E = n(2),
          A = "mixins",
          w = [],
          x = { mixins: "DEFINE_MANY", statics: "DEFINE_MANY", propTypes: "DEFINE_MANY", contextTypes: "DEFINE_MANY", childContextTypes: "DEFINE_MANY", getDefaultProps: "DEFINE_MANY_MERGED", getInitialState: "DEFINE_MANY_MERGED", getChildContext: "DEFINE_MANY_MERGED", render: "DEFINE_ONCE", componentWillMount: "DEFINE_MANY", componentDidMount: "DEFINE_MANY", componentWillReceiveProps: "DEFINE_MANY", shouldComponentUpdate: "DEFINE_ONCE", componentWillUpdate: "DEFINE_MANY", componentDidUpdate: "DEFINE_MANY", componentWillUnmount: "DEFINE_MANY", updateComponent: "OVERRIDE_BASE" },
          C = { displayName: function displayName(e, t) {
          e.displayName = t;
        }, mixins: function mixins(e, t) {
          if (t) for (var n = 0; n < t.length; n++) {
            a(e, t[n]);
          }
        }, childContextTypes: function childContextTypes(e, n) {
          "production" !== t.env.NODE_ENV && r(e, n, "childContext"), e.childContextTypes = h({}, e.childContextTypes, n);
        }, contextTypes: function contextTypes(e, n) {
          "production" !== t.env.NODE_ENV && r(e, n, "context"), e.contextTypes = h({}, e.contextTypes, n);
        }, getDefaultProps: function getDefaultProps(e, t) {
          e.getDefaultProps ? e.getDefaultProps = s(e.getDefaultProps, t) : e.getDefaultProps = t;
        }, propTypes: function propTypes(e, n) {
          "production" !== t.env.NODE_ENV && r(e, n, "prop"), e.propTypes = h({}, e.propTypes, n);
        }, statics: function statics(e, t) {
          l(e, t);
        }, autobind: function autobind() {} },
          O = { replaceState: function replaceState(e, t) {
          this.updater.enqueueReplaceState(this, e), t && this.updater.enqueueCallback(this, t, "replaceState");
        }, isMounted: function isMounted() {
          return this.updater.isMounted(this);
        } },
          k = function k() {};h(k.prototype, g.prototype, O);var M = { createClass: function createClass(e) {
          var n = o(function (e, o, r) {
            "production" !== t.env.NODE_ENV && ("production" !== t.env.NODE_ENV ? E(this instanceof n, "Something is calling a React component directly. Use a factory or JSX instead. See: https://fb.me/react-legacyfactory") : void 0), this.__reactAutoBindPairs.length && p(this), this.props = e, this.context = o, this.refs = v, this.updater = r || y, this.state = null;var i = this.getInitialState ? this.getInitialState() : null;"production" !== t.env.NODE_ENV && void 0 === i && this.getInitialState._isMockFunction && (i = null), "object" != (typeof i === "undefined" ? "undefined" : _typeof(i)) || Array.isArray(i) ? "production" !== t.env.NODE_ENV ? b(!1, "%s.getInitialState(): must return an object or null", n.displayName || "ReactCompositeComponent") : f("82", n.displayName || "ReactCompositeComponent") : void 0, this.state = i;
          });n.prototype = new k(), n.prototype.constructor = n, n.prototype.__reactAutoBindPairs = [], w.forEach(a.bind(null, n)), a(n, e), n.getDefaultProps && (n.defaultProps = n.getDefaultProps()), "production" !== t.env.NODE_ENV && (n.getDefaultProps && (n.getDefaultProps.isReactClassApproved = {}), n.prototype.getInitialState && (n.prototype.getInitialState.isReactClassApproved = {})), n.prototype.render ? void 0 : "production" !== t.env.NODE_ENV ? b(!1, "createClass(...): Class specification must implement a `render` method.") : f("83"), "production" !== t.env.NODE_ENV && ("production" !== t.env.NODE_ENV ? E(!n.prototype.componentShouldUpdate, "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", e.displayName || "A component") : void 0, "production" !== t.env.NODE_ENV ? E(!n.prototype.componentWillRecieveProps, "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", e.displayName || "A component") : void 0);for (var r in x) {
            n.prototype[r] || (n.prototype[r] = null);
          }return n;
        }, injection: { injectMixin: function injectMixin(e) {
            w.push(e);
          } } };e.exports = M;
    }).call(t, n(1));
  }, function (e, t, n) {
    (function (t) {
      "use strict";
      var o = n(4),
          r = o.createFactory;if ("production" !== t.env.NODE_ENV) {
        var i = n(20);r = i.createFactory;
      }var a = { a: r("a"), abbr: r("abbr"), address: r("address"), area: r("area"), article: r("article"), aside: r("aside"), audio: r("audio"), b: r("b"), base: r("base"), bdi: r("bdi"), bdo: r("bdo"), big: r("big"), blockquote: r("blockquote"), body: r("body"), br: r("br"), button: r("button"), canvas: r("canvas"), caption: r("caption"), cite: r("cite"), code: r("code"), col: r("col"), colgroup: r("colgroup"), data: r("data"), datalist: r("datalist"), dd: r("dd"), del: r("del"), details: r("details"), dfn: r("dfn"), dialog: r("dialog"), div: r("div"), dl: r("dl"), dt: r("dt"), em: r("em"), embed: r("embed"), fieldset: r("fieldset"), figcaption: r("figcaption"), figure: r("figure"), footer: r("footer"), form: r("form"), h1: r("h1"), h2: r("h2"), h3: r("h3"), h4: r("h4"), h5: r("h5"), h6: r("h6"), head: r("head"), header: r("header"), hgroup: r("hgroup"), hr: r("hr"), html: r("html"), i: r("i"), iframe: r("iframe"), img: r("img"), input: r("input"), ins: r("ins"), kbd: r("kbd"), keygen: r("keygen"), label: r("label"), legend: r("legend"), li: r("li"), link: r("link"), main: r("main"), map: r("map"), mark: r("mark"), menu: r("menu"), menuitem: r("menuitem"), meta: r("meta"), meter: r("meter"), nav: r("nav"), noscript: r("noscript"), object: r("object"), ol: r("ol"), optgroup: r("optgroup"), option: r("option"), output: r("output"), p: r("p"), param: r("param"), picture: r("picture"), pre: r("pre"), progress: r("progress"), q: r("q"), rp: r("rp"), rt: r("rt"), ruby: r("ruby"), s: r("s"), samp: r("samp"), script: r("script"), section: r("section"), select: r("select"), small: r("small"), source: r("source"), span: r("span"), strong: r("strong"), style: r("style"), sub: r("sub"), summary: r("summary"), sup: r("sup"), table: r("table"), tbody: r("tbody"), td: r("td"), textarea: r("textarea"), tfoot: r("tfoot"), th: r("th"), thead: r("thead"), time: r("time"), title: r("title"), tr: r("tr"), track: r("track"), u: r("u"), ul: r("ul"), var: r("var"), video: r("video"), wbr: r("wbr"), circle: r("circle"), clipPath: r("clipPath"), defs: r("defs"), ellipse: r("ellipse"), g: r("g"), image: r("image"), line: r("line"), linearGradient: r("linearGradient"), mask: r("mask"), path: r("path"), pattern: r("pattern"), polygon: r("polygon"), polyline: r("polyline"), radialGradient: r("radialGradient"), rect: r("rect"), stop: r("stop"), svg: r("svg"), text: r("text"), tspan: r("tspan") };e.exports = a;
    }).call(t, n(1));
  }, function (e, t, n) {
    (function (t) {
      "use strict";
      function o(e, t) {
        return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t;
      }function r(e) {
        this.message = e, this.stack = "";
      }function i(e) {
        function n(n, i, a, l, c, s, u) {
          if (l = l || k, s = s || a, "production" !== t.env.NODE_ENV && u !== w && "undefined" != typeof console) {
            var d = l + ":" + a;o[d] || ("production" !== t.env.NODE_ENV ? O(!1, "You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will not work in production with the next major version. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.", s, l) : void 0, o[d] = !0);
          }if (null == i[a]) {
            var p = A[c];return n ? new r(null === i[a] ? "The " + p + " `" + s + "` is marked as required " + ("in `" + l + "`, but its value is `null`.") : "The " + p + " `" + s + "` is marked as required in " + ("`" + l + "`, but its value is `undefined`.")) : null;
          }return e(i, a, l, c, s);
        }if ("production" !== t.env.NODE_ENV) var o = {};var i = n.bind(null, !1);return i.isRequired = n.bind(null, !0), i;
      }function a(e) {
        function t(t, n, o, i, a, l) {
          var c = t[n],
              s = y(c);if (s !== e) {
            var u = A[i],
                d = v(c);return new r("Invalid " + u + " `" + a + "` of type " + ("`" + d + "` supplied to `" + o + "`, expected ") + ("`" + e + "`."));
          }return null;
        }return i(t);
      }function l() {
        return i(x.thatReturns(null));
      }function c(e) {
        function t(t, n, o, i, a) {
          if ("function" != typeof e) return new r("Property `" + a + "` of component `" + o + "` has invalid PropType notation inside arrayOf.");var l = t[n];if (!Array.isArray(l)) {
            var c = A[i],
                s = y(l);return new r("Invalid " + c + " `" + a + "` of type " + ("`" + s + "` supplied to `" + o + "`, expected an array."));
          }for (var u = 0; u < l.length; u++) {
            var d = e(l, u, o, i, a + "[" + u + "]", w);if (d instanceof Error) return d;
          }return null;
        }return i(t);
      }function s() {
        function e(e, t, n, o, i) {
          var a = e[t];if (!E.isValidElement(a)) {
            var l = A[o],
                c = y(a);return new r("Invalid " + l + " `" + i + "` of type " + ("`" + c + "` supplied to `" + n + "`, expected a single ReactElement."));
          }return null;
        }return i(e);
      }function u(e) {
        function t(t, n, o, i, a) {
          if (!(t[n] instanceof e)) {
            var l = A[i],
                c = e.name || k,
                s = b(t[n]);return new r("Invalid " + l + " `" + a + "` of type " + ("`" + s + "` supplied to `" + o + "`, expected ") + ("instance of `" + c + "`."));
          }return null;
        }return i(t);
      }function d(e) {
        function n(t, n, i, a, l) {
          for (var c = t[n], s = 0; s < e.length; s++) {
            if (o(c, e[s])) return null;
          }var u = A[a],
              d = JSON.stringify(e);return new r("Invalid " + u + " `" + l + "` of value `" + c + "` " + ("supplied to `" + i + "`, expected one of " + d + "."));
        }return Array.isArray(e) ? i(n) : ("production" !== t.env.NODE_ENV ? O(!1, "Invalid argument supplied to oneOf, expected an instance of array.") : void 0, x.thatReturnsNull);
      }function p(e) {
        function t(t, n, o, i, a) {
          if ("function" != typeof e) return new r("Property `" + a + "` of component `" + o + "` has invalid PropType notation inside objectOf.");var l = t[n],
              c = y(l);if ("object" !== c) {
            var s = A[i];return new r("Invalid " + s + " `" + a + "` of type " + ("`" + c + "` supplied to `" + o + "`, expected an object."));
          }for (var u in l) {
            if (l.hasOwnProperty(u)) {
              var d = e(l, u, o, i, a + "." + u, w);if (d instanceof Error) return d;
            }
          }return null;
        }return i(t);
      }function f(e) {
        function n(t, n, o, i, a) {
          for (var l = 0; l < e.length; l++) {
            var c = e[l];if (null == c(t, n, o, i, a, w)) return null;
          }var s = A[i];return new r("Invalid " + s + " `" + a + "` supplied to " + ("`" + o + "`."));
        }return Array.isArray(e) ? i(n) : ("production" !== t.env.NODE_ENV ? O(!1, "Invalid argument supplied to oneOfType, expected an instance of array.") : void 0, x.thatReturnsNull);
      }function h() {
        function e(e, t, n, o, i) {
          if (!m(e[t])) {
            var a = A[o];return new r("Invalid " + a + " `" + i + "` supplied to " + ("`" + n + "`, expected a ReactNode."));
          }return null;
        }return i(e);
      }function g(e) {
        function t(t, n, o, i, a) {
          var l = t[n],
              c = y(l);if ("object" !== c) {
            var s = A[i];return new r("Invalid " + s + " `" + a + "` of type `" + c + "` " + ("supplied to `" + o + "`, expected `object`."));
          }for (var u in e) {
            var d = e[u];if (d) {
              var p = d(l, u, o, i, a + "." + u, w);if (p) return p;
            }
          }return null;
        }return i(t);
      }function m(e) {
        switch (typeof e === "undefined" ? "undefined" : _typeof(e)) {case "number":case "string":case "undefined":
            return !0;case "boolean":
            return !e;case "object":
            if (Array.isArray(e)) return e.every(m);if (null === e || E.isValidElement(e)) return !0;var t = C(e);if (!t) return !1;var n,
                o = t.call(e);if (t !== e.entries) {
              for (; !(n = o.next()).done;) {
                if (!m(n.value)) return !1;
              }
            } else for (; !(n = o.next()).done;) {
              var r = n.value;if (r && !m(r[1])) return !1;
            }return !0;default:
            return !1;}
      }function _(e, t) {
        return "symbol" === e || "Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol;
      }function y(e) {
        var t = typeof e === "undefined" ? "undefined" : _typeof(e);return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : _(t, e) ? "symbol" : t;
      }function v(e) {
        var t = y(e);if ("object" === t) {
          if (e instanceof Date) return "date";if (e instanceof RegExp) return "regexp";
        }return t;
      }function b(e) {
        return e.constructor && e.constructor.name ? e.constructor.name : k;
      }var E = n(4),
          A = n(16),
          w = n(21),
          x = n(11),
          C = n(18),
          O = n(2),
          k = "<<anonymous>>",
          M = { array: a("array"), bool: a("boolean"), func: a("function"), number: a("number"), object: a("object"), string: a("string"), symbol: a("symbol"), any: l(), arrayOf: c, element: s(), instanceOf: u, node: h(), objectOf: p, oneOf: d, oneOfType: f, shape: g };r.prototype = Error.prototype, e.exports = M;
    }).call(t, n(1));
  }, function (e, t, n) {
    "use strict";
    function o(e, t, n) {
      this.props = e, this.context = t, this.refs = c, this.updater = n || l;
    }function r() {}var i = n(9),
        a = n(13),
        l = n(15),
        c = n(12);r.prototype = a.prototype, o.prototype = new r(), o.prototype.constructor = o, i(o.prototype, a.prototype), o.prototype.isPureReactComponent = !0, e.exports = o;
  }, function (e, t) {
    "use strict";
    e.exports = "15.4.2";
  }, function (e, t, n) {
    (function (t) {
      "use strict";
      function o(e, o, d, p, f, h) {
        for (var g in e) {
          if (e.hasOwnProperty(g)) {
            var m;try {
              "function" != typeof e[g] ? "production" !== t.env.NODE_ENV ? c(!1, "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.", p || "React class", a[d], g) : i("84", p || "React class", a[d], g) : void 0, m = e[g](o, g, p, d, null, l);
            } catch (e) {
              m = e;
            }if ("production" !== t.env.NODE_ENV ? s(!m || m instanceof Error, "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", a[d], g, typeof m === "undefined" ? "undefined" : _typeof(m)) : void 0, m instanceof Error && !(m.message in u)) {
              u[m.message] = !0;var _ = "";"production" !== t.env.NODE_ENV && (r || (r = n(14)), null !== h ? _ = r.getStackAddendumByID(h) : null !== f && (_ = r.getCurrentStackAddendum(f))), "production" !== t.env.NODE_ENV ? s(!1, "Failed %s type: %s%s", d, m.message, _) : void 0;
            }
          }
        }
      }var r,
          i = n(5),
          a = n(16),
          l = n(21),
          c = n(3),
          s = n(2);"undefined" != typeof t && t.env && "test" === t.env.NODE_ENV && (r = n(14));var u = {};e.exports = o;
    }).call(t, n(1));
  }, function (e, t, n) {
    (function (t) {
      "use strict";
      function o(e) {
        return i.isValidElement(e) ? void 0 : "production" !== t.env.NODE_ENV ? a(!1, "React.Children.only expected to receive a single React element child.") : r("143"), e;
      }var r = n(5),
          i = n(4),
          a = n(3);e.exports = o;
    }).call(t, n(1));
  }, function (e, t, n) {
    (function (t) {
      "use strict";
      function o(e, t) {
        return e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e.key ? d.escape(e.key) : t.toString(36);
      }function r(e, n, i, m) {
        var _ = typeof e === "undefined" ? "undefined" : _typeof(e);if ("undefined" !== _ && "boolean" !== _ || (e = null), null === e || "string" === _ || "number" === _ || "object" === _ && e.$$typeof === c) return i(m, e, "" === n ? f + o(e, 0) : n), 1;var y,
            v,
            b = 0,
            E = "" === n ? f : n + h;if (Array.isArray(e)) for (var A = 0; A < e.length; A++) {
          y = e[A], v = E + o(y, A), b += r(y, v, i, m);
        } else {
          var w = s(e);if (w) {
            var x,
                C = w.call(e);if (w !== e.entries) for (var O = 0; !(x = C.next()).done;) {
              y = x.value, v = E + o(y, O++), b += r(y, v, i, m);
            } else {
              if ("production" !== t.env.NODE_ENV) {
                var k = "";if (l.current) {
                  var M = l.current.getName();M && (k = " Check the render method of `" + M + "`.");
                }"production" !== t.env.NODE_ENV ? p(g, "Using Maps as children is not yet fully supported. It is an experimental feature that might be removed. Convert it to a sequence / iterable of keyed ReactElements instead.%s", k) : void 0, g = !0;
              }for (; !(x = C.next()).done;) {
                var T = x.value;T && (y = T[1], v = E + d.escape(T[0]) + h + o(y, 0), b += r(y, v, i, m));
              }
            }
          } else if ("object" === _) {
            var H = "";if ("production" !== t.env.NODE_ENV && (H = " If you meant to render a collection of children, use an array instead or wrap the object using createFragment(object) from the React add-ons.", e._isReactElement && (H = " It looks like you're using an element created by a different version of React. Make sure to use only one copy of React."), l.current)) {
              var R = l.current.getName();R && (H += " Check the render method of `" + R + "`.");
            }var D = String(e);"production" !== t.env.NODE_ENV ? u(!1, "Objects are not valid as a React child (found: %s).%s", "[object Object]" === D ? "object with keys {" + Object.keys(e).join(", ") + "}" : D, H) : a("31", "[object Object]" === D ? "object with keys {" + Object.keys(e).join(", ") + "}" : D, H);
          }
        }return b;
      }function i(e, t, n) {
        return null == e ? 0 : r(e, "", t, n);
      }var a = n(5),
          l = n(10),
          c = n(19),
          s = n(18),
          u = n(3),
          d = n(34),
          p = n(2),
          f = ".",
          h = ":",
          g = !1;e.exports = i;
    }).call(t, n(1));
  }, function (e, t, n) {
    var o = n(27);"string" == typeof o && (o = [[e.id, o, ""]]), n(8)(o, {}), o.locals && (e.exports = o.locals);
  }, function (e, t, n) {
    var o = n(28);"string" == typeof o && (o = [[e.id, o, ""]]), n(8)(o, {}), o.locals && (e.exports = o.locals);
  }, function (e, t, n) {
    var o = n(29);"string" == typeof o && (o = [[e.id, o, ""]]), n(8)(o, {}), o.locals && (e.exports = o.locals);
  }, function (e, t, n) {
    var o = n(30);"string" == typeof o && (o = [[e.id, o, ""]]), n(8)(o, {}), o.locals && (e.exports = o.locals);
  }, function (e, t, n) {
    var o = n(31);"string" == typeof o && (o = [[e.id, o, ""]]), n(8)(o, {}), o.locals && (e.exports = o.locals);
  }, function (e, t, n) {
    var o = n(32);"string" == typeof o && (o = [[e.id, o, ""]]), n(8)(o, {}), o.locals && (e.exports = o.locals);
  }]);
});
//# sourceMappingURL=esnippet.js.map

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;