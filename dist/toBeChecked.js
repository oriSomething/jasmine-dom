"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBeChecked = toBeChecked;
var _ariaQuery = require("aria-query");
var _utils = require("./utils");
var _printers = require("./printers");
function roleSupportsChecked(role) {
  var _roles$get;
  return ((_roles$get = _ariaQuery.roles.get(role)) === null || _roles$get === void 0 ? void 0 : _roles$get.props['aria-checked']) !== undefined;
}
function supportedRoles() {
  return Array.from(_ariaQuery.roles.keys()).filter(roleSupportsChecked);
}
function supportedRolesSentence() {
  return (0, _utils.toSentence)(supportedRoles().map(function (role) {
    return "role=\"".concat(role, "\"");
  }), {
    lastWordConnector: ' or '
  });
}
function isValidInput(htmlElement) {
  return (0, _utils.getTag)(htmlElement) === 'input' && ['checkbox', 'radio'].includes(htmlElement.type);
}
function isValidAriaElement(htmlElement) {
  return roleSupportsChecked(htmlElement.getAttribute('role')) && ['true', 'false'].includes(htmlElement.getAttribute('aria-checked'));
}
function isChecked(htmlElement) {
  if (isValidInput(htmlElement)) return htmlElement.checked;
  return htmlElement.getAttribute('aria-checked') === 'true';
}
function toBeChecked() {
  return {
    compare: function compare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var validInput = isValidInput(htmlElement);
      var validAriaElement = isValidAriaElement(htmlElement);
      if (!validInput && !validAriaElement) {
        result.pass = false;
        result.message = "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecWarning)("Only inputs with type='checkbox/radio' or elements with ".concat(supportedRolesSentence(), " and a valid aria-checked attribute can be used with ").concat((0, _printers.printWarning)('.toBeChecked'), ". Use ").concat((0, _printers.printSuccess)(".toHaveValue()"), " instead.")));
        return result;
      }
      var checkedInput = isChecked(htmlElement);
      result.pass = checkedInput;
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the element ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " to be checked and it ").concat((0, _printers.printSuccess)('is checked'), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the element ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " ").concat((0, _printers.printError)("type=\"".concat(htmlElement.type, "\"")), " to be checked and it ").concat((0, _printers.printError)("isn't checked"), "."))));
      return result;
    },
    negativeCompare: function negativeCompare(htmlElement) {
      (0, _utils.checkHtmlElement)(htmlElement);
      var result = {};
      var validInput = isValidInput(htmlElement);
      var validAriaElement = isValidAriaElement(htmlElement);
      if (!validInput && !validAriaElement) {
        result.pass = false;
        result.message = "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecWarning)("Only inputs with type='checkbox/radio' or elements with role='checkbox/radio/switch' and a valid aria-checked attribute can be used with"), " ").concat((0, _printers.printWarning)(".toBeChecked()")).concat((0, _printers.printSecWarning)('. Use'), " ").concat((0, _printers.printSuccess)(".toHaveValue()")).concat((0, _printers.printSecWarning)(' instead.'));
        return result;
      }
      var notCheckedInput = !isChecked(htmlElement);
      result.pass = notCheckedInput;
      result.message = "".concat(result.pass ? "".concat((0, _printers.printSuccess)('PASSED'), " ").concat((0, _printers.printSecSuccess)("Expected the element ".concat((0, _printers.printSuccess)((0, _utils.getTag)(htmlElement)), " not to be checked and it ").concat((0, _printers.printSuccess)("isn't checked"), "."))) : "".concat((0, _printers.printError)('FAILED'), " ").concat((0, _printers.printSecError)("Expected the element ".concat((0, _printers.printError)((0, _utils.getTag)(htmlElement)), " ").concat((0, _printers.printError)("type=\"".concat(htmlElement.type, "\"")), " not to be checked and it ").concat((0, _printers.printError)('is checked'), "."))));
      return result;
    }
  };
}