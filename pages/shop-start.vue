<template>
<div>



<section class="jsection-full bg-jlavpale">

<ul class="mx-14">

<li class="tabIt">
<h1 class="">Start a Shop</h1>
<p>The process for selling apparel with your logo or design on our site is easy and fast.  Check out the steps below and then click the Get Started button to begin the process.</p>
<ul class="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-6xl">

	<li class="md:order-1"><img class="slide" src="/image/shop-1.png"   alt="create shop for your logo and designs"></li>
	<li class="md:order-2">
	<h4 class="start-step">Step 1</h4>
	<h2 class="start-subtitle">Apply for a Shop</h2>
	<p>The first step can be completed in less than 5 minutes.  Just click on the Get Started button and answer a few quick questions and you are on your way.</p>
	</li>
	<li class="md:order-4"><img  class="slide" src="/image/shop-3.png" alt="create shop for your logo and designs"></li>
	<li class="md:order-3">
	<h4 class="start-step">Step 2</h4>
	<h2 class="start-subtitle">Get a Quote on Your Custom Design</h2>
	<p>The next step is to get a quote on your custom design (if you have not already done this).  Go to the Custom section and click on the Get Quote button and upload your graphic, or describe the lettering and we can give you a quote.</p>
	</li>
	<li class="md:order-5"><img src="/image/shop-2.png"  alt="create shop for your logo and designs"></li>
	<li class="md:order-6">
	<h4 class="start-step">Step 3</h4>
	<h2 class="start-subtitle">Launch Your Store and Take Orders</h2>
	<p>Once you are approved for a shop and have received a custom quote on your designs, we will build the product listings and then send you a link to the completed shop.</p>
	</li>
</ul>
</li>


<li class="">
<div class="step-counter">Step 1 of 4</div>
<h2 class="">Will your shop be visible to everyone?</h2>

<div class="border border-gray-300 p-8 rounded max-w-5xl mx-auto">
<ul class="flex flex-col md:flex-row gap-6">
	<li class="w-full md:w-1/2 border border-jlav rounded p-4 bg-white">
		<h4 class="font-semibold">Public Shop</h4>
		<p>A public shop is visible to everyone visiting our site and anyone can order from a public shop.  Most public shops are drop-ship.</p>
	</li>
	<li class="w-full md:w-1/2 border border-jlav rounded p-4 bg-white">
		<h4 class="font-semibold">Private Shop</h4>
		<p>A private shop allows you to restrict who can shop and buy your products.  You privode a user name and pasword to your customers to access a private shop. Private shops are also best for group orders.</p>
	</li>
</ul>
</div>
</li>


<li class="tabIt">
<div class="step-counter">Step 2 of 4</div>
<h2 class="">How Will Customers Order and Ship?</h2>

<div class="border border-gray-300 p-8 rounded max-w-5xl mx-auto">

<ul class="flex flex-col md:flex-row gap-6">
	<li class="w-full md:w-1/3 border border-jlav rounded p-4 bg-white">
		<h4>Drop Ship</h4>
		<p>Drop ship orders are ordered individually, paid for and shipped directly to the customer.  Each order is produced and processed separately, so they arrive based on the date ordered. Since it is less efficient, the cost of drop ship orders is higher, and shipping costs are generally higher.</p>
	</li>
	<li class="w-full md:w-1/3 border border-jlav rounded p-4 bg-white">
		<h4>Group Ship</h4>
		<p>Your customers select the styles/colors/sizes they want and pay individually, but the order is produced together and shipped to one location. You set the ordering deadline for the group shipment.</p>
	</li>
	<li class="w-full md:w-1/3 border border-jlav rounded p-4 bg-white">
		<h4>Group Pay</h4>
		<p>Your group members select the styles/colors/sizes they want, but there is one payment and shipment for the order. This is the easy way to collect sizes & colors, but get full wholesale pricing. You set the ordering deadline for the group shipment.</p>
	</li>
</ul>

</div>
</li>


<li class="tabIt">
<div class="step-counter">Step 3 of 4</div>
<h2 class="">What Quantities Do You Need?</h2>

<div class="border border-gray-300 p-8 rounded max-w-3xl mx-auto bg-white">
<label>How often will you or your customers order?</label>

<ul class="flex flex-row w-full content-between">
 <li><input name="frequency" required="true" type="radio" value="Once" />Once</li>
 <li><input name="frequency" required="true" type="radio" value="couple" />Couple Times a Year</li>
 <li><input name="frequency" required="true" type="radio" value="monthly" />Monthly</li>
 <li><input name="frequency" required="true" type="radio" value="on-going" />On-going</li>
</ul>

<label>What quantity will you order in a year  (best guess)?</label>
<p><input placeholder="Quantity..." oninput="this.className = ''" name="quantity"></p>
</div>
</li>


<li class="tabIt">
<div class="step-counter">Step 4 of 4</div>
<h2 class="form-title">Almost Done.  What is your Contact Info?</h2>
<section class="section form-top">

</section>

<div class="border border-gray-300 p-8 rounded max-w-3xl mx-auto bg-white">

    <p><input placeholder="Name..." oninput="this.className = ''" name="name" class="box-input"></p>
    <p><input placeholder="email..." oninput="this.className = ''" name="email" class="box-input"></p>
    <p><input placeholder="Phone (optional)..." oninput="this.className = ''" name="phone" class="box-input"></p>  
</div>
</li>

</ul>

  <div style="overflow:auto;">
    <div style="float:right;">
      <button type="button" class="bttn bttn-outline" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
      <button type="button" class="bttn bttn-solid-purple"  id="nextBtn" onclick="nextPrev(1)">Next</button>
    </div>
  </div>

  <!-- Circles which indicates the steps of the form: -->
  <div style="text-align:center;margin-top:40px;">
    <span class="step"></span>
    <span class="step"></span>
    <span class="step"></span>
    <span class="step"></span>
  </div>


</section>

</div>
</template>

<style>
.step-counter {
float: right;
margin-top: -10px;
font-size: 18px;
color: #a88dc4;
font-family: 'Lato', sans-serif;
}

.shadow-selected {
box-shadow: 0 0 7px 0 #dea1fe;
}

.slide:onScreen {
animation: 3s 1 alternate slidein;}

</style>
<script setup>

useHead( {
    title: "Create Your Custom Products Shop Online - Get Started",
    meta: [
        {name: 'description', content: 'Get your own custom brand shop fast and easy.  Get started on the set-up process for your brand shop.'}
    ]
})

</script>



