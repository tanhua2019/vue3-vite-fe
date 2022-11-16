<template>
  <div>
    <teleport to="body">
      <transition name="mark">
        <div
          v-if="isShow"
          class="mark"
          @click="emit('update:isShow', false)"
        ></div>
      </transition>
      <transition name="popup">
        <div class="popupBox" v-if="isShow" v-bind="$attrs">
          <slot></slot>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
const props = defineProps({
  isShow: {
    type: Boolean,
    default: false
  },
  duration: {
    type: String,
    default: '1s'
  }
})
const emit = defineEmits(['update:isShow'])
</script>

<style lang="scss" scoped>
.mark-enter-active,
.mark-leave-active {
  transition: all v-bind(duration);
}
.mark-enter-from,
.mark-leave-to {
  opacity: 0;
}
.mark {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}
.popupBox {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 500px;
  background: #fff;
  width: 100%;
}
.popup-enter-active,
.popup-leave-active {
  transition: all v-bind(duration);
}
.popup-enter-from,
.popup-leave-to {
  transform: translateY(100%);
}
</style>
