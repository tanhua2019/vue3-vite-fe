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
    <div class="nav-right" @click="clickPopup">
      <m-svg-icons name="hamburger" color="red"></m-svg-icons>
    </div>
    <m-popup v-model:isShow="isShow">
      <Menu :categorys="categoryList" @clickItem="handleClick"/>
    </m-popup>
  </div>
</template>

<script setup>
import { ref, watch, onBeforeUpdate } from 'vue'
import Menu from './menu.vue'
const props = defineProps({
  categoryList: {
    type: Array,
    required: true
  }
})
let activeIndex = ref(0)
const handleClick = (key) => {
  activeIndex.value = key
  isShow.value = false
}

// 获取填充的所有 item 元素
let itemRefs = []
// 滑块
const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '54px'
})
const setItemRef = (el) => {
  if (el) {
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

const isShow = ref(false)
const clickPopup = () => {
  isShow.value = true
}
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
