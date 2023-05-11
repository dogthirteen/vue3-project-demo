<template>
  <div class="sidebar-container">
    <el-scrollbar>
      <el-menu
        router
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :default-active="activeMenu"
        :default-openeds="defaultApeneds"
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
      >
        <template v-for="item in $router.options.routes" :key="item.path">
          <template v-if="item.children.length === 1">
            <el-menu-item
              class="submenu-title-noDropdown"
              v-for="item2 in item.children"
              :key="item2.name"
              :index="formatPath(item.path, item2.path)"
            >
              <Icon :icon="item2.meta.icon"></Icon>
              <template #title> {{ item2.meta.title || '' }}</template>
            </el-menu-item>
          </template>
          <template v-else>
            <el-sub-menu :index="item.path">
              <template #title>
                <Icon :icon="item.meta.icon"></Icon>
                <span>{{ item.meta.title || '' }}</span>
              </template>
              <el-menu-item
                v-for="item2 in item.children"
                :key="item2.name"
                :index="formatPath(item.path, item2.path)"
              >
                <Icon :icon="item2.meta.icon"></Icon>
                <template #title> {{ item2.meta.title || '' }}</template>
              </el-menu-item>
            </el-sub-menu>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import variables from '@/styles/variables.module.scss'
import { computed, defineComponent, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import Icon from '@/components/Icon/Icon.vue'
defineProps({
  isCollapse: Boolean
})
defineComponent({ Icon })
let router = useRouter()

let activeMenu = computed(() => {
  return router.currentRoute.value.meta.activeMenu || router.currentRoute.value.fullPath
})

let defaultApeneds = computed(() => {
  console.log('activeMenu :>> ', activeMenu)
  let first = activeMenu.value.split('/')[1] || ''
  return [`/${first}`]
})

function formatPath(base, path) {
  return base === '/' ? `/${path}` : `${base}/${path}`
}
</script>

<style lang="scss"></style>
