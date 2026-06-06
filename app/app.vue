<script setup lang="ts">
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: { lang: 'es' }
})

useSeoMeta({
  title: 'Work Hours',
  description: 'Gestiona y registra tus horas de trabajo.',
  ogTitle: 'Work Hours',
  ogDescription: 'Gestiona y registra tus horas de trabajo.'
})
</script>

<template>
  <UApp>
    <NuxtLayout />
  </UApp>
</template>
