module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Header.js":
/*!*************************!*\
  !*** ./pages/Header.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/saraht/repo/diUS/bench_story/itchy-feet-revisited/pages/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Nav = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0,0,0,.0975);
`;
const NavHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
const NavLeft = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 33.333%;
  text-align: left;
`;
const NavCenter = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 33.333%;
  text-align: center;
`;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  outline: 0;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
  &:active, &:focus {
    text-align: left;
  }
`;
const NavRight = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 33.333%;
  text-align: right;
  svg {
    margin-right: 20px;
  }
`;
const MenuLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a`
`;

const Header = () => __jsx(Nav, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, __jsx(NavHeader, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx(NavLeft, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, "Itchy-Feet"), __jsx(NavCenter, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx(Input, {
  type: "text",
  placeholder: "Search",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
})), __jsx(NavRight, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, __jsx(MenuLink, {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, __jsx("img", {
  src: "/avatar.svg",
  alt: "my image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
})))));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/Image.js":
/*!************************!*\
  !*** ./pages/Image.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/saraht/repo/diUS/bench_story/itchy-feet-revisited/pages/Image.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ImgContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative;
  flex-basis: 100%;
  flex-basis: calc(33.333% - 20px);
  margin: 10px;
  cursor: pointer;
  transition: 0.5s all ease-in;
`;
const ImgIcons = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-right: 20px;
  svg {
    margin-right: 10px;
  }
`;
const ImgMeta = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ${ImgContainer}:hover & {
    display: flex !important;
  }
`;
const Img = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
  cursor: pointer;
  width: 100%;
`;

function Image({
  image
}) {
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

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image.js */ "./pages/Image.js");
/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.js */ "./pages/Header.js");
var _jsxFileName = "/Users/saraht/repo/diUS/bench_story/itchy-feet-revisited/pages/home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AppWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  background-color: #fafafa;
`;
const feedsource = [{
  source: '/travel1.jpeg',
  pricing: '300 AUD',
  isVideo: false,
  id: 0
}, {
  source: '/travel2.jpeg',
  pricing: '100 AUD',
  isVideo: true,
  id: 1
}, {
  source: '/travel3.jpeg',
  pricing: '200 AUD',
  isVideo: false,
  id: 2
}, {
  source: '/travel1.jpeg',
  pricing: '200 AUD',
  isVideo: false,
  id: 3
}, {
  source: '/travel2.jpeg',
  pricing: '400 AUD',
  isVideo: false,
  id: 4
}, {
  source: '/travel3.jpeg',
  pricing: '450 AUD',
  isVideo: false,
  id: 4
}];
const ProfileContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  max-width: 1010px;
  width: 100%;
  margin: 20px auto;
`;
const ProfileDetails = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
`;
const ProfileDetailsLeft = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  margin-right: 40px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProfileDetailsRight = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
`;
const ProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
  border-radius: 50%;
  width: 150px;
  border: 1px solid #ccc;
  padding: 5px;
`;
const ProfileDetailsUsername = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const EditProfileButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  background-color: transparent;
  border: 1px solid #dbdbdb;
  color: #262626;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  padding: 5px 9px;
  text-transform: capitalize;
  font-size: 14px;
  margin-left: 20px;
`;
const SurpriseButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  background-color: orange;
  border: 1px solid #dbdbdb;
  color: #262626;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  font-weight: 300;
  padding: 5px 9px;
  height:40px;
  text-transform: capitalize;
  text-align: center;
  font-size: 24px;
  margin-left: 400px;
  margin-right: 400px;
 
`;
const HeadingThreeText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3``;
const ParagraphText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
  margin-right: 25px;
`;
const ProfileDetailsMeta = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: center;
`;
const ProfileDetailsName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  text-align: left;
`;
const ProfileAnnounce = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  text-align: left;
  color: orange;
  font-size: 24px;
`;
const ImagesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;

function Home() {
  return __jsx(AppWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(_Header_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), __jsx(ProfileContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(ProfileDetails, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(ProfileDetailsLeft, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx(ProfileImage, {
    src: "https://api.adorable.io/avatars/285/abott@adorable.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  })), __jsx(ProfileDetailsRight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx(ProfileDetailsUsername, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(HeadingThreeText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Sarah Tabassun"), __jsx(EditProfileButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Edit profile")), __jsx(ProfileDetailsMeta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx(ParagraphText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, " Preferred Location : Australia/ Sydney ")), __jsx(ProfileAnnounce, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx(ParagraphText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Today's top destinations for you"))))), __jsx(ImagesWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, feedsource.map(item => __jsx(_Image_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: item,
    key: item.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  })))), __jsx(SurpriseButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Surprise Me!"));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/saraht/repo/diUS/bench_story/itchy-feet-revisited/pages/home.js */"./pages/home.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=home.js.map