<script setup lang="ts">
const user = await getCurrentUser()
await navigateTo(user ? '/home' : '/login', { replace: true })
</script>

<template>
  
</template>