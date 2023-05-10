<template>
    <div class="bg-jblultdash pt-6">

<div class="py-4 bg-white rounded-md mx-6 flex flex-row justify-between items-center"> 
<div class="ml-8 font-bold text-2xl text-agrey">Product Update</div>
<div class="flex flex-row my-6 md:my-0 items-end mr-8"><NuxtLink class="dbttn jbttn-dash" to="dash-create-order">Update</NuxtLink></div>
</div>

<section class="mx-6 bg-white rounded p-4 my-4">

<h3 class="text-left my-0">Customer: {{ customers.findCustomerByID.firstname }} {{customers.findCustomerByID.lastname}}</h3>

<div class="bg-agreylt border-agreymd border-t border-b py-4">
<div class="flex flex-row content-between justify-between w-full">
    <div class="flex flex-row justify-between w-1/2 ml-8 text-adrk font-medium">
    <div>Main</div>
    <div>Addresses</div>
    <div>Orders</div>
    <div>Reviews</div> 
    <div>Messages</div>      
</div>

      
</div>

</div>


<div class="grid grid-cols-2 grid-10-90 justify-center items-center max-w-6xl mx-auto">
    <div class="text-right pr-5">ID:</div><div class=""><input class="w-full" type="text" :value="customers.findCustomerByID.custid"></div> 
    <div class="text-right pr-5">email:</div><div class=""><input class="w-full" type="text" :value="customers.findCustomerByID.email"></div>  
    <div class="text-right pr-5">First Name:</div><div class=""><input class="w-full" type="text" :value="customers.findCustomerByID.firstname"></div>
    <div class="text-right pr-5">Last Name:</div><div class=""><input class="w-full" type="text" :value="customers.findCustomerByID.lastname"></div>
    <div class="text-right pr-5">Company:</div><div class=""><input class="w-full" type="text" :value="customers.findCustomerByID.company"></div> 
    <div class="text-right pr-5">Phone:</div><div class=""><input class="w-full" type="text" :value="customers.findCustomerByID.phone"></div> 
    <div class="text-right pr-5">Since:</div><div class=""><input class="w-full" type="text" :value="customers.findCustomerByID.since"></div>  
    <div class="text-right pr-5">Group:</div><div class=""><input class="w-full" type="text" :value="customers.findCustomerByID.custgroup"></div>     
    <div class="text-right pr-5">Tax ID:</div><div class=""><input class="w-full" type="text" :value="customers.findCustomerByID.taxid"></div>  
</div>

</section>


    </div>
</template>


<script lang="ts" setup>

definePageMeta({
  layout: "dashboard",
})

useHead( {
    title: "Just Jen Administration Dashboard - Story Creation",
    meta: [
        {name: 'description', content: 'Our everyday collection of shirts, bottoms and activewear.  Embellished rhinestone designs perfect for layering, or making a dazzling impression.'}
    ]
})

const query = gql`
query findCustomerByID {
    findCustomerByID(id: "360017221762678852") {
     _id
    custid
    email
    firstname
    lastname
    company
    phone
    since
	custgroup
    taxid
  }
}
`
const { data: customers } = await useAsyncQuery(query)
</script>