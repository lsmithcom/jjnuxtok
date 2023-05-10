<template>
 
    <div class="pt-4"><input class="w-4 h-4 border border-darkbluegray-50" type="checkbox" /></div>     
    <div class="pt-4"><NuxtLink :to="story._id">{{story.storyid}}</NuxtLink></div> 
    <div class="pt-4"><img :src="story.image" :alt="story.imagealt"/></div>   
    <div class="pt-4 text-left">{{story.title}}</div>
    <div class="pt-4 text-left">{{story.url}}</div>
    <div class="pt-4">{{story.theme}}</div>
    <div class="pt-4">detail</div>
</template>

<script setup>

  const { story } = defineProps(['story'])

</script>