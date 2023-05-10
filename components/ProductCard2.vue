<template>

    <div>
    <NuxtLink :to="product.url"><img :src="`/image/` + product.image" class="" :alt="product.imagealt" />
    <p class="mt-4 mb-0 text-black font-normal">{{product.name}}</p>
    <p class="text-base">{{product.price}}</p></NuxtLink>
    <button class="btn" @click="addToBasket()" :disabled="isPending">
        <span v-show="!isPending">Add to Basket</span>
        <span v-show="isPending">Adding...</span>
      </button>
    </div>	

</template>

<script setup>
  import { useCartStore } from '../stores/cartStore'

  const { product } = defineProps(['product'])

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