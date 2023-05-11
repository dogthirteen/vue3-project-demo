<template>
  <component class="icon" :is="icon"></component>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.icon {
  flex: 0 0 18px;
  margin-right: 10px;
}
</style>
