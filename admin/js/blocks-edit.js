/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************!*\
  !*** ./src/admin/js/blocks-edit.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
document.addEventListener('DOMContentLoaded', function () {
  wp.data.subscribe(function () {
    const toolbarLeftContainer = document.querySelector('.edit-post-header-toolbar');
    const toolbarRightContainer = document.querySelector('.interface-pinned-items');
    if (toolbarLeftContainer && toolbarLeftContainer.querySelector('.seogtp_gutenberg_blocks_library') === null) {
      const myButton = document.createElement('button');
      myButton.classList.add('seogtp_gutenberg_blocks_library');
      myButton.textContent = 'Design Library';
      toolbarLeftContainer.appendChild(myButton);
    }
    if (toolbarRightContainer && toolbarRightContainer.querySelector('.seogtp_gutenberg_blocks_setting') === null) {
      const myButton = document.createElement('button');
      myButton.classList.add('seogtp_gutenberg_blocks_setting');
      myButton.textContent = 'set';
      toolbarRightContainer.appendChild(myButton);
    }
  });
});






const SeoGtpBlocksSetup = ({
  children
}) => {
  // 定义状态变量
  const [tabActive, setTabActive] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('style');
  const selectedBlockClientId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select('core/block-editor').getSelectedBlockClientId());
  const selectedBlockAttributes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => selectedBlockClientId ? select('core/block-editor').getBlockAttributes(selectedBlockClientId) : {});
  const handleBlockSelection = blockClientId => {
    // 执行选择块元素后的操作
    const activeTabs = document.getElementsByClassName('seogtpGB_tab');
    let activeTab = '';
    // 遍历这些元素，找出具有 "active" 类名的元素
    if (activeTabs.length) {
      for (var i = 0; i < activeTabs.length; i++) {
        if (activeTabs[i].classList.contains('active')) {
          activeTab = activeTabs[i].getAttribute('data-label');
          break; // 如果找到，就跳出循环
        }
      }

      const panelNode = document.querySelector('.components-panel');
      if (panelNode) {
        panelNode.setAttribute('data-seogtpGB-tab', activeTab);
      }
    }
  };
  const handleBlockClearSelection = () => {
    // 执行清除块元素选中状态后的操作
    const panelNode = document.querySelector('.components-panel');
    if (panelNode && panelNode.hasAttribute('data-seogtpGB-tab')) {
      panelNode.removeAttribute('data-seogtpGB-tab');
    }
  };

  // 在组件加载时订阅块元素选择事件
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    select('core/block-editor').isBlockSelected(selectedBlockClientId) ? handleBlockSelection(selectedBlockClientId) : handleBlockClearSelection();
  }, [selectedBlockClientId]);

  // 在这里编写组件的逻辑和状态
  let tabs = [{
    variant: 'secondary',
    key: 'block',
    name: '属性'
  }, {
    variant: 'secondary',
    key: 'style',
    name: '样式'
  }, {
    variant: 'secondary',
    key: 'advanced',
    name: '高级'
  }];
  const tabclick = key => {
    document.querySelector('.components-panel').setAttribute('data-seogtpGB-tab', key);
    setTabActive(key);
    console.log(selectedBlockAttributes);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, tabs.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: [`seogtpGB_tab seogtpGB_${item.key}`, item.key == tabActive && 'active'],
    "data-label": item.key,
    variant: item.variant,
    onClick: () => {
      tabclick(item.key);
    }
  }, item.name))), tabActive == 'block' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBorderControl, {
    colors: [{
      color: '#72aee6',
      name: 'Blue 20'
    }, {
      color: '#3582c4',
      name: 'Blue 40'
    }, {
      color: '#e65054',
      name: 'Red 40'
    }, {
      color: '#8a2424',
      name: 'Red 70'
    }, {
      color: '#f2d675',
      name: 'Yellow 10'
    }, {
      color: '#bd8600',
      name: 'Yellow 40'
    }],
    label: "Border",
    onChange: function noRefCheck() {}
  }), tabActive == 'style' && children, tabActive == 'advanced' && '高级设置');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeoGtpBlocksSetup);
})();

/******/ })()
;
//# sourceMappingURL=blocks-edit.js.map