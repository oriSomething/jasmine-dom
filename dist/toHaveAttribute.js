"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveAttribute = toHaveAttribute;
var _utils = require("./utils");
var _printers = require("./printers");
function toHaveAttribute(util) {
  return {
    compare: function compare(htmlElement, name, expectedValue) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var isExpectedValuePresent = expectedValue !== undefined;
      var hasAttribute = htmlElement.hasAttribute(name);
      var receivedValue = htmlElement.getAttribute(name);
      result.pass = isExpectedValuePresent ? hasAttribute && util.equals(receivedValue, expectedValue) : hasAttribute;
      result.message = result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the value of the received attribute ".concat((0, _printers.printSuccess)("'".concat(name, "'")), " to be ").concat((0, _printers.printSuccess)("'".concat(expectedValue, "'")), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the value of the received attribute ".concat((0, _printers.printError)("'".concat(name, "'")), " to be ").concat((0, _printers.printError)("'".concat(expectedValue, "'")), ", but received ").concat((0, _printers.printError)("'".concat(receivedValue, "'")), ".")));
      return result;
    },
    negativeCompare: function negativeCompare(htmlElement, name, expectedValue) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var isExpectedValuePresent = expectedValue !== undefined;
      var hasAttribute = htmlElement.hasAttribute(name);
      var receivedValue = htmlElement.getAttribute(name);
      result.pass = isExpectedValuePresent ? hasAttribute && !util.equals(receivedValue, expectedValue) : !hasAttribute;
      result.message = result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the value of the received attribute ".concat((0, _printers.printSuccess)("'".concat(name, "'")), " not to be ").concat((0, _printers.printSuccess)("'".concat(expectedValue, "'")), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the value of the received attribute ".concat((0, _printers.printError)("'".concat(name, "'")), " not to be ").concat((0, _printers.printError)("'".concat(expectedValue, "'")), ", but received ").concat((0, _printers.printError)("'".concat(receivedValue, "'")), ".")));
      return result;
    }
  };
}