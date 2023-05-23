<template>
  <div class="header-container flex align-center">
    <div class="collapse-icon flex space-center align-center" @click="handleToogle">
      <el-icon v-show="!isCollapse" size="18"><Fold /></el-icon>
      <el-icon v-show="isCollapse" size="18"><Expand /></el-icon>
    </div>
    <Breadcrumb />
  </div>
  <tagViews />
</template>

<script setup>
import { defineComponent } from 'vue'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import tagViews from '../tagViews/index.vue'
defineComponent({ Breadcrumb, tagViews })
defineProps({
  isCollapse: Boolean,
  handleToogle: Function
})
</script>

<style lang="scss" scoped></style>
