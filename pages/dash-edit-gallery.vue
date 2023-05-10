<template>
    <div class="bg-jblultdash pt-6">

<div class="py-4 bg-white rounded-md mx-6 flex flex-row justify-between items-center"> 
<div class="ml-8 font-bold text-2xl text-agrey">Gallery Update</div>
<div class="flex flex-row my-6 md:my-0 items-end mr-8"><NuxtLink class="dbttn jbttn-dash" to="dash-create-order">Update</NuxtLink></div>
</div>


<section class="mx-6 bg-white rounded p-4 my-4">


<div class="grid-header">
<div class="flex flex-row content-between justify-between w-full">
    <div><span class="text-2xl text-black">{{gallerys.findGallerybyUrl.title}}</span> - #{{gallerys.findGallerybyUrl._id}}</div>

      
</div>

</div>


<div class="grid grid-cols-2 grid-10-90 justify-center items-center max-w-6xl mx-auto">
    <div class="text-right pr-5">ID:</div><div class=""><input class="w-full" type="text" :value="gallerys.findGallerybyUrl.galleryid"></div>
    <div class="text-right pr-5">Url:</div><div class=""><input class="w-full" type="text" :value="gallerys.findGallerybyUrl.url"></div>
    <div class="text-right pr-5">Title:</div><div class=""><input class="w-full" type="text" :value="gallerys.findGallerybyUrl.title"></div>
    <div class="text-right pr-5">Group:</div><div class=""><input class="w-full" type="text" :value="gallerys.findGallerybyUrl.group"></div>
    <div class="text-right pr-5">Description:</div><div class=""><input class="w-full" type="text" :value="gallerys.findGallerybyUrl.description"></div>
    <div class="text-right pr-5">Timing:</div><div class=""><input class="w-full" type="text" :value="gallerys.findGallerybyUrl.timing"></div>
    <div class="text-right pr-5">Purpose:</div><div class=""><input class="w-full" type="text" :value="gallerys.findGallerybyUrl.purpose"></div>  
    <div class="text-right pr-5">Application:</div><div class=""><input class="w-full" type="text" :value="gallerys.findGallerybyUrl.application"></div>  
    <div class="text-right pr-5">Rhinestone:</div><div class=""><input class="w-full" type="text" :value="gallerys.findGallerybyUrl.rhinestone"></div>     
    <div class="text-right pr-5">Image:</div><div class=""><input class="w-full" type="text" :value="gallerys.findGallerybyUrl.image"></div>   
    <div class="text-right pr-5">Image Alt:</div><div class=""><input class="w-full" type="text" :value="gallerys.findGallerybyUrl.imagealt"></div>   
    <div class="text-right pr-5">Theme:</div><div class=""><input class="w-full" type="text" :value="gallerys.findGallerybyUrl.theme"></div>
    <div class="text-right pr-5">Position:</div><div class=""><input class="w-full" type="text" :value="gallerys.findGallerybyUrl.position"></div>
    <div class="text-right pr-5">Metatitle:</div><div class=""><input class="w-full" type="text" :value="gallerys.findGallerybyUrl.metatitle"></div>    
    <div class="text-right pr-5">Meta Description:</div><div class=""><input class="w-full" type="text" :value="gallerys.findGallerybyUrl.metadesc"></div>
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
query findGallerybyUrl {
  findGallerybyUrl(url: "rhinestone-transfer-marriott") {
    _id
    galleryid
    url
    title
    group
    description
    timing
    purpose
    application
    typestyle
    rhinestone
    image
    imagealt
    theme
    position
    metatitle
    metadesc
  }
}
`
const { data: gallerys } = await useAsyncQuery(query)
</script>