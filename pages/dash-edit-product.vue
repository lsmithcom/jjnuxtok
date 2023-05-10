<template>
    <div class="bg-jblultdash pt-6">

<div class="py-4 bg-white rounded-md mx-6 flex flex-row justify-between items-center"> 
<div class="ml-8 font-bold text-2xl text-agrey">Product Update</div>
<div class="flex flex-row my-6 md:my-0 items-end mr-8"><NuxtLink class="dbttn jbttn-dash" to="dash-create-order">Update</NuxtLink></div>
</div>


<section class="mx-6 bg-white rounded p-4 my-4">

<div class="bg-slate-50 py-4bg-agreylt border-agreymd border-t border-b py-4">
<div class="flex flex-row content-between justify-between w-full">
    <div><span class="text-2xl text-black">{{ products.findProductByID.name }}</span> - #{{ products.findProductByID._id }}</div>
      
</div>

</div>

<div class="grid grid-cols-2 grid-10-90 justify-center items-center max-w-6xl mx-auto">
    <div class="text-right pr-5">SKU:</div><div class=""><input class="w-full" type="text" :value="products.findProductByID.sku"></div>
    <div class="text-right pr-5">Name:</div><div class=""><input class="w-full" type="text" :value="products.findProductByID.name"></div>
    <div class="text-right pr-5">Price:</div><div class=""><input class="w-full" type="text" :value="products.findProductByID.price"></div>
    <div class="text-right pr-5">Link:</div><div class=""><input class="w-full" type="text" :value="products.findProductByID.link"></div>
    <div class="text-right pr-5">Description:</div><div class=""><input class="w-full" type="text" :value="products.findProductByID.description"></div>
    <div class="text-right pr-5">Description Short:</div><div class=""><input class="w-full" type="text" :value="products.findProductByID.descshort"></div>    
    <div class="text-right pr-5">Image:</div><div class=""><input class="w-full" type="text" :value="products.findProductByID.image"></div>
    <div class="text-right pr-5">ImageAlt:</div><div class=""><input class="w-full" type="text" :value="products.findProductByID.imagealt"></div>
    <div class="text-right pr-5">Stock:</div><div class=""><input class="w-full" type="text" :value="products.findProductByID.stock"></div>
    <div class="text-right pr-5">Meta Desc:</div><div class=""><input class="w-full" type="text" :value="products.findProductByID.metadesc"></div>
    <div class="text-right pr-5">Meta Title:</div><div class=""><input class="w-full" type="text" :value="products.findProductByID.metatitle"></div>
    <div class="text-right pr-5">Category:</div><div class=""><input class="w-full" type="text" :value="products.findProductByID.category"></div>
    <div class="text-right pr-5">Status:</div><div class=""><input class="w-full" type="text" :value="products.findProductByID.status"></div>
    <div class="text-right pr-5">Postion:</div><div class=""><input class="w-full" type="text" :value="products.findProductByID.position"></div>
    <div class="text-right pr-5">Tax Class:</div><div class=""><input class="w-full" type="text" :value="products.findProductByID.taxclass"></div>
    <div class="text-right pr-5">Layout:</div><div class=""><input class="w-full" type="text" :value="products.findProductByID.layout"></div>
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
  findProductByID(id: "359844831618400324") {
    _id
    sku
    link
    url
    status
    name
    description
    descshort
    metatitle
    metadesc
    price
    stock
    image
    imagealt
  }
}
`
const { data: products } = await useAsyncQuery(query)
</script>