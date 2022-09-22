/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/main.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/main.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/grey-cloud.svg */ "./src/assets/grey-cloud.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/snow.svg */ "./src/assets/snow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/rain.svg */ "./src/assets/rain.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/storm.svg */ "./src/assets/storm.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/clear.svg */ "./src/assets/clear.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Lato\", sans-serif;\n}\nbody {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-rows: 1fr 5fr;\n  background-color: #21d4fd;\n  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);\n  height: 100vh;\n  background-size: 200%;\n  animation: gradient 15s ease infinite;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-column: 2;\n  grid-row: 0/1;\n  font-size: 2.5em;\n  color: #fff;\n  width: 100%;\n  height: 100%;\n}\n\nform {\n  grid-row: 2;\n  grid-column: 1/2;\n  align-self: start;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1em;\n  width: 22em;\n  justify-self: center;\n  background-color: #8ec5fc;\n  background-image: linear-gradient(62deg, #8ec5fc 40%, #e0c3fc 100%);\n  height: 100%;\n  width: 100%;\n  padding: 1em;\n}\n\n#fetch {\n  width: 7.5em;\n  height: 3.3em;\n  padding: 1em;\n  text-align: center;\n  background-color: #0093e9;\n  background-image: linear-gradient(160deg, #0093e9, #80d0c7, #0093e9);\n  background-size: 250%;\n  background-position: left;\n  transition: 300ms background-position ease-in-out;\n  border: 1px solid #0093e9;\n  border-radius: 18px;\n  color: #fff;\n  font-weight: bolder;\n  font-size: 1em;\n}\n\n#fetch:hover {\n  background-position: right;\n}\n\n#weather-search {\n  border-radius: 10px;\n  height: 3em;\n  width: 100%;\n  padding: 1em;\n  color: black;\n  font-weight: bold;\n  font-size: 1em;\n}\n\n#content-box {\n  padding: 1em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-row: 1/2;\n  grid-column: 1 / 2;\n  min-height: 15em;\n  max-height: 15em;\n  width: 22em;\n  background-color: #8ec5fc;\n  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);\n  background-size: 200%;\n  animation: gradient 8s ease infinite;\n}\n\n.weather-box {\n  display: flex;\n  gap: 1em;\n}\n\n.description-box h1 {\n  font-size: 1.7em;\n}\n\n.icon-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.icon-box img {\n  height: 130px;\n  width: 130px;\n}\n\n.description-box {\n  display: flex;\n  flex-direction: column;\n}\n\nsection {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 3em;\n  grid-column: 2;\n  grid-row: 2;\n  justify-content: flex-start;\n  align-items: center;\n  padding-top: 2em;\n}\n\nsection h1 {\n  font-size: 3.5em;\n  color: #fff;\n  min-width: 10em;\n  text-align: center;\n}\n\n.data-box {\n  padding: 1.2em;\n  height: 25%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12em;\n}\n\n#sensation-div,\n#humidity-div,\n#wind-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 5em;\n  width: 10em;\n}\n\n.data-box img {\n  height: 4em;\n  width: 4em;\n}\n\n/* animations and media */\n.cloud-bg {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: space no-repeat;\n  background-size: 8em;\n  animation: animatedBackground 10s linear infinite;\n}\n\n.snow-bg {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: space no-repeat;\n  background-size: 8em;\n  animation: animatedBackground 10s linear infinite;\n}\n\n.rain-bg {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: space no-repeat;\n  background-size: 5em;\n  animation: animatedBackground 10s linear infinite;\n}\n\n.storm-bg {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-repeat: space no-repeat;\n  background-size: 8em;\n  animation: animatedBackground 10s linear infinite;\n}\n\n.clear-bg {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-repeat: space no-repeat;\n  background-size: 12em;\n  animation: animatedBackground 10s linear infinite;\n}\n\n@keyframes animatedBackground {\n  0% {\n    background-position: 0% 0%;\n  }\n  50% {\n    background-position: 0% 100%;\n  }\n  100% {\n    background-position: 0% 0%;\n  }\n}\n\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n@media only screen and (max-width: 1280px) {\n  .data-box {\n    flex-direction: column;\n    gap: 5em;\n    justify-content: flex-start;\n    align-items: flex-start;\n  }\n\n  #sensation-div,\n  #humidity-div,\n  #wind-div {\n    flex-direction: row;\n    gap: 1.2em;\n    width: 15em;\n    justify-content: flex-start;\n    align-items: flex-start;\n    height: 20em;\n  }\n\n  section {\n    justify-content: flex-start;\n    background-image: linear-gradient(100deg, #8ec5fc 20%, #e0c3fc 100%);\n    background-position: left;\n    background-size: cover;\n  }\n\n  section h1 {\n    text-align: start;\n    padding: 0.4em;\n  }\n\n  body {\n    background-color: #8ec5fc;\n    background-image: none;\n  }\n\n  .content-box {\n    animation: none;\n  }\n  .weather-box h1 {\n    font-size: 1.5em;\n  }\n\n  .rainy-cloud-bg {\n    background-repeat: no-repeat;\n    background-size: 9em;\n  }\n\n  .rain-bg {\n    background-size: 8em;\n  }\n}\n", "",{"version":3,"sources":["webpack://./styles/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Lato\", sans-serif;\n}\nbody {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-rows: 1fr 5fr;\n  background-color: #21d4fd;\n  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);\n  height: 100vh;\n  background-size: 200%;\n  animation: gradient 15s ease infinite;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-column: 2;\n  grid-row: 0/1;\n  font-size: 2.5em;\n  color: #fff;\n  width: 100%;\n  height: 100%;\n}\n\nform {\n  grid-row: 2;\n  grid-column: 1/2;\n  align-self: start;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1em;\n  width: 22em;\n  justify-self: center;\n  background-color: #8ec5fc;\n  background-image: linear-gradient(62deg, #8ec5fc 40%, #e0c3fc 100%);\n  height: 100%;\n  width: 100%;\n  padding: 1em;\n}\n\n#fetch {\n  width: 7.5em;\n  height: 3.3em;\n  padding: 1em;\n  text-align: center;\n  background-color: #0093e9;\n  background-image: linear-gradient(160deg, #0093e9, #80d0c7, #0093e9);\n  background-size: 250%;\n  background-position: left;\n  transition: 300ms background-position ease-in-out;\n  border: 1px solid #0093e9;\n  border-radius: 18px;\n  color: #fff;\n  font-weight: bolder;\n  font-size: 1em;\n}\n\n#fetch:hover {\n  background-position: right;\n}\n\n#weather-search {\n  border-radius: 10px;\n  height: 3em;\n  width: 100%;\n  padding: 1em;\n  color: black;\n  font-weight: bold;\n  font-size: 1em;\n}\n\n#content-box {\n  padding: 1em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-row: 1/2;\n  grid-column: 1 / 2;\n  min-height: 15em;\n  max-height: 15em;\n  width: 22em;\n  background-color: #8ec5fc;\n  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);\n  background-size: 200%;\n  animation: gradient 8s ease infinite;\n}\n\n.weather-box {\n  display: flex;\n  gap: 1em;\n}\n\n.description-box h1 {\n  font-size: 1.7em;\n}\n\n.icon-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.icon-box img {\n  height: 130px;\n  width: 130px;\n}\n\n.description-box {\n  display: flex;\n  flex-direction: column;\n}\n\nsection {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 3em;\n  grid-column: 2;\n  grid-row: 2;\n  justify-content: flex-start;\n  align-items: center;\n  padding-top: 2em;\n}\n\nsection h1 {\n  font-size: 3.5em;\n  color: #fff;\n  min-width: 10em;\n  text-align: center;\n}\n\n.data-box {\n  padding: 1.2em;\n  height: 25%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12em;\n}\n\n#sensation-div,\n#humidity-div,\n#wind-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 5em;\n  width: 10em;\n}\n\n.data-box img {\n  height: 4em;\n  width: 4em;\n}\n\n/* animations and media */\n.cloud-bg {\n  background-image: url(\"../src/assets/grey-cloud.svg\");\n  background-repeat: space no-repeat;\n  background-size: 8em;\n  animation: animatedBackground 10s linear infinite;\n}\n\n.snow-bg {\n  background-image: url(\"../src/assets/snow.svg\");\n  background-repeat: space no-repeat;\n  background-size: 8em;\n  animation: animatedBackground 10s linear infinite;\n}\n\n.rain-bg {\n  background-image: url(\"../src/assets/rain.svg\");\n  background-repeat: space no-repeat;\n  background-size: 5em;\n  animation: animatedBackground 10s linear infinite;\n}\n\n.storm-bg {\n  background-image: url(\"../src/assets/storm.svg\");\n  background-repeat: space no-repeat;\n  background-size: 8em;\n  animation: animatedBackground 10s linear infinite;\n}\n\n.clear-bg {\n  background-image: url(\"../src/assets/clear.svg\");\n  background-repeat: space no-repeat;\n  background-size: 12em;\n  animation: animatedBackground 10s linear infinite;\n}\n\n@keyframes animatedBackground {\n  0% {\n    background-position: 0% 0%;\n  }\n  50% {\n    background-position: 0% 100%;\n  }\n  100% {\n    background-position: 0% 0%;\n  }\n}\n\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n@media only screen and (max-width: 1280px) {\n  .data-box {\n    flex-direction: column;\n    gap: 5em;\n    justify-content: flex-start;\n    align-items: flex-start;\n  }\n\n  #sensation-div,\n  #humidity-div,\n  #wind-div {\n    flex-direction: row;\n    gap: 1.2em;\n    width: 15em;\n    justify-content: flex-start;\n    align-items: flex-start;\n    height: 20em;\n  }\n\n  section {\n    justify-content: flex-start;\n    background-image: linear-gradient(100deg, #8ec5fc 20%, #e0c3fc 100%);\n    background-position: left;\n    background-size: cover;\n  }\n\n  section h1 {\n    text-align: start;\n    padding: 0.4em;\n  }\n\n  body {\n    background-color: #8ec5fc;\n    background-image: none;\n  }\n\n  .content-box {\n    animation: none;\n  }\n  .weather-box h1 {\n    font-size: 1.5em;\n  }\n\n  .rainy-cloud-bg {\n    background-repeat: no-repeat;\n    background-size: 9em;\n  }\n\n  .rain-bg {\n    background-size: 8em;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _assets_sensation_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/sensation.svg */ "./src/assets/sensation.svg");
/* harmony import */ var _assets_humidity_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/humidity.svg */ "./src/assets/humidity.svg");
/* harmony import */ var _assets_wind_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/wind.svg */ "./src/assets/wind.svg");




