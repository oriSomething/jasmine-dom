"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printError = printError;
exports.printSecError = printSecError;
exports.printSecSuccess = printSecSuccess;
exports.printSecWarning = printSecWarning;
exports.printSuccess = printSuccess;
exports.printWarning = printWarning;
var _chalk = _interopRequireDefault(require("chalk"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function printError(message) {
  return _chalk["default"].bgRedBright.black(message);
}
function printSecError(message) {
  return _chalk["default"].redBright(message);
}
function printSuccess(message) {
  return _chalk["default"].bgGreenBright.black(message);
}
function printSecSuccess(message) {
  return _chalk["default"].greenBright(message);
}
function printWarning(message) {
  return _chalk["default"].bgYellow.black(message);
}
function printSecWarning(message) {
  return _chalk["default"].yellow(message);
}