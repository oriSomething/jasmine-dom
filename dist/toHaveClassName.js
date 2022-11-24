"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveClassName = toHaveClassName;
var _utils = require("./utils");
var _printers = require("./printers");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function getExpectedClassNamesAndOptions(params) {
  var lastParam = params.pop();
  var expectedClassNames, options;
  if (_typeof(lastParam) === 'object') {
    expectedClassNames = params;
    options = lastParam;
  } else {
    expectedClassNames = params.concat(lastParam);
    options = {
      exact: false
    };
  }
  return {
    expectedClassNames: expectedClassNames,
    options: options
  };
}
function splitClassNames(str) {
  if (!str) {
    return [];
  }
  return str.split(/\s+/).filter(function (s) {
    return s.length > 0;
  });
}
function isSubset(subset, superset) {
  return subset.every(function (item) {
    return superset.includes(item);
  });
}
function toHaveClassName() {
  return {
    compare: function compare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }
      var _getExpectedClassName = getExpectedClassNamesAndOptions(params),
        expectedClassNames = _getExpectedClassName.expectedClassNames,
        options = _getExpectedClassName.options;
      var received = splitClassNames(htmlElement.getAttribute('class'));
      var expected = expectedClassNames.reduce(function (acc, className) {
        return acc.concat(splitClassNames(className));
      }, []);
      if (options.exact) {
        result.pass = isSubset(expected, received) && expected.length === received.length;
        result.message = result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the provided ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " element to have ").concat((0, _printers.printSuccess)('EXACTLY'), " defined classes ").concat((0, _printers.printSuccess)("".concat(expected.join(' '))), ". Received ").concat((0, _printers.printSuccess)("".concat(received.join(' '))), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the provided ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " element to have ").concat((0, _printers.printError)('EXACTLY'), " defined classes ").concat((0, _printers.printError)("".concat(expected.join(' '))), ". Received ").concat((0, _printers.printError)("".concat(received.join(' '))), ".")));
        return result;
      }
      if (expected.length > 0) {
        result.pass = isSubset(expected, received);
        result.message = result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)(" Expected the provided ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " element to have class ").concat((0, _printers.printSuccess)(expected.join(' ')), ". Received ").concat((0, _printers.printSuccess)(received.join(' ')), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)(" Expected the provided ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " element to have class ").concat((0, _printers.printError)(expected.join(' ')), ". Received ").concat((0, _printers.printError)(received.join(' ')), ".")));
      } else {
        result.pass = false;
        result.message = "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecWarning)("At least one expected class must be provided."));
      }
      return result;
    },
    negativeCompare: function negativeCompare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }
      var _getExpectedClassName2 = getExpectedClassNamesAndOptions(params),
        expectedClassNames = _getExpectedClassName2.expectedClassNames,
        options = _getExpectedClassName2.options;
      var received = splitClassNames(htmlElement.getAttribute('class'));
      var expected = expectedClassNames.reduce(function (acc, className) {
        return acc.concat(splitClassNames(className));
      }, []);
      if (options.exact) {
        result.pass = !isSubset(expected, received) || expected.length !== received.length;
        result.message = result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the provided ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " element not to have ").concat((0, _printers.printSuccess)('EXACTLY'), " defined classes ").concat((0, _printers.printSuccess)("".concat(expected.join(' '))), ". Received ").concat((0, _printers.printSuccess)("".concat(received.join(' '))), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the provided ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " element not to have ").concat((0, _printers.printError)('EXACTLY'), " defined classes ").concat((0, _printers.printError)("".concat(expected.join(' '))), ". Received ").concat((0, _printers.printError)("".concat(received.join(' '))), ".")));
        return result;
      }
      if (expected.length > 0) {
        result.pass = !isSubset(expected, received);
        result.message = result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)(" Expected the provided ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " element not to have class ").concat((0, _printers.printSuccess)(expected.join(' ')), ". Received ").concat((0, _printers.printSuccess)(received.join(' ')), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)(" Expected the provided ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " element not to have class ").concat((0, _printers.printError)(expected.join(' ')), ". Received ").concat((0, _printers.printError)(received.join(' ')), ".")));
      } else {
        result.pass = received.length === 0;
        result.message = result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the element not to have classes ".concat((0, _printers.printSuccess)('(any)'), ".\nReceived: ").concat((0, _printers.printSuccess)(received.join(' '))))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the element not to have classes ".concat((0, _printers.printError)('(any)'), ".\nReceived: ").concat((0, _printers.printError)(received.join(' ')))));
      }
      return result;
    }
  };
}