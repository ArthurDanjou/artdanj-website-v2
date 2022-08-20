<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
const { getBackgroundColor } = useTheme()
</script>

<template>
  <footer class="flex items-center justify-center mt-18 mb-36">
    <div class="w-full mx-32 duration-300" :class="getBackgroundColor()">
      Footer yeah
    </div>
  </footer>
</template>
