"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeDisabled = toBeDisabled;
exports.toBeEnabled = toBeEnabled;
var _utils = require("./utils");
var _printers = require("./printers");
var DISABLED_FORM_TAGS = ['fieldset', 'input', 'select', 'optgroup', 'option', 'button', 'textarea'];
function isFirstLegendChildOfFieldset(htmlElement, parentElement) {
  return (0, _utils.getTag)(htmlElement) === 'legend' && (0, _utils.getTag)(parentElement) === 'fieldset' && htmlElement.isSameNode(Array.from(parentElement.children).find(function (child) {
    return (0, _utils.getTag)(child) === 'legend';
  }));
}
function canElementBeDisabled(htmlElement) {
  return DISABLED_FORM_TAGS.includes((0, _utils.getTag)(htmlElement));
}
function isElementDisabled(htmlElement) {
  return canElementBeDisabled(htmlElement) && htmlElement.hasAttribute('disabled');
}
function isElementDisabledByParent(htmlElement, parentElement) {
  return isElementDisabled(parentElement) && !isFirstLegendChildOfFieldset(htmlElement, parentElement);
}
function isAncestorDisabled(htmlElement) {
  var parent = htmlElement.parentElement;
  return Boolean(parent) && (isElementDisabledByParent(htmlElement, parent) || isAncestorDisabled(parent));
}
function isElementOrAncestorDisabled(htmlElement) {
  return canElementBeDisabled(htmlElement) && (isElementDisabled(htmlElement) || isAncestorDisabled(htmlElement));
}
function toBeDisabled() {
  return {
    compare: function compare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var isDisabled = isElementOrAncestorDisabled(htmlElement);
      result.pass = isDisabled;
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the element ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " to be disabled and it ").concat((0, _printers.printSuccess)('is disabled'), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the element ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " to be disabled and it ").concat((0, _printers.printError)("isn't disabled"), "."))));
      return result;
    },
    negativeCompare: function negativeCompare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var isNotDisabled = !isElementOrAncestorDisabled(htmlElement);
      result.pass = isNotDisabled;
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the element ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " not to be disabled and it ").concat((0, _printers.printSuccess)("isn't disabled"), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the element ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " not to be disabled and it ").concat((0, _printers.printError)('is disabled'), "."))));
      return result;
    }
  };
}
function toBeEnabled() {
  return {
    compare: function compare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var isEnabled = !isElementOrAncestorDisabled(htmlElement);
      result.pass = isEnabled;
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the element ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " to be enabled and it ").concat((0, _printers.printSuccess)('is enabled'), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the element ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " to be enabled and it ").concat((0, _printers.printError)("isn't enabled"), "."))));
      return result;
    },
    negativeCompare: function negativeCompare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var isEnabled = !isElementOrAncestorDisabled(htmlElement);
      result.pass = !isEnabled;
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the element ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " not to be enabled and it ").concat((0, _printers.printSuccess)("isn't enabled"), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the element ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " not to be enabled and it ").concat((0, _printers.printError)('is enabled'), "."))));
      return result;
    }
  };
}