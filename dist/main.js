/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  height: 100vh;\\n  width: 100vw;\\n}\\n\\n.container {\\n  background-color: #333;\\n  display: grid;\\n  height: 100vh;\\n  width: 100vw;\\n  grid-template-columns: 1fr 2vw 17% 28% 1fr;\\n  grid-template-rows: auto 2vw 30% 52% 1fr;\\n  position: relative;\\n}\\n\\n.main-header {\\n  align-self: center;\\n  margin: 0;\\n  padding: 5px;\\n  padding-left: 5vw;\\n  font-size: 40px;\\n  color: antiquewhite;\\n  letter-spacing: 0px;\\n  text-shadow: 0.5px 0.5px white;\\n  cursor: default;\\n}\\n\\n.number-index {\\n  margin: 0;\\n  justify-content: stretch;\\n  flex: 1;\\n  display: inline-block;\\n  text-align: center;\\n}\\n\\n.top-number-index {\\n  grid-area: 2 / 3 / 3 / 4;\\n  display: flex;\\n  color: #ddd;\\n  align-self: flex-end;\\n  cursor: default;\\n}\\n\\n.top-left-letter-index {\\n  grid-area: 3 / 2 / 4 / 3;\\n  height: 100%;\\n  margin: 0;\\n  color: #ddd;\\n  display: grid;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.letter-index {\\n  display: inline-block;\\n  text-align: center;\\n  margin: 0;\\n  position: relative;\\n  cursor: default;\\n}\\n\\n.player-grid {\\n  justify-self: center;\\n  align-self: center;\\n  grid-area: 3 / 3 / 4 / 4;\\n  display: grid;\\n  width: 100%;\\n  height: 100%;\\n  transition: all 500ms cubic-bezier(0.63, 0.2, 0.85, 1.58);\\n  z-index: 1001;\\n}\\n\\n.bottom-number-index {\\n  grid-area: 3 / 4 / 4 / 5;\\n  display: flex;\\n  padding-bottom: 2px;\\n  color: #ddd;\\n  justify-content: center;\\n  align-self: flex-end;\\n}\\n.bottom-number-index p {\\n  font-size: 34px;\\n  display: inline-block;\\n  text-align: center;\\n  position: relative;\\n  cursor: default;\\n}\\n.bottom-number-index p::after {\\n  content: '';\\n  position: absolute;\\n  left: 52%;\\n  bottom: 30px;\\n  height: 3px;\\n  width: 100%;\\n  background: #ddd;\\n  transform: rotate(90deg);\\n}\\n\\n.bottom-left-letter-index {\\n  grid-area: 4 / 3 / 5 / 4;\\n  height: 100%;\\n  margin: 0;\\n  color: #ddd;\\n  display: grid;\\n  justify-content: flex-end;\\n  align-items: center;\\n  font-weight: 900;\\n}\\n\\n.bottom-left-letter-index p {\\n  padding: 10px;\\n  padding-right: 20px;\\n}\\n\\n.bottom-left-letter-index p::after {\\n  content: '';\\n  position: absolute;\\n  left: -40%;\\n  bottom: -10%;\\n  height: 3px;\\n  width: 110%;\\n  background: #ddd;\\n}\\n\\n.computer-grid {\\n  justify-self: center;\\n  align-self: center;\\n  grid-area: 4 / 4 / 5 / 5;\\n  display: grid;\\n  width: 100%;\\n  height: 100%;\\n  transition: all 500ms cubic-bezier(0.63, 0.2, 0.85, 1.58);\\n}\\n\\n.row {\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgb(114, 114, 170);\\n  display: grid;\\n  grid-auto-flow: column;\\n}\\n\\n.cell {\\n  width: 100%;\\n  height: 100%;\\n  background-color: #ddd;\\n  border: 2px solid black;\\n  transition: all 700ms cubic-bezier(0, 2.14, 0.73, 2.14);\\n  display: grid;\\n  justify-content: center;\\n  font-size: 0;\\n  align-items: center;\\n  color: red;\\n  cursor: pointer;\\n}\\n\\n.cell.over {\\n  border: 2px dotted #666;\\n}\\n\\n.open-drawer {\\n  grid-area: 4 / 1 / 5 / 2;\\n  width: 100px;\\n  height: 50px;\\n  background-color: #333;\\n  border-top-left-radius: 110px;\\n  border-top-right-radius: 110px;\\n  border: 10px solid burlywood;\\n  border-bottom: 0;\\n  transform: rotate(90deg) translateY(30px);\\n  position: absolute;\\n  box-shadow: inset 0 0 10px #000000;\\n  transition: all 200ms ease;\\n  z-index: 1001;\\n}\\n\\n.slide-open {\\n  transform: translateX(180px) rotate(90deg);\\n}\\n\\n.shelf {\\n  width: 200px;\\n  height: 500px;\\n  bottom: 40%;\\n  background-color: rgb(49, 45, 45);\\n  grid-area: 4 / 1 / 5 / 2;\\n  position: absolute;\\n  border: 5px solid burlywood;\\n  transform: translateX(-210px);\\n  transition: all 200ms ease;\\n  filter: drop-shadow(0px 0px 5px black);\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  justify-content: space-around;\\n  gap: 20px;\\n}\\n\\n.carrier,\\n.battleship,\\n.cruiser,\\n.submarine,\\n.destroyer {\\n  display: flex;\\n  background-color: red;\\n  cursor: move;\\n}\\n\\n.ship-cell {\\n  width: 32.2px;\\n  height: 29px;\\n  background-color: red;\\n}\\n\\n.shelf-slide-open {\\n  transform: translateX(00px);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/animations.js":
/*!***************************!*\
  !*** ./src/animations.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  animateShelf() {\n    {\n      if (\n        document.querySelector('.open-drawer').classList.contains('slide-open')\n      ) {\n        document.querySelector('.open-drawer').classList.remove('slide-open');\n        document.querySelector('.shelf').classList.remove('shelf-slide-open');\n      } else {\n        document.querySelector('.open-drawer').classList.add('slide-open');\n        document.querySelector('.shelf').classList.add('shelf-slide-open');\n      }\n    }\n  },\n});\n\n\n//# sourceURL=webpack://battleship/./src/animations.js?");

/***/ }),

