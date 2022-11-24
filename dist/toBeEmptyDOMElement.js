"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeEmptyDOMElement = toBeEmptyDOMElement;
var _utils = require("./utils");
var _printers = require("./printers");
function toBeEmptyDOMElement() {
  return {
    compare: function compare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      result.pass = htmlElement.innerHTML === '';
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " to be an empty DOM element. Received: ").concat((0, _printers.printSuccess)("'".concat(htmlElement.innerHTML, "'")), "."))) : "".concat((0, _printers.printError)('FAILED'), "  ").concat((0, _printers.printSecError)("Expected ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " to be an empty DOM element. Received: ").concat((0, _printers.printError)("'".concat(htmlElement.innerHTML, "'")), "."))));
      return result;
    },
    negativeCompare: function negativeCompare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      result.pass = htmlElement.innerHTML !== '';
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " not to be an empty DOM element. Received: ").concat((0, _printers.printSuccess)("'".concat(htmlElement.innerHTML, "'"))))) : "".concat((0, _printers.printError)('FAILED'), "  ").concat((0, _printers.printSecError)("Expected ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " not to be an empty DOM element. Received: ").concat((0, _printers.printError)("'".concat(htmlElement.innerHTML, "'")), "."))));
      return result;
    }
  };
}