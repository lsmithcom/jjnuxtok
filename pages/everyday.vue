<template>
    <div>
    
<section class="relative">
<img class="image-banner desktop" src="/image/banner-everyday.jpg" alt="everyday rhinestone apparel"><img class="md:hidden" src="/image/banner-everyday-mobile.jpg" alt="everyday rhinestone apparel">
<div class="absolute top-0 right-0 main-title-right"><h1 class="text-black leading-24 text-[calc(2.4vw+2rem)]">Live<br />Active</h1>
</div>
</section>

<div class="">
<h2 class="">Everyday Categories</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 grid-40-60">
<div class="row-span-2 relative">
<NuxtLink to="/rhinestone-shirts">
<img class="object-cover h-full" src="/image/category-everyday-shirts.jpg" alt="everyday rhinestone shirts" >
<div class="absolute left-5 top-0"><h3 class="">Tops & Layers</h3></div>
</NuxtLink>
</div>
<div class="relative">
<NuxtLink to="/rhinestone-sweats">
<img class="object-cover h-full w-full" src="/image/category-everyday-comfy.jpg" alt="everyday layers" >
<div class="absolute left-5 top-0"><h3 class="">Comfy</h3></div>
</NuxtLink>
</div>
<div class="relative">
<NuxtLink to="/rhinestone-activewear">
<img class="object-cover h-full w-full" src="/image/category-everyday-activewear.jpg" alt="everyday bottoms" >
<div class="absolute left-5 top-0"><h3 class="">Active</h3></div>
</NuxtLink>
</div>
</div>
</div>


<section class="jsection">
<h2 class="">Design Themes</h2>
<ul class="grid grid-cols-1 md:grid-cols-5 gap-6">
<li>
<NuxtLink to="/peace-sign-shirts"><img src="/image/everyday-category-peace-sign.jpg" alt="peace sign shirts">
<h4>Peace Sign</h4></NuxtLink>
</li>
<li>
<NuxtLink to="/cross-shirts"><img src="/image/everyday-category-cross.jpg" alt="cross shirts">
<h4>Cross</h4></NuxtLink>
</li>
<li>
<NuxtLink to="/patriotic-shirts"><img src="/image/everyday-category-patriotic.jpg" alt="patriotic shirts">
<h4>Patriotic</h4></NuxtLink>
</li>
<li>
<NuxtLink to="/breast-cancer-shirts"><img src="/image/everyday-category-breast-cancer.jpg" alt="breast cancer shirts">
<h4>Breast Cancer</h4></NuxtLink>
</li>
<li>
<NuxtLink to="/retro-shirts"><img src="/image/everyday-category-retro.jpg" alt="retro shirts">
<h4>Retro</h4></NuxtLink>
</li>
</ul>
</section>

<section class="section pad-20 mwidth-1200">
<ul class="li-flex banner-holder height-450 divide-60-40">
<li class="card-content">
<h2 class="center headline-section">Your Everyday Bling Personality</h2>
<p class="content-paragraph" >Do you have a sparkling personality or a dazzlingly bright attitude toward life?  Rhinestone embellishments are not only for formal events and ocassions.  Bring your bling style to everyday with embellished activewear, layered clothing and comfy and soft loungewear.  Everyday is your day to be sparkling.<br /><br /><span class="signature">- Just Jen</span></p>
</li>
<li class="card-deals position-relative">

<img src="https://justjen.net/pub/media/catalog/product/placeholder/default/test.jpg">

<div class="position-deals">
<div class="price-circle">$12</div>
<div class="hot-deals">Hot Deals<span class="punch">!</span></div>
<div class="next-deal">Next Deal >></div>
</div>
</li>
</ul>
</section> 
    </div>
</template>

<script setup>

useHead( {
    title: "Clothing for Everyday - Layered Shirts, Bottoms and Activewear",
    meta: [
        {name: 'description', content: 'Our everyday collection of shirts, bottoms and activewear.  Embellished rhinestone designs perfect for layering, or making a dazzling impression.'}
    ]
})

</script>