<template>
    <div>

        <Head>
            <Title>{{ gallery.findGallerybyUrl.metatitle}}</Title>
            <Meta name="description" :content="gallery.findGallerybyUrl.metadesc" />           
        </Head>

        <div class="jsection xl:max-w-7xl xl:mx-auto">
<div class="float-left mr-10"><img :alt="gallery.findGallerybyUrl.imageAlt" :src="`/image/` + gallery.findGallerybyUrl.image" /><br /> back to <NuxtLink title="custom rhinestone transfers" to="/custom-rhinestone-transfers">custom rhinestone transfers</NuxtLink></div>
<div class=""><h1 class="text-left text-4xl">{{ gallery.findGallerybyUrl.title}}</h1></div>
<div class="custRight">
<p class=""><span class="text-black font-bold mr-2">Company:</span>{{ gallery.findGallerybyUrl.group }}</p>
<p class=""><span class="text-black font-bold mr-2">Description:</span> {{ gallery.findGallerybyUrl.description }}</p>
<p class=""><span class="text-black font-bold mr-2">Purpose:</span>{{ gallery.findGallerybyUrl.purpose }}</p>
<p class=""><span class="text-black font-bold mr-2">Design Application:</span>{{ gallery.findGallerybyUrl.application }}</p>
<p class=""><span class="text-black font-bold mr-2">Typestyle Application:</span> {{ gallery.findGallerybyUrl.application }}</p>
<p class="c"><span class="text-black font-bold mr-2">Rhinestone:</span>{{ gallery.findGallerybyUrl.rhinestone }}</p>
</div>
</div>

</div>
</template>



<script lang="ts" setup>

const { id } = useRoute().params

const query = gql`
query findGalleryByUrl {
  findGallerybyUrl (url: "${id}") {
      image
      imagealt
      rhinestone
      typestyle
      group
      timing
      purpose
      url
      title
      _id
      metatitle
      metadesc
  }
}
`
const { data: gallery } = await useAsyncQuery(query)

</script>