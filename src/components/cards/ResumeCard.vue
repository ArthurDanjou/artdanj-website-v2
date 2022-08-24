<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
const { getTextColor } = useTheme()
</script>

<template>
  <Card>
    <CardLink href="resume" class="flex flex-col justify-center">
      <PersonBoxIcon :class="getTextColor()" />
      <h3 class="subtitle">
        Learn more about me
      </h3>
      <h1 class="title">
        See my resume
      </h1>
      <CardButton />
    </CardLink>
  </Card>
</template>
