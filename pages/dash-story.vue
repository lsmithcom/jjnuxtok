<template>
  
<div class="bg-jblultdash pt-6">

<div class="py-4 bg-white rounded-md mx-6">
<div class="flex flex-row justify-between items-center">
  
<div class="ml-8 font-bold text-2xl text-agrey">Story<span class="font-medium ml-8 pl-8 text-xl border-l border-agrey"><NuxtLink to="/dash-gallery">Gallery</NuxtLink></span></div>
<div class="flex flex-row my-6 md:my-0 items-end mr-8"><NuxtLink class="dbttn jbttn-dash" to="dash-create-story">New Story</NuxtLink></div>

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

<div class="grid grid-cols-7 text-center items-center text-white bg-jblucrn text-sm font-semibold border-r border-white py-3 grid-7-a">
    <div class="border-r border-white">&nbsp;</div>  
    <div class="border-r border-white">ID</div>
    <div class="border-r border-white">Image</div>
    <div class="border-r border-white">Title</div>
    <div class="border-r border-white">url</div>
    <div class="border-r border-white">Theme</div>
    <div class="border-r border-white">Theme</div>   
  </div>

  <div class="grid grid-cols-7 text-center items-center gridded text-agrey text-base grid-7-a" v-for="story in storys.allStory.data">
     <DashStory :story="story" />
  </div>  

</div>


    </div>
</template>


<script lang="ts" setup>

definePageMeta({
  layout: "dashboard",
})

useHead( {
    title: "Just Jen Administration Dashboard - Content List Screen",
    meta: [
        {name: 'description', content: 'Our everyday collection of shirts, bottoms and activewear.  Embellished rhinestone designs perfect for layering, or making a dazzling impression.'}
    ]
})

const query = gql`
query allStory{
  allStory{ 
    data {
      _id
      url
      storyid
      title
      image
      imagealt
    	theme
    }
  }
}
`
const { data: storys } = await useAsyncQuery(query)
</script>