webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/Image.js":
/*!************************!*\
  !*** ./pages/Image.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/saraht/repo/diUS/bench_story/itchy-feet-revisited/pages/Image.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  cursor: pointer;\n  width: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: none;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.5);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  ", ":hover & {\n    display: flex !important;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  margin-right: 20px;\n  svg {\n    margin-right: 10px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  flex-basis: 100%;\n  flex-basis: calc(33.333% - 20px);\n  margin: 10px;\n  cursor: pointer;\n  transition: 0.5s all ease-in;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ImgContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var ImgIcons = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var ImgMeta = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3(), ImgContainer);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject4());

function Image(_ref) {
  var image = _ref.image;
  return __jsx(ImgContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(Img, {
    src: image.source,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(ImgMeta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(ImgIcons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("img", {
    src: "/price.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), " ", image.pricing)));
}

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ })

})
//# sourceMappingURL=home.js.e6ec8a7600db9874f529.hot-update.js.map