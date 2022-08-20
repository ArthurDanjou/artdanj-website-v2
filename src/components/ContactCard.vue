<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
const { getTextColor } = useTheme()
</script>

<template>
  <Card>
    <CardLink href="contact">
      <MailBoxIcon :class="getTextColor()" />
      <h3 class="subtitle">
        Let's work together
      </h3>
      <h1 class="title">
        Get in touch now ✨
      </h1>
      <CardButton />
    </CardLink>
  </Card>
</template>
