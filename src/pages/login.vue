<script setup lang="ts">
import { definePageMeta, useHead, useSupabase } from '#imports'

useHead({
  title: 'Login - Arthur Danjou',
})

definePageMeta({
  middleware: 'navigation',
})

const { useGithubLogin, useDiscordLogin, useTwitchLogin, useGoogleLogin, useTwitterLogin } = useSupabase()
</script>

<template>
  <PageTitle title="Login" />
  <section>
    <div class="flex space-x-4 my-4">
      <Icon class="social-login" name="mdi:github" size="32px" @click.prevent="useGithubLogin('user')" />
      <Icon class="social-login text-[#1DA1F2]" name="mdi:twitter" size="32px" @click.prevent="useTwitterLogin('user')" />
      <Icon class="social-login text-[#DB4437]" name="bxl:google" size="32px" @click.prevent="useGoogleLogin('user')" />
      <Icon class="social-login text-[#6441a5]" name="mdi:twitch" size="32px" @click.prevent="useTwitchLogin('user')" />
      <Icon class="social-login text-[#5865F2]" name="mdi:discord" size="32px" @click.prevent="useDiscordLogin('user')" />
    </div>
  </section>
</template>

<style lang="scss">
.social-login {
  @apply cursor-pointer border border-dark rounded-md p-1 flex items-center justify-center transform duration-300 hover:scale-105;
}
</style>
