<template>
<div>

<section class="mb-14">
  <h2 class="md:text-left md:mt-0">My Addresses</h2>

<h4 class="text-left">Default:</h4>

<div class="flex flex-col md:flex-row border border-gray-200 p-4 gap-4 rounded text-base">

<div class="w-full md:w-1/2 border border-gray-200 p-4 rounded">
<h5 class="text-left m-0 p-0 text-sm font-semibold uppercase">Shipping</h5>
<p>6360 Sattes Dr.<br/>
Rancho Palos Verdes, CA 90275</p>
<span class="block italic text-base"><NuxtLink to="/account-settings">edit</NuxtLink></span>  
</div>

<div class="w-full md:w-1/2 border border-gray-200 p-4 rounded">
<h5 class="text-left m-0 p-0 text-sm font-semibold uppercase">Billing</h5>
<p>1921 N. Gaffey Street, Suite G<br/>
San Pedro, CA 90274</p>
<span class="block italic text-base"><NuxtLink to="/account-settings">edit</NuxtLink></span>  
</div>

</div>

<h4 class="text-left">More:</h4>
<div class="w-full mb-8">Add Address</div>

<div class="flex flex-col md:flex-row gap-0 border border-gray-200 p-4 gap-4 rounded text-base">

<div class="w-full md:w-1/2 border border-gray-200 p-4 rounded">
<h5 class="text-left m-0 p-0 text-sm font-semibold uppercase">Shipping</h5>
<p>6360 Sattes Dr.<br/>
Rancho Palos Verdes, CA 90275</p>
<span class="block italic text-base"><NuxtLink to="/account-settings">edit</NuxtLink></span>  
</div>

<div class="w-full md:w-1/2 border border-gray-200 p-4 rounded">
<h5 class="text-left m-0 p-0 text-sm font-semibold uppercase">Billing</h5>
<p>1921 N. Gaffey Street, Suite G<br/>
San Pedro, CA 90274</p>
<span class="block italic text-base"><NuxtLink to="/account-settings">edit</NuxtLink></span>  
</div>

</div>


</section>
  
</div>
</template>

<script setup>

definePageMeta({
  layout: "custaccount",
})

useHead( {
    title: "Just Jen.com User Account - Shipping and Payment Addresses",
    meta: [
        {name: 'description', content: 'Shipping and Payment Address information for JustJen.com User Accounts'}
    ]
})

</script>