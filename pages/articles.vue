<template>
    <div>

<section class="jsection flex flex-col md:flex-row">
<div class="w-full md:w-3/4 md:mr-6">

<h1 class="md:text-left mt-0 mb-6">{{story.findStoryByUrl.title}}</h1>

<div class="block">
<img class="float-left relative mr-5" :alt="story.findStoryByUrl.imagealt" :src="`/image/` + story.findStoryByUrl.image" />

<p>{{story.findStoryByUrl.body}}</p>

</div>
</div>

<div class="w-full md:w-1/4">

<div class="links-right">
<h3 class="text-left">Bridal Articles</h3>
<ul class="leading-loose">
<li><NuxtLink to="/bridal-party-gift-giving-etiquette">Bridal Party Gift Giving Etiquette</NuxtLink></li>
<li><NuxtLink to="/perfect-wedding-dress">The Perfect Wedding Dress</NuxtLink></li>
<li><NuxtLink to="/honeymoon-of-your-dreams">Honeymoon of Your Dreams</NuxtLink></li>
<li><NuxtLink to="/just-married-now-what">Just Married, Now What?</NuxtLink></li>
</ul>
</div>
</div>

</section>

    </div>
</template>

<script setup>

const { id } = useRoute().params

const query = gql`
query findStoryByUrl {
  findStoryByUrl (url: "wedding-ceremony") {
    url
    _id
    title
    body
    date
    author
    image
    imagealt
  }
}
`
const { data: story } = await useAsyncQuery(query)

</script>
