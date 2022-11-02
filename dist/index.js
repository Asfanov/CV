/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var _style_minimal_css_reset_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/minimal-css-reset.scss */ \"./src/style/minimal-css-reset.scss\");\n/* harmony import */ var _style_base_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/base.scss */ \"./src/style/base.scss\");\n/* harmony import */ var _style_language_switch_botton_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/language-switch-botton.scss */ \"./src/style/language-switch-botton.scss\");\n/* harmony import */ var _style_header_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/header.scss */ \"./src/style/header.scss\");\n/* harmony import */ var _style_section_1_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/section-1.scss */ \"./src/style/section-1.scss\");\n/* harmony import */ var _style_section_2_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style/section-2.scss */ \"./src/style/section-2.scss\");\n/* harmony import */ var _scripts_switch_language_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/switch-language.js */ \"./src/scripts/switch-language.js\");\n/* harmony import */ var _scripts_switch_language_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scripts_switch_language_js__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\n\n// scripts\n\n\n\n//# sourceURL=webpack://asfanov_cv/./src/scripts.js?");

/***/ }),

/***/ "./src/scripts/switch-language.js":
/*!****************************************!*\
  !*** ./src/scripts/switch-language.js ***!
  \****************************************/
/***/ (() => {

eval("const russians = document.querySelectorAll('.russian');\nconst englishs = document.querySelectorAll('.english');\nconst language = document.querySelectorAll('input[type=\"radio\"]');\n\n\nlanguage.forEach(input => {\n  input.addEventListener('change', switchLanguage)\n})\n\nfunction switchLanguage(element) {\n  let lang = element.target.value;\n\n  if (lang === 'ru') {\n    russians.forEach(item => {\n      item.classList.remove('hidden')\n    })\n    englishs.forEach(item => {\n      item.classList.add('hidden')\n    })\n  } else {\n    russians.forEach(item => {\n      item.classList.add('hidden')\n    })\n    englishs.forEach(item => {\n      item.classList.remove('hidden')\n    })\n  }\n  \n}\n\n\n//# sourceURL=webpack://asfanov_cv/./src/scripts/switch-language.js?");

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b88d04fba731603756b1.css\";\n\n//# sourceURL=webpack://asfanov_cv/./node_modules/normalize.css/normalize.css?");

/***/ }),

/***/ "./src/style/base.scss":
/*!*****************************!*\
  !*** ./src/style/base.scss ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b88d04fba731603756b1.scss\";\n\n//# sourceURL=webpack://asfanov_cv/./src/style/base.scss?");

/***/ }),

/***/ "./src/style/header.scss":
/*!*******************************!*\
  !*** ./src/style/header.scss ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b88d04fba731603756b1.scss\";\n\n//# sourceURL=webpack://asfanov_cv/./src/style/header.scss?");

/***/ }),

/***/ "./src/style/language-switch-botton.scss":
/*!***********************************************!*\
  !*** ./src/style/language-switch-botton.scss ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b88d04fba731603756b1.scss\";\n\n//# sourceURL=webpack://asfanov_cv/./src/style/language-switch-botton.scss?");

/***/ }),

/***/ "./src/style/minimal-css-reset.scss":
/*!******************************************!*\
  !*** ./src/style/minimal-css-reset.scss ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b88d04fba731603756b1.scss\";\n\n//# sourceURL=webpack://asfanov_cv/./src/style/minimal-css-reset.scss?");

/***/ }),

/***/ "./src/style/section-1.scss":
/*!**********************************!*\
  !*** ./src/style/section-1.scss ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b88d04fba731603756b1.scss\";\n\n//# sourceURL=webpack://asfanov_cv/./src/style/section-1.scss?");

/***/ }),

/***/ "./src/style/section-2.scss":
/*!**********************************!*\
  !*** ./src/style/section-2.scss ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b88d04fba731603756b1.scss\";\n\n//# sourceURL=webpack://asfanov_cv/./src/style/section-2.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts.js");
/******/ 	
/******/ })()
;