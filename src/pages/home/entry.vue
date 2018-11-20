<template>
    <list>
        <cell class="flex-row">
            <text class="text">天津市</text>
            <input class="search" string='search' v-model="val" type="text" />
            <image class="icon" :src="require('../../assets/image/information.png')" />
            <!-- <image class="icon" :src="require('../../assets/image/information.png')" /> -->
        </cell>
    </list>
</template>

<script>
import {imgUrl} from '../../utils'

export default {
  data() {
    return {
      val: "",
      imgUrl
    };
  }
};
</script>

<style scoped lang='scss'>
@import "../style/public.scss";
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
</style>
