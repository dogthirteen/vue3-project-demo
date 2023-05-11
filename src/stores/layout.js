import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
  state: () => {
    return {
      isCollapse: false,
    }
  },
  actions: {
    handleToogle() {
      this.isCollapse = !this.isCollapse
    }
  }
})
