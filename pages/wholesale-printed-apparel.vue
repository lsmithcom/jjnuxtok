<template>
    <div>

<section class="mx-14">
<ul class="flex flex-col-reverse md:flex-row">

<li class="w-full md:w-1/2">
<h1 class="">Wholesale Custom Printed Apparel</h1>
<h4 class="text-lav">Great Customer Service at Low Prices</h4>
<p class="font-left">Shop our cheerleader and cheer mom shirts, or you can put your cheer team logo on gear and uniforms.  Give your team the extra sparkle to stand out from other cheer teams. </p>
</li>

<transition name="offscreen" appear><li class="w-full md:w-1/2">
<img class="h-[450px] md:h-[600px]" src="/image/wholesale-printed-apparel.jpg" alt="wholesale printed apparel">
</li></transition>
</ul>
<div class="w-full text-center my-14"><NuxtLink class="jbttn jbttn-pink" to="/start-wholesale-printed-apparel">Get a Quote</NuxtLink></div>
</section>


<section class="">
<div class="background-descend">
<div class="pt-80 md:pt-20 mx-14">
<h2 class="md:-mb-10">How Do I Get Started?</h2>
<ul class="flex flex-col md:flex-row gap-4">
<li class="w-full md:w-1/3">
<h5 class="font-bold text-4xl text-jlav">01</h5>
<h3 class="uppercase text-lg font-bold">Submit Your Design</h3>
<p>Send us your design as a jpeg or enter a description to our online form.</p>
</li>
<li class="w-full md:w-1/3 md:mt-14">
<h5 class="font-bold text-4xl text-jlav">02</h5>
<h3 class="uppercase text-lg font-bold">Select Garments</h3>
<p>Choose garment options including styles, sizes and colors.</p>
</li>
<li class="w-full md:w-1/3 md:mt-28">
<h5 class="font-bold text-4xl text-jlav">03</h5>
<h3 class="uppercase text-lg font-bold">Get a Quote</h3>
<p>We will give you a quote based on your design, quantity and apparel.</p>
</li>
</ul>
</div>
</div>
<div class="background-descend-2">&nbsp;</div>
</section>


<section class="jsection">
<h2 class="">Let us Create...</h2>
<ul class="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto">

<li class="w-full md:w-1/3">
<h4>Logos</h4>
<img class="" src="/image/wholesale-transfers.jpg" alt="custom rhinestone transfers">
<p class="font-left">Nearly any logo or design can be transformed into a rhinestone design for application to garments.</p>
</li>

<li class="w-full md:w-1/3">
<h4>Letters & Symbols</h4>
<img class="" src="/image/rhinestone-letters.jpg" alt="custom rhinestone letters">
<p class="font-left">Use our standard letters and symbols to design online your perfect garment.</p>
</li>

<li class="w-full md:w-1/3">
<h4>Patterns</h4>
<img class="" src="/image/rhinestone-patterns.jpg" alt="custom rhinestone patterns">
<p class="font-left">We can embellish garments with a custom pattern of rhinestones to add sparkle. </p>
</li>

</ul>
</section>

<section class="section pad-40t-40b">

<div class="background-ltlavender">
<ul class="flex flex-col md:flex-row">
<li class="md:w-1/2 p-12">
<h2 class="dancing-script">Our Garments</h2>
<p>tbd</p>
<img src="/image/your-garments.png" alt="shirts, hoodies and more garments"/></li>
<li class="bg-jlav md:w-1/2 p-12">
<h2 class="text-white">...or Yours</h2>
<p>tbd</p>
<img src="/image/your-garments.png" alt="shirts, hoodies and more garments"/></li>

</ul>
</div>
</section>

<section class="jsection-full bg-jlavlt p-10">
<h2 class="">Wholesale Advantages</h2>
<ul class="grid grid-cols-1 md:grid-cols-2 gap-6">
<li class="order-1">
<h3 class="">Large Volume Discounts</h3>
<p>Customers can pay directly for their orders online or you can collect payment and pay as a group. Set your sales price and we will pay you the mark-up.</p>
</li>
<li class="order-2"><img src="/image/icon-quantity.png" alt="simple ordering for your custom online shop"></li>
<li class="order-4">
<h3 class="">Perfect Designs</h3>
<p>Stop taking orders! Use our site to collect orders. Your group members select sizes, colors and garment styles online.</p>
</li>
<li class="order-3"><img src="/image/icon-speed.png" alt="group or drop shipping options for your custom shop"></li>
<li class="order-5">
<h3 class="">Great Service</h3>
<p>We design and produce all our wholesale designs in the USA and have a flexible system that allows us to deliver exactly what you need.</p>
</li>
<li class="order-6"><img src="/image/icon-made-in-usa.png" alt="individual or group payment options for your custom apparel products"></li>

</ul>
</section>

<section class="jsection mb-14">
<ul class="flex flex-col-reverse md:flex-row gap-5 max-w-6xl mx-auto">
<li class="w-full md:w-1/2 flex flex-col">
<h2 class="">Get in Touch</h2>
<p class="">More questions? We love to educate our customers. Our goal is to deliver awesome custom products for your group, team or organization.</p>
<div class="w-full taxt-center my-14"><NuxtLink class="jbttn jbttn-pink" to="/contact">Contact</NuxtLink></div>
</li>
<li class="w-full md:w-1/2"><img class="image-home-contact" src="/image/contact.png" alt="contact for Soft Goodies"></li>
</ul>
</section>

    </div>
</template>

<script setup>

useHead( {
    title: "Wholesale Printed Shirts and Clothing - Fast, Easy and Save",
    meta: [
        {name: 'description', content: 'Wholesale custom printed shirts and clothing for Groups, Teams, Companies and Everyone'}
    ]
})

</script>

<style>


.offscreen-enter-from {
    transform: translateX(300px);
    opacity: 0;
}

.offscreen-enter-to {
    transform: translateX(0);
    opacity: 1;
}

.offscreen-enter-active {
    transition: all .5s ease;
}

</style>