
<template>
  <div class="wrapper">
    <scroller class="message-flow">
      <div v-for="(item, index) in messages" :key="'chart-' + index">
        <div :class="['message-item', 'from-' + item.source]">
          <div class="item-inner"  v-if="item.source === 'origin'">
            <div class="avatar-box">
              <image class="avatar" src="https://img.alicdn.com/tfs/TB17P8hAQyWBuNjy0FpXXassXXa-266-266.jpg" alt="avatar" />
            </div>
            <div class="message-box origin-message-box">
              <text class="message">{{item.message}}</text>
            </div>
          </div>
          <div class="item-inner"  v-else>
            <div class="message-box self-message-box">
              <text class="message">{{item.message}}</text>
            </div>
            <div class="avatar-box">
              <image class="avatar" src="https://img.alicdn.com/tfs/TB1vZVZAQCWBuNjy0FaXXXUlXXa-167-167.jpg" alt="avatar" />
            </div>
          </div>
        </div>
        <div :ref="'indicator-' + index" class="indicator"></div>
      </div>
    </scroller>
    <div class="inputbox">
      <input class="input" type="text" v-model="text" />
      <text class="button" @click="send">发送</text>
    </div>
    <div class="loading-wrapper" v-if="!canType">
      <div class="loading-box">
        <image class="loading" src="data:image/gif;base64,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" />
        <text class="tip">网络建连中，请稍后</text>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
  .loading-wrapper {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    justify-content: center;
    align-items: center;
  }
  .loading-box {
    width: 400px;
    height: 130px;
    padding: 20px;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
  .loading {
    width: 50px;
    height: 50px;
  }
  .tip {
    text-align: center;
    color: #fff;
  }
  .message-flow {
    position: absolute;
    top: 0px;
    bottom: 100px;
    right: 0px;
    left: 0px;
    background-color: #f4f4f4;
    padding: 10px;
  }
  .message-item {
    margin-bottom: 30px;
    flex-direction: row;
  }
  .item-inner {
    width: 650px;
    flex-direction: row;
    justify-content: space-between;
  }
  .from-self {
    justify-content: flex-start;
  }
  .from-self {
    justify-content: flex-end;
  }
  .avatar-box {
    width: 100px;
    height: 100px;
    border-radius: 100px;
  }
  .avatar {
    width: 100px;
    height: 100px;
  }
  .message-box {
    padding: 30px 30px;
    width: 530px;
    border-radius: 10px;
  }
  .origin-message-box {
    background-color: #fff;
  }
  .self-message-box {
    background-color: #7bbf57;
  }
  .message {
    line-height: 46px;
  }
  .inputbox {
    height: 100px;
    padding: 20px;
    background-color: #f1f1f1;
    position: absolute;
    bottom: 0px;
    right: 0px;
    left: 0px;
    flex-direction: row;
  }
  .input {
    background-color: #fff;
    padding: 10px;
    flex: 8;
  }
  .button {
    flex:1;
    padding: 5px;
    color: #41B883;
    text-align: center;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
</style>

<script>
  const websocket = weex.requireModule('webSocket');
  const modal = weex.requireModule('modal');
  const dom = weex.requireModule('dom');
  
  export default {
    data () {
      return {
        text: '',
        canType: false,
        messages: [{source: 'origin', message: '请问您有什么问题？'}]
      }
    },
    created: function () {
      websocket.WebSocket('ws://echo.websocket.org','');
      const self = this;
      
      websocket.onopen = function(e) {
        // 做一个延时，以免建连太快而抖动
        setTimeout(function() {
          self.canType = true;
        }, 300);
      }
      websocket.onmessage = function(e) {
        const length = self.messages.push({source: 'origin', message: e.data});
        self.go2bottom(length);
      }
      websocket.onerror = function(e) {
        modal.toast({
          message: '网络错误，请稍后重试。',
          duration: 3
        });
      }
    },
    destory: function () {
      websocket.close();
    },
    methods: {
      send:function(e) {
        const msg= this.text;
        const canType = this.canType;
        
        if (!canType) {
          modal.toast({
            message: '正在建立连接，请稍后。',
            duration: 3
          });
          return;
        }
        websocket.send(msg);
        const length = this.messages.push({source: 'self', message: msg});
        this.text = '';
        this.go2bottom(length);
      },
      close:function(e) {
        websocket.close();
      },
      go2bottom: function(length) {
        const indicatorId = 'indicator-' + (length - 2);
        const indicator = this.$refs[indicatorId];
        
        // 滚动到上一条消息的底部
        if (indicator) {
          const el = indicator;
          dom.scrollToElement(el, {});
        }
      }
    },
  }
</script>