/***/ "./src/domFunctions.js":
/*!*****************************!*\
  !*** ./src/domFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet createBattleShipHeader = container => {\n  const battleShipHeader = document.createElement('h2');\n  battleShipHeader.textContent = 'Battleship';\n  battleShipHeader.classList.add('main-header');\n  container.appendChild(battleShipHeader);\n};\n\nlet createLetterLabels = (container, className) => {\n  let lettersContainer = document.createElement('div');\n  for (let i = 65; i < 75; i++) {\n    let index = document.createElement('p');\n    index.classList.add('letter-index');\n    index.textContent = String.fromCharCode(i);\n    lettersContainer.appendChild(index);\n  }\n  lettersContainer.classList = className;\n  container.appendChild(lettersContainer);\n};\n\nlet createNumberLabels = (container, className) => {\n  let numbersContainer = document.createElement('div');\n  for (let i = 1; i <= 10; i++) {\n    let index = document.createElement('p');\n    index.classList.add('number-index');\n    index.textContent = `${i}`;\n    numbersContainer.appendChild(index);\n  }\n  numbersContainer.classList.add(className);\n  container.appendChild(numbersContainer);\n};\n\nlet createShipContainer = container => {\n  let openDrawer = document.createElement('div');\n  openDrawer.classList.add('open-drawer');\n  container.appendChild(openDrawer);\n  let shipContainer = document.createElement('div');\n  shipContainer.classList.add('shelf');\n  shipContainer.appendChild(createDraggedShips(5, 'carrier'));\n  shipContainer.appendChild(createDraggedShips(4, 'battleship'));\n  shipContainer.appendChild(createDraggedShips(3, 'cruiser'));\n  shipContainer.appendChild(createDraggedShips(3, 'submarine'));\n  shipContainer.appendChild(createDraggedShips(2, 'destroyer'));\n  container.appendChild(shipContainer);\n};\n\nlet createDraggedShips = (length, className) => {\n  let shipContainer = document.createElement('div');\n  shipContainer.draggable = 'true';\n  shipContainer.classList.add(className);\n  shipContainer.classList.add('ships');\n  for (let i = 0; i < length; i++) {\n    let shipCell = document.createElement('div');\n    shipCell.classList.add('ship-cell');\n    shipContainer.appendChild(shipCell);\n  }\n  return shipContainer;\n};\n\nlet createLabels = container => {\n  createLetterLabels(container, 'top-left-letter-index');\n  createLetterLabels(container, 'bottom-left-letter-index');\n  createNumberLabels(container, 'top-number-index');\n  createNumberLabels(container, 'bottom-number-index');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  let container = document.querySelector('.container');\n  createBattleShipHeader(container);\n  createLabels(container);\n  createShipContainer(container);\n});\n\n\n//# sourceURL=webpack://battleship/./src/domFunctions.js?");

/***/ }),

