<template>
<div>
  <section class="relative h-96">
<img class="h-full" src="/image/banner-custom-400.jpg" alt="customized rhinestone tee shirts and tank tops" />
<div class="absolute inset-0 max-w-5xl mx-auto flex">
<div class="w-full md:w-1/2"><h1 class="text-white max-w-xs leading-normal">Custom Rhinestone Shirts</h1></div>
<div class="w-full md:w-1/2"><img class="h-full maxwnone" src="/image/header-custom-rhinestone-shirt.png" alt="custom rhinestone shirts with bling"></div>
</div>
</section>

<section class="mx-8 mb-14 my-14">
  <div class="flex flex-col md:flex-row">
  <div class="w-full md:w-8/12 pr-6">

    <h3 class="text-left mt-0">Select Shirt Style</h3>
<div class="flex flex-row justify-center items-center">
  <input class="w-1/3 mr-4 mt-4 py-1 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="Shirt Style">
  <input class="w-1/3 mr-4 mt-4 py-1 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="Shirt Size">
  <input class="w-1/3 mt-4 py-1 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="Shirt Color"></div>


<h3 class="text-left">Create Your Design</h3>
<div class="flex flex-row items-center">
  <label class="w-[75px]">Line 1</label>
  <input class="w-1/4 mr-4 mt-4 py-1 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="Enter Text">
  <input class="w-1/4 mr-4 mt-4 py-1 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="Crystal">
  <input class="w-1/4 mt-4 py-1 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="Font"></div>

  <div class="flex flex-row items-center">
  <label class="w-[75px]">Line 2</label>
  <input class="w-1/4 mr-4 mt-12 py-1 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="Enter Text">
  <input class="w-1/4 mr-4 mt-12 py-1 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="Crystal">
  <input class="w-1/4 mt-12 py-1 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="Font"></div>

  <div class="flex flex-row items-center">
  <label class="w-[75px]">Line 3</label>
  <input class="w-1/4 mr-4 mt-12 py-1 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="Enter Text">
  <input class="w-1/4 mr-4 mt-12 py-1 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="Crystal">
  <input class="w-1/4 mt-12 py-1 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="Font"></div>

  </div>
   
  <div class="w-full md:w-4/12">

  <div class="mb-12 px-8 pb-8 bg-jlavpale">
    <h4 class="pt-4">Enter Quantity</h4>
    <div class="flex flex-row gap-2 border-b border-gray-200 mt-6 text-base text-center font-bold text-black">
      <div class="w-1/5">SM<input class="mt-0 px-1 py-1 border border-gray-200 max-w-[40px]" type="text" placeholder="">
</div>
      <div class="w-1/5">MD<input class="mt-0 px-1 py-1 border border-gray-200 max-w-[40px]" type="text" placeholder=""></div>      
      <div class="w-1/5">LG<input class="mt-0 px-1 py-1 border border-gray-200 max-w-[40px]" type="text" placeholder=""></div>
      <div class="w-1/5">XL<input class="mt-0 px-1 py-1 border border-gray-200 max-w-[40px]" type="text" placeholder=""></div>      
      <div class="w-1/5">2XL<input class="mt-0 px-1 py-1 border border-gray-200 max-w-[40px]" type="text" placeholder=""></div>     
    </div>
  </div>


<div class="mb-12 pt-8 px-8 pb-8 bg-jlavpale">

            <div class="flex mb-2 justify-between items-center">
              <span class="">Order subtotal</span>
              <span class="text-xl">$89.00</span>
            </div>
            <div class="flex mb-2 justify-between items-center">
              <span class="">Shipping</span>
              <span class="text-xl">$11.00</span>
            </div>
            <div class="flex mb-5 justify-between items-center">
              <span class="t">Tax</span>
              <span class="text-xl">$4.67</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold ">Total</span>
              <span class="text-xl font-bold">$100.67</span>
            </div>
          </div>
          <div>
            <NuxtLink class="block mx-auto w-3/5 py-4 bg-jlav hover:bg-orange-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200" to="#">Add to Cart</NuxtLink>


          </div>
      </div>
  </div>

</section>

</div>
</template>

<script setup>

useHead( {
    title: "Design Your Own T Shirt - Custom Rhinestone T-shirts with Sparkle",
    meta: [
        {name: 'description', content: 'Design Your Own Rhinestone T-shirt with Dazzling Crystals. Create Your Design with Letters and Symbols'}
    ]
})

</script>

