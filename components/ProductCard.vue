<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div v-for="product in productStore.product" >
    <NuxtLink :to="`/buy/${product._id}`"><img :src="product.image" class="" :alt="product.imageAlt" />
    <p class="mt-4 mb-0 text-black font-normal">{{product.title}}</p>
    <p class="text-base">{{product.price}}</p></NuxtLink>
    <button class="btn" @click="addToBasket()" :disabled="isPending">
        <span v-show="!isPending">Add to Basket</span>
        <span v-show="isPending">Adding...</span>
      </button>
    </div>	
    </div>

</template>

<script setup>

import { useProductStore } from '~~/stores/productStore'
  const productStore = useProductStore()
  productStore.getProduct()

  import { useCartStore } from '../stores/cartStore'

  const cartStore = useCartStore()
  const isPending = ref(false)

  const addToBasket = async () => {
    isPending.value = true
    await cartStore.addToCart(product)
    setTimeout(() => {
      isPending.value = false
    }, 1000)
  }
</script>