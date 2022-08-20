<script setup lang="ts">
import { useThemeStore } from '~/store/theme'

const themeStore = useThemeStore()
</script>

<template>
  <main>
    <PageTitle title="My Shelf" />
    <Link target="_self" link="/blog/123" :color="themeStore.theme">
      Lien 1
    </Link>
  </main>
</template>
