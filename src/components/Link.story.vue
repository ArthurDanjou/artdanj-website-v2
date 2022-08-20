<script setup lang="ts">
import Link from '~/components/Link.vue'

const variants = [
  { color: 'Sky' },
  { color: 'Rose' },
  { color: 'Violet' },
  { color: 'Orange' },
  { color: 'Amber' },
  { color: 'Lime' },
]
</script>

<template>
  <Story
    title="Link"
    :layout="{ type: 'grid' }"
  >
    <Variant
      v-for="(props, index) in variants"
      :key="index"
      :title="`${props.color} color`"
    >
      <Link target="_blank" link="https://arthurdanjou.fr" :color="props.color.toLowerCase()">
        {{ props.color }}
      </Link>
    </Variant>
  </Story>
</template>
