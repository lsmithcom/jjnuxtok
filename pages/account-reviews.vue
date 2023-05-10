<template>
<div>

<section class="mb-14">
    <h2 class="text-left mt-0">My Reviews</h2>

<div class="grid grid-cols-5 text-center items-center text-white bg-agrey text-sm font-semibold border-r border-white py-3 grid-5-a mb-4">
    <div class="border-r border-white">ID</div>
    <div class="border-r border-white">Date</div>
    <div class="border-r border-white">Comment</div>
    <div class="border-r border-white">Rating</div>
    <div class="border-r border-white">Status</div>
  </div>

  <div v-if=" customer.findCustomerByID.custrev.data.length" class="">
  <div v-for="review in customer.findCustomerByID.custrev.data" class="grid grid-cols-5 text-center items-center gridded text-agrey text-base grid-5-a">  
    <div class="h-10">{{ review.reviewid }}</div>
    <div class="h-10">{{ review.reviewdate }}</div>
    <div class="h-10">{{ review.comment }}</div>
    <div class="h-10">{{ review.rating }}</div>
    <div class="h-10">{{ review.rating }}</div> 
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
    title: "Just Jen.com User Account - User Reviews",
    meta: [
        {name: 'description', content: 'User Reviews for JustJen.com User Accounts'}
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