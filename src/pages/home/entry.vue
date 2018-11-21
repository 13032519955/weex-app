<template>
    <list>
        <cell class="flex-row header">
            <text class="text">天津市</text>
            <input class="search" string='search' v-model="val" type="text" />
            <image class="icon" :src="imgUrl + '811d0bfe-f851-4cd4-a859-3bdffced9863/scan.png'" />
            <image class="icon" :src="imgUrl + '521cd497-8f5a-4cac-b5a8-c4a58968978d/information.png'" />
        </cell>
        <cell>
          <slider class="slider" interval="3000" auto-play="false" offset-x-accuracy="0.9" infinite="false">
            <div class="slider-pages" v-for="(item, i) in sliderList" :key="'slider-' + i">
              <image class="img" :src="item.pictureUrl" />
              <text class="title">{{item.title}}</text>
            </div>
            <indicator class="indicator"></indicator>
          </slider>
        </cell>
        <cell class="flex-row-center nav-list">
          <div v-for="(item, i) of navList" 
            class="flex-center nav-main"
            :key="'nav-list-' + i">
            <image :src='item.icon' class="nav-icon"/>
            <text class="medium">{{item.label}}</text>
          </div>
        </cell>

        <cell class="flex-center" @click="onJump">
          <div class="flex-center-both footer footer-top">
            <text class="medium">精选推荐</text>
            <text class="medium">更多</text>
          </div>

          <div v-for="(item, i) of listData" 
            :key="'list-' + i"
            class="flex-row footer footer-content"
          >
            <image class="list-icon" :src='item.icon' />
            <div>
              <text class="big">{{item.title}}</text>
              <text class="medium">保障期限:{{item.date}}</text>
              <text class="medium">投保年龄:{{item.age}}</text>
              <div class="flex-center-both list-right">
                <div class="flex-row">
                  <text class="big red">{{item.money}}元起</text>
                  <text class="medium">{{item.people}}人购买</text>
                </div>
                <text class="medium btn">立即投保</text>
              </div>
            </div>
          </div>
        </cell>
        

    </list>
</template>

<script>
import { imgUrl, jump } from "../../utils";
import { navList, listData, sliderList } from "./data.js";

export default {
  data() {
    return {
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
  methods: {
    onJump() {
      jump('details');
    }
  }
};
</script>

<style scoped lang='scss'>
@import "../style/public.scss";

/* 图片轮播 */
@mixin box {
  height: 300px;
  width: 750px;
}

.img {
  /* width: 714px;
  height: 500px; */
  @include box;
}
.title {
  position: absolute;
  top: 20px;
  left: 20px;
  color: #ff0000;
  font-size: 48px;
  font-weight: bold;
  background-color: #eeeeee;
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
.indicator {
  width: 714px;
  height: 30px;
  position: absolute;
  bottom: 1px;
  left: 1px;
  item-color: red;
  item-selected-color: blue;
  item-size: 20px;
}

/* 图片轮播end */

.big {
  margin-bottom: 10px;
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
  height: 100px;
  width: 100px;
  border-radius: 100px;
}

.nav-main {
  margin: 5px 10px;
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
  height: 50px;
}
.footer {
  width: 720px;
}
.footer-content {
  margin-bottom: 20px;
}
.btn {
  background-color: $blue;
  color: white;
  padding: 0 10px;
  border-radius: 5px;
}
</style>
