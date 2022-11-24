"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeVisible = toBeVisible;
var _utils = require("./utils");
var _printers = require("./printers");
function isStyleVisible(htmlElement) {
  var getComputedStyle = htmlElement.ownerDocument.defaultView.getComputedStyle;
  var _getComputedStyle = getComputedStyle(htmlElement),
    display = _getComputedStyle.display,
    visibility = _getComputedStyle.visibility,
    opacity = _getComputedStyle.opacity;
  return display !== 'none' && visibility !== 'hidden' && visibility !== 'collapse' && opacity !== '0' && opacity !== 0;
}
function isAttributeVisible(htmlElement, previousElement) {
  return !htmlElement.hasAttribute('hidden') && (htmlElement.nodeName === 'DETAILS' && previousElement.nodeName !== 'SUMMARY' ? htmlElement.hasAttribute('open') : true);
}
function isElementVisible(htmlElement, previousElement) {
  return isStyleVisible(htmlElement) && isAttributeVisible(htmlElement, previousElement) && (!htmlElement.parentElement || isElementVisible(htmlElement.parentElement, htmlElement));
}
function toBeVisible() {
  return {
    compare: function compare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var isVisible = isElementVisible(htmlElement);
      result.pass = isVisible;
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the provided ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " element to be visible and it ").concat((0, _printers.printSuccess)('is visible'), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the provided ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " element to be visible and it ").concat((0, _printers.printError)("isn't visible"), ".")), " \n\uD83E\uDD14 ").concat((0, _printers.printSecWarning)("Take a look at the ".concat((0, _printers.printWarning)('display'), ", ").concat((0, _printers.printWarning)('visibility'), " and ").concat((0, _printers.printWarning)('opacity'), " CSS properties of the provided element and the elements up on to the top of the DOM tree."))));
      return result;
    },
    negativeCompare: function negativeCompare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var isVisible = isElementVisible(htmlElement);
      result.pass = !isVisible;
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the provided ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " element not to be visible and it ").concat((0, _printers.printSuccess)("isn't visible"), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the provided ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " element not to be visible and it ").concat((0, _printers.printError)('is visible'), ".")), " \n\uD83E\uDD14 ").concat((0, _printers.printSecWarning)("Take a look at the ".concat((0, _printers.printWarning)('display'), ", ").concat((0, _printers.printWarning)('visibility'), " and ").concat((0, _printers.printWarning)('opacity'), " CSS properties of the provided element and the elements up on to the top of the DOM tree."))));
      return result;
    }
  };
}