class UI {
  static loadData(todayWeather) {
    const contentBox = document.getElementById("content-box");
    //testing element to delete
    if (document.getElementById("old-weather")) {
      this.deleteData("oldWeather");
    }

    const weatherBox = document.createElement("div");
    weatherBox.classList.add("weather-box");
    weatherBox.setAttribute("id", "old-weather");
    const descriptionBox = document.createElement("div");
    descriptionBox.classList.add("description-box");

    //declaring and getting img url
    const icon = document.createElement("img");
    icon.src = todayWeather.Icon;
    const iconBox = document.createElement("div");
    iconBox.classList.add("icon-box");
    iconBox.appendChild(icon);

    //declaring and getting weather description
    const description = document.createElement("h1");
    description.innerHTML = todayWeather.Descricao.toUpperCase();
    descriptionBox.appendChild(description);

    //declaring and getting tempData
    const temp = document.createElement("h2");
    const tempMin = document.createElement("h3");
    const tempMax = document.createElement("h3");
    temp.innerHTML = `${todayWeather.Temperatura} °C`;
    tempMin.innerHTML = `Min: ${todayWeather.TempMin} °C`;
    tempMax.innerHTML = `Max: ${todayWeather.TempMax} °C`;
    descriptionBox.appendChild(temp);
    descriptionBox.appendChild(tempMin);
    descriptionBox.appendChild(tempMax);

    //testing section elements to delete
    if (
      document.getElementById("wind-data") ||
      document.getElementById("sensation-data") ||
      document.getElementById("humidity-data")
    ) {
      this.deleteData("section");
    }

    //section
    //wind
    const windDiv = document.getElementById("wind-div");
    const windData = document.createElement("h2");
    windData.setAttribute("id", "wind-data");
    windData.innerHTML = `${todayWeather.Vento.toFixed(2)} Km/h`;
    windDiv.appendChild(windData);

    //sensation
    const sensationDiv = document.getElementById("sensation-div");
    const sensationData = document.createElement("h2");
    sensationData.setAttribute("id", "sensation-data");
    sensationData.innerHTML = `${todayWeather.Sensacao} °C`;
    sensationDiv.appendChild(sensationData);

    //humidity
    const humidityDiv = document.getElementById("humidity-div");
    const humidityData = document.createElement("h2");
    humidityData.setAttribute("id", "humidity-data");
    humidityData.innerHTML = `${todayWeather.Umidade} kg/m³`;
    humidityDiv.appendChild(humidityData);

    //appending everything
    weatherBox.appendChild(iconBox);
    weatherBox.appendChild(descriptionBox);
    contentBox.appendChild(weatherBox);

    //title
    const title = document.getElementById("title");
    title.innerHTML = `${todayWeather.Nome} - ${todayWeather.Pais}`;

    this.loadHeader(todayWeather);
  }

