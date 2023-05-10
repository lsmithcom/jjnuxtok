<template>
    <div>

<section class="jsection-full bg-jpinklt">
<div class="wrapper-flex column search center">

<h2 class="">Search for a Public Shop</h2>
<p class="text-center">Enter a keyword to seach for a specific shop.</p>

<ul class="flex flex-row max-w-xl mx-auto justify-center items-center">
	<li class="w-1/2 mt-4"><input type="text" name="search" value="type here" class="mwidth-350" /></li>
	<li class="w-1/2"><button class="jbttn jbttn-pink">Search</button></li>	
</ul>
</div>
</section>


<section class="jsection mb-14">

<div class="">Sort by:<span> Popular</span></div>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div v-for="custshop in custshops.findCustshopByVisibility.data">
<CustshopCard :custshop="custshop" />
</div>
  </div>


</section>
    </div>
</template>

<script setup>

useHead( {
    title: "Search Online Customer Shops for the Perfect Branded Apparel",
    meta: [
        {name: 'description', content: 'Search through the public online customer shops of leading brands, groups and organizations that feature branded logowear on Just Jen.'}
    ]
})

const query = gql`
query {
findCustshopByVisibility (visibility: "public") {
	data {
	  url
      name
      description
      image
      imagealt
		}
	}
}
`
const { data: custshops } = await useAsyncQuery(query)

</script>