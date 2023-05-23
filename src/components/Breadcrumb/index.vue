<template>
  <el-breadcrumb separator="/">
    <transition-group name="breadcrumb">
      <template v-for="item in data.matched" :key="item.name">
        <el-breadcrumb-item v-if="!item.redirect"> {{ item.meta.title }}</el-breadcrumb-item>
        <el-breadcrumb-item v-else :to="{ path: item.path }">
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </template>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { useRoute } from 'vue-router'

let data = reactive({
  matched: []
})
let route = useRoute()
watch(route, () => {
  handleGetLevel()
})
handleGetLevel()

function handleGetLevel() {
  data.matched = route.matched.filter((item) => item.name && item.meta.title)
  if (!isAdmin(route.matched[0])) {
    data.matched.unshift({ path: '/todoList', meta: { title: '首页' }, redirect: '/todoList' })
  }
}

function isAdmin(item) {
  let name = item.name || ''
  return name.trim().toLocaleLowerCase() === 'admin'.toLocaleLowerCase()
}
</script>

<style lang="scss" scoped></style>
