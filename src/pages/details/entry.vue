<template>
  <list>
    <cell v-for="num in lists" :key="num">
      <text>{{num}}</text>
    </cell>
  </list>
</template>

<script>
  export default {
    data () {
      return {
        lists: ['A', 'B', 'C', 'D', 'E']
      }
    }
  }
</script>