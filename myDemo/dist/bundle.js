/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _randomDigit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomDigit */ \"./randomDigit.js\");\n/* harmony import */ var _randomDigit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_randomDigit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./square */ \"./square.js\");\n/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_square__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconsole.log(1);\r\nconsole.log(_randomDigit__WEBPACK_IMPORTED_MODULE_0___default()(100), _square__WEBPACK_IMPORTED_MODULE_1___default()(3, 3));\r\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./randomDigit.js":
/*!************************!*\
  !*** ./randomDigit.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (limitR) {\r\n  limitR = limitR || 10;\r\n  var random = Math.random;\r\n  var len = String(limitR).length;\r\n  var digit = 1;\r\n  for (var i = 0; i < len; i++) {\r\n    digit = 10 * digit;\r\n  }\r\n  var result;\r\n  var count = 0;\r\n  while (result === undefined && count < 100) {\r\n    var counts = parseInt(random() * digit);\r\n    if (counts < limitR) result = counts;\r\n    count++;\r\n  }\r\n  random = null;\r\n  return count === 100 ? 0 : result;\r\n};\r\n\n\n//# sourceURL=webpack:///./randomDigit.js?");

/***/ }),

/***/ "./square.js":
/*!*******************!*\
  !*** ./square.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (_parmas, _square) {\r\n  var normal = _parmas;\r\n  for (var i = 0; i < _square.length - 1; i++) {\r\n    normal = normal * _parmas;\r\n  }\r\n  return normal;\r\n};\r\n\n\n//# sourceURL=webpack:///./square.js?");

/***/ })

/******/ });