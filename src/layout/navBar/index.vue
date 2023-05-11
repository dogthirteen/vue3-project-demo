<template>
  <div class="header-container">
    <div class="collapse-icon flex space-center align-center" @click="handleToogle">
      <el-icon v-show="!isCollapse" size="18"><Fold /></el-icon>
      <el-icon v-show="isCollapse" size="18"><Expand /></el-icon>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isCollapse: Boolean,
  handleToogle: Function
})
</script>

<style lang="scss" scoped></style>
