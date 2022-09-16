<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
  title: t('head.projects'),
})
</script>

<template>
  <section>
    <PageTitle title="projects" />
    <CardContainer>
      <Card>
        <CardLink href="/blog/123">
          <div>
            <img>
          </div>
          <div>
            <h1 class="text-3xl font-bold">
              Erisium
            </h1>
            <h3 class="text-sm text-gray-600 dark:text-gray-400 mb-2 space-x-1">
              <div class="mb-1 translate-y-px inline-block flex-none rounded bg-zinc-200 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                Dev
              </div>
              <div class="mb-1 translate-y-px inline-block flex-none rounded bg-zinc-200 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                Personnal
              </div>
            </h3>
          </div>
        </CardLink>
      </Card>
    </CardContainer>
  </section>
</template>