  static loadHeader(todayWeather) {
    const weatherID = todayWeather.getWeather();
    const header = document.getElementsByTagName("header")[0];
    header.className = "";

    //thunderstorm
    if (weatherID === "thunderstorm") header.classList.add("storm-bg");
    //rain
    else if (weatherID === "rain") header.classList.add("rain-bg");
    //snow
    else if (weatherID === "snow") header.classList.add("snow-bg");
    //clear
    else if (weatherID === "clear") header.classList.add("clear-bg");
    //clouds
    else header.classList.add("cloud-bg");
  }

  static defaultLoad() {
    const contentBox = document.getElementById("content-box");
    if (contentBox.innerHTML != "") {
      contentBox.removeChild(contentBox.firstChild);
    }

    //section content
    const section = document.getElementsByTagName("section")[0];
    if (section.innerHTML != "") {
      section.removeChild(section.firstChild);
    }
    const dataBox = document.createElement("div");
    dataBox.classList.add("data-box");
    section.appendChild(dataBox);
    const windIcon = document.createElement("img");
    const humidityIcon = document.createElement("img");
    const sensationIcon = document.createElement("img");
    sensationIcon.src = _assets_sensation_svg__WEBPACK_IMPORTED_MODULE_0__;
    humidityIcon.src = _assets_humidity_svg__WEBPACK_IMPORTED_MODULE_1__;
    windIcon.src = _assets_wind_svg__WEBPACK_IMPORTED_MODULE_2__;
    const sensationDiv = document.createElement("div");
    sensationDiv.setAttribute("id", "sensation-div");
    const humidityDiv = document.createElement("div");
    humidityDiv.setAttribute("id", "humidity-div");
    const windDiv = document.createElement("div");
    windDiv.setAttribute("id", "wind-div");
    sensationDiv.appendChild(sensationIcon);
    humidityDiv.appendChild(humidityIcon);
    windDiv.appendChild(windIcon);
    dataBox.appendChild(sensationDiv);
    dataBox.appendChild(humidityDiv);
    dataBox.appendChild(windDiv);
  }

