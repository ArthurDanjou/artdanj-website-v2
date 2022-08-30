<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
const { getTheme, getTextColor } = useTheme()
</script>

<template>
  <Card width="2">
    <CardLink href="mailto:contact@arthurdanjou.fr">
      <EmailIcon :class="getTextColor()" />
      <h3 class="subtitle">
        Just want to email me ?
      </h3>
      <Link class="title" link="mailto:contact@arthurdanjou.fr" :color="getTheme" :group="true">
        contact@arthurdanjou.fr
      </Link>
      <CardButton />
    </CardLink>
  </Card>
</template>

<style scoped lang="scss">
.title {
  @apply text-xl lg:text-3xl font-bold mb-8;
}

.subtitle {
  @apply mt-4 mb-2 text-sm text-stone-500 dark:text-gray-400 uppercase;
}
</style>
