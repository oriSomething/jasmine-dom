"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeRequired = toBeRequired;
var _utils = require("./utils");
var _printers = require("./printers");
var REQUIRED_FORM_TAGS = ['select', 'textarea'];
var REQUIRED_ARIA_FORM_TAGS = ['input', 'select', 'textarea'];
var REQUIRED_UNSUPPORTED_INPUT_TYPES = ['color', 'hidden', 'range', 'submit', 'image', 'reset'];
var REQUIRED_SUPPORTED_ARIA_ROLES = ['combobox', 'gridcell', 'radiogroup', 'spinbutton', 'tree'];
function isRequiredOnSupportedInput(htmlElement) {
  return (0, _utils.getTag)(htmlElement) === 'input' && htmlElement.hasAttribute('required') && (htmlElement.hasAttribute('type') && !REQUIRED_UNSUPPORTED_INPUT_TYPES.includes(htmlElement.getAttribute('type')) || !htmlElement.hasAttribute('type'));
}
function isRequiredOnFormTagsExceptInput(htmlElement) {
  return REQUIRED_FORM_TAGS.includes((0, _utils.getTag)(htmlElement)) && htmlElement.hasAttribute('required');
}
function isElementRequiredByARIA(htmlElement) {
  return htmlElement.hasAttribute('aria-required') && htmlElement.getAttribute('aria-required') === 'true' && (REQUIRED_ARIA_FORM_TAGS.includes((0, _utils.getTag)(htmlElement)) || htmlElement.hasAttribute('role') && REQUIRED_SUPPORTED_ARIA_ROLES.includes(htmlElement.getAttribute('role')));
}
function toBeRequired() {
  return {
    compare: function compare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var isRequired = isRequiredOnFormTagsExceptInput(htmlElement) || isRequiredOnSupportedInput(htmlElement) || isElementRequiredByARIA(htmlElement);
      result.pass = isRequired;
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the provided ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " element to be required, and it ").concat((0, _printers.printSuccess)('is required'), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the provided ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " element to be required, and it ").concat((0, _printers.printError)("isn't required"), "."))));
      return result;
    },
    negativeCompare: function negativeCompare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var isRequired = isRequiredOnFormTagsExceptInput(htmlElement) || isRequiredOnSupportedInput(htmlElement) || isElementRequiredByARIA(htmlElement);
      result.pass = !isRequired;
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the provided ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " element not to be required, and it ").concat((0, _printers.printSuccess)("isn't required"), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the provided ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " element not to be required, and it ").concat((0, _printers.printError)('is required'), "."))));
      return result;
    }
  };
}