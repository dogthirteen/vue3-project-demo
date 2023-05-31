<template>
  <div class="flex" @dragstart="hanelDragStart" @dragenter="handelDragEnter">
    <draggable class="list" :list="data.leftList" group="people1" @change="log" animation="300" itemKey="name">
      <template #item="{ element, index }">
        <div class="item">{{ element.name }} {{ index }}</div>
      </template>
    </draggable>
    <draggable class="list" :list="data.rightList" group="people" @change="log" animation="300" itemKey="name">
      <template #item="{ element, index }">
        <div class="item">{{ element.name }} {{ index }}</div>
      </template>
    </draggable>
  </div>
</template>

<script setup>
import { defineComponent, reactive } from 'vue'
import draggable from 'vuedraggable'
defineComponent({ draggable })
let data = reactive({
  dragIndex: null,
  dragType: null,
  leftList: [
    { id: 1, name: '土豆' },
    { id: 2, name: '番茄' },
    { id: 3, name: '辣椒' },
    { id: 4, name: '红薯' },
    { id: 5, name: '玉米' },
    { id: 6, name: '鸡蛋' }
  ],
  rightList: [{ id: 1, name: '包子' }]
})

function log(evt) {
  window.console.log(evt)
}
</script>

<style lang="scss" scoped>
.list {
  width: 300px;
  margin-right: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.5);
  border-radius: 10px;
  .item {
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    border-bottom: 1px solid #ccc;
    cursor: move;
    &:active,
    &:focus {
      cursor: move;
    }
  }
}
</style>
