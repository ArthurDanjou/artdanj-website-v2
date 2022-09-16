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
            <h3 class="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Dev, Personal
            </h3>
            <h1 class="text-3xl font-bold">
              Erisium
            </h1>
          </div>
        </CardLink>
      </Card>
    </CardContainer>
  </section>
</template>
