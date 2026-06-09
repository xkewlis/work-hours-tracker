<script setup lang="ts">
definePageMeta({ middleware: 'guest', layout: 'auth' })

const { t, locale, locales, setLocale } = useI18n()

const localeItems = computed(() =>
  locales.value.map(l => ({
    label: l.name ?? l.code,
    onSelect: () => setLocale(l.code)
  }))
)
</script>

<template>
  <div class="relative flex min-h-screen items-center justify-center p-4">
    <div class="absolute top-4 right-4 flex items-center gap-2 rounded-xl bg-white/30 dark:bg-neutral-900/40 backdrop-blur-sm px-2 py-1">
      <UDropdownMenu :items="[localeItems]" :ui="{ content: 'bg-white/60 dark:bg-neutral-900/70 backdrop-blur-md' }">
        <UButton :label="locale.toUpperCase()" icon="i-lucide-languages" color="neutral" variant="ghost" size="sm" class="hover:bg-white/20 dark:hover:bg-white/10" />
      </UDropdownMenu>
      <UColorModeButton size="sm" class="hover:bg-white/20 dark:hover:bg-white/10" />
    </div>

    <div class="w-full max-w-4xl overflow-hidden rounded-2xl shadow-md bg-white/75 dark:bg-neutral-900/90 backdrop-blur-md">
      <div class="grid min-h-130 md:grid-cols-2">
        <div class="flex flex-col items-center justify-center gap-8 bg-violet-100/80 dark:bg-neutral-800/60 p-12">
          <SharedAppLogo class="h-10 w-auto" />
          <p class="max-w-xs text-center text-sm text-muted">
            {{ t('app.description') }}
          </p>
        </div>

        <div class="flex flex-col justify-center gap-8 p-12">
          <div class="flex flex-col gap-1">
            <h1 class="text-2xl font-bold tracking-tight">
              {{ t('auth.login.title') }}
            </h1>
            <p class="text-sm text-muted">
              {{ t('auth.login.subtitle') }}
            </p>
          </div>

          <AuthSocialSignInButton provider="google" />
        </div>
      </div>
    </div>
  </div>
</template>
