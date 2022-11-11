<script setup lang="ts">
// todo do the activity card
import { useSupabase, useSupabaseUser } from '#imports'

const { user, logout } = useSupabase()
const supabaseUser = useSupabaseUser()
</script>

<template>
  <Card @click.prevent="logout">
    <CardDiv>
      Activity
      {{ user }}
      <p v-if="supabaseUser">
        {{ supabaseUser.email }}
      </p>
    </CardDiv>
  </Card>
</template>

<style scoped lang="scss">

</style>
