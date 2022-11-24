"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveTextContent = toHaveTextContent;
var _utils = require("./utils");
var _printers = require("./printers");
function toHaveTextContent() {
  return {
    compare: function compare(htmlElement, checkWith) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        normalizeWhitespace: true
      };
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var textContent = options.normalizeWhitespace ? (0, _utils.normalize)(htmlElement.textContent) : htmlElement.textContent.replace(/\u00a0/g, ' ');
      var checkingWithEmptyString = textContent !== '' && checkWith === '';
      var providedArgs = checkWith !== undefined;
      result.pass = !checkingWithEmptyString && providedArgs && (0, _utils.matches)(textContent, checkWith);
      result.message = checkingWithEmptyString || !providedArgs ? "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecWarning)("Checking with an empty string will always match. Try using ".concat((0, _printers.printSuccess)('.toBeEmptyDOMElement()'), "."))) : result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected ".concat((0, _printers.printSuccess)("'".concat(htmlElement.textContent, "'")), " to match ").concat((0, _printers.printSuccess)("'".concat(checkWith, "'")), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected ".concat((0, _printers.printError)("'".concat(htmlElement.textContent, "'")), " to match ").concat((0, _printers.printError)("'".concat(checkWith, "'")), ".")));
      return result;
    },
    negativeCompare: function negativeCompare(htmlElement, checkWith) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        normalizeWhitespace: true
      };
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var textContent = options.normalizeWhitespace ? (0, _utils.normalize)(htmlElement.textContent) : htmlElement.textContent.replace(/\u00a0/g, ' ');
      var checkingWithEmptyString = textContent !== '' && checkWith === '';
      var providedArgs = checkWith !== undefined;
      result.pass = !checkingWithEmptyString && providedArgs && !(0, _utils.matches)(textContent, checkWith);
      result.message = checkingWithEmptyString || !providedArgs ? "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecWarning)("Checking with an empty string will always match. Try using ".concat((0, _printers.printSuccess)('.toBeEmptyDOMElement()'), "."))) : result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected ".concat((0, _printers.printSuccess)("'".concat(htmlElement.textContent, "'")), " not to match ").concat((0, _printers.printSuccess)("'".concat(checkWith, "'")), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected ".concat((0, _printers.printError)("'".concat(htmlElement.textContent, "'")), " not to match ").concat((0, _printers.printError)("'".concat(checkWith, "'")), ".")));
      return result;
    }
  };
}