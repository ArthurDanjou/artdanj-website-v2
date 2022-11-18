<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Home',
  },
})
</script>

<template>
  <section>
    <PageTitle :title="title" />
    <div class="md:w-1/2 mx-auto">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>
