<template>

    <div><input class="w-4 h-4 border border-darkbluegray-50" type="checkbox" /></div>  
    <div class="pt-4"><NuxtLink :to="gallery._id">{{gallery.galleryid}}</NuxtLink></div>    
    <div class="pt-4"><img :src="gallery.image" :alt="gallery.imagealt" /></div>  
    <div class="pt-4 text-left">{{gallery.title}}</div>
    <div class="pt-4 text-left">{{gallery.url}}</div>
    <div class="pt-4">{{gallery.theme}}</div>  
    <div class="pt-4">{{gallery.date}}</div>      
</template>

<script setup>

  const { gallery } = defineProps(['gallery'])

</script>