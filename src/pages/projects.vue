<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { getTextColor } = useTheme()

useHead({
  title: 'My work - Arthur Danjou',
})
</script>

<template>
  <section>
    <PageTitle title="All Works" />
    <CardContainer>
      <Card>
        <CardLink href="/blog/123">
          <div>
            <img />
          </div>
          <div>
            <h3 class="text-sm text-stone-500 dark:text-gray-400 mb-2">
              Dev, Personal
            </h3>
            <h1 class="text-3xl font-bold" :class="getTextColor()">
              Erisium
            </h1>
          </div>
        </CardLink>
      </Card>
    </CardContainer>
  </section>
</template>
