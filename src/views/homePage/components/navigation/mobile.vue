<template>
  <div>222222</div>
</template>

<script setup>
import { getCategory } from '@/api/category';

const getCategoryList = async() => {
  const res = await getCategory()
  console.log(res);
}
getCategoryList()

</script>

<style lang='scss' scoped>
</style>
