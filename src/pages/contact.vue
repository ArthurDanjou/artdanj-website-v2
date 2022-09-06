<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTheme } from '~/composables/useTheme'

const { getTextColor } = useTheme()

const { t } = useI18n()

useHead({
  title: t('head.contact'),
})

// todo complete cards
</script>

<template>
  <section>
    <PageTitle title="contact" />
    <CardContainer>
      <Card>
        <CardDiv>
          <MailBoxIcon :class="getTextColor()" />
          <h1 class="title">
            {{ t('contact.main.title') }}
          </h1>
          <h3 class="subtitle mt-4 ">
            {{ t('contact.main.subtitle') }}
          </h3>
        </CardDiv>
      </Card>
      <FormCard />
      <GitHubCard order="normal" />
      <Card order="last">
        <CardDiv>
          <DevIcon :class="getTextColor()" />
          <h1 class="title">
            {{ t('contact.what.dev.title') }}
          </h1>
          <p class="subtitle">
            {{ t('contact.what.dev.subtitle') }}
          </p>
        </CardDiv>
      </Card>
      <TwitterCard order="normal" />
      <Card order="last">
        <CardDiv>
          <DesignIcon :class="getTextColor()" />
          <h1 class="title">
            {{ t('contact.what.design.title') }}
          </h1>
          <p class="subtitle">
            {{ t('contact.what.design.title') }}
          </p>
        </CardDiv>
      </Card>
      <Card order="last">
        <CardDiv>
          <CommentIcon :class="getTextColor()" />
          <h1 class="title">
            {{ t('contact.what.strategy.title') }}
          </h1>
          <p class="subtitle">
            {{ t('contact.what.strategy.title') }}
          </p>
        </CardDiv>
      </Card>
      <MailCard />
    </CardContainer>
  </section>
</template>

<style scoped lang="scss">
.title {
  @apply text-3xl font-bold my-4;
}

.subtitle {
  @apply text-lg leading-5 text-gray-600 dark:text-gray-400 text-justify;
}
</style>
