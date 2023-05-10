<template>
<div>

<section class="mx-8 mb-14">
      <h2 class="mb-10">Checkout</h2>

<div class="flex flex-col-reverse md:flex-row">
<div class="w-full md:w-8/12 pr-6">

<h4 class="text-left mt-0">Contact</h4>
<div class="flex flex-row"><input class="w-1/2 mr-4 mt-4 py-3 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="email">
<input class="w-1/2 mt-4 py-3 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="Phone"></div>

<div class="mt-6 text-lg">Create an account to use in future</div>

<h4 class="text-left">Billing address</h4>
<div class="flex flex-row"><input class="w-1/2 mr-4 mt-4 py-3 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="First Name">
<input class="w-1/2 mt-4 py-3 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="Last Name"></div>

<div class="flex flex-row"><input class="w-1/2 mr-4 mt-8 py-3 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="Address">
<input class="w-1/2 mt-8 py-3 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="Address 2"></div>

<div><input class="w-5/12 mr-4 mt-8 py-3 px-8 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" name="" id="" placeholder="City">
<select class="w-1/4 mr-4 mt-8 py-3 px-8 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" name="" id="" placeholder="State">
                    <option value="1"></option>
                    <option value="2">United States</option>
                    <option value="3">Spain</option>
                    <option value="4">Poland</option>
</select>
<input class="w-1/4 mt-4 py-3 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="Zip">
                </div>
                <div class="mt-6 text-lg">Shipping address is different than billing address</div>

                <h4 class="text-left">Payment</h4>
                <div class="flex flex-row"><input class="w-1/2 mr-4 mt-4 py-3 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="Name on card">

               <input class="w-1/2 mt-4 py-3 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="Credit card number"></div>
                  <div class="flex flex-row"><input class="w-1/4 mr-4 mt-4 mb-4 py-3 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="Expiration">
                    <input class="w-1/4 mr-4 mt-4 mb-4 py-3 px-4 border border-gray-400 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="CVV"></div>

                <div class="mt-6 text-lg mb-14">I understand and agree to the terms of use.</div>
                <NuxtLink class="block mx-auto w-3/5 py-4 bg-jlav hover:bg-orange-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200" to="#">Place Order</NuxtLink>
  </div>
   
  <div class="w-full md:w-4/12">

    <div class="mb-12 p-8 bg-jlavpale">
    <div class="flex flex-row gap-2 border-b border-gray-200 mt-6">
        <div class="w-1/4"><img class="h-full object-contain" src="yofte-assets/images/waterbottle.png" alt="" /></div> 
        <div class="w-1/2">
            <h3 class="mb-2 text-xl font-bold text-left mt-0">Bling Bride T-shirt</h3>
                    <p class="text-base">Style: Fitted Shirt</p>
                    <p class="text-base">Size: Small</p>
                    <p class="text-base">Color: Red</p>
                    <p class="text-base">Crystal: Amethyst</p>  
        </div>
        <div class="w-1/4">
            <p class="text-lg font-heading">$29.89</p>
            <div class="inline-flex items-center px-4 font-semibold font-heading text-gray-500 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                  <button class="py-2 hover:text-gray-700">
                    <svg width="12" height="2" viewbox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.35"><rect x="12" width="2" height="12" transform="rotate(90 12 0)" fill="currentColor"></rect></g></svg>
                  </button>
                  <input class="w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md" type="number" placeholder="1">
                  <button class="py-2 hover:text-gray-700">
                    <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.35"><rect x="5" width="2" height="12" fill="currentColor"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="currentColor"></rect></g></svg>
                  </button>
                </div>
        </div>
    </div>

    <div class="flex flex-row gap-2 border-b border-gray-200 mt-6">
        <div class="w-1/4"><img class="h-full object-contain" src="yofte-assets/images/waterbottle.png" alt="" /></div> 
        <div class="w-1/2">
            <h3 class="mb-2 text-xl font-bold text-left mt-0">Bling Bride T-shirt</h3>
                    <p class="text-base">Style: Fitted Shirt</p>
                    <p class="text-base">Size: Small</p>
                    <p class="text-base">Color: Red</p>
                    <p class="text-base">Crystal: Amethyst</p>  
        </div>
        <div class="w-1/4">
            <p class="text-lg font-heading">$29.89</p>
            <div class="inline-flex items-center px-4 font-semibold font-heading text-gray-500 bg-white border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                  <button class="py-2 hover:text-gray-700">
                    <svg width="12" height="2" viewbox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.35"><rect x="12" width="2" height="12" transform="rotate(90 12 0)" fill="currentColor"></rect></g></svg>
                  </button>
                  <input class="w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md" type="number" placeholder="1">
                  <button class="py-2 hover:text-gray-700">
                    <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.35"><rect x="5" width="2" height="12" fill="currentColor"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="currentColor"></rect></g></svg>
                  </button>
                </div>
        </div>
    </div>


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
            <span class="inline-block mb-4 font-medium">Apply discount code:</span>
            <div class="flex mb-12 flex-wrap lg:flex-nowrap items-center">
              <input class="inline-block mb-4 md:mb-0 mr-4 px-4 py-4 text-grey-100 font-bold font-heading border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="SUMMER30X">
              <a class="inline-block mb-4 md:mb-0 px-7 py-4 text-white font-bold font-heading uppercase bg-gray-200 rounded-md" href="#">Apply</a>
            </div>

          </div>
      </div>
  </div>

</section>

</div>
</template>