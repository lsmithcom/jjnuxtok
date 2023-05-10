<template>
    <div>
    
    <section class="mb-14">
    <h2 class="text-left mt-0">My Wishlist</h2>
    

<div class="border border-gray-200 rounded">

    <div v-if=" customer.findCustomerByID.wishlist.data.length" class="flex flex-row">
      <div v-for="wishes in customer.findCustomerByID.wishlist.data" class="w-1/5">

      
    <div class="">
    <NuxtLink :to="`/` + wishes._id">
    <img class="" :src="`/image/` + wishes.image" :alt="wishes.imagealt"/>
    <div class="">{{ wishes.name }}</div>
    <div class="">{{ wishes.price }}</div>
    </NuxtLink>
    </div> 
    </div>
  </div>

</div>
    
      
    </section>
    
    
    </div>
    </template>
    
    <script setup>
    
    definePageMeta({
      layout: "custaccount",
    })
    
    useHead( {
        title: "Just Jen.com User Account - My Wishlist",
        meta: [
            {name: 'description', content: 'Product Wishlist for JustJen.com User Accounts'}
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