"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveStyle = toHaveStyle;
var _parse = _interopRequireDefault(require("css/lib/parse"));
var _utils = require("./utils");
var _printers = require("./printers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function parseCSS(css) {
  var ast = (0, _parse["default"])("selector { ".concat(css, " }"), {
    silent: true
  }).stylesheet;
  if (ast.parsingErrors && ast.parsingErrors.length > 0) {
    var _ast$parsingErrors$ = ast.parsingErrors[0],
      reason = _ast$parsingErrors$.reason,
      line = _ast$parsingErrors$.line;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    throw _construct(_utils.InvalidCSSError, [{
      css: css,
      message: (0, _printers.printSecError)("Syntax error parsing expected styles: ".concat(reason, " on ").concat((0, _printers.printError)("line ".concat(line))))
    }].concat(args));
  }
  var parsedRules = ast.rules[0].declarations.filter(function (declaration) {
    return declaration.type === 'declaration';
  }).reduce(function (obj, _ref) {
    var property = _ref.property,
      value = _ref.value;
    return Object.assign(obj, _defineProperty({}, property, value));
  }, {});
  return parsedRules;
}
function parseJStoCSS(document, styles) {
  var sandboxElement = document.createElement('div');
  Object.assign(sandboxElement.style, styles);
  return sandboxElement.style.cssText;
}
function getStyleDeclaration(document, css) {
  var styles = {};

  //	The next block is necessary to normalize colors
  var copy = document.createElement('div');
  Object.keys(css).forEach(function (prop) {
    copy.style[prop] = css[prop];
    styles[prop] = copy.style[prop];
  });
  return styles;
}
function styleIsSubset(styles, computedStyle) {
  return !!Object.keys(styles).length && Object.entries(styles).every(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      prop = _ref3[0],
      value = _ref3[1];
    return computedStyle[prop] === value || computedStyle.getPropertyValue(prop.toLowerCase()) === value;
  });
}
function getCSStoParse(document, styles) {
  return _typeof(styles) === 'object' ? parseJStoCSS(document, styles) : styles;
}
function printoutStyles(styles) {
  return Object.keys(styles).sort().map(function (prop) {
    return "".concat(prop, ": ").concat(styles[prop], ";");
  }).join('\n');
}
function expectedStyleDiff(expected, computedStyles) {
  var received = Array.from(computedStyles).filter(function (prop) {
    return expected[prop] !== undefined;
  }).reduce(function (obj, prop) {
    return Object.assign(obj, _defineProperty({}, prop, computedStyles.getPropertyValue(prop)));
  }, {});
  var receivedOutput = printoutStyles(received);
  return receivedOutput;
}
function toHaveStyle() {
  return {
    compare: function compare(htmlElement, styles) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var cssToParse = getCSStoParse(htmlElement.ownerDocument, styles);
      var parsedCSS = parseCSS(cssToParse);
      var getComputedStyle = htmlElement.ownerDocument.defaultView.getComputedStyle;
      var expected = getStyleDeclaration(htmlElement.ownerDocument, parsedCSS);
      var received = getComputedStyle(htmlElement);
      result.pass = styleIsSubset(expected, received);
      result.message = result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the provided ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " element to have styles:\n").concat((0, _printers.printSuccess)(styles), "\nReceived:\n\n").concat((0, _printers.printSuccess)(expectedStyleDiff(expected, received))))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the provided ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " element to have styles:\n").concat((0, _printers.printError)(styles), "\nReceived:\n\n").concat((0, _printers.printError)(expectedStyleDiff(expected, received)))));
      return result;
    },
    negativeCompare: function negativeCompare(htmlElement, styles) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var cssToParse = getCSStoParse(htmlElement.ownerDocument, styles);
      var parsedCSS = parseCSS(cssToParse);
      var getComputedStyle = htmlElement.ownerDocument.defaultView.getComputedStyle;
      var expected = getStyleDeclaration(htmlElement.ownerDocument, parsedCSS);
      var received = getComputedStyle(htmlElement);
      result.pass = !styleIsSubset(expected, received);
      result.message = result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the provided ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " element not to have styles:\n").concat((0, _printers.printSuccess)(styles), "\nReceived:\n\n").concat((0, _printers.printSuccess)(expectedStyleDiff(expected, received))))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the provided ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " element not to have styles:\n").concat((0, _printers.printError)(styles), "\nReceived:\n\n").concat((0, _printers.printError)(expectedStyleDiff(expected, received)))));
      return result;
    }
  };
}