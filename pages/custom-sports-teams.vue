<template>
    <div>
     
<section class="relative">
<img class="hidden md:block" src="/image/banner-sports-teams.jpg" alt="custom company rhinestone shirts for your group"><img class="md:hidden" src="/image/banner-sports-teams-mobile.jpg" alt="custom company rhinestone shirts for your group">
<div class="absolute w-2/5 left-10vw top-[calc(7vw-20px)]"><h1 class="text-white text-[calc(2vw+1.5rem)]">Dazzling Sports Team Logo Shirts with Bling!</h1>
<p class="font-left text-white"><span class="hidden lg:inline">Be the ultimate fan or sports mom with customized rhinestone sports team shirts. Whether you are looking to translate a sports team emblem or create your own unique statement of support - we make it easy. Browse through our gallery of custom sports logo shirt designs and then fill out our form and get a quote - fast and simple.</span></p>
</div>
</section>

<section class="jsection-both">
<h2 class="">Sports Teams Love Just Jen</h2>
<ul class="flex flex-col md:flex-row mx-auto items-center">
<li class="w-full md:w-1/5"><img  src="/image/logo-spacex-grey.png" alt="mcdonalds is a happy customer"></li>
<li class="w-full md:w-1/5"><img  src="/image/logo-nordstrom-grey.png" alt="nordstrom is a happy customer"></li>
<li class="w-full md:w-1/5"><img  src="/image/logo-kahlua-grey.png" alt="we blinged the kahlua logo"></li>
<li class="w-full md:w-1/5"><img  src="/image/logo-sprint-grey.png" alt="sprint  is a satisfied customer"></li>
<li class="w-full md:w-1/5"><img  src="/image/logo-mcdonalds-grey.png" alt="happy customer mcdonalds"></li>
</ul>
</section>

<section class="py-14 px-8 bg-jorangelt">
<ul class="flex flex-col md:flex-row">
<li class="w-full md:w-1/2">
<img src="/image/icon-simple-order.png" class="image" alt="fast easy customization graphic" />
</li>
<li class="w-full md:w-1/2">
<ul class="">
<li><h4 class="">Fast, Easy Process</h4><div class="jbox w-96 mx-auto"><p>We make it easy to create your own customized rhinestone shirts and tops.  Just enter information on the design and tee styles. </p></div></li>
<li><h4 class="">Your Garment or Ours</h4><div class="jbox w-96 mx-auto"><p>Choose from a variety of our shirt styles, from fitted tees, flowy tops or stretch ribbed beater tank tops.  If you have your own garments, send them to us and we will embellish them with sparkling rhinestone crystals.</p></div></li>
<li><h4 class="">Any Quantity - 1 to 1,000</h4><div class="jbox w-96 mx-auto"><p>We have no minimum quantities required for custom  shirt orders, but wholesale customers do receive substantial savings for large quantity orders.  So whether you want a single shirt or a thousand, we can provide you a great deal.</p></div></li>
<li><h4 class="">Limitless Creativity</h4><div class="jbox w-96 mx-auto"><p>Get creative with 20 rhinestone crystal colors, 5 tee shirt colors, 6 shirt styles and the flexibility to create a unique custom shirt design.</p></div></li>
<li><h4 class="">Superior Quality</h4><div class="jbox w-96 mx-auto"><p>Just Jen is the only application center in the United States approved and recommended by Swarovski, an assurance of quality and service for nearly two decades.</p></div></li>
</ul>
</li>
</ul>
<div class="text-center w-full mt-24"><NuxtLink to="/sell" class="jbttn jbttn-orange" alt="set up a custom online shop">Get a Shop</NuxtLink></div>
</section>

<section class="mx-4">

<div class="">

<div class="float-right">more >></div>

<h2 class="">Custom Company Gallery</h2>

<ul class="grid grid-cols-2 md:grid-cols-4 gap-4">
	<DesignCard :gallery="gallery"/>
</ul>

</div>

</section>

<section class="jsection-full background-slant-30-40 bg-jorangelt">
<ul class="flex flex-col md:flex-row max-w-7xl px-14 pt-[30px] pb-[170px]">
<li class="w-full md:w-1/2"><img class="max-w-[450px]" src="/image/image-shop-intro.png" alt="tbd"/></li>
<li class="w-full md:w-1/2">
<h2 class="text-white">Create Your Own Sports Team Shop</h2>
<h4 class="">The Easy Way for a Group to Order</h4>
<p class="text-white">End the hassles of collecting sizes/colors and payment. Use our site to collect orders directly from sports team fans. We can ship direct to customers or ship your fan wear as a group to save money.</p>
<div class="text-center w-full mt-24"><NuxtLink to="/sell" class="jbttn jbttn-orange" alt="set up a custom online shop">Get a Shop</NuxtLink></div>
</li>
</ul>
</section>   

</div>
</template>

<script setup>

useHead( {
    title: "Design Your Own Custom Rhinestone Sports Team Shirts",
    meta: [
        {name: 'description', content: 'Design the Perfect Custom Sports and Team Shirts and Clothing in Sparking Rhinestones or Printing'}
    ]
})

const query = gql`
query {
	findGalleryByTheme (theme: "sports") {
		data {
			url
			image
			imagealt
		}
	}
}
`
const { data: gallery } = await useAsyncQuery(query)

</script>