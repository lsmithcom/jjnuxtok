<template>
    <div>

    <section class="relative h-400" >
    <img src="/image/banner-bridal-subcategory.jpg" title="bridal banner" alt="bridal banner" class="w-full h-full object-cover" />
    
    <div class="absolute inset-0 flex flex-row">
    <div class="md:w-1/2"><img title="rhinestone bride shirts" alt="rhinestone bride shirts" src="/image/header-shirt-bride-l.png" /></div>
    <div class="md:w-1/2"><h1>Bride Shirts<br>with Bling</h1></div>
    </div>
    </section>
    
    <div class="mt-14">
    <ul class="flex flex-col md:flex-row gap-4">
    <li class="w-full md:w-1/3 relative">
    <NuxtLink to="/bridal-satin-robes">
    <img src="/image/category-bridal-satin-robes-banner.jpg" alt="bridal satin robes"></NuxtLink>
    <h4 class="absolute left-5 top-0">Satin Robes</h4>
    </li>
    <li class="w-full md:w-1/3 relative">
    <NuxtLink to="/bridal-hoodies">
    <img src="/image/category-bridal-hoodies-banner.jpg" alt="wedding shirts for the bride"></NuxtLink>
    <h4 class="absolute left-5 top-0">Hoodies</h4>
    </li>
    <li class="w-full md:w-1/3 relative">
    <NuxtLink to="/bride-bikinis">
    <img src="/image/category-bridal-bikinis-banner.jpg" alt="bride bikinis"></NuxtLink>
    <h4 class="absolute left-5 top-0">Bikinis</h4>
    </li>
    </ul>
    </div>
    
    <div class="mx-14">

    <div class="my-6">
    <h3 class="w-1/4 text-left my-0 inline">Bride T-shirts</h3>
    <div class="float-right inline">Sort By 
    <select class="">
        <option value="price"> Price </option>
        <option value="popularity"> Popularity </option>
        <option value="name"> Name </option>    
    </select></div>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

      <div v-for="product in products.allProducts.data">
      <div class="items-center gap-8">
      <NuxtLink :to="product._id"><img :src="`/image/` + product.image" :alt="product.imageAlt" class="">
      <div class="block clear-both">
        <p class="text-2xl">{{product.name}}</p>
        <p class="text-lg my-3">{{product.price}}</p>   
      </div></NuxtLink>
      <button class="btn" @click="addToBasket()" :disabled="isPending">
        <span v-show="!isPending">Add to Basket</span>
        <span v-show="isPending">Adding...</span>
      </button>
    </div>
  </div>
        </div>
    
    </div>
    

<div class="mx-14">

<div class="my-6">
<div class="float-right inline">Sort By 
<select class="">
    <option value="price"> Price </option>
    <option value="popularity"> Popularity </option>
    <option value="name"> Name </option>    
</select></div>
</div>
</div>
    
    
    </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '/stores/cartStore'

const cartStore = useCartStore()
const isPending = ref(false)

const addToBasket = async () => {
  isPending.value = true
  await cartStore.addToCart(product)
  setTimeout(() => {
    isPending.value = false
  }, 1000)
}


const query = gql`
  query allProducts {
    allProducts {
      data {
          name
          price
          description
          sku
          url
          link
          image
          _id
      }
    }
  }
`
const { data: products } = await useAsyncQuery(query)

</script>