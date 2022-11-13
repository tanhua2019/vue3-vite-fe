import { computed } from 'vue'

/**
 * 判断是否为移动设备
 */
export const isMobileTerminal = computed(() => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
})