  static deleteData(toDelete) {
    if (toDelete === "section") {
      const sensationDelete = document.getElementById("sensation-data");
      const sensationDiv = document.getElementById("sensation-div");
      sensationDiv.removeChild(sensationDelete);
      const humidityDelete = document.getElementById("humidity-data");
      const humidityDiv = document.getElementById("humidity-div");
      humidityDiv.removeChild(humidityDelete);
      const windDelete = document.getElementById("wind-data");
      const windDiv = document.getElementById("wind-div");
      windDiv.removeChild(windDelete);
    } else if (toDelete === "oldWeather") {
      const oldWeather = document.getElementById("old-weather");
      const contentBox = document.getElementById("content-box");
      contentBox.removeChild(oldWeather);
    }
  }
}


/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Weather)
/* harmony export */ });
class Weather {
  constructor(
    temperature,
    feelsLike,
    tempMin,
    tempMax,
    humidity,
    wind,
    description,
    icon,
    name,
    country,
    ID
  ) {
    this.Nome = name;
    this.Pais = country;
    this.Temperatura = temperature;
    this.Sensacao = feelsLike;
    this.TempMin = tempMin;
    this.TempMax = tempMax;
    this.Umidade = humidity;
    this.Vento = wind * 3.6;
    this.Descricao = description;
    this.Icon = icon;
    this.WeatherID = ID;
  }

