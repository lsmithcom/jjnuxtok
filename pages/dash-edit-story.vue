<template>
    <div class="bg-jblultdash pt-6">

<div class="py-4 bg-white rounded-md mx-6 flex flex-row justify-between items-center"> 
<div class="ml-8 font-bold text-2xl text-agrey">Story Update</div>
<div class="flex flex-row my-6 md:my-0 items-end mr-8"><NuxtLink class="dbttn jbttn-dash" to="dash-create-order">Update</NuxtLink></div>
</div>

<section class="mx-6 bg-white rounded p-4 my-4">


<div class="grid-header">
<div class="flex flex-row content-between justify-between w-full">
    <div><span class="text-2xl text-black">{{ storys.findStoryByID.title }}</span> - # {{ storys.findStoryByID._id }}</div>
      
</div>

</div>

<div class="grid grid-cols-2 grid-10-90 justify-center items-center max-w-6xl mx-auto">
    <div class="text-right pr-5">Story ID:</div><div class=""><input class="w-full" type="text" :value="storys.findStoryByID.storyid"></div>
    <div class="text-right pr-5">Url:</div><div class=""><input class="w-full" type="text" :value="storys.findStoryByID.url"></div>
    <div class="text-right pr-5">Date:</div><div class=""><input class="w-full" type="text" :value="storys.findStoryByID.date"></div>
    <div class="text-right pr-5">Title:</div><div class=""><input class="w-full" type="text" :value="storys.findStoryByID.title"></div>
    <div class="text-right pr-5">Author:</div><div class=""><input class="w-full" type="text" :value="storys.findStoryByID.author"></div>
    <div class="text-right pr-5">Summary:</div><div class=""><input class="w-full" type="text" :value="storys.findStoryByID.summary"></div>  
    <div class="text-right pr-5">Body:</div><div class=""><textarea rows="8" class="w-full border p-2">{{ storys.findStoryByID.body }}</textarea></div> 
    <div class="text-right pr-5">Image:</div><div class=""><input class="w-full" type="text" :value="storys.findStoryByID.image"></div>   
    <div class="text-right pr-5">Image Alt:</div><div class=""><input class="w-full" type="text" :value="storys.findStoryByID.imagealt"></div>   
    <div class="text-right pr-5">Theme:</div><div class=""><input class="w-full" type="text" :value="storys.findStoryByID.theme"></div>
    <div class="text-right pr-5">Position:</div><div class=""><input class="w-full" type="text" :value="storys.findStoryByID.position"></div>
    <div class="text-right pr-5">Metatitle:</div><div class=""><input class="w-full" type="text" :value="storys.findStoryByID.metatitle"></div>
    <div class="text-right pr-5">Metadesc:</div><div class=""><input class="w-full" type="text" :value="storys.findStoryByID.metadesc"></div>
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
  findStoryByID(id: "361208658058543172") {
    _id
    storyid
    url
    date
    title
    author
    summary
    body
    image
    imagealt
    theme
    position
    metatitle
    metadesc
  }
}
`
const { data: storys } = await useAsyncQuery(query)
</script>