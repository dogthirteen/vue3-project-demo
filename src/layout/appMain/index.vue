<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade-transform" mode="out-in">
      <!-- <keep-alive>
                <component :is="Component" />
              </keep-alive> -->
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<script setup></script>

<style lang="scss" scoped></style>
