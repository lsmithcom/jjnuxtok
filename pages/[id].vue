
<template>
    <div>

        <Head>
            <Title>{{ products.findProductByUrl.metatitle }}</Title>
            <Meta name="description" :content="products.findProductByUrl.metadesc" />           
        </Head>

        
<div class="jsection">
<div class="block md:inline md:float-right md:w-4/6 md:pl-4">
 <h1 class="text-left my-0 py-0 text-4xl font-medium"> {{ products.findProductByUrl.name }}</h1>
    <div class="text-jlav text-2xl font-semibold mt-4">$ {{  products.findProductByUrl.price }}</div>
</div>

<div class="block md:inline md:float-left md:w-2/6">
 <img :src="`/image/` + products.findProductByUrl.image" :alt="products.findProductByUrl.imagealt" />
</div>

<div class="block md:inline md:float-right md:w-4/6 md:pl-4 mt-2">
<p>{{  products.findProductByUrl.description }}</p>

<div class="">
<div class="font-semibold text-black my-6">Choose Shirt Style</div>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center text-sm">

<div class="jobox">
<img src="/image/style-shirt-fitted-short-sleeve.jpg" />
<p class="pt-4">Fitted Short Sleeve</p>
</div>

<div class="jobox">
<img src="/image/style-shirt-fitted-long-sleeve.jpg" />
<p class="pt-4">Fitted Long Sleeve</p>
</div>

<div class="jobox">
<img src="/image/style-shirt-raglan.jpg" class="" alt="" />
<p class="pt-4">Raglan</p>
</div>

<div class="jobox">
<img src="/image/style-shirt-cotton-spandex-short-sleeve.jpg" class="" alt="" />
<p class="pt-4">Spandex Short Sleeve</p>
</div>

<div class="jobox">
<img src="/image/style-shirt-cotton-spandex-long-sleeve.jpg" class="" alt="" />
<p class="pt-4">Cotton P Short Sleeve</p>
</div>

<div class="jobox">
<img src="/image/style-shirt-unisex-short-sleeve.jpg" class="" alt="" />
<p class="pt-4">Unisex Short Sleeve</p>
</div>

<div class="jobox">
<img src="/image/style-shirt-flowy-short-sleeve.jpg" class="" alt="" />
<p class="pt-4">FLowy Short Sleeve</p>
</div>

<div class="jobox">
<img src="/image/style-shirt-flowy-long-sleeve.jpg" class="" alt="" />
<p class="pt-4">FLowy Long Sleeve</p>
</div>

</div>

<div class="font-semibold text-black my-4">Choose Shirt Size</div>

<div class="grid grid-cols-8 gap-6">

<div class="jobox flex">Sm</div>
<div class="jobox flex">Med</div>
<div class="jobox flex">Lg</div>
<div class="jobox flex">XL</div>
<div class="jobox flex">2XL</div>
<div class="jobox flex">3XL</div>

</div>



<div class="font-semibold text-black my-4">Choose Shirt Color</div>

<div class="grid grid-cols-8 gap-4 text-base">

<div class="flex flex-col items-center">
<div class="bg-black w-[30px] h-[30px] mb-2 rounded"></div>
<p>Black</p>
</div>

<div class="flex flex-col items-center">
<div class="border-black border-2 w-[30px] h-[30px] mb-2 rounded"></div>
<p>White</p>
</div>

<div class="flex flex-col items-center">
<div class="bg-jred w-[30px] h-[30px] mb-2 rounded"></div>
<p>Red</p>
</div>

<div class="flex flex-col items-center">
<div class="bg-brown w-[30px] h-[30px] mb-2 rounded"></div>
<p>Brown</p>
</div>

<div class="flex flex-col items-center">
<div class="bg-jlav w-[30px] h-[30px] mb-2 rounded"></div>
<p>Lavendar</p>
</div>

<div class="flex flex-col items-center">
<div class="bg-jfuchsia w-[30px] h-[30px] mb-2 rounded"></div>
<p>Fuchsia</p>
</div>

