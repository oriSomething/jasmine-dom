"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBePartiallyChecked = toBePartiallyChecked;
var _utils = require("./utils");
var _printers = require("./printers");
function isValidCheckbox(htmlElement) {
  return (0, _utils.getTag)(htmlElement) === 'input' && htmlElement.type === 'checkbox';
}
function isValidAriaElement(htmlElement) {
  return htmlElement.getAttribute('role') === 'checkbox';
}
function isPartiallyChecked(htmlElement) {
  var isAriaMixed = htmlElement.getAttribute('aria-checked') === 'mixed';
  if (isValidCheckbox(htmlElement)) {
    return htmlElement.indeterminate || isAriaMixed;
  }
  return isAriaMixed;
}
function toBePartiallyChecked() {
  return {
    compare: function compare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      if (!isValidCheckbox(htmlElement) && !isValidAriaElement(htmlElement)) {
        result.pass = false;
        result.message = "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecWarning)("Only inputs with type=\"checkbox\" or elements with role=\"checkbox\" and a valid aria-checked attribute can be used with ".concat((0, _printers.printWarning)('.toBePartiallyChecked()'), ". Use ").concat((0, _printers.printSuccess)('.toHaveValue()'), " instead.")));
        return result;
      }
      result.pass = isPartiallyChecked(htmlElement);
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the element ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " to be partially checked, and it ").concat((0, _printers.printSuccess)('is partially checked'), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the element ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " to be partially checked, and it ").concat((0, _printers.printError)("isn't partially checked"), "."))));
      return result;
    },
    negativeCompare: function negativeCompare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      if (!isValidCheckbox(htmlElement) && !isValidAriaElement(htmlElement)) {
        result.pass = false;
        result.message = "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecWarning)("Only inputs with type=\"checkbox\" or elements with role=\"checkbox\" and a valid aria-checked attribute can be used with ".concat((0, _printers.printWarning)('.toBePartiallyChecked()'), ". Use ").concat((0, _printers.printSuccess)('.toHaveValue()'), " instead.")));
        return result;
      }
      result.pass = !isPartiallyChecked(htmlElement);
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the element ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " not to be partially checked, and it ").concat((0, _printers.printSuccess)("isn't partially checked"), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the element ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " not to be partially checked, and it ").concat((0, _printers.printError)('is partially checked'), "."))));
      return result;
    }
  };
}