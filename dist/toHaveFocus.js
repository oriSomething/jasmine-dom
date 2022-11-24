"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveFocus = toHaveFocus;
var _utils = require("./utils");
var _printers = require("./printers");
function toHaveFocus() {
  return {
    compare: function compare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      result.pass = htmlElement.ownerDocument.activeElement === htmlElement;
      result.message = result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the provided ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " element to have focus."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the provided ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " element to have focus.")));
      return result;
    },
    negativeCompare: function negativeCompare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      result.pass = htmlElement.ownerDocument.activeElement !== htmlElement;
      result.message = result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the provided ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " element not to have focus."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the provided ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " element not to have focus.")));
      return result;
    }
  };
}