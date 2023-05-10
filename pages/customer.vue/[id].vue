<template>
<div>

<section class="mb-14">

<h2 class="text-left mt-0">My Account</h2>

<div class="flex">

  <div class="w-1/2">
    <span class="block">{{ customer.findCustomerByID.firstname }} {{ customer.findCustomerByID.lastname }}</span>
    <span class="block">email: {{ customer.findCustomerByID.email }}</span>
    <span class="block">{{ customer.findCustomerByID.phone }}</span>
    <span class="block italic text-base"><NuxtLink to="/account-settings">edit</NuxtLink></span>        
</div>
<div class="w-1/2">
<span class="block"> &nbsp</span>
  <span class="block">username: lsmithcom</span>
  <span class="block italic text-base">password: <NuxtLink to="/account-settings">edit</NuxtLink></span>        
</div>

</div>

<h4 class="text-left">Addresses:</h4>

<div class="flex flex-col md:flex-row border border-gray-200 p-4 gap-4 rounded text-base">

<div class="w-full md:w-1/2 border border-gray-200 p-4 rounded">
<h5 class="text-left m-0 p-0 text-sm font-semibold uppercase">Shipping</h5>
<p>{{ customer.findCustomerByID.addrship.addr }}<br/>
  {{ customer.findCustomerByID.addrship.city }}, {{ customer.findCustomerByID.addrship.state }} {{ customer.findCustomerByID.addrship.zip }}</p>
<span class="block italic text-base"><NuxtLink to="/account-settings">edit</NuxtLink></span>  
</div>

<div class="w-full md:w-1/2 border border-gray-200 p-4 rounded">
<h5 class="text-left m-0 p-0 text-sm font-semibold uppercase">Billing</h5>
  <p>{{ customer.findCustomerByID.addrbill.addr }}<br/>
  {{ customer.findCustomerByID.addrbill.city }}, {{ customer.findCustomerByID.addrbill.state }} {{ customer.findCustomerByID.addrbill.zip }}</p>
<span class="block italic text-base"><NuxtLink to="/account-settings">edit</NuxtLink></span>  
</div>

</div>

<h4 class="text-left">Recent Orders:</h4>

<div class="grid grid-cols-6 text-center items-center text-white bg-agrey text-sm font-semibold border-r border-white py-3 grid-6-a mb-4"> 
    <div class="border-r border-white">ID</div>
    <div class="border-r border-white">Date</div>
    <div class="border-r border-white">Status</div>
    <div class="border-r border-white">Ship City</div>
    <div class="border-r border-white">Ship Carrier</div>
    <div>Total</div>   
  </div>

  <div v-if=" customer.findCustomerByID.custorder.data.length">
    <div v-for="order in customer.findCustomerByID.custorder.data" class="grid grid-cols-6 text-center items-center gridded text-agrey text-base grid-6-a mb-4">

    <div class="h-10"><NuxtLink :to="order._id">{{ order.orderid }}</NuxtLink></div>
    <div class="h-10">{{ order.orderdate }}</div>    
    <div class="h-10">{{ order.status }}</div>
    <div class="h-10">{{ order.addrship.city }}</div>
    <div class="h-10">{{ order.shipmethod }}</div>  
    <div class="h-10">{{ order.total }}</div>      

    </div>
    </div>

    <div v-else class="h-24 pl-10 flex justify-center items-center content-center"> you have no orders</div>



<h4 class="text-left">Wishlist:</h4>
<div class="border border-gray-200 rounded">

  <div v-if=" customer.findCustomerByID.wishlist.data.length" class="flex flex-row">
    <div v-for="wishes in customer.findCustomerByID.wishlist.data" class="w-1/5">

      
    <div>
      <NuxtLink :to="`/` + wishes._id">
    <img class="" :src="`/image/` + wishes.image" :alt="wishes.imagealt"/>
    <div class="">{{ wishes.name }}</div>
    <div class="">{{ wishes.price }}</div>
  </NuxtLink>
    </div> 

    </div>
  </div>

  <div v-else class="h-24 pl-10 flex justify-center items-center content-center"> you have no wishes</div>


</div>


<h4 class="text-left">Reviews:</h4>
<div class="grid grid-cols-6 text-center items-center text-white bg-agrey text-sm font-semibold border-r border-white py-3 grid-6-a mb-4">
    <div class="border-r border-white">Select</div>
    <div class="border-r border-white">ID</div>
    <div class="border-r border-white">Date</div>
    <div class="border-r border-white">Comment</div>
    <div class="border-r border-white">Rating</div>
    <div>Status</div>
  </div>


  <div v-if=" customer.findCustomerByID.custrev.data.length" class="">
  <div v-for="review in customer.findCustomerByID.custrev.data" class="grid grid-cols-6 text-center gridded text-agrey text-base grid-6-a">  
    <div><input class="w-4 h-4 border border-darkbluegray-50" type="checkbox" /></div>
    <div class="h-10 ">{{ review.reviewid }}</div>
    <div class="h-10 ">{{ review.reviewdate }}</div>
    <div class="h-10 ">{{ review.comment }}</div>
    <div class="h-10 ">{{ review.rating }}</div>
    <div class="h-10 ">{{ review.rating }}</div> 
  </div>
  </div>

  <div v-else class="h-24 pl-10 flex justify-center items-center content-center"> you have no reviews</div>

</section>



</div>
</template>


<script lang="ts" setup>

definePageMeta({
  layout: "custaccount",
})

useHead( {
    title: "Just Jen.com User Account - Summary Screen for User Information",
    meta: [
        {name: 'description', content: 'Summary Screen for JustJen.com User Accounts'}
    ]
})

const { id } = useRoute().params

const query = gql`
query {
  findCustomerByID(id: ${id}) {
     _id
    firstname
    lastname
    company
    email
    phone
    custorder {
      data {
        _id
        orderid
        status
        orderdate
        addrship {
          city
        }
        shipmethod
        total
      }
    }
    wishlist {
      data {
        name
        image
        imagealt
        _id
        price
      }
    }
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
    custrev {
    	data {
      reviewid
      reviewdate
      comment
      rating
      status
      }
    }
  }
}
`
const { data: customer } = await useAsyncQuery(query)

</script>