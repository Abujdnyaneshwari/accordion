"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
exports.Content = Content;
exports.Title = Title;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Accordion(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
}

function AccordionItem(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
}

function Title(props) {
  console.log("props", props);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({}, props.style),
    "data-accordion-title": true
  }, props.children);
}

function Content(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({}, props.style),
    "data-accordion-title": true
  }, props.children);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalAccordion = HorizontalAccordion;
exports.HorizontalAccordionItem = HorizontalAccordionItem;
exports.HorizontalContent = HorizontalContent;
exports.HorizontalTitle = HorizontalTitle;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function HorizontalAccordion(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
}

function HorizontalAccordionItem(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
}

function HorizontalTitle(props) {
  console.log("props", props);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({}, props.style),
    "data-accordion-title": true
  }, props.children);
}

function HorizontalContent(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({}, props.style),
    "data-accordion-title": true
  }, props.children);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
exports.Content = Content;
exports.Title = Title;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Accordion(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
}

function AccordionItem(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
}

function Title(props) {
  console.log("props", props);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({}, props.style),
    "data-accordion-title": true
  }, props.children);
}

function Content(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({}, props.style),
    "data-accordion-title": true
  }, props.children);
}
