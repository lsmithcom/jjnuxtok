<template>
    <div class="bg-jblultdash pt-6">

<div class="py-4 bg-white rounded-md mx-6 flex flex-row justify-between items-center"> 
<div class="ml-8 font-bold text-2xl text-agrey">Custshop Update</div>
<div class="flex flex-row my-6 md:my-0 items-end mr-8"><NuxtLink class="dbttn jbttn-dash" to="dash-create-order">Update</NuxtLink></div>
</div>


<section class="mx-6 bg-white rounded p-4 my-4">

<div class="bg-slate-50 py-4bg-agreylt border-agreymd border-t border-b py-4">
<div class="flex flex-row content-between justify-between w-full">
    <div><span class="text-2xl text-black">{{ custshop.findCustshopByID.name }}</span> - #{{ custshop.findCustshopByID._id }}</div>
      
</div>

</div>

<div class="grid grid-cols-2 grid-10-90 justify-center items-center max-w-6xl mx-auto">
    <div class="text-right pr-5">Name:</div><div class=""><input class="w-full" type="text" :value="custshop.findCustshopByID.name"></div>
    <div class="text-right pr-5">Description:</div><div class=""><input class="w-full" type="text" :value="custshop.findCustshopByID.description"></div>
    <div class="text-right pr-5">Description Short:</div><div class=""><input class="w-full" type="text" :value="custshop.findCustshopByID.descshort"></div>    
    <div class="text-right pr-5">Image:</div><div class=""><input class="w-full" type="text" :value="custshop.findCustshopByID.image"></div>
    <div class="text-right pr-5">ImageAlt:</div><div class=""><input class="w-full" type="text" :value="custshop.findCustshopByID.imageAlt"></div>
    <div class="text-right pr-5">Status:</div><div class=""><input class="w-full" type="text" :value="custshop.findCustshopByID.status"></div>
    <div class="text-right pr-5">Meta Desc:</div><div class=""><input class="w-full" type="text" :value="custshop.findCustshopByID.metadesc"></div>
    <div class="text-right pr-5">Meta Title:</div><div class=""><input class="w-full" type="text" :value="custshop.findCustshopByID.metatitle"></div>
    <div class="text-right pr-5">Orderstart:</div><div class=""><input class="w-full" type="text" :value="custshop.findCustshopByID.orderstart"></div>
    <div class="text-right pr-5">Orderstop:</div><div class=""><input class="w-full" type="text" :value="custshop.findCustshopByID.orderstop"></div>
    <div class="text-right pr-5">Date:</div><div class=""><input class="w-full" type="text" :value="custshop.findCustshopByID.date"></div>
    <div class="text-right pr-5">Logo:</div><div class=""><input class="w-full" type="text" :value="custshop.findCustshopByID.logo"></div>
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
query {
  findCustshopByID(id: "361193407962415169") {
    _id
		name
    description
    logo
    metatitle
    metadesc
    image
    imagealt
    date
    orderstop
    orderstart
    status
  }
}
`
const { data: custshop } = await useAsyncQuery(query)
</script>