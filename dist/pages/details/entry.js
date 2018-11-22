// { "framework": "Vue"} 

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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name) {
  return name;
};

exports.toast = toast;
exports.jump = jump;
exports.getQueryParams = getQueryParams;
exports.getUrlParam = getUrlParam;
exports.createLink = createLink;

var navigator = weex.requireModule('navigator');
var modal = weex.requireModule('modal');

var imgUrl = exports.imgUrl = 'http://storage-proxy.emas-poc.com:30090/emas-poc-private.oss-cn-beijing.aliyuncs.com/eweex/app/upload/';

// 是否是web端
var isWeb = exports.isWeb = WXEnvironment.platform === 'Web';

/**
 * 弹出框
 * @param {string} message 弹出框信息
 */
function toast(message) {
  modal.toast({ message: message, duration: 1 });
}

/** 页面跳转
 * @param {String} pageName 页面名
 * @param {String} value 页面跳转url拼接参数
 */
function jump(pageName) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var url = createLink(pageName, {
    param: value
  });
  if (isWeb) {
    // eslint-disable-line
    location.href = url;
  } else {
    navigator.push({
      url: url,
      animated: 'true'
    });
  }
}

/**
 * 获取url参数
 * @param {string} url 要获取的url
 */
function getQueryParams(url) {
  var splitedUrl = (url || '').split('?');
  if (splitedUrl.length < 2) {
    return {};
  }
  var qs = splitedUrl[1];
  qs = qs.split('#')[0];
  if (qs.length === 0) {
    return {};
  }

  var paramPairs = qs.split('&');
  var params = {};
  paramPairs.forEach(function (e) {
    if (!e || e.length === 0) {
      return;
    }
    var pair = e.split('=');
    if (pair.length < 2) {
      return;
    }
    var key = pair[0];
    var value = pair.slice(1, pair.length).join('=');
    if (value.length === 0) {
      return;
    }
    params[decodeURIComponent(key)] = decodeURIComponent(value);
  });
  return params;
}

function getUrlParam(key, url) {
  var reg = new RegExp('[?|&]' + key + '=([^&]+)');
  var match = url.match(reg);
  return match && match[1];
}

function createLink(page) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var args = [];
  Object.keys(params).forEach(function (key) {
    if (typeof params[key] === 'string') {
      args.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
    }
  });
  if (WXEnvironment.platform === 'Web') {
    // eslint-disable-line
    var tplPathList = (getUrlParam('_wx_tpl', location.href) || '').split('/');
    tplPathList[tplPathList.length - 2] = page;
    args.unshift('_wx_tpl=' + tplPathList.join('/')); // eslint-disable-line
    return '' + location.origin + location.pathname + '?' + args.join('&');
  }

  var bundlePathList = weex.config.bundleUrl.split('/');
  bundlePathList[bundlePathList.length - 2] = page;
  return bundlePathList.join('/') + '?' + args.join('&');
}

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _entry = __webpack_require__(7);

var _entry2 = _interopRequireDefault(_entry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_entry2.default.el = '#root';
new Vue(_entry2.default);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(8)
)

/* script */
__vue_exports__ = __webpack_require__(9)

