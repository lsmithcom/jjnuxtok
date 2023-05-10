<template>
    <div>

    <section class="jsection-full bg-agrey">

        <div class="flex flex-cols gap-4 max-w-2xl mx-auto">

            <div class="w-full flex flex-col items-center border border-gray-300 rounded p-8 bg-white">
            <div><img src="/image/just-jen-logo.svg" /></div>
            <div><h3 class="text-jlav text-left">Welcome to Login</h3>
            <p>Enter your username and password.</p>

            <label>Username</label><input class="block border border-gray-300 focus:ring-blue-300 focus:border-blue-300" type="text">
            <label class="mt-8">Password</label><input class="block border border-gray-300 focus:ring-blue-300 focus:border-blue-300" type="text"></div>


            <div class="w-full text-center my-14"><NuxtLink class="abttn jbttn-lav" to="/contact-us">Sign In</NuxtLink></div>
            </div>


        </div>
    </section>



    </div>
</template>

<script setup>

definePageMeta({
  layout: "dashboard",
})

useHead( {
    title: "Clothing for Everyday - Layered Shirts, Bottoms and Activewear",
    meta: [
        {name: 'description', content: 'Our everyday collection of shirts, bottoms and activewear.  Embellished rhinestone designs perfect for layering, or making a dazzling impression.'}
    ]
})

</script>