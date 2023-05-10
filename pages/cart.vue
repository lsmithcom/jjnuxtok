<template>
<div>

    <section class="px-8 mb-14">
  <div class="mx-auto px-4">
    <div class="">
      <h2 class="mb-8">Shopping Cart</h2>
      <div class="flex flex-wrap -mx-4 items-start">
        <div class="w-full md:w-8/12 mb-8 md:mb-0 px-4">
          <div class="flex w-full">
            <div class="w-1/3 md:w-3/6">
              <h4 class="mb-6 uppercase text-base font-bold">Description</h4>
            </div>
            <div class="w-1/6 md:w-1/6">
              <h4 class="mb-6  uppercase text-base font-bold">Price</h4>
            </div>
            <div class="w-1/3 md:w-1/6 text-center">
              <h4 class="mb-6  uppercase text-base font-bold">Quantity</h4>
            </div>
            <div class="w-1/6 md:w-1/6 text-right">
              <h4 class="mb-6  uppercase text-base font-bold">Subtotal</h4>
            </div>
          </div>
          <div class="mb-8 md:mb-4 py-6 border-t border-b border-gray-200">
            <div  v-for="product in cartStore.cart"  class="flex flex-wrap items-center -mx-4 mb-6 md:mb-3">
              <div class="w-full md:w-4/6 lg:w-6/12 px-4 mb-6 md:mb-0">
                <div class="flex -mx-4 flex-wrap items-center">
                  <div class="w-1/3 px-4 mb-3">
                    <div class="flex items-center justify-center w-24 h-32 bg-gray-100">
                      <img class="h-full object-contain" :src="product.image" alt="">
                    </div>
                  </div>
                  <div class="w-2/3 px-4">
                    <h3 class="mb-2 text-xl font-bold text-left">{{ product.title }}</h3>
                    <p class="">{{ product.descriptionShort }}</p>
                  </div>
                </div>
              </div>
              <div class="lg:block lg:w-2/12 px-4">
                <p class="text-lg font-heading">{{ product.price }}</p>
              </div>
              <div class="w-auto md:w-1/6 lg:w-2/12 px-4">
                <div class="inline-flex items-center px-2 font-semibold font-heading text-gray-500 border border-gray-200 rounded-md">
                  <CartQuantity :product="product" />
                </div>
              </div>


              <div class="w-1/6 lg:w-2/12 px-4 text-right">
                <p class="text-lg font-heading">{{product.price * product.quantity}}</p>
              </div>
            </div>
            
          </div>
          <div class="flex flex-wrap items-center">
            <div class="w-full md:w-auto"><span class="mr-12 mb-4 text-gray-400">Apply discount:</span></div>
            <div><input class="mr-6 mb-4 px-4 py-2 border border-gray-100 rounded-md text-gray-100 test-base" type="text" placeholder=""></div>
            <div><a class="mb-4 px-6 py-3 text-center text-white font-bold uppercase bg-gray-200 rounded-md" href="#">Apply</a></div>
          </div>
        </div>
        <div class="w-full md:w-4/12 lg:max-w-[500px] p-4">
          <div class="p-6 bg-jlavpale">
            <h4 class="mb-6 text-xl uppercase font-semibold">Cart totals</h4>
            <div class="flex mb-4 items-center justify-between pb-5 border-b border-blue-100">
              <span class="">Subtotal</span>
              <span class="text-xl">$89.67</span>
            </div>
            <div class="flex mb-2 justify-between items-center">
              <span class="">Shipping: Next day</span>
              <span class="text-xl">$11.00</span>
            </div>
            <div class="flex mb-10 justify-between items-center">
              <span class="">Sales tax</span>
              <span class="text-xl">$4.00</span>
            </div>
            <div class="flex mb-10 justify-between items-center">
              <span class="text-xl font-bold font-heading">Order total</span>
              <span class="text-xl font-bold font-heading">$100.67</span>
            </div>
            <a class="block w-full py-4 bg-jlav text-center text-white font-bold uppercase rounded-md max-w-sm mx-auto" href="#">Go to Checkout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
</template>

<script setup>
  import { useCartStore } from '@/stores/cartStore'

  const cartStore = useCartStore()
</script>