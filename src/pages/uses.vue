<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { getTextColor } = useTheme()

useHead({
  title: 'My uses - Arthur Danjou',
})
</script>

<template>
  <section>
    <PageTitle title="My Uses" />
    <ContentDoc path="/uses" />
  </section>
</template>
