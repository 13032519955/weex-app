<template>
  <list class="details-page">
    <cell class="box header">
      <text class="big">{{detailsData.title}}</text>
      <text class="medium">{{detailsData.describe}}</text>
    </cell>

    <cell class="box introduction">
      <text class="medium">产品介绍</text>
      <div class="flex-center-both">
        <text class="medium">保障时间: {{detailsData.date}}</text>
        <div class="flex-row">
          <text class="medium">最终保额: </text>
          <text class="big red">{{detailsData.amount}}</text>
        </div>
      </div>
      <text class="medium">最终保额: {{detailsData.date}}</text>
      <text class="medium">使用人群: {{detailsData.age}}</text>
      <text class="medium">可投保城市: {{detailsData.city}}</text>
      <text class="medium">等待期: {{detailsData.waitDate}}天</text>
      <div class="flex-row">
        <text class="medium">价格: </text>
        <text class="big red">{{detailsData.money}}</text>
      </div>
    </cell>
    
    <cell class="box">
      <text class="medium">详情</text>
      <text class="medium">{{detailsData.details}}</text>
    </cell>

    <cell class="footer flex-row">
      <div class="footer-left flex-row">
        <div @click="onAdvisory" class="icon-box flex-center">
          <image class="f-icon" :src="imgUrl + 'advisory.png'" />
          <text class="medium">在线咨询</text>
        </div>
        <div @click="onCollection" class="icon-box flex-center">
          <image class="f-icon" :src="imgUrl + (detailsData.isCollection ? 'collection_s.png' : 'collection.png')" />
          <text class="medium">{{detailsData.isCollection ? '' : '未'}}收藏</text>
        </div>
      </div>
      <text class="footer-right big insured" @click="onInsured">立即投保</text>
    </cell>
  </list>
</template>

<script>
import { getQueryParams, jump, toast, imgUrl } from "../../utils";
import { detailsData } from "./data.js";

export default {
  data() {
    return {
      // 获取浏览器url拼接参数
      urlParam: getQueryParams(weex.config.bundleUrl),
      // 详情数据
      detailsData,
      imgUrl
    };
  },
  methods: {
    /** 咨询 */
    onAdvisory() {
      jump('chat');
    },
    /** 单击收藏 */
    onCollection() {
      const { isCollection } = this.detailsData;
      this.detailsData.isCollection = !isCollection;
      weex.requireModule('ManModule').MANServiceCustomEvent('collection', 'details', 500, 'traceid', 'bhv_type','user_id', 'item_id');
    },
    /** 单击立刻投保 */
    onInsured() {
      toast('投保成功')
    }
  }
};
</script>

<style lang='scss'>
@import "../style/public.scss";
$fHeight: 100px;

.details-page {
  padding-bottom: $fHeight;
}

.header {
  @include borderBottom(1px, $gray);
}

.box {
  padding: 10px;
}
.red {
  color: red;
  margin-left: 10px;
}
.introduction {
  @include borderBottom(15px, $gray);
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: $fHeight;
  width: 750px;
  @include borderBottom(1px, $gray, top);
}

.footer-left {
  width: 375px;
  height: $fHeight;
}

.footer-right {
  width: 375px;
  text-align: center;
  background-color: $blue;
  color: white;
  height: $fHeight;
  line-height: $fHeight;
}

.f-icon {
  height: 40px;
  width: 40px;
}

.icon-box {
  width: 187px;
}

.insured {
  opacity: 1;
}

.insured:active {
  opacity: .8;
}

</style>
