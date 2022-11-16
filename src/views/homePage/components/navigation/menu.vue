<template>
  <div class="menu">
    <h2 class="menu-header">分类</h2>
    <div class="menu-content">
      <div
        class="item"
        v-for="(item, index) in categorys"
        :key="index"
        @click="emit('clickItem', index)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  categorys: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['clickItem'])
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
  padding: 10px 0;
  &-header {
    padding: 10px;
    font-size: 20px;
    font-weight: 700;
  }
  &-content {
    height: calc(100% - 75px);
    overflow: scroll;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    box-sizing: border-box;
    .item {
      padding: 5px 10px;
      flex-shrink: 0;
      height: 40px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
