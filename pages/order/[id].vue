<template>
    
<div class="bg-jblultdash pt-6">

<div class="py-4 bg-white rounded-md mx-6">
<div class="flex flex-row justify-between items-center">
  
<div class="ml-8 font-bold text-2xl text-agrey">Order #{{ order.findOrderByID.orderid }} <span class="">Shipping: Fedex</span></div>

</div>
</div>

<div class="flex flex-row mt-6 mx-6 mb-6 gap-6">
  <div class="bg-white rounded-md p-4 w-2/3 md:w-3/4 flex flex-col md:flex-row">

<div class="w-full md:w-1/2 p-4 rounded">
<h5 class="text-left m-0 p-0 text-sm font-semibold uppercase">Shipping</h5>
<p>{{ order.findOrderByID.addrship.addr }}<br/>
  {{ order.findOrderByID.addrship.city }}, {{ order.findOrderByID.addrship.state }} {{ order.findOrderByID.addrship.zip }}</p>
<span class="block italic text-base"><NuxtLink to="/account-settings">edit</NuxtLink></span>  
</div>

<div class="w-full md:w-1/2 p-4 rounded">
<h5 class="text-left m-0 p-0 text-sm font-semibold uppercase">Billing</h5>
  <p>{{ order.findOrderByID.addrbill.addr }}<br/>
  {{ order.findOrderByID.addrbill.city }}, {{ order.findOrderByID.addrbill.state }} {{ order.findOrderByID.addrbill.zip }}</p>
<span class="block italic text-base"><NuxtLink to="/account-settings">edit</NuxtLink></span>  
</div>


  </div>
  <div class="w-1/3 md:w-1/4 p-4 rounded-md grid grid-cols-2 bg-white grid-2-a text-md">

    <div>Subtotal:</div><div>{{ order.findOrderByID.shiptotal }}</div>
    <div>Shipping:</div><div>{{ order.findOrderByID.shiptotal }}</div>
    <div>Tax:</div> <div>{{ order.findOrderByID.taxtotal}}</div>
    <div>Order Total:</div> <div>{{ order.findOrderByID.total }}</div>  






  </div>
</div>

<div class="flex flex-row mt-6 mx-6 mb-6 gap-6">
  <div class="bg-white rounded-md p-4 w-full h-[400px] flex flex-row">

    <div class="w-1/6"><img src="/image/tshirt-bride.jpg" /></div>
    <div class="w-1/3 font-bold">Mother of the Bride Rhinestone T Shirt</div>
    <div class="w-1/4">
      <ul class="flex flex-col w-3/4">
        <li class="border rounded p-1 pl-6 mb-6">Fitted Short Sleeve</li>
        <li class="border rounded p-1 pl-6 mb-6">Color: Fuchsia</li>
        <li class="border rounded p-1 pl-6">Size: Large</li>
      </ul>
    </div>
    <div class="w-1/4">
    <ul class="flex flex-col md:flex-row justify-between text-center">
      <li>19.90</li>
      <li class=""><span class="border p-1">2</span></li>
      <li>39.80</li>     
    </ul>
  </div>
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

const { id } = useRoute().params

const query = gql`
query findOrderbyID {
  findOrderByID(id: ${id}) {
    orderid
    orderdate
    firstname
    lastname
    taxtotal
    shiptotal
    total
    addrbill {
      addr
      city
      state
      zip
    }
    addrship {
      addr
      city
      state
      zip
    }
  }
}
`
const { data: order } = await useAsyncQuery(query)
</script>