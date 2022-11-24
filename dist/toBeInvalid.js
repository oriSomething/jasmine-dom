"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeInvalid = toBeInvalid;
exports.toBeValid = toBeValid;
var _utils = require("./utils");
var _printers = require("./printers");
var INVALID_FORM_TAGS = ['form', 'input', 'select', 'textarea'];
function isElementHavingAriaInvalid(htmlElement) {
  return htmlElement.hasAttribute('aria-invalid') && htmlElement.getAttribute('aria-invalid') !== 'false';
}
function supportsValidityMethod(htmlElement) {
  return INVALID_FORM_TAGS.includes((0, _utils.getTag)(htmlElement));
}
function isElementInvalid(htmlElement) {
  var hasAriaInvalid = isElementHavingAriaInvalid(htmlElement);
  if (supportsValidityMethod(htmlElement)) {
    return hasAriaInvalid || !htmlElement.checkValidity();
  } else {
    return hasAriaInvalid;
  }
}
function toBeInvalid() {
  return {
    compare: function compare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var isInvalid = isElementInvalid(htmlElement);
      result.pass = isInvalid;
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the element ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " to be invalid, and it ").concat((0, _printers.printSuccess)('is invalid'), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the element ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " to be invalid, and it ").concat((0, _printers.printError)("isn't invalid"), "."))));
      return result;
    },
    negativeCompare: function negativeCompare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var isValid = !isElementInvalid(htmlElement);
      result.pass = isValid;
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the element ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " not to be invalid, and it ").concat((0, _printers.printSuccess)("isn't invalid"), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the element ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " not to be invalid, and it ").concat((0, _printers.printError)('is invalid'), "."))));
      return result;
    }
  };
}
function toBeValid() {
  return {
    compare: function compare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var isValid = !isElementInvalid(htmlElement);
      result.pass = isValid;
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the element ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " to be valid, and it ").concat((0, _printers.printSuccess)('is valid'), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the element ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " to be valid, and it ").concat((0, _printers.printError)("isn't valid"), "."))));
      return result;
    },
    negativeCompare: function negativeCompare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var isInvalid = isElementInvalid(htmlElement);
      result.pass = isInvalid;
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the element ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " not to be valid, and it ").concat((0, _printers.printSuccess)("isn't valid"), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the element ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " not to be valid, and it ").concat((0, _printers.printError)('is valid'), "."))));
      return result;
    }
  };
}