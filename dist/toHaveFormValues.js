"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveFormValues = toHaveFormValues;
var _utils = require("./utils");
var _printers = require("./printers");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function getMultiElementValue(htmlElements) {
  var types = (0, _utils.uniq)(htmlElements.map(function (htmlElement) {
    return htmlElement.type;
  }));
  if (types.length !== 1) {
    throw new Error((0, _printers.printWarning)("".concat((0, _printers.printError)('FAILED'), " Multiple form elements with the same name must be of the same type")));
  }
  switch (types[0]) {
    case 'radio':
      {
        var theChosenOne = htmlElements.find(function (radio) {
          return radio.checked;
        });
        return theChosenOne ? theChosenOne.value : undefined;
      }
    case 'checkbox':
      return htmlElements.filter(function (checkbox) {
        return checkbox.checked;
      }).map(function (checkbox) {
        return checkbox.value;
      });
    default:
      return htmlElements.map(function (htmlElement) {
        return htmlElement.value;
      });
  }
}
function getFormValue(container, name) {
  var htmlElements = _toConsumableArray(container.querySelectorAll("[name=\"".concat((0, _utils.cssEscape)(name), "\"]")));
  if (htmlElements.length === 0) {
    return undefined;
  }
  switch (htmlElements.length) {
    case 1:
      return (0, _utils.getSingleElementValue)(htmlElements[0]);
    default:
      return getMultiElementValue(htmlElements);
  }
}
function getPureName(name) {
  return /\[\]$/.test(name) ? name.slice(0, -2) : name;
}
function getAllFormValues(container) {
  var names = Array.from(container.elements).map(function (htmlElement) {
    return htmlElement.name;
  });
  return names.reduce(function (obj, name) {
    return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, getPureName(name), getFormValue(container, name)));
  }, {});
}
function toHaveFormValues() {
  return {
    compare: function compare(formElement, expectedValues) {
      (0, _utils.checkHtmlElement)(formElement);
      if (!formElement.elements) {
        throw new Error("".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecWarning)(".toHaveFormValues() must be called on a ".concat((0, _printers.printWarning)('form'), " or a ").concat((0, _printers.printWarning)('fieldset'), " element."))));
      }
      var result = {};
      var formValues = getAllFormValues(formElement);
      var commonKeyValues = Object.keys(formValues).filter(function (key) {
        return expectedValues.hasOwnProperty(key);
      }).reduce(function (obj, key) {
        return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, key, formValues[key]));
      }, {});
      result.pass = Object.entries(expectedValues).every(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          name = _ref2[0],
          expectedValue = _ref2[1];
        return (0, _utils.isEqualWith)(formValues[name], expectedValue, _utils.compareArraysAsSet);
      });
      result.message = result.pass ? "\uD83D\uDCAF ".concat((0, _printers.printSecSuccess)("Expected the ".concat((0, _printers.printSuccess)((0, _utils.getTag)(formElement)), " to have values: ").concat((0, _printers.printSuccess)(Object.keys(expectedValues).map(function (key) {
        return "\n".concat(key, ": ").concat(expectedValues[key]);
      })), ".\nValues received for the expected keys: ").concat((0, _printers.printSuccess)(Object.keys(commonKeyValues).map(function (key) {
        return "\n".concat(key, ": ").concat(commonKeyValues[key]);
      }))))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the ".concat((0, _printers.printError)((0, _utils.getTag)(formElement)), " to have values: ").concat((0, _printers.printError)(Object.keys(expectedValues).map(function (key) {
        return "\n".concat(key, ": ").concat(expectedValues[key]);
      })), ".\nValues received for the expected keys: ").concat((0, _printers.printError)(Object.keys(commonKeyValues).map(function (key) {
        return "\n".concat(key, ": ").concat(commonKeyValues[key]);
      })))));
      return result;
    },
    negativeCompare: function negativeCompare(formElement, expectedValues) {
      (0, _utils.checkHtmlElement)(formElement);
      if (!formElement.elements) {
        throw new Error("".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecWarning)(".toHaveFormValues() must be called on a ".concat((0, _printers.printWarning)('form'), " or a ").concat((0, _printers.printWarning)('fieldset'), " element."))));
      }
      var result = {};
      var formValues = getAllFormValues(formElement);
      var commonKeyValues = Object.keys(formValues).filter(function (key) {
        return expectedValues.hasOwnProperty(key);
      }).reduce(function (obj, key) {
        return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, key, formValues[key]));
      }, {});
      result.pass = Object.entries(expectedValues).every(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          name = _ref4[0],
          expectedValue = _ref4[1];
        return !(0, _utils.isEqualWith)(formValues[name], expectedValue, _utils.compareArraysAsSet);
      });
      result.message = result.pass ? "\uD83D\uDCAF ".concat((0, _printers.printSecSuccess)("Expected the ".concat((0, _printers.printSuccess)((0, _utils.getTag)(formElement)), " not to have values: ").concat((0, _printers.printSuccess)(Object.keys(expectedValues).map(function (key) {
        return "\n".concat(key, ": ").concat(expectedValues[key]);
      })), ".\nValues received for the expected keys: ").concat((0, _printers.printSuccess)(Object.keys(commonKeyValues).map(function (key) {
        return "\n".concat(key, ": ").concat(commonKeyValues[key]);
      }))))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the ".concat((0, _printers.printError)((0, _utils.getTag)(formElement)), " not to have values: ").concat((0, _printers.printError)(Object.keys(expectedValues).map(function (key) {
        return "\n".concat(key, ": ").concat(expectedValues[key]);
      })), ".\nValues received for the expected keys: ").concat((0, _printers.printError)(Object.keys(commonKeyValues).map(function (key) {
        return "\n".concat(key, ": ").concat(commonKeyValues[key]);
      })))));
      return result;
    }
  };
}