<template>
  <svg :class="svgClass" v-bind="$attrs" :fill='color'>
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  }
})
const iconName = computed(() => `#icon-${props.name}`)
const svgClass = computed(() => {
  if (props.name) return `svg-icon icon-${props.name}`
  return 'svg-icon'
})
</script>
<style lang="scss" scoped></style>
