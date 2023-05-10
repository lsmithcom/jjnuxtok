<template>
    <div>

    <section class="bg-gray-50">

        <h1 class="mt-0 pt-6">Customer Login</h1>

        <div class="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto pb-14">

            <div class="w-4/5 mx-auto md:w-1/2 flex flex-col items-center rounded p-8 bg-white">
            <div><h3 class="">Registered Customers</h3>
            <p>If you have an account, login with your username and password.</p>

            <input class="block border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text">
            <input class="block mt-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text"></div>


            <div class="mt-14"><NuxtLink class="jbttn jbttn-lav" to="/contact-us">Sign In</NuxtLink></div>
            </div>

            <div class="w-4/5 mx-auto md:w-1/2 flex flex-col justify-between items-center justify-stretch rounded p-8 bg-white">
            <div><h3 class="">New Customers</h3>
            <p>Create a new account: track orders, fast checkout and more.</p></div>
            <div class="items-end align-end mt-14"><NuxtLink class="jbttn jbttn-lav" to="/contact-us">Create an Account</NuxtLink></div>
            </div>


        </div>
    </section>



    </div>
</template>

<script setup>

useHead( {
    title: "Customer Account Login for Just Jen Clients and Partners",
    meta: [
        {name: 'description', content: 'Secure login for customer account information including order history, addresses, subscriptions and more.'}
    ]
})

</script>