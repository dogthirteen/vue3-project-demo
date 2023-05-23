import { defineStore } from 'pinia'
import router from '../router/index'

export const useTagsViewStore = defineStore('tagsviews', {
  state() {
    return {
      tags: [
        {
          path: '/todoList',
          meta: { title: '首页' },
        }
      ]
    }
  },
  actions: {
    // 新增tag
    handleAddTag(route) {
      let paths = this.tags.map(item => item.path)
      if (!paths.includes(route.path)) {
        this.tags.push(route)
      }
    },
    // 关闭tag
    handleCloseTag(item, route) {
      console.log('this :>> ', this);
      let paths = this.tags.map(element => element.path)
      let index = paths.indexOf(item.path)
      index > -1 && this.tags.splice(index, 1)
    }
  },
  persist: true
})