<template>
  <div class="vxc-carousel-comp">
      <div :style="{width: (width * domLen) + 'px'}" 
        ref="carousel"
        @horizontalpan="e => horizontalpan(e)"
        class="vxc-carousel-comp vxc-flex-row"
      >
        <slot />
      </div>

      <!-- 圆角 -->
      <div v-if="hasInclude" 
            :style="{width: width + 'px'}" 
            :class="['vxc-flex-center', 'vxc-include']"
      >
        <div class="vxc-flex-row">
          <text :class="['vxc-radius', i === index ? 'active' : '']" 
              v-for="(item, i) of domLen" 
              :key="'carousel-' + i"
          >●</text>
        </div>
      </div>
      <!-- 圆角end -->
  </div>
    
</template>

<script>
import { toast } from "../../utils";
const animation = weex.requireModule("animation");

export default {
  props: {
    // 平移宽度
    width: {
      type: Number,
      default: 750
    },
    // 是否有圆点
    hasInclude: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      // dom子节点数量
      domLen: 0,
      // 当前选中的索引
      index: 0,
      // 保存touch移动的X轴数值
      startX: 0,
    };
  },
  mounted() {
    this.domLen = this.$refs.carousel.children.length;
  },
  methods: {
    /** 封装动画
     * @param {Element} dom 标签节点
     * @param {Object} styles 样式
     */
    special(dom, styles) {
      animation.transition(dom, {
        styles,
        duration: 200, //ms
        timingFunction: "ease",
        delay: 100 //ms
      });
    },
    /**
     * 动画效果平移
     * @param {'left' | 'right'} 判断是左滑还是右滑
     * @param {Number} index 索引
     */
    handleSweipe(target, index) {
      // slot内容动画效果
      const mainEl = this.$refs["carousel"];
      const {width} = this
      this.special(mainEl, {
        transform: `translate(${target === 'left' ? -width : width * index}px,0)`
      });
    },
    /** 判断手势
     * @param {Object} event 移动的相关数据
     */
    horizontalpan(event) {
      if (event.state === 'start') {
        this.startX = event.changedTouches[0].pageX
      }
			if (event.state === 'end') {
        const {startX} = this
        const endX = event.changedTouches[0].pageX
				if (startX > endX && startX - endX > 80) {
          // 左滑显示删除按钮
          this.index += 1
          if (this.index === this.domLen) {
            this.index -= 1
          } else {
					  this.handleSweipe('left', this.index)
          }
          // if (this.index === this.domLen) this.index = 0;
          // this.handleSweipe('left', this.index)
				} else if (startX < endX && endX - startX > 80) {
          // 右滑隐藏删除按钮
          this.index -= 1
          if (this.index === -1) {
            this.index = 0
          } else {
            this.handleSweipe('right', this.index)
          }
          // if (this.index === -1) this.index = this.domLen - 1
					// this.handleSweipe('right', this.index)
				}
			}
    },
    
  }
};
</script>

<style>
.vxc-flex-row {
  display: flex;
  flex-direction: row;
}

.vxc-flex-center {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.vxc-carousel-comp {
  position: relative;
}

.vxc-include {
  position: absolute;
  bottom: 10px;
}

.vxc-radius {
  margin-right: 12px;
  font-size: 20px;
}

.active {
  color: gray;
}
</style>


