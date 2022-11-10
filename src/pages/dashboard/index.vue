<script setup lang="ts">
import { definePageMeta } from '#imports'

definePageMeta({
  middleware: 'navigation',
})
</script>

<template>
  <section>
    <PageTitle title="Dashboard" />
    DASHBOARD MAIN PAGE
    <p>
      Maintenance,
      add talent,
      see forms
      see unseen questions
      manage users
      posts stats (likes, comments, views)
    </p>
  </section>
</template>
