<template>
  <div class="container card">
    <button @click="handelAdd">新增一条</button>
    <div class="table">
      <div class="thead">
        <div class="tr">
          <div class="td">序号</div>
          <div class="td">名称</div>
          <div class="td">性别</div>
          <div class="td">年龄({{ handleAgeTotal }})</div>
          <div class="td">地址</div>
          <div class="td">操作</div>
        </div>
      </div>
      <div class="tbody">
        <div class="tr" v-for="(item, index) in tableData" :key="index">
          <template v-for="(item2, index2) in item" :key="index2">
            <div class="td" v-if="index2 !== 'isReadonly'">
              <input
                class="input-style"
                type="text"
                :readonly="item['isReadonly']"
                v-model="item[index2]"
              />
            </div>
          </template>
          <div class="td flex space-around align-center">
            <button class="btn" @click="handleDelete(index)">删除</button>
            <button class="btn" v-show="item['isReadonly']" @click="handleEdit(index)">编辑</button>
            <button class="btn" v-show="!item['isReadonly']" @click="handleSave(index)">
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, getCurrentInstance, reactive, toRefs, ref } from 'vue'
import { useTableDataStore } from '@/stores/tableData'
import { storeToRefs } from 'pinia'

const tableDataStore = useTableDataStore()
const { tableData, handleAgeTotal } = storeToRefs(tableDataStore)
const { handleEdit, handleDelete, handleSave, handelAdd } = tableDataStore

console.log('context :>> ', getCurrentInstance())
console.log('import.meta.env :>> ', import.meta.env)
// import { reactive } from 'vue'

// let data = reactive({
//   tableList: [
//     { id: 1, name: 'Lily', sex: '女', age: 18, address: '北京市海淀区', isReadonly: true },
//     { id: 2, name: 'Tom', sex: '男', age: 25, address: '上海市徐汇区', isReadonly: true },
//     { id: 3, name: 'Lucy', sex: '女', age: 30, address: '广东省深圳市', isReadonly: true },
//     { id: 4, name: 'Jack', sex: '男', age: 22, address: '湖北省武汉市', isReadonly: true },
//     { id: 5, name: 'Jane', sex: '女', age: 27, address: '江苏省南京市', isReadonly: true },
//     { id: 6, name: 'Mike', sex: '男', age: 29, address: '福建省厦门市', isReadonly: true },
//     { id: 7, name: 'Emily', sex: '女', age: 24, address: '湖南省长沙市', isReadonly: true },
//     { id: 8, name: 'David', sex: '男', age: 32, address: '河南省郑州市', isReadonly: true }
//   ]
// })

// function handleEdit(index) {
//   data.tableList = data.tableList.map((item) => {
//     return { ...item, isReadonly: true }
//   })
//   data.tableList[index].isReadonly = false
// }

// function handleDelete(index) {
//   data.tableList.splice(index, 1)
// }

// function handleSave(e, i) {
//   console.log('e, i :>> ', e, i);
//   data.tableList[i].isReadonly = true
// }

// function handelAdd() {
//   data.tableList = data.tableList.map((item) => {
//     return { ...item, isReadonly: true }
//   })
//   data.tableList.push(handleCreateData())
// }

// function handleCreateData() {
//   return { id: '', name: '', sex: '', age: '', address: '', isReadonly: false }
// }
</script>

<style lang="scss" scoped>
.table {
  border: 1px solid #ccc;
  .thead {
    background-color: #f3f4f5;
  }
  .tr {
    display: flex;
    border-bottom: 1px solid #ccc;
    &:last-of-type {
      border-bottom: none;
    }
  }
  .td {
    flex: 1;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-right: 1px solid #ccc;
    &:last-of-type {
      border-right: none;
    }
  }
  .input-style {
    width: 80%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
  }
  input:not([readonly]) {
    border-bottom: 1px solid #303133;
  }
  .btn {
    width: 56px;
    height: 26px;
    line-height: 26px;
    margin: 0;
    padding: 0;
  }
  .flex {
    display: flex;
  }
  .align-center {
    align-items: center;
  }
  .space-around {
    justify-content: space-around;
  }
}
</style>
