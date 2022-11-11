<script setup lang="ts">
import { definePageMeta, useSupabase, useSupabaseUser } from '#imports'

const supabaseUser = useSupabaseUser()
const { user } = useSupabase()

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
    {{ supabaseUser }}
  </section>
</template>
