<script setup lang="ts">
import TagComment from '~/components/TagComment.vue'
</script>

<template>
  <Story
    title="TagComment"
    :layout="{ type: 'grid' }"
  >
    <Variant
      title="Variant n°1"
    >
      <TagComment>2021 - 2022</TagComment>
    </Variant>
    <Variant
      title="Variant n°2"
    >
      <TagComment>2021 — 2022</TagComment>
    </Variant>
    <Variant
      title="Variant n°3"
    >
      <TagComment>2021 to 2022</TagComment>
    </Variant>
    <Variant
      title="Variant n°4"
    >
      <TagComment>2021 / 2022</TagComment>
    </Variant>
  </Story>
</template>