</div>


<div class="font-semibold text-black my-4">Choose Rhinestone Color</div>

<div class="grid grid-cols-6 md:grid-cols-8 gap-4 text-base">

<div class="">
<img src="/image/rhinestone-crystal.jpg" class="" alt="" />
<p>Crystal</p>
</div>

<div class="">
<img src="/image/rhinestone-amethyst.jpg" class="" alt="" />
<p>Amethyst</p>
</div>

<div class="">
<img src="/image/rhinestone-amethyst.jpg" class="" alt="" />
<p>Citrine</p>
</div>

<div class="">
<img src="/image/rhinestone-amethyst.jpg" class="" alt="" />
<p>Dorado</p>
</div>

<div class="">
<img src="/image/rhinestone-amethyst.jpg" class="" alt="" />
<p>Emerald</p>
</div>

<div class="">
<img src="/image/rhinestone-amethyst.jpg" class="" alt="" />
<p>Fuchsia</p>
</div>

<div class="">
<img src="/image/rhinestone-amethyst.jpg" class="" alt="" />
<p>Hyacinth</p>
</div>

<div class="">
<img src="/image/rhinestone-amethyst.jpg" class="" alt="" />
<p>Jet</p>
</div>

</div>


<div class="flex flex-row justify-center items-center mb-14 mt-14">
<div class="w-10">Qty:</div>
<div class="mx-6 inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                  <button class="py-0 hover:text-gray-700">

                  </button>
                  <input class="w-8 m-0 py-2 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md" type="number" placeholder="1">
                  <button class="py-0 hover:text-gray-700">
                    
                  </button>
                </div>
<div class=""><a class="jbttn jbttn-lav" href="/contact-us">Add to Cart</a></div>
</div>

</div>
</div>

<div class="m-4 block clear-both p-10 border border-gray-300 rounded">
    <ul class="grid grid-cols-3 gap-6 max-w-md">
        <li class="border-b-2 border-slate-400">Description</li>
        <li class="border-b-2 border-jlav">Reviews</li>
        <li class="border-b-2 border-slate-400">Styles & Sizes</li>        
    </ul>

<div class="">
  
  <div v-for="review in products.findProductByUrl.prodrev.data" class="mt-4">
    <div class="">{{  review.rating }}</div>
    <div><span class="font-bold">{{  review.title }}</span><span class="italic text-[16px]"> by {{ review.screenname }}</span></div>
    <div>{{ review.comment}}</div>

  </div>

</div>
</div>

<div class="jsection block clear-both">
<h2 class="">You Might Also Like</h2>


<div v-if=" products.findProductByUrl.relsku.data[0].relatesku.data[0].name.length" class="grid grid-cols-5 gap-6">

  <div v-for="relation in products.findProductByUrl.relsku.data[0].relatesku.data" >

  <div >
  <img :src="`/image/` + relation.image" class="" :alt="relation.imagealt" />
  <p class="leading-8 text-[18px] mt-2 text-center">{{relation.name}}</p>
  <p class="leading-3 mt-0 text-[16px] font-black text-center">{{relation.price}}</p>
  </div> 

  </div>

</div>



</div>


</div>

    </div>
</template>

<script lang="ts" setup>

const { id } = useRoute().params

const query = gql`
query findProductByUrl {
  findProductByUrl (url: "${id}") {
      _id
      name
      description
      descshort
      image
      imagealt
      price
      metatitle
      metadesc
      prodrev {
        data {
          comment
          rating
          title
          screenname
        }
      }
      relsku {
       data {
        relatesku {
          data {
            name
            price
            image
            imagealt
            url
          }
        }
      }
    }
  }
}
`
const { data: products } = await useAsyncQuery(query)

</script>

<style>

.style-menu > div {
    width:  calc(25% - 10px);
    border:  1px solid #d3d3d3;
    border-radius:  10px;
    padding:  10px;
    margin:  5px;
    font-size:  16px;
    text-align:  center;
} 
</style>