import { defineStore } from 'pinia'

export const useTableDataStore = defineStore('tableData', {
  //相当于data
  state: () => ({
    tableData: [
      { id: 1, name: 'Lily', sex: '女', age: 18, address: '北京市海淀区', isReadonly: true },
      { id: 2, name: 'Tom', sex: '男', age: 25, address: '上海市徐汇区', isReadonly: true },
      { id: 3, name: 'Lucy', sex: '女', age: 30, address: '广东省深圳市', isReadonly: true },
      { id: 4, name: 'Jack', sex: '男', age: 22, address: '湖北省武汉市', isReadonly: true },
      { id: 5, name: 'Jane', sex: '女', age: 27, address: '江苏省南京市', isReadonly: true },
      { id: 6, name: 'Mike', sex: '男', age: 29, address: '福建省厦门市', isReadonly: true },
      { id: 7, name: 'Emily', sex: '女', age: 24, address: '湖南省长沙市', isReadonly: true },
      { id: 8, name: 'David', sex: '男', age: 32, address: '河南省郑州市', isReadonly: true }
    ]
  }),
  // 相当于 computed
  getters: {
    handleAgeTotal() {
      return this.tableData.reduce((pre, next) => {
        return pre + (Number(next.age) || 0)
      }, 0)
    }
  },
  //相当于methods
  actions: {
    handleEdit(index) {
      this.tableData = this.tableData.map((item) => {
        return { ...item, isReadonly: true }
      })
      this.tableData[index].isReadonly = false
    },

    handleDelete(index) {
      this.tableData.splice(index, 1)
    },

    handleSave(i) {
      this.tableData[i].isReadonly = true
    },

    handelAdd() {
      console.log('111111 :>> ', 111111)
      this.tableData = this.tableData.map((item) => {
        return { ...item, isReadonly: true }
      })
      this.tableData.push(this.handleCreateData())
    },

    handleCreateData() {
      return { id: '', name: '', sex: '', age: '', address: '', isReadonly: false }
    }
  },
  // pinia 单个模块数据持久化配置 pinia-plugin-persistedstate
  // 所有数据持久化
  persist: true
  // 持久化存储插件其他配置
  // persist: {
  //   // 修改存储中使用的键名称，默认为当前 Store的 id
  //   key: 'storekey',
  //   // 修改为 sessionStorage，默认为 localStorage
  //   storage: window.sessionStorage,
  //   // 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)
  //   paths: []
  // }
})
