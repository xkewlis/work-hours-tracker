<script setup lang="ts">
import { useAuth } from '~/composables/auth/useAuth'

const { t, locale, locales, setLocale } = useI18n()
const { user, isAuthenticated, signOut } = useAuth()

const links = computed(() => [
  { label: t('nav.home'), icon: 'i-lucide-home', to: isAuthenticated.value ? '/home' : '/login' }
])

const localeItems = computed(() =>
  locales.value.map(availableLocale => ({
    label: availableLocale.name ?? availableLocale.code,
    onSelect: () => setLocale(availableLocale.code)
  }))
)

async function handleSignOut() {
  await signOut()
  await navigateTo('/login')
}
</script>

<template>
  <UHeader class="bg-primary/5 dark:bg-primary/10 backdrop-blur-sm shadow-xs" :ui="{ root: 'border-0' }">
    <template #left>
      <NuxtLink :to="isAuthenticated ? '/home' : '/login'" class="flex items-center gap-2 shrink-0">
        <SharedAppLogo class="h-6 w-auto" />
      </NuxtLink>
    </template>

    <UNavigationMenu :links="links" class="hidden lg:flex" />

    <template #right>
      <UDropdownMenu :items="[localeItems]">
        <UButton :label="locale.toUpperCase()" icon="i-lucide-languages" color="neutral" variant="ghost" />
      </UDropdownMenu>

      <UColorModeButton />

      <UButton v-if="!isAuthenticated" to="/login" :label="t('auth.signIn')" color="primary" />

      <UDropdownMenu v-else
        :items="[[{ label: t('auth.signOut'), icon: 'i-lucide-log-out', onSelect: handleSignOut }]]">
        <UAvatar :src="user?.photoURL ?? undefined" :alt="user?.displayName ?? user?.email ?? t('auth.user')" size="sm"
          class="cursor-pointer" />
      </UDropdownMenu>
    </template>

    <template #panel>
      <UNavigationMenu :links="links" orientation="vertical" class="px-4 py-3" />
    </template>
  </UHeader>
</template>
