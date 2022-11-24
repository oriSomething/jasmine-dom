"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveValue = toHaveValue;
var _utils = require("./utils");
var _printers = require("./printers");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function toHaveValue() {
  return {
    compare: function compare(htmlElement, expectedValue) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      if ((0, _utils.getTag)(htmlElement) === 'input' && ['checkbox', 'radio'].includes(htmlElement.type)) {
        throw new Error((0, _printers.printSecWarning)("".concat((0, _printers.printError)('FAILED'), " input elements with ").concat((0, _printers.printWarning)('type="checkbox/radio"'), " cannot be used with ").concat((0, _printers.printWarning)('.toHaveValue()'), ". Use ").concat((0, _printers.printSuccess)('.toBeChecked()'), " for type=\"checkbox\" or ").concat((0, _printers.printSuccess)('.toHaveFormValues()'), " instead.")));
      }
      var receivedValue = (0, _utils.getSingleElementValue)(htmlElement);
      var expectsValue = expectedValue !== undefined;
      var expectedTypedValue = expectedValue;
      var receivedTypedValue = receivedValue;
      if (expectedValue == receivedValue && expectedValue !== receivedValue) {
        expectedTypedValue = "".concat(expectedValue, " (").concat(_typeof(expectedValue), ")");
        receivedTypedValue = "".concat(receivedValue, " (").concat(_typeof(receivedValue), ")");
      }
      result.pass = expectsValue ? (0, _utils.isEqualWith)(receivedValue, expectedValue, _utils.compareArraysAsSet) : Boolean(receivedValue);
      result.message = result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the provided ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " to have value ").concat((0, _printers.printSuccess)("".concat(expectsValue ? expectedTypedValue : '(any)')), ".\nReceived ").concat((0, _printers.printSuccess)(receivedTypedValue), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the provided ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " to have value ").concat((0, _printers.printError)("".concat(expectsValue ? expectedTypedValue : '(any)')), ".\nReceived ").concat((0, _printers.printError)(receivedTypedValue), ".")));
      return result;
    },
    negativeCompare: function negativeCompare(htmlElement, expectedValue) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      if ((0, _utils.getTag)(htmlElement) === 'input' && ['checkbox', 'radio'].includes(htmlElement.type)) {
        throw new Error((0, _printers.printSecWarning)("".concat((0, _printers.printError)('FAILED'), " input elements with ").concat((0, _printers.printWarning)('type="checkbox/radio"'), " cannot be used with ").concat((0, _printers.printWarning)('.toHaveValue()'), ". Use ").concat((0, _printers.printSuccess)('.toBeChecked()'), " for type=\"checkbox\" or ").concat((0, _printers.printSuccess)('.toHaveFormValues()'), " instead.")));
      }
      var receivedValue = (0, _utils.getSingleElementValue)(htmlElement);
      var expectsValue = expectedValue !== undefined;
      var expectedTypedValue = expectedValue;
      var receivedTypedValue = receivedValue;
      if (expectedValue == receivedValue && expectedValue !== receivedValue) {
        expectedTypedValue = "".concat(expectedValue, " (").concat(_typeof(expectedValue), ")");
        receivedTypedValue = "".concat(receivedValue, " (").concat(_typeof(receivedValue), ")");
      }
      result.pass = expectsValue ? !(0, _utils.isEqualWith)(receivedValue, expectedValue, _utils.compareArraysAsSet) : Boolean(!receivedValue);
      result.message = result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the provided ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " not to have value ").concat((0, _printers.printSuccess)("".concat(expectsValue ? expectedTypedValue : '(any)')), ".\nReceived ").concat((0, _printers.printSuccess)(receivedTypedValue), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the provided ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " not to have value ").concat((0, _printers.printError)("".concat(expectsValue ? expectedTypedValue : '(any)')), ".\nReceived ").concat((0, _printers.printError)(receivedTypedValue), ".")));
      return result;
    }
  };
}