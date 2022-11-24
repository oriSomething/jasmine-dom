"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHaveDisplayValue = toHaveDisplayValue;
var _utils = require("./utils");
var _printers = require("./printers");
function getValues(tagName, htmlElement) {
  return tagName === 'select' ? Array.from(htmlElement).filter(function (option) {
    return option.selected;
  }).map(function (option) {
    return option.textContent;
  }) : [htmlElement.value];
}
function getExpectedValues(expectedValue) {
  return expectedValue instanceof Array ? expectedValue : [expectedValue];
}
function getNumberOfMatchesBetweenArrays(arrayBase, array) {
  return array.filter(function (expected) {
    return arrayBase.filter(function (value) {
      return (0, _utils.matches)(value, expected);
    }).length;
  }).length;
}
function toHaveDisplayValue() {
  return {
    compare: function compare(htmlElement, expectedValue) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var tagName = (0, _utils.getTag)(htmlElement);
      if (!['select', 'input', 'textarea'].includes(tagName)) {
        throw new Error((0, _printers.printSecWarning)("".concat((0, _printers.printError)('FAILED'), " .toHaveDisplayValue() supports only ").concat((0, _printers.printWarning)('input'), ", ").concat((0, _printers.printWarning)('textarea'), " or ").concat((0, _printers.printWarning)('select'), " elements. Try using another matcher instead.")));
      }
      if (tagName === 'input' && ['radio', 'checkbox'].includes(htmlElement.type)) {
        throw new Error((0, _printers.printSecWarning)("".concat((0, _printers.printError)('FAILED'), " .toHaveDisplayValue() currently does not support ").concat((0, _printers.printWarning)("input[type=\"".concat(htmlElement.type, "\"]")), ", try with another matcher instead.")));
      }
      var values = getValues(tagName, htmlElement);
      var expectedValues = getExpectedValues(expectedValue);
      var numberOfMatchesWithValues = getNumberOfMatchesBetweenArrays(values, expectedValues);
      var matchedWithAllValues = numberOfMatchesWithValues === values.length;
      var matchedWithAllExpectedValues = numberOfMatchesWithValues === expectedValues.length;
      result.pass = matchedWithAllValues && matchedWithAllExpectedValues;
      result.message = result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the element ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " to have display value ").concat((0, _printers.printSuccess)("'".concat(expectedValue, "'")), ". Received ").concat((0, _printers.printSuccess)("'".concat(values, "'"))))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the element ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " to have display value ").concat((0, _printers.printError)("'".concat(expectedValue, "'")), ". Received ").concat((0, _printers.printError)("'".concat(values, "'")))));
      return result;
    },
    negativeCompare: function negativeCompare(htmlElement, expectedValue) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var tagName = (0, _utils.getTag)(htmlElement);
      if (!['select', 'input', 'textarea'].includes(tagName)) {
        throw new Error((0, _printers.printSecWarning)("".concat((0, _printers.printError)('FAILED'), " .toHaveDisplayValue() supports only ").concat((0, _printers.printWarning)('input'), ", ").concat((0, _printers.printWarning)('textarea'), " or ").concat((0, _printers.printWarning)('select'), " elements. Try using another matcher instead.")));
      }
      var values = getValues(tagName, htmlElement);
      var expectedValues = getExpectedValues(expectedValue);
      var numberOfMatchesWithValues = getNumberOfMatchesBetweenArrays(values, expectedValues);
      var matchedWithAllValues = numberOfMatchesWithValues === values.length;
      var matchedWithAllExpectedValues = numberOfMatchesWithValues === expectedValues.length;
      result.pass = !(matchedWithAllValues && matchedWithAllExpectedValues);
      result.message = result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the element ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " not to have display value ").concat((0, _printers.printSuccess)("'".concat(expectedValue, "'")), ". Received ").concat((0, _printers.printSuccess)("'".concat(values, "'"))))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the element ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " not to have display value ").concat((0, _printers.printError)("'".concat(expectedValue, "'")), ". Received ").concat((0, _printers.printError)("'".concat(values, "'")))));
      return result;
    }
  };
}