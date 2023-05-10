<template>
 
    <div class="pt-4"><input class="w-4 h-4 border border-darkbluegray-50" type="checkbox" /></div>     
    <div class="pt-4"><NuxtLink :to="shop.url">{{shop.custshopid}}</NuxtLink></div> 
    <div class="pt-4"><img :src="shop.image" :alt="shop.imagealt"/></div>   
    <div class="pt-4 text-left">{{shop.name}}</div>
    <div class="pt-4">{{shop.url}}</div>
    <div class="pt-4">{{shop.status}}</div>
    <div class="pt-4">{{shop.date}}</div>    
</template>

<script setup>

  const { shop } = defineProps(['shop'])

</script>