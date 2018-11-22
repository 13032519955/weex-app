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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _entry = __webpack_require__(13);

var _entry2 = _interopRequireDefault(_entry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_entry2.default.el = '#root';
new Vue(_entry2.default);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(17)
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
__vue_options__.__file = "/Users/admin/Documents/program/weex/weex-app/src/pages/home/entry.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6ef767c6"
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
/* 14 */
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
    "fontSize": "32",
    "marginBottom": "10"
  },
  "img": {
    "height": "300",
    "width": "750"
  },
  "title": {
    "position": "absolute",
    "top": "20",
    "left": "20",
    "color": "#ff0000",
    "fontSize": "48",
    "fontWeight": "bold",
    "backgroundColor": "#eeeeee"
  },
  "slider": {
    "flexDirection": "row",
    "height": "300",
    "width": "750"
  },
  "slider-pages": {
    "flexDirection": "row",
    "height": "300",
    "width": "750"
  },
  "indicator": {
    "width": "714",
    "height": "30",
    "position": "absolute",
    "bottom": "1",
    "left": "1",
    "itemColor": "#FF0000",
    "itemSelectedColor": "#0000FF",
    "itemSize": "20"
  },
  "red": {
    "color": "#FF0000",
    "marginTop": "10"
  },
  "header": {
    "height": "100"
  },
  "text": {
    "fontSize": "28",
    "marginLeft": "30"
  },
  "search": {
    "backgroundColor": "#ffffff",
    "paddingLeft": "10",
    "borderWidth": "1",
    "height": "60",
    "fontSize": "28",
    "borderRadius": "10",
    "width": "500",
    "marginTop": 0,
    "marginRight": "10",
    "marginBottom": 0,
    "marginLeft": "10"
  },
  "carousel-main": {
    "height": "300",
    "width": "750",
    "backgroundColor": "#FF0000"
  },
  "nav-icon": {
    "height": "100",
    "width": "100",
    "borderRadius": "100"
  },
  "nav-main": {
    "marginTop": "5",
    "marginRight": "10",
    "marginBottom": "5",
    "marginLeft": "10"
  },
  "nav-list": {
    "borderBottomWidth": "15",
    "borderBottomColor": "#e5e5e5",
    "borderBottomStyle": "solid"
  },
  "list-icon": {
    "height": "180",
    "width": "180",
    "borderRadius": "10",
    "marginRight": "20"
  },
  "list-right": {
    "width": "520"
  },
  "footer-top": {
    "height": "50"
  },
  "footer": {
    "width": "720"
  },
  "footer-content": {
    "marginBottom": "20"
  },
  "btn": {
    "backgroundColor": "#0F8DE8",
    "color": "#FFFFFF",
    "paddingTop": 0,
    "paddingRight": "10",
    "paddingBottom": 0,
    "paddingLeft": "10",
    "borderRadius": "5"
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _data = __webpack_require__(16);

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
      // 输入框搜索值
      val: "",
      // 图片地址
      imgUrl: _utils.imgUrl,
      // 导航列表
      navList: _data.navList,
      // 列表数据
      listData: _data.listData,
      sliderList: _data.sliderList
    };
  },
  created: function created() {},

  methods: {
    onJump: function onJump() {
      (0, _utils.jump)('details', '12331444');
    }
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var navList = exports.navList = [{
    icon: 'https://gw.alicdn.com/tps/TB1bEMYKXXXXXaLaXXXXXXXXXXX-360-388.png',
    label: '基金'
}, {
    icon: 'https://gw.alicdn.com/tps/TB1bEMYKXXXXXaLaXXXXXXXXXXX-360-388.png',
    label: '保险'
}, {
    icon: 'https://gw.alicdn.com/tps/TB1bEMYKXXXXXaLaXXXXXXXXXXX-360-388.png',
    label: '证券'
}, {
    icon: 'https://gw.alicdn.com/tps/TB1bEMYKXXXXXaLaXXXXXXXXXXX-360-388.png',
    label: '投资'
}, {
    icon: 'https://gw.alicdn.com/tps/TB1bEMYKXXXXXaLaXXXXXXXXXXX-360-388.png',
    label: '黄金'
}];

var listData = exports.listData = [{
    icon: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
    title: '小黄蜂少儿重疾险',
    date: '一年',
    age: '30周岁-40周岁',
    money: '50',
    people: '123'
}, {
    icon: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
    title: '小黄蜂少儿重疾险',
    date: '一年',
    age: '30周岁-40周岁',
    money: '50',
    people: '123'
}, {
    icon: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
    title: '小黄蜂少儿重疾险',
    date: '一年',
    age: '30周岁-40周岁',
    money: '50',
    people: '123'
}, {
    icon: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
    title: '小黄蜂少儿重疾险',
    date: '一年',
    age: '30周岁-40周岁',
    money: '50',
    people: '123'
}, {
    icon: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg',
    title: '小黄蜂少儿重疾险',
    date: '一年',
    age: '30周岁-40周岁',
    money: '50',
    people: '123'
}];

var sliderList = exports.sliderList = [{ itemId: '520421163634', title: 'item1', pictureUrl: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg' }, { itemId: '522076777462', title: 'item2', pictureUrl: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' }, { itemId: '522076777462', title: 'item3', pictureUrl: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }, { itemId: '522076777467', title: 'item4', pictureUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491837948&di=3dcecd1b1d709196873a91f9fd585962&imgtype=jpg&er=1&src=http%3A%2F%2Fphotocdn.sohu.com%2F20160304%2Fmp61863731_1457078539188_3.gif' }];

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', [_c('cell', {
    staticClass: ["flex-row", "header"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("天津市")]), _c('input', {
    staticClass: ["search"],
    attrs: {
      "string": "search",
      "type": "text",
      "value": (_vm.val)
    },
    on: {
      "input": function($event) {
        _vm.val = $event.target.attr.value
      }
    }
  }), _c('image', {
    staticClass: ["icon"],
    attrs: {
      "src": _vm.imgUrl + '811d0bfe-f851-4cd4-a859-3bdffced9863/scan.png'
    }
  }), _c('image', {
    staticClass: ["icon"],
    attrs: {
      "src": _vm.imgUrl + '521cd497-8f5a-4cac-b5a8-c4a58968978d/information.png'
    }
  })]), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "interval": "3000",
      "autoPlay": "false",
      "offsetXAccuracy": "0.9",
      "infinite": "false"
    }
  }, [_vm._l((_vm.sliderList), function(item, i) {
    return _c('div', {
      key: 'slider-' + i,
      staticClass: ["slider-pages"]
    }, [_c('image', {
      staticClass: ["img"],
      attrs: {
        "src": item.pictureUrl
      }
    }), _c('text', {
      staticClass: ["title"]
    }, [_vm._v(_vm._s(item.title))])])
  }), _c('indicator', {
    staticClass: ["indicator"]
  })], 2)]), _c('cell', {
    staticClass: ["flex-row-center", "nav-list"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, _vm._l((_vm.navList), function(item, i) {
    return _c('div', {
      key: 'nav-list-' + i,
      staticClass: ["flex-center", "nav-main"]
    }, [_c('image', {
      staticClass: ["nav-icon"],
      attrs: {
        "src": item.icon
      }
    }), _c('text', {
      staticClass: ["medium"]
    }, [_vm._v(_vm._s(item.label))])])
  })), _c('cell', {
    staticClass: ["flex-center"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    },
    on: {
      "click": _vm.onJump
    }
  }, [_vm._m(0), _vm._l((_vm.listData), function(item, i) {
    return _c('div', {
      key: 'list-' + i,
      staticClass: ["flex-row", "footer", "footer-content"]
    }, [_c('image', {
      staticClass: ["list-icon"],
      attrs: {
        "src": item.icon
      }
    }), _c('div', [_c('text', {
      staticClass: ["big"]
    }, [_vm._v(_vm._s(item.title))]), _c('text', {
      staticClass: ["medium"]
    }, [_vm._v("保障期限:" + _vm._s(item.date))]), _c('text', {
      staticClass: ["medium"]
    }, [_vm._v("投保年龄:" + _vm._s(item.age))]), _c('div', {
      staticClass: ["flex-center-both", "list-right"]
    }, [_c('div', {
      staticClass: ["flex-row"]
    }, [_c('text', {
      staticClass: ["big", "red"]
    }, [_vm._v(_vm._s(item.money) + "元起")]), _c('text', {
      staticClass: ["medium"]
    }, [_vm._v(_vm._s(item.people) + "人购买")])]), _c('text', {
      staticClass: ["medium", "btn"]
    }, [_vm._v("立即投保")])])])])
  })], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["flex-center-both", "footer", "footer-top"]
  }, [_c('text', {
    staticClass: ["medium"]
  }, [_vm._v("精选推荐")]), _c('text', {
    staticClass: ["medium"]
  }, [_vm._v("更多")])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);