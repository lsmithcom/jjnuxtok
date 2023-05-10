<template>
  <div class="inline-flex items-center px-2 font-semibold font-heading text-gray-500 border border-gray-200 rounded-md">
  <div class="flex">
    <button class="btn" @click="cartStore.decQuantity(product)">-</button>

    <div class="py-1 px-4 mx-1 rounded-sm text-lg bg-gray-200">
      {{ product.quantity }}
    </div>

    <button class="btn" @click="cartStore.incQuantity(product)">+</button>
  </div>
  </div>
</template>

<script setup>
  import { useCartStore } from '@/stores/cartStore'

  const cartStore = useCartStore()

  defineProps(['product'])
</script>