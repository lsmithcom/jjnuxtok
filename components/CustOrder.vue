<template>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div v-for="order in TBD.order" >
      <div>{{ orderid }}</div>
      <div>{{ orderdate }}</div>
      <div>{{ firstname }} {{ lastname }}</div>
      <div>{{ status }}</div>    
      <div>{{ carrier }}</div>  
      <div>{{ total }}</div>        
      </div>	
      </div>
  </template>
  
  <script setup>

const { product } = defineProps(['product'])
  
  </script>