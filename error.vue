<template>
    <div>
        <section class="h-24 border-t-4 border-jpinklt flex flex-row justify-between">
<div class="flex flex-row justify-center content-center">
<div class="flex items-center mx-10"><img class="inline" src="../image/just-jen-logo.png" /></div>
<div class="flex flex-row items-center">
    <div class="px-8"><NuxtLink to="/shops">Shops</NuxtLink></div>
    <div class="px-8"><NuxtLink to="/customize">Custom</NuxtLink></div>
    <div class="px-8"><NuxtLink to="/wholesale">Wholesale</NuxtLink></div>
</div>
</div>

<div class="flex flex-row items-center block inline float-right">
    <div class="px-8"><NuxtLink to="/account-login">Log In</NuxtLink></div>
    <div class="px-8"><img class="inline" src="../image/search-icon.png" /></div>
    <div class="px-8"><NuxtLink to="/cart"><img class="inline" src="../image/cart-icon.png" />
        <span class="bg-white py-1 px-2 rounded-2xl font-bold badge">

        </span></NuxtLink></div>
</div>
</section>

<div class="mt-7 text-center max-w-sm mx-auto">
        <p class="text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="text-6xl font-bold">Oops...</p>
        <p class="text-4xl font-bold">{{ error.message }}</p>
    </div>
    </div>

</template>

<script setup>

defineProps (['error'])

</script>