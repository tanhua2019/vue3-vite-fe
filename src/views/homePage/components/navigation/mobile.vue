<template>
  <div class="mobile-nav">
    <div class="nav-left" ref="navRef">
      <div class="slider" :style="sliderStyle"></div>
      <div
        :class="['nav-left-item', activeIndex == key ? 'active' : '']"
        :ref="setItemRef"
        v-for="(item, key) in categoryList"
        :key="key"
        @click="handleClick(key)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="nav-right">
      <SvgIcon name="hamburger" color="red"></SvgIcon>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onBeforeUpdate } from 'vue'
const props = defineProps({
  categoryList: {
    type: Array,
    required: true
  }
})
let activeIndex = ref(0)
const handleClick = (key) => {
  activeIndex.value = key
}

// 获取填充的所有 item 元素
let itemRefs = []
// 滑块
const sliderStyle = ref({
  transform: 'translateX(0px)'
})
const setItemRef = (el) => {
  if (el) {
    if (itemRefs.length == 0) {
      const { width } = el.getBoundingClientRect()
      sliderStyle.value.width = width + 'px'
    }
    itemRefs.push(el)
  }
}
const navRef = ref(null)
watch(activeIndex, (newVal) => {
  const { left, width } = itemRefs[newVal].getBoundingClientRect()
  sliderStyle.value = {
    transform: `translateX(${navRef.value.scrollLeft + left - 10 + 'px'})`,
    width: width + 'px'
  }
})
</script>

<style lang="scss" scoped>
.mobile-nav {
  width: 100%;
  position: sticky;
  background: #fff;
  top: 0;
  .nav-left {
    display: flex;
    flex-wrap: nowrap;
    height: 50px;
    align-items: center;
    overflow: scroll;
    padding: 0 10px;
    position: relative;
    &-item {
      flex-shrink: 0;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      height: 30px;
      padding: 0 15px;
      z-index: 10;
    }
    .active {
      transition-duration: 0.2s;
      color: #fff;
    }
    &-item:last-child {
      margin-right: 40px;
    }
    .slider {
      position: absolute;
      height: 30px;
      background: #000;
      border-radius: 20px;
      transition-duration: 0.2s;
    }
  }
  .nav-right {
    position: fixed;
    top: 0;
    right: 0;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    background: #fff;
    box-shadow: -10px 0 5px rgba(255, 255, 255, 1);
    z-index: 20;
    .icon-hamburger {
      height: 30px;
      width: 30px;
      padding: 10px 5px;
    }
  }
}
</style>
