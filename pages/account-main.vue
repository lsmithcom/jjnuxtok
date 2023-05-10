<template>
<div>

<section class="mb-14">

<h2 class="text-left mt-0">My Account</h2>
<div class="flex">

  <div class="w-1/2">
    <span class="block">Lawrence Smith</span>
    <span class="block">email: joe@aol.com</span>
    <span class="block">310-804-3243</span>
    <span class="block italic text-base"><NuxtLink to="/account-settings">edit</NuxtLink></span>        
</div>
<div class="w-1/2">
  <span class="block"> &nbsp</span>
    <span class="block">username: lsmithcom</span>
    <span class="block italic text-base">password: <NuxtLink to="/account-settings">edit</NuxtLink></span>        
</div>

</div>


<h4 class="text-left">Addresses:</h4>

<div class="flex flex-col md:flex-row border border-gray-200 p-4 gap-4 rounded text-base">

<div class="w-full md:w-1/2 border border-gray-200 p-4 rounded">
<h5 class="text-left m-0 p-0 text-sm font-semibold uppercase">Shipping</h5>
<p>Address<br/>
City, State Zip</p>
<span class="block italic text-base"><NuxtLink to="/account-settings">edit</NuxtLink></span>  
</div>

<div class="w-full md:w-1/2 border border-gray-200 p-4 rounded">
<h5 class="text-left m-0 p-0 text-sm font-semibold uppercase">Billing</h5>
<p>Address<br/>
City, State Zip</p>
<span class="block italic text-base"><NuxtLink to="/account-settings">edit</NuxtLink></span>  
</div>

</div>

<h4 class="text-left">Recent Orders:</h4>

<div class="grid grid-cols-7 text-center items-center text-white bg-agrey text-sm font-semibold border-r border-white py-3 grid-7-a"> 
    <div class="border-r border-white">ID</div>
    <div class="border-r border-white">Date</div>
    <div class="border-r border-white">Name</div>
    <div class="border-r border-white">Status</div>
    <div class="border-r border-white">Ship Carrier</div>
    <div class="border-r border-white">Total</div>   
    <div class="">edit</div> 
  </div>

    <div class="grid grid-cols-7 text-center items-center gridded text-agrey text-base grid-7-a">  
    <div class="">12345</div>
    <div class="">12/22/22<img src="" /></div>
    <div class="">Joe Blow</div>
    <div class="">shipped</div>
    <div class="">Fedex</div>
    <div class="">19.99</div>    
    <div class="">edit</div>      
    <div class="">12345</div>
    <div class="">12/22/22<img src="" /></div>
    <div class="">Joe Blow</div>
    <div class="">production</div>
    <div class="">UPS</div>
    <div class="">19.99</div> 
    <div class="">edit</div>         
    <div class="">12345</div>
    <div class="">12/22/22<img src="" /></div>
    <div class="">Joe Blow</div>
    <div class="">shipped</div>
    <div class="">USPS</div>
    <div class="">19.99</div>
    <div class="">edit</div>           
    <div class="">12345</div>
    <div class="">12/22/22<img src="" /></div>
    <div class="">Joe Blow</div>
    <div class="">on hold</div>
    <div class="">UPS</div>
    <div class="">19.99</div>
    <div class="">edit</div>          
  </div>


<h4 class="text-left">Wishlist:</h4>
<div class="border border-gray-200 rounded">
<div class="grid grid-cols-5 text-center items-center">

<div class="">
<img class="" src="/image/tshirt-bride.jpg" />
<div class="">Bride T-shirt</div>
<div class="">$19.99</div>
</div> 

<div class="">
<img class="" src="/image/tshirt-bride.jpg" />
<div class="">Bride T-shirt</div>
<div class="">$19.99</div>
</div> 

<div class="">
<img class="" src="/image/tshirt-bride.jpg" />
<div class="">Bride T-shirt</div>
<div class="">$19.99</div>
</div> 

<div class="">
<img class="" src="/image/tshirt-bride.jpg" />
<div class="">Bride T-shirt</div>
<div class="">$19.99</div>
</div> 

<div class="">
<img class="" src="/image/tshirt-bride.jpg" />
<div class="">Bride T-shirt</div>
<div class="">$19.99</div>
</div> 

</div>

</div>


<h4 class="text-left">Reviews:</h4>
<div class="grid grid-cols-5 text-center items-center text-white bg-agrey text-sm font-semibold border-r border-white py-3 grid-5-a">
    <div class="border-r border-white">ID</div>
    <div class="border-r border-white">Date</div>
    <div class="border-r border-white">Comment</div>
    <div class="border-r border-white">Rating</div>
    <div class="border-r border-white">Status</div>
  </div>

    <div class="grid grid-cols-5 text-center items-center gridded text-agrey text-base grid-5-a">  
    <div class="h-4">12345</div>
    <div class="">12/22/22<img src="" /></div>
    <div class="">Good but not great...</div>
    <div class="">4 star</div>
    <div class="">Approved</div>       
    <div class="h-4">12345</div>
    <div class="">12/22/22<img src="" /></div>
    <div class="">Good but not great...</div>
    <div class="">4 star</div>
    <div class="">Pending</div>        
    <div class="h-4">12345</div>
    <div class="">12/22/22<img src="" /></div>
    <div class="">Good but not great...</div>
    <div class="">4 star</div>
    <div class="">Approved</div>        
    <div class="h-4">12345</div>
    <div class="">12/22/22<img src="" /></div>
    <div class="">Good but not great...</div>
    <div class="">4 star</div>
    <div class="">Pending</div>      
  </div>

</section>



</div>
</template>


<script setup>

definePageMeta({
  layout: "custaccount",
})

useHead( {
    title: "Just Jen.com User Account - Summary Screen for User Information",
    meta: [
        {name: 'description', content: 'Summary Screen for JustJen.com User Accounts'}
    ]
})

</script>