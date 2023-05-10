<template>
    <div>

<div class="jsection-full bg-jpinklt">
<h1 class="text-center">Contact</h1>
</div>  

<div class="flex flex-col md:flex-row">
<div class="w-full md:w-1/2">
  <div class="flex flex-col h-full">

    <div class="max-w-xl mx-auto my-14 ">
      <div class="mb-8 md:max-w-md block">
            <p class="mb-6 text-sm text-jlav font-bold uppercase">Contact us</p>
            <h2 class="text-4xl font-bold leading-none text-left">Drop Us a Line.</h2>
          </div>

          <div class="block">
            <p class="mb-4 text-sm text-gray-400 font-bold uppercase tracking-px">Address</p>
            <ul class="mb-8">
              <li class="text-xl"><p>904 Silver Spur Road, #242</p></li>
              <li class="text-xl">Rolling Hills Estates, CA 90274</li>
            </ul>           
             <p class="mb-4 text-sm text-gray-400 font-bold uppercase tracking-px">Hours</p>
            <ul class="mb-8">
              <li class="text-xl font-semibold leading-normal">M - F, 9 - 5</li>
            </ul>
            <p class="mb-4 text-sm text-gray-400 font-bold uppercase tracking-px">Phone</p>
            <ul>
              <li class="text-xl font-semibold leading-normal">+1 310 539 6000</li>
            </ul>
          </div>
        </div>

    </div>



</div>
<div class="w-full md:w-1/2 bg-jlavpale">

  <form class="px-11 pt-8 pb-12 bg-white bg-opacity-80 rounded-4xl shadow-12xl md:max-w-xl mx-auto my-14 w-11/12">
          <label class="block mb-4">
            <p class="mb-2 text-gray-900 font-semibold leading-normal">Name</p>
            <div class="relative">
              <input class="pl-12 pr-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="contactInput3-1" type="text" placeholder="First &amp; last name">
            </div>
          </label>
          <label class="block mb-4">
            <p class="mb-2 text-gray-900 font-semibold leading-normal">Email Address</p>
            <div class="relative">
              <input class="pl-12 pr-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="contactInput3-2" type="text" placeholder="Email address">
            </div>
          </label>
          <label class="block mb-4">
            <p class="mb-2 text-gray-900 font-semibold leading-normal">Phone</p>
            <div class="relative">
              <input class="pl-12 pr-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="contactInput3-2" type="text" placeholder="Phone">
            </div>
          </label>
          <label class="block">
            <p class="mb-2 text-gray-900 font-semibold leading-normal">Message</p>
            <div class="relative">
              <textarea class="mb-6 p-4 px-12 w-full h-48 font-medium text-gray-500 outline-none placeholder-gray-500 border border-gray-300 resize-none rounded-lg focus:ring focus:ring-indigo-300" id="contactInput3-3" placeholder="Write message"></textarea>
              <div class="md:inline-block">
                <button class="py-4 px-9 w-full text-white font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-jlav hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Send Message</button>
              </div>
            </div>
          </label>
        </form>
</div>

</div>



    </div>
</template>

<script setup>

useHead( {
    title: "Contact Form for JustJen.com",
    meta: [
        {name: 'description', content: 'Contact Just Jen for information, quotes and general inquiries.'}
    ]
})

</script>