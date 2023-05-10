<template>
    <div>


        <section class="bg-jpinklt">
    <ul class="py-2 flex flex-row pl-14">
        <li class="pr-4"><img src="/image/facebook.png" /></li>
        <li class="pr-4"><img src="/image/twitter.png" /></li>
        <li class=""><img src="/image/pinterest.png" /></li>
    </ul>
</section>
 
<section class="py-14">
  <div class="px-14 xl2:p-0 mx-auto max-w-7xl">
    <div class="flex flex-wrap">
      <div class="w-full md:w-3/5 flex flex-wrap leading-10 text-center text-base text-black">
          <ul class="w-full md:text-left md:w-1/3 mb-8">
            <li class="font-bold text-black uppercase text-lg pb-2">Orders</li>
            <li class=""><NuxtLink class="text-gray-500 hover:text-gray-700" to="/shipping">Shipping</NuxtLink></li>
            <li class=""><NuxtLink class="text-gray-500 hover:text-gray-700" to="/order-tracking">Track Your Order</NuxtLink></li>
          </ul>
          <ul class="w-full md:text-left md:w-1/3 mb-8">
            <li class="font-bold text-black uppercase text-lg pb-2">Products</li>
            <li class=""><NuxtLink class="text-gray-500 hover:text-gray-700" to="/styles">Styles & Sizes</NuxtLink></li>
            <li class=""><NuxtLink class="text-gray-500 hover:text-gray-700" to="/faq">FAQ</NuxtLink></li>
          </ul>
          <ul class="w-full md:text-left  md:w-1/3">
            <li class="font-bold text-black uppercase text-lg pb-2">Company</li>
            <li class=""><NuxtLink class="text-gray-500 hover:text-gray-700" to="/press">Press</NuxtLink></li>
            <li class=""><NuxtLink class="text-gray-500 hover:text-gray-700" to="/contact">Contact</NuxtLink></li>
          </ul>
      </div>
      <div class="order-first md:order-last mb-10 md:mb-0 w-full md:w-2/5 text-base text-black leading-10 text-center md:text-left mx-auto">
        <div class="font-bold text-black uppercase text-lg pb-2">Subscribe</div>
        <p class="mb-0 text-gray-500">Enter email and get everyday discounts!</p>
        <input class="w-2/3 mb-4 pl-4 py-0 mr-4 border rounded" type="email" placeholder="Type your e-mail">
        <button class="inline-block px-5 py-3 text-sm bg-jlav hover:bg-gray-600 text-white font-semibold hover:border-gray-600 rounded transition duration-200">Submit</button>
      </div>
    </div>
  </div>
  <div class="mt-4 lg:mt-4 mb-8 border-b border-gray-50"></div>
  <div class="container px-2 mx-auto">
    <div class="flex flex-wrap items-center">
      <div class="w-full lg:w-1/2 mb-6 lg:mb-0">
        <a class="text-gray-600 text-2xl leading-none" href="#">
          
        </a>
      </div>
      <p class="lg:hidden text-sm text-gray-500">All rights reserved. &copy; Just Jen Inc.</p>
    </div>
  </div>
</section>

    </div>
</template>