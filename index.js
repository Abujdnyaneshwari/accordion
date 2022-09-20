"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
exports.Content = Content;
exports.Title = Title;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AccordionContext = /*#__PURE__*/(0, _react.createContext)();

function Accordion(props) {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      activeIndex = _useState2[0],
      setActiveIndex = _useState2[1];

  var visibleContentByIndexForItems = {};
  props.children.forEach(function (child, index) {
    visibleContentByIndexForItems[index] = false;
  });

  var _useState3 = (0, _react.useState)(visibleContentByIndexForItems),
      _useState4 = _slicedToArray(_useState3, 2),
      visibleContentByIndex = _useState4[0],
      setVisibleContentByIndex = _useState4[1];

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: styles.accordionContainer,
    style: _objectSpread({}, props)
  }, props.children.map(function (child, index) {
    return /*#__PURE__*/_react["default"].createElement(AccordionContext.Provider, {
      value: {
        index: index,
        activeIndex: activeIndex,
        setActiveIndex: setActiveIndex,
        visibleContentByIndex: visibleContentByIndex,
        setVisibleContentByIndex: setVisibleContentByIndex,
        visibleContentByIndexForItems: visibleContentByIndexForItems
      }
    }, child);
  }));
}

function AccordionItem(props) {
  var _useContext = (0, _react.useContext)(AccordionContext),
      index = _useContext.index,
      setActiveIndex = _useContext.setActiveIndex,
      visibleContentByIndex = _useContext.visibleContentByIndex,
      setVisibleContentByIndex = _useContext.setVisibleContentByIndex,
      visibleContentByIndexForItems = _useContext.visibleContentByIndexForItems;

  var selectAsActiveIndex = function selectAsActiveIndex(e) {
    setActiveIndex(index);
    setVisibleContentByIndex(_objectSpread(_objectSpread({}, visibleContentByIndexForItems), {}, _defineProperty({}, index, !visibleContentByIndex[index])));
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: styles.accordionItem,
    onClick: selectAsActiveIndex
  }, props.children(visibleContentByIndex[index]));
}

function Title(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: styles.title,
    "data-accordion-title": true
  }, props.children);
}

function Content(props) {
  var _useContext2 = (0, _react.useContext)(AccordionContext),
      index = _useContext2.index,
      activeIndex = _useContext2.activeIndex,
      visibleContentByIndex = _useContext2.visibleContentByIndex;

  var contentRef = (0, _react.useRef)();

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      scrollHeight = _useState6[0],
      setScrollHeight = _useState6[1];

  var isIndex = index === activeIndex;
  var contentIsVisible = visibleContentByIndex[index];
  (0, _react.useEffect)(function () {
    var scrollHeight = contentRef.current.scrollHeight;
    setScrollHeight(scrollHeight);
  }, []);
  var style = {
    maxHeight: isIndex && contentIsVisible ? "".concat(scrollHeight, "px") : '0px'
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: contentRef,
    className: styles.content,
    style: _objectSpread({}, style)
  }, props.children);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Accordion;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Accordion() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Hello"));
}
