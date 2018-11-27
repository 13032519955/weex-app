<template>
    <list>
        <cell class="flex-row header">
            <text class="text" @click="showListCity">{{location}}></text>
            <input class="search" string='search' v-model="val" type="text" />
            <image class="icon" :src="imgUrl + 'scan.png'" />
            <image class="icon" :src="imgUrl + 'information.png'" />
        </cell>
        <cell>
          <slider  class="slider" interval="3000" auto-play="true" offset-x-accuracy="0.9" infinite="false">
            <div class="slider-pages" v-for="(item, i) in sliderList" :key="'slider-' + i">
              <image class="img" :src="item.pictureUrl" />
              <text class="title">{{item.title}}</text>
            </div>
            <indicator class="indicator"></indicator>
          </slider>
        </cell>
        <cell class="flex-row nav-list">
          <div v-for="(item, i) of navList" 
            class="flex-center nav-main"
            :key="'nav-list-' + i">
            <image :src='item.icon' :class="['nav-icon', 'nav-icon-' + i]"/>
            <text class="medium label">{{item.label}}</text>
          </div>
        </cell>

        <cell class="flex-center" @click="onJump">
          <div class="flex-center-both footer footer-top">
            <text class="medium recommend">精选推荐</text>
            <text class="medium">更多</text>
          </div>

          <div v-for="(item, i) of listData" 
            :key="'list-' + i"
            class="flex-row footer footer-content"
          >
            <image class="list-icon" :src='item.icon' />
            <div>
              <text class="big">{{item.title}}</text>
              <text class="medium gray">保障期限:{{item.date}}</text>
              <text class="medium gray">投保年龄:{{item.age}}</text>
              <div class="flex-center-both list-right">
                <div class="flex-row">
                  <text class="big red">{{item.money}}元起</text>
                  <text class="medium buy">{{item.people}}人购买</text>
                </div>
                <text class="medium btn">立即投保</text>
              </div>
            </div>
          </div>
        </cell>

        <cell>
          <wxc-city ref="wxcCity"
              :animationType="animationType"
              :currentLocation="location"
              :cityStyleType="cityStyleType"
              @wxcCityItemSelected="citySelect"
              @wxcCityOnInput="onInput" />
        </cell>
        

    </list>
</template>

<script>
import { imgUrl, jump, isWeb } from "../../utils";
import { navList, listData, sliderList } from "./data.js";
import { WxcCity } from "weex-ui";

export default {
  components: { WxcCity },
  data() {
    return {
      animationType: "push",
      cityStyleType: "list",
      location: "定位中",
      // 输入框搜索值
      val: "",
      // 图片地址
      imgUrl,
      // 导航列表
      navList,
      // 列表数据
      listData,
      sliderList
    };
  },
  mounted() {
    if (!isWeb) {
      // weex.requireModule('ManModule').MANServicePage('home', 'ReferPageName', 500);
    }
    // 模拟定位
    setTimeout(() => {
      this.location = "杭州";
    }, 500);
  },
  methods: {
    showListCity() {
      this.cityStyleType = "list";
      this.$refs["wxcCity"].show();
    },
    showGroupCity() {
      this.cityStyleType = "group";
      this.$refs["wxcCity"].show();
    },
    citySelect(e) {
      if (e.item.cityName) this.location = e.item.cityName;
    },
    onInput(e) {},
    onJump() {
      jump("details", "12331444");
    }
  }
};
</script>

<style scoped lang='scss'>
@import "../style/public.scss";

/* 图片轮播 */
@mixin box {
  height: 240px;
  width: 750px;
}

.img {
  /* width: 714px;
  height: 500px; */
  @include box;
}
.recommend {
  @include borderBottom(5px, $blue, left);
  padding-left: 10px;
}
.title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 750px;
  color: black;
  font-size: $big-size;
  padding: 5px 12px;
  background-color: rgba(55, 55, 55, 0.4);
}
.slider {
  flex-direction: row;
  // margin: 18px;
  /* width: 714px;
  height: 500px; */
  @include box;
}
.slider-pages {
  flex-direction: row;
  /* width: 714px;
  height: 500px; */
  @include box;
}
.buy {
  margin-top: 15px;
  margin-left: 5px;
}
.indicator {
  width: 714px;
  height: 30px;
  position: absolute;
  bottom: 1px;
  left: 1px;
  item-color: black;
  item-selected-color: $b-2;
  item-size: 20px;
}
.label {
  color: #616161;
  font-size: $small-size;
}
/* 图片轮播end */

.big {
  // margin-bottom: 10px;
}
.red {
  color: red;
  margin-top: 10px;
}
.header {
  height: 100px;
}

.text {
  font-size: $medium-size;
  margin-left: 30px;
}
.gray {
  color: $b-1;
  margin-top: 5px;
}
.search {
  background-color: #fff;
  padding-left: 10px;
  border-width: 1px;
  height: 60px;
  font-size: $medium-size;
  border-radius: 10px;
  width: 500px;
  margin: 0 10px;
}
.carousel-main {
  height: 300px;
  width: 750px;
  background-color: red;
}

.nav-icon {
  height: 85px;
  width: 85px;
}

.nav-main {
  margin: 25px 0 15px 54px;
}

.nav-list {
  @include borderBottom(15px, $gray);
}
.list-icon {
  height: 180px;
  width: 180px;
  border-radius: 10px;
  margin-right: 20px;
}
.list-right {
  width: 520px;
}
.footer-top {
  height: 70px;
}
.footer {
  width: 720px;
}
.footer-content {
  padding: 15px 0;
  @include borderBottom(1px, $gray, "top");
  @include borderBottom(1px, $gray);
  margin-bottom: -1px;
}
.btn {
  background-color: $blue;
  color: white;
  padding: 7px 15px;
  border-radius: 5px;
}
</style>
