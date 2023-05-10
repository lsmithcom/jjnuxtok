<template>
<div>

 <section class="jsection">
<ul class="flex flex-col-reverse md:flex-row">
<li class="w-full md:w-1/2">
<div class="max-w-md mx-auto pt-10">
<h1 class="text-center"><span class="block">Sell Your Logo Gear</span><span class="block"></span><span>the Easy Way!</span></h1>
<p class="">Make selling your custom logo gear easier with your own online store through the Just Jen website. Share the link to your shop with your potential customers and let them order at their convenience.</p>
<div class="w-full text-center my-14"><NuxtLink class="jbttn jbttn-lav" to="/shop-start">Start a Shop</NuxtLink></div>
</div>    

</li>
<li class="w-full md:w-1/2"><img class="max-w-xl" src="/image/image-shop-intro.png" alt="create shop for your logo and designs"></li>

</ul>
</section>

<section class="bg-jpinklt p-10">
<ul class=" grid grid-cols-1 md:grid-cols-2 gap-10">
<li class="md:order-1"><img src="/image/icon-simple-order.png" alt="simple ordering for your custom online shop"></li>
<li class="md:order-2">
<h3 class="">Simplify Ordering</h3>
<p>Stop taking orders! Use our site to collect orders. Each member of your group or team can select sizes, colors and garment styles online, at their convenience.</p>
</li>
<li class="md:order-4"><img src="/image/icon-shipping.png" alt="group or drop shipping options for your custom shop"></li>
<li class="md:order-3">
<h3 class="">Group or Drop Shipping</h3>
<p>We can drop ship orders directly to your customers, or set an order deadline and ship to one location. Save money on shipping with a group shipment.</p>
</li>
<li class="md:order-5"><img src="/image/icon-payment.png" alt="individual or group payment options for your custom apparel products"></li>
<li class="md:order-6">
<h3 class="">Flexible Payment Options</h3>
<p>Customers can pay directly for their orders online or you can collect payment and pay as a group. Set your sales price and we will remit to you the mark-up.</p>
</li>
<li class="md:order-8"><img src="/image/icon-share.png" alt="individual or group payment options for your custom apparel products"></li>
<li class="md:order-7">
<h3 class="">Share with Your Group</h3>
<p>Send a link to your shop with your group, or to potential customers. They can visit the shop at their convenience and order products.</p>
</li>
</ul>
</section>

<section class="">
<div class="height-450">
<ul class="flex flex-col md:flex-row">
<li class="w-full md:w-1/2"><img class="" src="/image/image-shop-girl.png" alt="custom printing and embellishment of garments"></li>
<li class="w-full md:w-1/2">
<h2 class="color-black">Design with Crystals and Print</h2>
</li>
</ul>
</div>
</section>


<section class="">
<div class="background-descend">
<div class="pt-80 md:pt-20 mx-14">
<h2 class="md:-mb-10">How Do I Start a Shop?</h2>
<ul class="flex flex-col md:flex-row gap-4">
<li class="w-full md:w-1/3">
<h5 class="font-bold text-4xl text-jlav">01</h5>
<h3 class="uppercase text-lg font-bold">Apply for Shop</h3>
<p>Fill out our simple form to apply for an online shop. Most shops are arrived in a day and they are free!</p>
</li>
<li class="w-full md:w-1/3 md:mt-14">
<h5 class="font-bold text-4xl text-jlav">02</h5>
<h3 class="uppercase text-lg font-bold">Get Custom Quote</h3>
<p>Submit your design(s) online to receive a price quote.  We can make your logo or design into rhinestones or printing.</p>
</li>
<li class="w-full md:w-1/3 md:mt-28">
<h5 class="font-bold text-4xl text-jlav">03</h5>
<h3 class="uppercase text-lg font-bold">Select Garments</h3>
<p>Choose garment options that will be available including styles, sizes and colors.</p>
</li>
</ul>
</div>
</div>
<div class="background-descend-2">&nbsp;</div>
</section>


<section class="jsection">
<h2 class="">Browse the Public Shops</h2>
<ul class="flex flex-col md:flex-row">
<li class="w-full md:w-1/2">
<p class="font-left">Check out the shops selling their logos designs on Soft Goodies to the general public. Remember, you choose whether to sell to the world or make your shop private.</p>
<div class="w-full text-center my-14"><NuxtLink class="jbttn jbttn-pink" to="/shop-custom-search">Browse the Shops</NuxtLink></div>
</li>
<li class="w-full md:w-1/2 flex flex-row">
<ul class="flex flex-row">
<li class="w-1/2 border-1 border-jgrey"><img class="" src="/image/image-garment.png" alt="dragons dance team shop">
<h4>Dragons Dance Team</h4>
<p class="font-left">Dragons Dance Team gear approved by the studio.</p>
<div><NuxtLink to="">Shop &gt;&gt;</NuxtLink></div>
</li>
<li class="w-1/2 border-1 border-jgrey"><img class="" src="/image/image-garment.png" alt="fantastic do salon shop">
<h4>Fantastic Do Salon</h4>
<p class="font-left">Fantastic Do salon gear with great style.</p>
<div><NuxtLink to="">Shop &gt;&gt;</NuxtLink></div>
</li>
</ul>
</li>
</ul>
</section>
</div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'bounce'
  }
})
useHead( {
    title: "Sell Your Own Custom Logo Shirts Online",
    meta: [
        {name: 'description', content: 'Set up a shop and sell your custom logo shirts online at Just Jen'}
    ]
})


</script>
