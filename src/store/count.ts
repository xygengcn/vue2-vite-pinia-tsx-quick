import { defineStore } from 'pinia'
export const useCountStore = defineStore('count', {
  state: () => ({
    count: 0,
  }),
  getters: {
    double: (state) => {
      return state.count * 2
    },
  },
  actions: {
    add() {
      this.count++
    },
  },
})
