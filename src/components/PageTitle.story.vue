<script setup lang="ts">
import PageTitle from '~/components/PageTitle.vue'

const variants = [
  { title: 'About Me' },
  { title: 'My Shelf' },
  { title: 'My work' },
]
</script>

<template>
  <Story
    title="PageTitle"
    :layout="{ type: 'grid' }"
  >
    <Variant
      v-for="(props, index) in variants"
      :key="index"
      :title="`Variant n°${index}`"
    >
      <PageTitle :title="props.title" />
    </Variant>
  </Story>
</template>
