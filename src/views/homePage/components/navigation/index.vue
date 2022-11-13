<template>
  <MobileNav :categoryList="categoryList" />
</template>

<script setup>
import MobileNav from './mobile.vue'
import { onMounted, ref } from 'vue'
import { getCategory } from '@/api/category'

onMounted(() => {
  getCategoryList()
})

const categoryList = ref([])
const getCategoryList = async () => {
  const { categorys } = await getCategory()
  categoryList.value = categorys
}
</script>

<style lang="scss" scoped></style>
