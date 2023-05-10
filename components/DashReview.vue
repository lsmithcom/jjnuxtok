<template>
 
    <div class="pt-4"><input class="w-4 h-4 border border-darkbluegray-50" type="checkbox" /></div>     
    <div class="pt-4 text-left">{{review.title}}</div>
    <div class="pt-4 text-left">{{review.screenname}}</div>
    <div class="pt-4">{{review.comment}}</div>
    <div class="pt-4">{{review.rating}}</div>
    <div class="pt-4">{{review.status}}</div>    
    <div class="pt-4">{{review.approver}}</div>    
</template>

<script setup>

  const { review } = defineProps(['review'])

</script>