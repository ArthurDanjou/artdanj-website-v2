<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTheme } from '~/composables/useTheme'

const { getTextColor, getBackgroundColor } = useTheme()

const { t } = useI18n()

useHead({
  title: t('head.index'),
})
</script>

<template>
  <section>
    <CardContainer>
      <Card width="2" height="2">
        <CardLink href="about" class="flex flex-col justify-center">
          <div class="bg-photo h-48 w-48 rounded-1/2" :class="getBackgroundColor()" />
          <h1 class="font-bold text-4xl my-8">
            {{ t('index.main') }}
            <span class="mx-2" :class="getTextColor()">Arthur Danjou</span>
            <span class="hey-animation inline-block">👋</span>
          </h1>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            {{ t('index.description') }}
          </p>
          <CardButton />
        </CardLink>
      </Card>
      <AnnounceCard />
      <ResumeCard />
      <Card>
        <CardLink href="uses" class="flex flex-col justify-center">
          <LampIcon :class="getTextColor()" />
          <h3 class="subtitle">
            {{ t('uses.card.subtitle') }}
          </h3>
          <h1 class="title">
            {{ t('uses.card.title') }}
          </h1>
          <CardButton />
        </CardLink>
      </Card>
      <SpotifyCard />
      <Card height="2">
        Latest project
      </Card>
      <Card>
        <CardLink href="guestbook" class="flex flex-col justify-center">
          <BookIcon :class="getTextColor()" />
          <h3 class="subtitle">
            {{ t('uses.guestbook.subtitle') }}
          </h3>
          <h1 class="title">
            {{ t('uses.guestbook.title') }}
          </h1>
          <CardButton />
        </CardLink>
      </Card>
      <GitHubCard />
      <TwitterCard />
      <ContactCard />
      <Card width="2">
        <CardDiv>
          <div class="flex w-full justify-between">
            <div class="flex flex-col items-center">
              <DevIcon :class="getTextColor()" />
              <p class="subtitle">
                {{ t('index.work.dev') }}
              </p>
            </div>
            <div class="flex flex-col items-center">
              <DesignIcon :class="getTextColor()" />
              <p class="subtitle">
                {{ t('index.work.design') }}
              </p>
            </div>
            <div class="flex flex-col items-center">
              <CommentIcon :class="getTextColor()" />
              <p class="subtitle">
                {{ t('index.work.strategy') }}
              </p>
            </div>
          </div>
          <h1 class="title !mb-0">
            {{ t('index.work.title') }}
          </h1>
        </CardDiv>
      </Card>
      <Card width="2" height="2">
        Photos
      </Card>
      <Card width="2">
        Latest blog
      </Card>
    </CardContainer>
  </section>
</template>

<style scoped lang="scss">
.title {
  @apply text-3xl font-bold mb-8;
}

.subtitle {
  @apply mt-4 mb-2 text-sm text-gray-600 dark:text-gray-400 uppercase;
}

.bg-photo {
  background-image: url("~/assets/images/MainPhoto.png");
  @apply bg-clip-content bg-center bg-contain border-dark border-2;
}

.hey-animation {
  animation: waveAnimation 6s infinite;
}

@keyframes waveAnimation {
  0% {
    transform: rotate(0)
  }
  5% {
    transform: rotate(14deg)
  }
  10% {
    transform: rotate(-8deg)
  }
  15% {
    transform: rotate(14deg)
  }
  20% {
    transform: rotate(-4deg)
  }
  25% {
    transform: rotate(10deg)
  }
  30% {
    transform: rotate(0)
  }
  35% {
    transform: rotate(0)
  }
  100% {
    transform: rotate(0)
  }
}
</style>
