<script setup lang="ts">
const links = [{ label: "Inicio", icon: "i-lucide-home", to: "/" }];
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/" class="flex items-center gap-2 shrink-0">
        <AppLogo class="h-6 w-auto" />
      </NuxtLink>
    </template>

    <UNavigationMenu :links="links" class="hidden lg:flex" />

    <template #right>
      <UColorModeButton />
    </template>

    <template #panel>
      <UNavigationMenu :links="links" orientation="vertical" class="px-4 py-3" />
    </template>
  </UHeader>
</template>
