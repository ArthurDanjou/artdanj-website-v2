<script setup lang="ts">
// todo do the activity card
import { useSupabase } from '#imports'

const { user, logout, isAdmin, isLoggedIn } = useSupabase()
</script>

<template>
  <Card @click.prevent="logout">
    <CardDiv>
      Activity
      <div>
        admin: {{ isAdmin }}
      </div>
      <div>
        loggedIn : {{ isLoggedIn }}
      </div>
    </CardDiv>
  </Card>
</template>

<style scoped lang="scss">

</style>
