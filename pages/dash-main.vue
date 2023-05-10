<template>
    
<div class="bg-jblultdash pt-6">

<div class="py-4 bg-white rounded-md mx-6">
<div class="flex flex-row justify-between items-center">
  
<div class="ml-8 font-bold text-2xl text-agrey">Dashboard</div>

</div>
</div>

<div class="flex flex-row mt-6 mx-6 mb-6 gap-6">
  <div class="bg-white rounded-md p-4 w-1/2 h-[400px]"></div>
  <div class="bg-white rounded-md p-4 w-1/2"></div>
</div>

<div class="flex flex-row mt-6 mx-6 mb-6 h-[400px] gap-6">
  <div class="bg-white rounded-md p-4 w-3/4"></div>
  <div class="bg-white rounded-md p-4 w-1/4"></div>
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
query allRequest{
  allRequest{ 
    data {
      _id
      requestid
      date
      email
      phone
      lastname
      firstname
    	company
    }
  }
}
`
const { data: requests } = await useAsyncQuery(query)
</script>