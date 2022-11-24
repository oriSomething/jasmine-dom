"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvalidCSSError = exports.HtmlElementTypeError = void 0;
exports.checkHasWindow = checkHasWindow;
exports.checkHtmlElement = checkHtmlElement;
exports.compareArraysAsSet = compareArraysAsSet;
Object.defineProperty(exports, "cssEscape", {
  enumerable: true,
  get: function get() {
    return _css["default"];
  }
});
exports.getSingleElementValue = getSingleElementValue;
exports.getTag = getTag;
Object.defineProperty(exports, "isEqualWith", {
  enumerable: true,
  get: function get() {
    return _lodash.isEqualWith;
  }
});
exports.matches = matches;
exports.normalize = normalize;
exports.toSentence = toSentence;
Object.defineProperty(exports, "uniq", {
  enumerable: true,
  get: function get() {
    return _lodash.uniq;
  }
});
var _lodash = require("lodash");
var _css = _interopRequireDefault(require("css.escape"));
var _printers = require("./printers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var HtmlElementTypeError = /*#__PURE__*/function (_Error) {
  _inherits(HtmlElementTypeError, _Error);
  var _super = _createSuper(HtmlElementTypeError);
  function HtmlElementTypeError(htmlElement) {
    var _this;
    _classCallCheck(this, HtmlElementTypeError);
    _this = _super.call(this);
    _this.message = "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecWarning)("Received element must be an HTMLElement or an SVGElement.\nReceived: ".concat((0, _printers.printWarning)(htmlElement))));
    return _this;
  }
  return _createClass(HtmlElementTypeError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
exports.HtmlElementTypeError = HtmlElementTypeError;
var InvalidCSSError = /*#__PURE__*/function (_Error2) {
  _inherits(InvalidCSSError, _Error2);
  var _super2 = _createSuper(InvalidCSSError);
  function InvalidCSSError(received) {
    var _this2;
    _classCallCheck(this, InvalidCSSError);
    _this2 = _super2.call(this);
    _this2.message = [received.message, '', (0, _printers.printSecError)("Failing CSS:"), (0, _printers.printError)(received.css)].join('\n');
    return _this2;
  }
  return _createClass(InvalidCSSError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
exports.InvalidCSSError = InvalidCSSError;
function checkHasWindow(htmlElement) {
  if (!htmlElement || !htmlElement.ownerDocument || !htmlElement.ownerDocument.defaultView) {
    throw new HtmlElementTypeError(htmlElement);
  }
}
function checkHtmlElement(htmlElement) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  checkHasWindow.apply(void 0, [htmlElement].concat(args));
  var window = htmlElement.ownerDocument.defaultView;
  if (!(htmlElement instanceof window.HTMLElement) && !(htmlElement instanceof window.SVGElement)) {
    throw new HtmlElementTypeError(htmlElement);
  }
}
function normalize(text) {
  return text.replace(/\s+/g, ' ').trim();
}
function matches(textToMatch, matcher) {
  if (matcher instanceof RegExp) {
    return matcher.test(textToMatch);
  } else {
    return textToMatch.includes(String(matcher));
  }
}
function getTag(htmlElement) {
  return htmlElement === null ? null : htmlElement.tagName && htmlElement.tagName.toLowerCase();
}
function getInputValue(inputElement) {
  switch (inputElement.type) {
    case 'number':
      return inputElement.value === '' ? null : Number(inputElement.value);
    case 'checkbox':
      return inputElement.checked;
    default:
      return inputElement.value;
  }
}
function getSelectValue(_ref) {
  var multiple = _ref.multiple,
    options = _ref.options;
  var selectedOptions = _toConsumableArray(options).filter(function (option) {
    return option.selected;
  });
  if (multiple) {
    return _toConsumableArray(selectedOptions).map(function (option) {
      return option.value;
    });
  }
  if (selectedOptions.length === 0) {
    return undefined;
  }
  return selectedOptions[0].value;
}
function getSingleElementValue(htmlElement) {
  if (!htmlElement) {
    return undefined;
  }
  switch (htmlElement.tagName.toLowerCase()) {
    case 'input':
      return getInputValue(htmlElement);
    case 'select':
      return getSelectValue(htmlElement);
    default:
      return htmlElement.value;
  }
}
function compareArraysAsSet(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return (0, _lodash.isEqual)(new Set(a), new Set(b));
  }
  return undefined;
}
function toSentence(array) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref2$wordConnector = _ref2.wordConnector,
    wordConnector = _ref2$wordConnector === void 0 ? ', ' : _ref2$wordConnector,
    _ref2$lastWordConnect = _ref2.lastWordConnector,
    lastWordConnector = _ref2$lastWordConnect === void 0 ? ' and ' : _ref2$lastWordConnect;
  return [array.slice(0, -1).join(wordConnector), array[array.length - 1]].join(array.length > 1 ? lastWordConnector : '');
}