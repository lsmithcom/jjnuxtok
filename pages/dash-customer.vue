<template>

<div class="bg-jblultdash pt-6">


<div class="py-4 bg-white rounded-md mx-6">
<div class="flex flex-row justify-between items-center">
  
<div class="ml-8 font-bold text-2xl text-agrey">Customer<span class="font-medium ml-8 pl-8 text-xl border-l border-agrey"><NuxtLink to="/dash-tbd">TBD</NuxtLink></span></div>
<div class="flex flex-row my-6 md:my-0 items-end mr-8"><NuxtLink class="dbttn jbttn-dash" to="">New Customer</NuxtLink></div>

</div>
</div>


<div class="flex flex-row justify-between items-center mx-6 text-sm my-4">
  <div>
    <select class="m-0 px-4 py-3 mr-2 text-sm bg-white border rounded" name="field-name">
      <option>Actions</option>
      <option>Delete</option>
      <option>Inactive</option>
    </select>
  </div>

  <div><input class="m-0 px-10 py-3 border border-gray-300 rounded-md text-sm" type="text" placeholder="search"></div>

  <div><span class="px-4 py-3 mr-2 bg-white border rounded-md">20</span> of 20</div>
</div>

<div class="bg-white rounded-md mx-6 p-4">


<div class="grid grid-cols-7 text-center items-center text-white bg-jblucrn text-sm font-semibold grid-7-a mb-4">
    <div class="border-r border-white py-3">&nbsp;</div>  
    <div class="border-r border-white py-3">Customer ID</div>
    <div class="border-r border-white py-3">Name</div>
    <div class="border-r border-white py-3">Company</div>
    <div class="border-r border-white py-3">email</div>
    <div class="border-r border-white py-3">Phone</div>
    <div class="border-r border-white py-3">State</div> 
  </div>

  <div class="grid grid-cols-7 text-center items-center gridded text-agrey text-base grid-7-a" v-for="customer in customers.allCustomer.data">
     <DashCustomer :customer="customer" />
  </div>  

</div>


    </div>
</template>


<script lang="ts" setup>

definePageMeta({
  layout: "dashboard",
})

useHead( {
    title: "Just Jen Administration Dashboard - Customer List Screen",
    meta: [
        {name: 'description', content: 'Our everyday collection of shirts, bottoms and activewear.  Embellished rhinestone designs perfect for layering, or making a dazzling impression.'}
    ]
})
const query = gql`
query allCustomers{
  allCustomer{ 
    data {
    _id
    custid
    firstname
    lastname
    company
    email 
    phone
    addrship {
      state
    	}
    }
  }
}
`
const { data: customers } = await useAsyncQuery(query)
</script>