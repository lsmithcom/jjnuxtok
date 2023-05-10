<template>
<div>

<section class="mb-14">
    <h2 class="text-left mt-0">My Orders</h2>


<div class="grid grid-cols-7 text-center items-center text-white bg-agrey text-sm font-semibold border-r border-white py-3 grid-7-a mb-4"> 
    <div class="border-r border-white">ID</div>
    <div class="border-r border-white">Date</div>
    <div class="border-r border-white">Name</div>
    <div class="border-r border-white">Status</div>
    <div class="border-r border-white">Ship Carrier</div>
    <div class="border-r border-white">Total</div>   
    <div class="">edit</div> 
  </div>

  <div v-if=" customer.findCustomerByID.custorder.data.length">
    <div v-for="order in customer.findCustomerByID.custorder.data" class="grid grid-cols-7 text-center items-center gridded text-agrey text-base grid-7-a">

    <div class="h-10">{{ order.orderid }}</div>
    <div class="h-10">{{ order.orderdate }}</div>    
    <div class="h-10">{{ order.status }}</div>
    <div class="h-10">{{ order.addrship.city }}</div>
    <div class="h-10">{{ order.shipmethod }}</div>  
    <div class="h-10">{{ order.total }}</div>   
    <div class="h-10"><NuxtLink :to="order._id">edit</NuxtLink></div>     

    </div>
    </div>

    <div v-else class="h-24 pl-10 flex justify-center items-center content-center"> you have no orders</div>


</section>

</div>
</template>

<script setup>

definePageMeta({
  layout: "custaccount",
})

useHead( {
    title: "Just Jen.com User Account - Customer Order Screen",
    meta: [
        {name: 'description', content: 'List of all Orders for Account on JustJen.com User Accounts'}
    ]
})

const { id } = useRoute().params

const query = gql`
query {
  findCustomerByID(id: "361321028614357060") {
     _id
    firstname
    lastname
    company
    email
    phone
    custorder {
      data {
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