/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/card/edit.js":
/*!*************************************!*\
  !*** ./src/components/card/edit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/components/card/editor.scss");






function Edit({
  attributes,
  setAttributes
}) {
  const {
    borderRadius,
    borderShow,
    border,
    boxShadowShow,
    boxShadow,
    backgroundColor,
    padding
  } = attributes;
  const [borderValue, setBorderValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(border);
  const [boxShadowColor, setBoxShadowColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(boxShadowShow.color); //
  const [bgColor, setbgColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(backgroundColor);
  const [paddingValue, setPaddingValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(padding);
  function resetAttributes(attributeName) {
    switch (attributeName) {
      case 'borderRadius':
        setAttributes({
          borderRadius: 5
        });
        break;
      case 'border':
        setAttributes({
          border: {
            width: 1,
            style: 'solid',
            color: '#000'
          },
          borderShow: false
        });
        setBorderValue({
          width: 1,
          style: 'solid',
          color: '#000'
        });
        break;
      case 'boxShadow':
        setAttributes({
          boxShadow: {
            x: 0,
            y: 0,
            blur: 10,
            spread: 0,
            color: 'rgb(0 0 0 / 38%)'
          },
          boxShadowShow: true
        });
        setBoxShadowColor('rgb(0 0 0 / 38%)');
        break;
      case 'backgroundColor':
        setAttributes({
          backgroundColor: ' '
        });
        setbgColor(' ');
        break;
      case 'padding':
        setAttributes({
          padding: {
            top: 20,
            left: 20,
            right: 20,
            bottom: 20
          }
        });
        setPaddingValue({
          top: 20,
          left: 20,
          right: 20,
          bottom: 20
        });
        break;
      default:
        break;
    }
  }
  function getStyles(attributes) {
    const {
      borderRadius,
      borderShow,
      border,
      boxShadowShow,
      boxShadow,
      backgroundColor,
      padding
    } = attributes;
    let styles = {
      borderRadius: borderRadius !== 5 ? borderRadius : undefined,
      borderWidth: borderShow && border.width !== 1 ? border.width : undefined,
      borderStyle: borderShow && border.style !== 'solid' ? border.style : undefined,
      borderColor: borderShow && border.color !== 'rgb(0 0 0 / 38%' ? border.color : undefined,
      boxShadow: boxShadowShow ? `${boxShadow.x}px ${boxShadow.y}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color}` : undefined,
      backgroundColor: backgroundColor !== ' ' ? backgroundColor : undefined,
      padding: padding !== '20px' ? `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}` : undefined
    };
    return styles;
  }
  const classes = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      [`border-hide`]: !borderShow,
      [`boxShadow-hide`]: !boxShadowShow
    }),
    style: getStyles(attributes)
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "\u8FB9\u6846\u8BBE\u7F6E"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
    label: "\u8FB9\u89D2\u8BBE\u7F6E",
    value: borderRadius,
    onChange: nextValue => {
      setAttributes({
        borderRadius: nextValue
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "link",
    onClick: () => resetAttributes('borderRadius')
  }, "\u91CD\u7F6E")), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "\u8FB9\u7EBF\u663E\u793A",
    checked: borderShow,
    onChange: () => {
      setAttributes({
        borderShow: !borderShow
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "link",
    onClick: () => resetAttributes('border')
  }, "\u91CD\u7F6E")), borderShow && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBorderControl, {
    label: "\u8FB9\u7EBF\u8BBE\u7F6E",
    value: borderValue,
    enableAlpha: true,
    onChange: nextValue => {
      setAttributes({
        border: nextValue
      });
      setBorderValue(nextValue);
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "\u9634\u5F71\u663E\u793A",
    checked: boxShadowShow,
    onChange: () => {
      setAttributes({
        boxShadowShow: !boxShadowShow
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "link",
    onClick: () => resetAttributes('boxShadow')
  }, "\u91CD\u7F6E")), boxShadowShow && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
    label: "x\u504F\u79FB",
    value: boxShadow.x,
    onChange: nextValue => {
      let newObj = Object.assign({}, boxShadow, {
        x: nextValue
      });
      setAttributes({
        boxShadow: newObj
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
    label: "y\u504F\u79FB",
    value: boxShadow.y,
    onChange: nextValue => {
      let newObj = Object.assign({}, boxShadow, {
        y: nextValue
      });
      setAttributes({
        boxShadow: newObj
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
    label: "\u6A21\u7CCA",
    value: boxShadow.blur,
    onChange: nextValue => {
      let newObj = Object.assign({}, boxShadow, {
        blur: nextValue
      });
      setAttributes({
        boxShadow: newObj
      });
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
    label: "\u6269\u5C55",
    value: boxShadow.spread,
    onChange: nextValue => {
      let newObj = Object.assign({}, boxShadow, {
        spread: nextValue
      });
      setAttributes({
        boxShadow: newObj
      });
    }
  })), boxShadowShow && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, /*#__PURE__*/React.createElement("span", null, "\u9634\u5F71\u989C\u8272"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: boxShadowColor,
    enableAlpha: true,
    onChange: color => {
      let newObj = Object.assign({}, boxShadow, {
        color: color
      });
      setAttributes({
        boxShadow: newObj
      });
      setBoxShadowColor(color);
    }
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "\u80CC\u666F\u989C\u8272"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: bgColor,
    enableAlpha: true,
    onChange: color => {
      setAttributes({
        backgroundColor: color
      });
      setbgColor(color);
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "link",
    onClick: () => resetAttributes('backgroundColor')
  }, "\u91CD\u7F6E"))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "\u5185\u95F4\u8DDD"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
    values: paddingValue,
    resetValues: {
      top: '20px',
      left: '20px',
      right: '20px',
      bottom: '20px'
    },
    onChange: nextValues => {
      setAttributes({
        padding: nextValues
      });
      setPaddingValue(nextValues);
    }
  }))))), /*#__PURE__*/React.createElement("div", classes, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    placeholder: "\u8BF7\u5C06\u4F60\u7684\u5185\u5BB9\u653E\u5728\u8FD9\u91CC\u9762"
  })));
}

