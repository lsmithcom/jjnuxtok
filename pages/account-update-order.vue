<template>
<div>

<section class="mb-14">

  <div class="flex flex-row justify-between">
    <div class=""><h2>Update Addresses:</h2></div>
    <div class="mt-10"><NuxtLink class="dbttn jbttn-dash" to="dash-create-order">Update</NuxtLink></div>
  </div>

<div class="flex flex-col md:flex-row border border-gray-200 p-4 gap-4 rounded text-base">

<div class="w-full md:w-1/2 border border-gray-200 p-4 rounded">
<h5 class="text-left m-0 p-0 text-sm font-semibold uppercase mb-4">Shipping</h5>
<div><label class="mt-2">Address:</label><input class="mt-2 mb-2 w-full" type="text"></div>
<div><label class="mt-2">City:</label><input class="mt-2 mb-2 w-full" type="text"></div>
<div><label>State:</label><input class="mt-2 mb-2 w-full" type="text"></div>
<div><label>Zip:</label><input class="mt-2 mb-2 w-full" type="text"></div>
</div>

<div class="w-full md:w-1/2 border border-gray-200 p-4 rounded">
<h5 class="text-left m-0 p-0 text-sm font-semibold uppercase mb-4">Billing</h5>
<div><label class="mt-2">Address:</label><input class="mt-2 mb-2 w-full" type="text"></div>
<div><label class="mt-2">City:</label><input class="mt-2 mb-2 w-full" type="text"></div>
<div><label>State:</label><input class="mt-2 mb-2 w-full" type="text"></div>
<div><label>Zip:</label><input class="mt-2 mb-2 w-full" type="text"></div>
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
    title: "Just Jen.com User Account - Summary Screen for User Information",
    meta: [
        {name: 'description', content: 'Summary Screen for JustJen.com User Accounts'}
    ]
})

</script>