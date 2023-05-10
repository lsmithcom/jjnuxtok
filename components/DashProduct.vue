<template>
 
    <div><input class="w-4 h-4 border border-darkbluegray-50" type="checkbox" /></div>
    <div class="pt-4"><NuxtLink :to="product._id">{{product.sku}}</NuxtLink></div>     
    <div class="pt-4"><img :src="product.image" :alt="product.imagealt"/> </div>
    <div class="pt-4 text-left">{{product.name}}</div>
    <div class="pt-4 text-left">{{product.description}}</div>
    <div class="pt-4">{{product.price}}</div>   
    <div class="pt-4">{{product.price}}</div>  
    <div class="pt-4">{{product.status}}</div>   
</template>

<script setup>

  const { product } = defineProps(['product'])

</script>