<script setup lang="ts">
import { definePageMeta, useSupabaseUser } from '#imports'

const user = useSupabaseUser()

definePageMeta({
  middleware: 'navigation',
})
</script>

<template>
  <section>
    <PageTitle title="Your profile" />
    <div>
      Comments, AMA (questions) and more...
    </div>
    <div>
      Account settings (email, username, logout, delete account)
    </div>
    {{ user }}
  </section>
</template>
