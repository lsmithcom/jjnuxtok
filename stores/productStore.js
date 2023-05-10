import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    product: [],
  }),
  getters: {},
  actions: {
    async getProduct() {
      const data = await $fetch('http://localhost:4000/cart')
      this.product = data
      console.log(this.product)
    },
  },
})