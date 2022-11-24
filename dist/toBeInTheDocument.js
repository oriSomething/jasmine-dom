"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeInTheDocument = toBeInTheDocument;
var _utils = require("./utils");
var _printers = require("./printers");
function toBeInTheDocument() {
  return {
    compare: function compare(htmlElement) {
      if (htmlElement !== null) {
        (0, _utils.checkHtmlElement)(htmlElement);
      }
      var result = {};
      result.pass = htmlElement === null ? false : htmlElement.ownerDocument.contains(htmlElement);
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " element to be in the document and it ").concat((0, _printers.printSuccess)('is in the document'), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("The ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " element provided ").concat((0, _printers.printError)('could not be found in the document'), "."))));
      return result;
    },
    negativeCompare: function negativeCompare(htmlElement) {
      if (htmlElement !== null) {
        (0, _utils.checkHtmlElement)(htmlElement);
      }
      var result = {};
      result.pass = htmlElement === null ? true : !htmlElement.ownerDocument.contains(htmlElement);
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the document not to contain the provided ".concat((0, _printers.printSuccess)(htmlElement !== null ? (0, _utils.getTag)(htmlElement) : null), " element."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the document not to contain the provided ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " element."))));
      return result;
    }
  };
}