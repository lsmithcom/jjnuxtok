<template>
 
    <div class="pt-4"><input class="w-4 h-4 border border-darkbluegray-50" type="checkbox" /></div>
    <div class="pt-4"><NuxtLink :to="order._id">{{order.orderid}}</NuxtLink></div>     
    <div class="pt-4">{{order.orderdate}}</div>
    <div class="pt-4 text-left">{{order.firstname}} {{order.lastname}} </div>
    <div class="pt-4">{{order.email}}</div>  
    <div class="pt-4">{{order.status}}</div>
    <div class="pt-4">{{order.total}}</div>  
</template>

<script setup>

  const { order } = defineProps(['order'])

</script>