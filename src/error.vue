<script setup lang="ts">
import { useError } from '#imports'

const error = useError()
</script>

<template>
  <main class="m-2">
    <NavBar />
    <section>
      <div class="md:w-1/2 mx-auto">
        <h1 class="font-bold text-4xl mb-2">
          There is an error !!!
        </h1>
        {{ error.message }}
      </div>
    </section>
    <Footer />
  </main>
</template>
