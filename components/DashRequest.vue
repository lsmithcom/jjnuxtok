<template>

    <div><input class="w-4 h-4 border border-darkbluegray-50" type="checkbox" /></div>  
    <div class="pt-4"><NuxtLink :to="request._id">{{request.requestid}}</NuxtLink></div>    
    <div class="pt-4 text-left">{{request.firstname}} {{request.lastname}}</div>
    <div class="pt-4 text-left">{{request.company}}</div>
    <div class="pt-4">{{request.phone}}</div>
    <div class="pt-4">{{request.email}}</div>    
    <div class="pt-4">{{request.date}}</div>   
</template>

<script setup>

  const { request } = defineProps(['request'])

</script>