/***/ "./src/dragAndDrop.js":
/*!****************************!*\
  !*** ./src/dragAndDrop.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  handleDragStart(e) {\n    e.target.classList.add('dragging');\n  },\n  handleDragEnd(e) {\n    this.style.opacity = '1';\n    e.target.classList.remove('dragging');\n  },\n  handleDragOver(e) {\n    e.preventDefault();\n    return false;\n  },\n  handleDragEnter(e) {\n    this.classList.add('over');\n  },\n  handleDragLeave(e) {\n    this.classList.remove('over');\n  },\n  handleDrop(e) {\n    e.preventDefault(e);\n    let active = document.querySelector('.dragging');\n    e.target.classList.remove('over');\n    if (\n      e.target.nextSibling.nextSibling &&\n      e.target.previousSibling.previousSibling\n    ) {\n      e.target.classList.add('ship');\n      e.target.style.backgroundColor = 'red';\n      e.target.previousSibling.style.backgroundColor = 'red';\n      e.target.previousSibling.previousSibling.style.backgroundColor = 'red';\n      e.target.nextSibling.style.backgroundColor = 'red';\n      e.target.nextSibling.nextSibling.style.backgroundColor = 'red';\n      active.style.display = 'none';\n    }\n  },\n  addCellListeners(cells) {\n    cells.forEach(cell => {\n      cell.addEventListener('dragover', this.handleDragOver);\n      cell.addEventListener('dragenter', this.handleDragEnter);\n      cell.addEventListener('dragleave', this.handleDragLeave);\n      cell.addEventListener('drop', this.handleDrop);\n    });\n  },\n  addDragAndDropListeners(ships, cells) {\n    ships.forEach(ship => {\n      ship.addEventListener('dragstart', this.handleDragStart);\n      ship.addEventListener('dragend', this.handleDragEnd);\n    });\n    // carrier.addEventListener('dragstart', this.handleDragStart);\n    // carrier.addEventListener('dragend', this.handleDragEnd);\n    this.addCellListeners(cells);\n  },\n});\n\n\n//# sourceURL=webpack://battleship/./src/dragAndDrop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _domFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domFunctions */ \"./src/domFunctions.js\");\n/* harmony import */ var _renderGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGrid */ \"./src/renderGrid.js\");\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ \"./src/animations.js\");\n/* harmony import */ var _dragAndDrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dragAndDrop */ \"./src/dragAndDrop.js\");\n\n\n\n\n\n\n(0,_domFunctions__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_renderGrid__WEBPACK_IMPORTED_MODULE_2__.renderGrid)('player-grid');\n(0,_renderGrid__WEBPACK_IMPORTED_MODULE_2__.renderGrid)('computer-grid');\ndocument\n  .querySelector('.open-drawer')\n  .addEventListener('click', _animations__WEBPACK_IMPORTED_MODULE_3__[\"default\"].animateShelf);\n_dragAndDrop__WEBPACK_IMPORTED_MODULE_4__[\"default\"].addDragAndDropListeners(\n  document.querySelectorAll('.ships'),\n  document.querySelectorAll('.cell')\n);\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/renderGrid.js":
/*!***************************!*\
  !*** ./src/renderGrid.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderGrid\": () => (/* binding */ renderGrid)\n/* harmony export */ });\nlet renderGrid = classList => {\n  let container = document.querySelector('.container');\n  let createGridLeft = document.createElement('div');\n  createGridLeft.classList.add(classList);\n  container.appendChild(createGridLeft);\n  for (let i = 0; i < 10; i++) {\n    let row = document.createElement('div');\n    row.classList.add('row');\n    createGridLeft.appendChild(row);\n    for (let y = 0; y < 10; y++) {\n      let cell = document.createElement('div');\n      cell.dataset.column = y;\n      cell.dataset.row = i;\n      cell.classList.add('cell');\n      row.appendChild(cell);\n    }\n  }\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/renderGrid.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;