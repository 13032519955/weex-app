<template>
  <list>
    <cell class="vxc-header vxc-flex-row">
      <div class="vxc-nav vxc-active" 
        :style="{width: scope + 'px'}" 
        ref='vxc-wrapper' 
      />

      <div v-for="(item, i) of data" 
        :key="i" 
        @click="onTabbarClick(i)"
        :style="{width: scope + 'px'}" 
        class="vxc-nav vxc-flex-center"
      >
        <text class="vxc-text">
            {{item.label}}
        </text>
      </div>

    </cell>
    <cell :style="{width: (750 * this.data.length) + 'px'}" class="vxc-flex-row" ref="vxc-main">
      <slot />
    </cell>
  </list>
</template>

<script>
const animation = weex.requireModule("animation")

export default {
  props: {
    data: {
      type: Array
    }
  },
  data: () => {
    return {
      // 数组索引
      index: 0,
      // tabbar宽度尺寸
      scope: '',
    };
  },
  created() {
    this.scope = (750 / this.data.length);
  },
  methods: {
    /** 封装动画
     * @param {Element} dom 标签节点
     * @param {Object} styles 样式
     */
    special(dom, styles) {
      animation.transition(dom, {
        styles,
        duration: 300, //ms
        timingFunction: "ease",
        delay: 100 //ms
      });
    },
    /**
     * 单击导航栏
     * @param {number} index 索引
     */
    onTabbarClick(index) {
      this.index = index;
      // tab页头动画
      const wrapperEl = this.$refs['vxc-wrapper'];
      this.special(wrapperEl, {
        transform: `translate(${this.scope * index}px,0)`,
      })
      // slot内容动画效果
      const mainEl = this.$refs['vxc-main'];
      this.special(mainEl, {
        transform: `translate(${-750 * index}px,0)`,
      })
    }
  }
};
</script>

<style>
.vxc-flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.vxc-flex-row {
  display: flex;
  flex-direction: row;
}

.vxc-header {
  width: 750px;
  background-color: #f7f5fa;
  position: relative;
}
.vxc-nav {
  height: 100px;
}
.vxc-text {
  white-space: inherit;
}
.vxc-active {
  background-color: white;
  position: absolute;
}
.vxc-container {
  width: 750px;
}
</style>