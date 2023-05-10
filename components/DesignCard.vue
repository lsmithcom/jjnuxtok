<template>

<li v-for="gallery in gallery.findGalleryByTheme.data">
    <NuxtLink :to="gallery.url">
    <img :src="`/image/` + gallery.image" class="" :alt="gallery.imagealt" />
    </NuxtLink>
</li>	

</template>

<script setup>

  const { gallery } = defineProps(['gallery'])

</script>