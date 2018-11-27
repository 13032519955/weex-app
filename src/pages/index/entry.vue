<template>
  <div class="wrapper">
    <div class="header">
      <text class="title">阿里云智能数据运营平台</text>
      <text class="welcome">欢迎您</text>
    </div>
    
    <input class="input" v-model="inpVal" type="number" max-length=12 />
    <div>
      <text @click="onLogin" class="button">登入</text>
    </div>
  </div>
</template>

<script>
import { jump, toast } from "../../utils";

export default {
  name: "App",
  components: {},
  data() {
    return {
      inpVal: ''      
    };
  },
  created() {
    weex.requireModule('ManModule').MANServicePage('index', 'ReferPageName', 500);
  },
  methods: {
    /** 单击登入 */
    onLogin() {
      weex.requireModule('ManModule') && weex.requireModule('ManModule').MANServiceUserLogin('userName');
      jump('home');
    }
  }
};
</script>

<style scoped lang='scss'>
@import "../style/public.scss";
$dWidth: 600px;

.wrapper {
  align-items: center;
}
.header {
  width: $dWidth;
  margin: 50px 0 40px 0;
}
.title {
  font-size: $fSize;
}
.welcome {
  font-size: 50px;
}
.input {
  background-color: #fff;
  padding-left: 10px;
  border-width: 1px;
  height: 80px;
  font-size: $medium-size;
  border-radius: 10px;
  width: $dWidth;
}
.button:active {
  opacity: 0.8;
}
.button {
  background-color: $blue;
  color: white;
  margin-top: 100px;
  width: $dWidth;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: $big-size;
  border-radius: 40px;
  opacity: 1;
}
</style>
