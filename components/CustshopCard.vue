<template>

    <div class="border border-gray-200 p-5 rounded">
    <NuxtLink :to="custshop.url"><img :src="`/image/` + custshop.image" class="" :alt="custshop.imagealt" />
    <p class="mt-4 mb-0 text-black font-normal">{{custshop.name}}</p>
    <p class="text-base">{{custshop.description}}</p></NuxtLink>
    </div>	

</template>

<script setup>

const { custshop} = defineProps(['custshop'])


</script>