  getWeather() {
    //thunderstorm
    if (this.WeatherID >= 200 && this.WeatherID <= 231) {
      return "thunderstorm";
    }
    //rain
    else if (this.WeatherID >= 500 && this.WeatherID <= 531) {
      return "rain";
    }
    //snow
    else if (this.WeatherID >= 600 && this.WeatherID <= 622) {
      return "snow";
    }
    //clear
    else if (this.WeatherID === 800) {
      return "clear";
    }
    //clouds
    else return "clouds";
  }
}


/***/ }),

/***/ "./src/assets/clear.svg":
/*!******************************!*\
  !*** ./src/assets/clear.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "clear.svg";

/***/ }),

/***/ "./src/assets/grey-cloud.svg":
/*!***********************************!*\
  !*** ./src/assets/grey-cloud.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "grey-cloud.svg";

/***/ }),

/***/ "./src/assets/humidity.svg":
/*!*********************************!*\
  !*** ./src/assets/humidity.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "humidity.svg";

/***/ }),

/***/ "./src/assets/rain.svg":
/*!*****************************!*\
  !*** ./src/assets/rain.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "rain.svg";

/***/ }),

/***/ "./src/assets/sensation.svg":
/*!**********************************!*\
  !*** ./src/assets/sensation.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sensation.svg";

/***/ }),

/***/ "./src/assets/snow.svg":
/*!*****************************!*\
  !*** ./src/assets/snow.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "snow.svg";

/***/ }),

/***/ "./src/assets/storm.svg":
/*!******************************!*\
  !*** ./src/assets/storm.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "storm.svg";

/***/ }),

/***/ "./src/assets/wind.svg":
/*!*****************************!*\
  !*** ./src/assets/wind.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "wind.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather.js */ "./src/modules/weather.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.css */ "./styles/main.css");
/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/UI.js */ "./src/modules/UI.js");




const button = document.getElementById("fetch");
const toSearch = document.getElementById("weather-search");

window.addEventListener("load", () => {
  _modules_UI_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultLoad();
  getData("brasilia").then((res) => {
    const todayWeather = res;
    _modules_UI_js__WEBPACK_IMPORTED_MODULE_2__["default"].loadData(todayWeather);
  });
});

button.addEventListener("click", (e) => {
  const contentBox = document.getElementById("content-box");
  if (document.getElementById("firstIcon")) {
    const icon = document.getElementById("firstIcon");
    contentBox.removeChild(icon);
  }

  e.preventDefault();
  const keyword = toSearch.value;
  getData(keyword).then((res) => {
    const todayWeather = res;
    _modules_UI_js__WEBPACK_IMPORTED_MODULE_2__["default"].loadData(todayWeather);
  });
});

async function getData(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=fe021bc1d73bb3f7426ae51b83d8daff&lang=pt_br&units=metric`,
      { mode: "cors" }
    );

    const weatherData = await response.json();
    console.log(weatherData);
    const icon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

    const todayWeather = new _modules_weather_js__WEBPACK_IMPORTED_MODULE_0__["default"](
      weatherData.main.temp,
      weatherData.main.feels_like,
      weatherData.main.temp_min,
      weatherData.main.temp_max,
      weatherData.main.humidity,
      weatherData.wind.speed,
      weatherData.weather[0].description,
      icon,
      weatherData.name,
      weatherData.sys.country,
      weatherData.weather[0].id
    );
    console.log(todayWeather);
    return todayWeather;
  } catch {
    const err = document.createElement("h1");
    err.style.color = "red";
    err.innerHTML = "Erro ao procurar cidade";
    err.style.marginBottom = "100px";
    const contentBox = document.getElementById("content-box");
    contentBox.appendChild(err);

    setTimeout(() => {
      _modules_UI_js__WEBPACK_IMPORTED_MODULE_2__["default"].defaultLoad();
    }, 1000);
  }
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map