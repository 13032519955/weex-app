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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _entry = __webpack_require__(2);

var _entry2 = _interopRequireDefault(_entry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_entry2.default.el = '#root';
new Vue(_entry2.default);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(5)
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
__vue_options__.__file = "/Users/admin/Documents/program/weex/weex-app/src/pages/chat/entry.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-45bffa02"
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
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": "0",
    "right": "0",
    "bottom": "0",
    "left": "0"
  },
  "loading-wrapper": {
    "position": "absolute",
    "top": "0",
    "right": "0",
    "bottom": "0",
    "left": "0",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "loading-box": {
    "width": "400",
    "height": "130",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "alignItems": "center",
    "backgroundColor": "rgba(0,0,0,0.2)",
    "borderRadius": "10"
  },
  "loading": {
    "width": "50",
    "height": "50"
  },
  "tip": {
    "textAlign": "center",
    "color": "#ffffff"
  },
  "message-flow": {
    "position": "absolute",
    "top": "0",
    "bottom": "100",
    "right": "0",
    "left": "0",
    "backgroundColor": "#f4f4f4",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10"
  },
  "message-item": {
    "marginBottom": "30",
    "flexDirection": "row"
  },
  "item-inner": {
    "width": "650",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "from-self": {
    "justifyContent": "flex-end"
  },
  "avatar-box": {
    "width": "100",
    "height": "100",
    "borderRadius": "100"
  },
  "avatar": {
    "width": "100",
    "height": "100"
  },
  "message-box": {
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30",
    "width": "530",
    "borderRadius": "10"
  },
  "origin-message-box": {
    "backgroundColor": "#ffffff"
  },
  "self-message-box": {
    "backgroundColor": "#7bbf57"
  },
  "message": {
    "lineHeight": "46"
  },
  "inputbox": {
    "height": "100",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "backgroundColor": "#f1f1f1",
    "position": "absolute",
    "bottom": "0",
    "right": "0",
    "left": "0",
    "flexDirection": "row"
  },
  "input": {
    "backgroundColor": "#ffffff",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "flex": 8
  },
  "button": {
    "flex": 1,
    "paddingTop": "5",
    "paddingRight": "5",
    "paddingBottom": "5",
    "paddingLeft": "5",
    "color": "#41B883",
    "textAlign": "center",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var websocket = weex.requireModule('webSocket');
var modal = weex.requireModule('modal');
var dom = weex.requireModule('dom');

exports.default = {
  data: function data() {
    return {
      text: '',
      canType: false,
      messages: [{ source: 'origin', message: '请问您有什么问题？' }]
    };
  },

  created: function created() {
    websocket.WebSocket('ws://echo.websocket.org', '');
    var self = this;

    websocket.onopen = function (e) {
      // 做一个延时，以免建连太快而抖动
      setTimeout(function () {
        self.canType = true;
      }, 300);
    };
    websocket.onmessage = function (e) {
      var length = self.messages.push({ source: 'origin', message: e.data });
      self.go2bottom(length);
    };
    websocket.onerror = function (e) {
      modal.toast({
        message: '网络错误，请稍后重试。',
        duration: 3
      });
    };
  },
  destory: function destory() {
    websocket.close();
  },
  methods: {
    send: function send(e) {
      var msg = this.text;
      var canType = this.canType;

      if (!canType) {
        modal.toast({
          message: '正在建立连接，请稍后。',
          duration: 3
        });
        return;
      }
      websocket.send(msg);
      var length = this.messages.push({ source: 'self', message: msg });
      this.text = '';
      this.go2bottom(length);
    },
    close: function close(e) {
      websocket.close();
    },
    go2bottom: function go2bottom(length) {
      var indicatorId = 'indicator-' + (length - 2);
      var indicator = this.$refs[indicatorId];

      // 滚动到上一条消息的底部
      if (indicator) {
        var el = indicator;
        dom.scrollToElement(el, {});
      }
    }
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('scroller', {
    staticClass: ["message-flow"]
  }, _vm._l((_vm.messages), function(item, index) {
    return _c('div', {
      key: 'chart-' + index
    }, [_c('div', {
      class: ['message-item', 'from-' + item.source]
    }, [(item.source === 'origin') ? _c('div', {
      staticClass: ["item-inner"]
    }, [_vm._m(0, true), _c('div', {
      staticClass: ["message-box", "origin-message-box"]
    }, [_c('text', {
      staticClass: ["message"]
    }, [_vm._v(_vm._s(item.message))])])]) : _c('div', {
      staticClass: ["item-inner"]
    }, [_c('div', {
      staticClass: ["message-box", "self-message-box"]
    }, [_c('text', {
      staticClass: ["message"]
    }, [_vm._v(_vm._s(item.message))])]), _vm._m(1, true)])]), _c('div', {
      ref: 'indicator-' + index,
      refInFor: true,
      staticClass: ["indicator"]
    })])
  })), _c('div', {
    staticClass: ["inputbox"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "value": (_vm.text)
    },
    on: {
      "input": function($event) {
        _vm.text = $event.target.attr.value
      }
    }
  }), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.send
    }
  }, [_vm._v("发送")])]), (!_vm.canType) ? _c('div', {
    staticClass: ["loading-wrapper"]
  }, [_vm._m(2)]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["avatar-box"]
  }, [_c('image', {
    staticClass: ["avatar"],
    attrs: {
      "src": "https://img.alicdn.com/tfs/TB17P8hAQyWBuNjy0FpXXassXXa-266-266.jpg",
      "alt": "avatar"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["avatar-box"]
  }, [_c('image', {
    staticClass: ["avatar"],
    attrs: {
      "src": "https://img.alicdn.com/tfs/TB1vZVZAQCWBuNjy0FaXXXUlXXa-167-167.jpg",
      "alt": "avatar"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["loading-box"]
  }, [_c('image', {
    staticClass: ["loading"],
    attrs: {
      "src": "data:image/gif;base64,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"
    }
  }), _c('text', {
    staticClass: ["tip"]
  }, [_vm._v("网络建连中，请稍后")])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);