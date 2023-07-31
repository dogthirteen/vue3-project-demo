<template>
  <div class="tags-wrap flex align-center">
    <router-link
      class="tag-item flex align-center"
      v-for="(item, index) in tags"
      :class="{ 'active-tag-item': route.path === item.path }"
      :key="item.path"
      :to="item.path"
    >
      {{ item.meta.title }}
      <div
        class="icon-box"
        v-if="item.path !== '/todoList'"
        @click.prevent="handleDeleteTag(item, index)"
      >
        <Icon icon="Close" class="icon" />
      </div>
    </router-link>
  </div>
</template>

<script setup>
import Icon from '@/components/Icon/Icon.vue'
import { useTagsViewStore } from '@/stores/tagViews.js'
import { storeToRefs } from 'pinia'
import { defineComponent, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
console.log('useRouter :>> ', useRouter)
defineComponent({ Icon })
let route = useRoute()
let router = useRouter()
let tagsViewStore = useTagsViewStore()
let { tags } = storeToRefs(tagsViewStore)
let { handleAddTag, handleCloseTag } = tagsViewStore

watch(route, (newVal) => {
  let { path, query, meta, params } = newVal
  handleAddTag({ path, meta, params, query })
})

function handleDeleteTag(item, index) {
  if (route.path === item.path) {
    router.push({ ...tags.value[index - 1] })
  }
  handleCloseTag(item, route)
}
</script>

<style lang="scss" scoped>
.tags-wrap {
  width: 100%;
  height: 34px;
  padding: 0 22px;
  background-color: #fff;
  box-shadow: 0 3px 10px #dcd6d6;
  .tag-item {
    line-height: 24px;
    padding: 0 2px 0 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    cursor: pointer;
    margin-right: 10px;
    border-radius: 4px;
    &:nth-of-type(1) {
      padding: 0 8px;
    }
    &:hover {
      background-color: #f3f4f5;
      transition: background 0.3s;
    }
    .icon-box {
      position: relative;
      width: 16px;
      height: 16px;
      line-height: 16px;
      margin: 0 0 2px 4px;
      text-align: center;
      &::before {
        position: absolute;
        top: 1px;
        left: 0;
        content: '';
        width: 16px;
        height: 16px;
        background-color: transparent;
        border-radius: 50%;
        z-index: 9;
        transition: background 0.3s;
      }
      &:hover::before {
        background-color: #ccc;
      }
    }
    .icon {
      position: relative;
      width: 12px;
      margin: 0;
      vertical-align: middle;
      transform: scale(0.8);
      z-index: 10;
    }
  }
  .active-tag-item {
    color: #fff;
    background-color: var(--el-color-primary);
    border-color: var(--el-color-primary);
    &:hover {
      background-color: var(--el-color-primary);
    }
  }
}
</style>