/***/ }),

/***/ "./src/components/card/save.js":
/*!*************************************!*\
  !*** ./src/components/card/save.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



function save({
  attributes
}) {
  const {
    borderRadius,
    borderShow,
    border,
    boxShadowShow,
    boxShadow,
    backgroundColor,
    padding
  } = attributes;

  // 边角的弧度
  let borderRadiusObj = {};
  if (borderRadiusObj != 5) {
    borderRadiusObj.borderRadius = borderRadius;
  }
  // 根据borderShow是否展示设置样式,如果跟默认一样也不展示
  let borderObj = {};
  if (borderShow) {
    Object.keys(border).forEach(key => {
      switch (key) {
        case 'width':
          if (border.width != 1) borderObj.borderWidth = border.width;
        case 'style':
          if (border.style != 'solid') borderObj.borderStyle = border.style;
        case 'color':
          if (border.color != 'rgb(0 0 0 / 38%') borderObj.borderColor = border.color;
        default:
          ;
      }
    });
  }
  // 根据borderShow是否展示设置样式,如果跟默认一样也不展示
  let boxShadowObj = {};
  if (boxShadowShow) {
    boxShadowObj.boxShadow = `${boxShadow.x}px ${boxShadow.y}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color}`;
  }
  // 卡片的背景颜色
  let backgroundColorObj = {};
  if (backgroundColor != " ") {
    backgroundColorObj.backgroundColor = backgroundColor;
  }
  // 卡片的内边距
  let paddingObj = {};
  if (padding != "20px") {
    paddingObj.padding = `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`;
  }
  const classes = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [`border-hide`]: !borderShow,
      [`boxShadow-hide`]: !boxShadowShow
    }),
    style: {
      ...borderRadiusObj,
      ...borderObj,
      ...boxShadowObj,
      ...backgroundColorObj,
      ...paddingObj
    }
  });
  return /*#__PURE__*/React.createElement("div", classes, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/components/card/editor.scss":
/*!*****************************************!*\
  !*** ./src/components/card/editor.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "components\\card\\editor.css");

/***/ }),

/***/ "./src/components/card/style.scss":
/*!****************************************!*\
  !*** ./src/components/card/style.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "components\\card\\style.css");

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/components/card/block.json":
/*!****************************************!*\
  !*** ./src/components/card/block.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"wellerpcb/card","version":"0.1.0","title":"wellerpcb卡片","category":"wellerpcb","icon":"","description":"基础卡片展示","textdomain":"br","supports":{"html":false},"example":{},"attributes":{"borderRadius":{"type":"number","default":5},"borderShow":{"type":"boolean","default":false},"border":{"type":"Object","default":{"width":1,"style":"solid","color":"#000"}},"boxShadowShow":{"type":"boolean","default":true},"boxShadow":{"type":"Object","default":{"x":0,"y":0,"blur":10,"spread":0,"color":"rgb(0 0 0 / 38%)"}},"backgroundColor":{"type":"string","default":" "},"padding":{"type":"Object","default":{"top":20,"left":20,"right":20,"bottom":20}}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************************!*\
  !*** ./src/components/card/index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/components/card/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/components/card/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/components/card/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/components/card/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map