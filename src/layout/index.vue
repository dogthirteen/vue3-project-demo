<template>
  <el-container class="layout-container" :class="sideClass">
    <silder :isCollapse="isCollapse" />
    <div class="main-container">
      <navBar :isCollapse="isCollapse" :handleToogle="handleToogle" />
      <div class="app-container">
        <appMain />
      </div>
    </div>
  </el-container>
</template>

<script setup>
import navBar from './navBar/index.vue'
import silder from './silder/index.vue'
import appMain from './appMain/index.vue'
import { computed, defineComponent } from 'vue'
import { useLayoutStore } from '@/stores/layout.js'
import { storeToRefs } from 'pinia'
defineComponent({
  navBar,
  silder,
  appMain
})
let layoutStore = useLayoutStore()
let { isCollapse } = storeToRefs(layoutStore)
let { handleToogle } = layoutStore
let sideClass = computed(() => {
  return {
    hideSidebar: isCollapse.value
  }
})
</script>

<style lang="scss">
@import '@/styles/variables.module.scss';
.layout-container {
  width: 100%;
  min-height: 100%;
  background-color: var(--el-bg-color-page);
  .main-container {
    margin-left: $sideBarWidth;
    transition: margin-left 0.28s;
  }
  .app-container {
    position: relative;
    height: calc(100vh - #{$headerHieght});
    padding: 20px 24px;
    overflow-x: hidden;
  }
  .header-container {
    height: $headerHieght;
    border-bottom: 1px solid #ccc;
    background-color: var(--el-bg-color);
    z-index: 10;
  }
  .container {
    width: 100%;
    min-height: 100%;
  }
  .collapse-icon {
    width: 60px;
    height: 60px;
    cursor: pointer;
  }
}
</style>
