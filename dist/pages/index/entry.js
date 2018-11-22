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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _entry = __webpack_require__(19);

var _entry2 = _interopRequireDefault(_entry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_entry2.default.el = '#root';
new Vue(_entry2.default);

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(20)
)

/* script */
__vue_exports__ = __webpack_require__(21)

/* template */
var __vue_template__ = __webpack_require__(22)
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
__vue_options__.__file = "/Users/admin/Documents/program/weex/weex-app/src/pages/index/entry.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2f3cd7a1"
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

/***/ 20:
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
  "wrapper": {
    "alignItems": "center"
  },
  "header": {
    "width": "600",
    "marginTop": "50",
    "marginRight": 0,
    "marginBottom": "40",
    "marginLeft": 0
  },
  "title": {
    "fontSize": "40"
  },
  "welcome": {
    "fontSize": "50"
  },
  "input": {
    "backgroundColor": "#ffffff",
    "paddingLeft": "10",
    "borderWidth": "1",
    "height": "80",
    "fontSize": "28",
    "borderRadius": "10",
    "width": "600"
  },
  "button": {
    "opacity:active": 0.8,
    "backgroundColor": "#0F8DE8",
    "color": "#FFFFFF",
    "marginTop": "100",
    "width": "600",
    "height": "80",
    "lineHeight": "80",
    "textAlign": "center",
    "fontSize": "32",
    "borderRadius": "40",
    "opacity": 1
  }
}

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

exports.default = {
  name: "App",
  components: {},
  data: function data() {
    return {
      inpVal: ''
    };
  },

  methods: {
    /** 单击登入 */
    onLogin: function onLogin() {
      (0, _utils.jump)('home');
    }
  }
}; //
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

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_vm._m(0), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "number",
      "maxLength": "12",
      "value": (_vm.inpVal)
    },
    on: {
      "input": function($event) {
        _vm.inpVal = $event.target.attr.value
      }
    }
  }), _c('div', [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.onLogin
    }
  }, [_vm._v("登入")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["header"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("阿里云智能数据运营平台")]), _c('text', {
    staticClass: ["welcome"]
  }, [_vm._v("欢迎您")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });