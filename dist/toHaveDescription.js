"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveDescription = toHaveDescription;
var _utils = require("./utils");
var _printers = require("./printers");
function toHaveDescription(util) {
  return {
    compare: function compare(htmlElement, checkWith) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var description = '';
      var expectsDescription = checkWith !== undefined;
      var descriptionIDRaw = htmlElement.getAttribute('aria-describedby') || '';
      var descriptionIDs = descriptionIDRaw.split(/\s+/).filter(Boolean);
      if (descriptionIDs.length > 0) {
        var document = htmlElement.ownerDocument;
        var descriptionElements = descriptionIDs.map(function (descriptionID) {
          return document.getElementById(descriptionID);
        }).filter(Boolean);
        description = (0, _utils.normalize)(descriptionElements.map(function (element) {
          return element.textContent;
        }).join(' '));
      }
      result.pass = expectsDescription ? checkWith instanceof RegExp ? checkWith.test(description) : util.equals(description, checkWith) : Boolean(description);
      checkWith === undefined ? checkWith = '' : null;
      result.message = result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " element to have description ").concat((0, _printers.printSuccess)("'".concat(checkWith, "'")), ". Received ").concat((0, _printers.printSuccess)("'".concat(description, "'")), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " element to have description ").concat((0, _printers.printError)("'".concat(checkWith, "'")), ". Received ").concat((0, _printers.printError)("'".concat(description, "'")), ".")));
      return result;
    },
    negativeCompare: function negativeCompare(htmlElement, checkWith) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var description = '';
      var expectsNotDescription = checkWith !== undefined;
      var descriptionIDRaw = htmlElement.getAttribute('aria-describedby') || '';
      var descriptionIDs = descriptionIDRaw.split(/\s+/).filter(Boolean);
      if (descriptionIDs.length > 0) {
        var document = htmlElement.ownerDocument;
        var descriptionElements = descriptionIDs.map(function (descriptionID) {
          return document.getElementById(descriptionID);
        }).filter(Boolean);
        description = (0, _utils.normalize)(descriptionElements.map(function (element) {
          return element.textContent;
        }).join(' '));
      }
      result.pass = expectsNotDescription ? checkWith instanceof RegExp ? !checkWith.test(description) : !util.equals(description, checkWith) : !Boolean(description);
      checkWith === undefined ? checkWith = '' : null;
      result.message = result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " element not to have description ").concat((0, _printers.printSuccess)("'".concat(checkWith, "'")), ". Received ").concat((0, _printers.printSuccess)("'".concat(description, "'")), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " element not to have description ").concat((0, _printers.printError)("'".concat(checkWith, "'")), ". Received ").concat((0, _printers.printError)("'".concat(description, "'")), ".")));
      return result;
    }
  };
}