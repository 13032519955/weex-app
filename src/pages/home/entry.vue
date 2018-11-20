<template>
    <list>
        <cell>
            <text>天津市</text>
            <input class="search" string='search' v-model="val" type="text" />
            <!-- <image :src=" imgUrl + 'scan.png'" /> -->
        </cell>
    </list>
</template>

<script>
export default {
  data() {
    return {
      val: "",
    //   imgUrl: process.env
    };
  },
  created() {
    //   console.log(process.env)
  }
};
</script>

<style scoped lang='scss'>
</style>