/* template */
var __vue_template__ = __webpack_require__(11)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/admin/Documents/program/weex/weex-app/src/pages/details/entry.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-33537fde"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {
  "flex-row": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "flex-row-center": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "flex-center": {
    "alignItems": "center"
  },
  "flex-center-both": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "icon": {
    "height": "28",
    "width": "28",
    "marginTop": 0,
    "marginRight": "10",
    "marginBottom": 0,
    "marginLeft": "10"
  },
  "medium": {
    "fontSize": "28"
  },
  "big": {
    "fontSize": "32"
  },
  "details-page": {
    "paddingBottom": "100"
  },
  "header": {
    "borderBottomWidth": "1",
    "borderBottomColor": "#e5e5e5",
    "borderBottomStyle": "solid"
  },
  "box": {
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10"
  },
  "red": {
    "color": "#FF0000",
    "marginLeft": "10"
  },
  "introduction": {
    "borderBottomWidth": "15",
    "borderBottomColor": "#e5e5e5",
    "borderBottomStyle": "solid"
  },
  "footer": {
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "height": "100",
    "width": "750",
    "borderTopWidth": "1",
    "borderTopColor": "#e5e5e5",
    "borderTopStyle": "solid"
  },
  "footer-left": {
    "width": "375",
    "height": "100"
  },
  "footer-right": {
    "width": "375",
    "textAlign": "center",
    "backgroundColor": "#0F8DE8",
    "color": "#FFFFFF",
    "height": "100",
    "lineHeight": "100"
  },
  "f-icon": {
    "height": "40",
    "width": "40"
  },
  "icon-box": {
    "width": "187"
  },
  "insured": {
    "opacity": 1,
    "opacity:active": 0.8
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _data = __webpack_require__(10);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      // 获取浏览器url拼接参数
      urlParam: (0, _utils.getQueryParams)(weex.config.bundleUrl),
      // 详情数据
      detailsData: _data.detailsData,
      imgUrl: _utils.imgUrl
    };
  },

  methods: {
    /** 咨询 */
    onAdvisory: function onAdvisory() {
      (0, _utils.jump)('chat');
    },

    /** 单击收藏 */
    onCollection: function onCollection() {
      var isCollection = this.detailsData.isCollection;

      this.detailsData.isCollection = !isCollection;
    },

    /** 单击立刻投保 */
    onInsured: function onInsured() {
      (0, _utils.toast)('投保成功');
    }
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var detailsData = exports.detailsData = {
    title: '小黄峰少儿重疾险',
    describe: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
    icon: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
    date: '一年',
    age: '30周岁-40周岁',
    money: '50',
    people: '123',
    city: '全国范围可保',
    wait: '90',
    amount: '10万',
    isCollection: true,
    details: '产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍'
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["details-page"]
  }, [_c('cell', {
    staticClass: ["box", "header"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', {
    staticClass: ["big"]
  }, [_vm._v(_vm._s(_vm.detailsData.title))]), _c('text', {
    staticClass: ["medium"]
  }, [_vm._v(_vm._s(_vm.detailsData.describe))])]), _c('cell', {
    staticClass: ["box", "introduction"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', {
    staticClass: ["medium"]
  }, [_vm._v("产品介绍")]), _c('div', {
    staticClass: ["flex-center-both"]
  }, [_c('text', {
    staticClass: ["medium"]
  }, [_vm._v("保障时间: " + _vm._s(_vm.detailsData.date))]), _c('div', {
    staticClass: ["flex-row"]
  }, [_c('text', {
    staticClass: ["medium"]
  }, [_vm._v("最终保额: ")]), _c('text', {
    staticClass: ["big", "red"]
  }, [_vm._v(_vm._s(_vm.detailsData.amount))])])]), _c('text', {
    staticClass: ["medium"]
  }, [_vm._v("最终保额: " + _vm._s(_vm.detailsData.date))]), _c('text', {
    staticClass: ["medium"]
  }, [_vm._v("使用人群: " + _vm._s(_vm.detailsData.age))]), _c('text', {
    staticClass: ["medium"]
  }, [_vm._v("可投保城市: " + _vm._s(_vm.detailsData.city))]), _c('text', {
    staticClass: ["medium"]
  }, [_vm._v("等待期: " + _vm._s(_vm.detailsData.waitDate) + "天")]), _c('div', {
    staticClass: ["flex-row"]
  }, [_c('text', {
    staticClass: ["medium"]
  }, [_vm._v("价格: ")]), _c('text', {
    staticClass: ["big", "red"]
  }, [_vm._v(_vm._s(_vm.detailsData.money))])])]), _c('cell', {
    staticClass: ["box"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', {
    staticClass: ["medium"]
  }, [_vm._v("详情")]), _c('text', {
    staticClass: ["medium"]
  }, [_vm._v(_vm._s(_vm.detailsData.details))])]), _c('cell', {
    staticClass: ["footer", "flex-row"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["footer-left", "flex-row"]
  }, [_c('div', {
    staticClass: ["icon-box", "flex-center"],
    on: {
      "click": _vm.onAdvisory
    }
  }, [_c('image', {
    staticClass: ["f-icon"],
    attrs: {
      "src": _vm.imgUrl + 'eca26654-0833-4444-8130-f8f482338c6b/advisory.png'
    }
  }), _c('text', {
    staticClass: ["medium"]
  }, [_vm._v("在线咨询")])]), _c('div', {
    staticClass: ["icon-box", "flex-center"],
    on: {
      "click": _vm.onCollection
    }
  }, [_c('image', {
    staticClass: ["f-icon"],
    attrs: {
      "src": _vm.imgUrl + (_vm.detailsData.isCollection ? '0b6e0cb9-fc2f-4a26-8df6-42de3d83c26e/collection_s.png' : '9b644647-b774-4ff1-92ff-fc0e0bd5811c/collection.png')
    }
  }), _c('text', {
    staticClass: ["medium"]
  }, [_vm._v("收藏")])])]), _c('text', {
    staticClass: ["footer-right", "big", "insured"],
    on: {
      "click": _vm.onInsured
    }
  }, [_vm._v("立即投保")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);