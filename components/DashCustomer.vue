<template>

    <div><input class="w-4 h-4 border border-darkbluegray-50" type="checkbox" /></div>
    <div class="pt-4"><NuxtLink :to="customer._id">{{customer.custid}}</NuxtLink></div>     
    <div class="pt-4 text-left">{{customer.firstname}} {{customer.lastname}}</div>
    <div class="pt-4 text-left">{{customer.company}}</div>
    <div class="pt-4">{{customer.email}}</div>
    <div class="pt-4">{{customer.phone}}</div>   
    <div class="pt-4">State</div>   
    
</template>

<script setup>

  const { customer } = defineProps(['customer'])

</script>