"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toContainElement = toContainElement;
var _utils = require("./utils");
var _printers = require("./printers");
function toContainElement() {
  return {
    compare: function compare(container, htmlElement) {
      (0, _utils.checkHtmlElement)(container);
      var result = {};
      if (htmlElement !== null) {
        (0, _utils.checkHtmlElement)(htmlElement);
      }
      result.pass = container.contains(htmlElement);
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the element ".concat((0, _printers.printSuccess)((0, _utils.getTag)(container)), " to contain ").concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement))))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the element ".concat((0, _printers.printError)((0, _utils.getTag)(container)), " to contain ").concat((0, _printers.printError)((0, _utils.getTag)(htmlElement))))));
      return result;
    },
    negativeCompare: function negativeCompare(container, htmlElement) {
      (0, _utils.checkHtmlElement)(container);
      var result = {};
      if (htmlElement !== null) {
        (0, _utils.checkHtmlElement)(htmlElement);
      }
      result.pass = !container.contains(htmlElement);
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the element ".concat((0, _printers.printSuccess)((0, _utils.getTag)(container)), " not to contain ").concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement))))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the element ".concat((0, _printers.printError)((0, _utils.getTag)(container)), " not to contain ").concat((0, _printers.printError)((0, _utils.getTag)(htmlElement))))));
      return result;
    }
  };
}