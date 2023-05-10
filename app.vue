<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// get token from runtime config
const faunaStuff = useRuntimeConfig();

// init cookie for github token
const cookie = useCookie("fauna-token");

// set cookie value if not set
cookie.value = cookie.value || faunaStuff;

</script>