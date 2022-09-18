<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
  title: t('head.index'),
})
</script>

<template>
  <section>
    <CardContainer>
      <Card order="first" width="2">
        <CardLink href="about" class="flex flex-col">
          <div class="h-full flex items-center">
            <div class="bg-photo h-32 w-32 rounded-1/2" />
          </div>
          <div class="flex flex flex-col space-y-4">
            <h1 class="font-bold text-4xl mt-4">
              {{ t('index.main') }}
              <span class="mx-1">Arthur Danjou</span>
              <span class="hey-animation inline-block">👋</span>
            </h1>
            <p class="text-gray-600 dark:text-gray-400 pr-54px">
              {{ t('index.description') }}
            </p>
          </div>
          <CardButton />
        </CardLink>
      </Card>
      <AnnounceCard />
      <ResumeCard />
      <Card order="last">
        <CardLink href="uses" class="flex flex-col justify-center">
          <CardIcon>
            <Icon name="lucide:lamp-desk" size="42px" />
          </CardIcon>
          <div class="flex flex-col space-y-4">
            <h1 class="title">
              {{ t('uses.card.title') }}
            </h1>
            <h3 class="subtitle">
              {{ t('uses.card.subtitle') }}
            </h3>
          </div>
          <CardButton />
        </CardLink>
      </Card>
      <Card order="last">
        <CardLink href="guestbook" class="flex flex-col justify-center">
          <CardIcon>
            <Icon name="icon-park-outline:bookshelf" size="42px" />
          </CardIcon>
          <div class="flex flex-col space-y-4">
            <h1 class="title">
              {{ t('guestbook.card.title') }}
            </h1>
            <h3 class="subtitle">
              {{ t('guestbook.card.subtitle') }}
            </h3>
          </div>
          <CardButton />
        </CardLink>
      </Card>
      <ContactCard />
      <SpotifyCard />
      <TwitterCard />
      <GitHubCard />
      <Card height="2">
        Latest project
      </Card>
      <Card width="2">
        <CardDiv>
          <div class="flex w-full justify-between">
            <div class="flex flex-col items-center">
              <CardIcon :stick="true">
                <Icon name="uil:web-grid" size="42px" />
              </CardIcon>
              <p class="subtitle mt-2">
                {{ t('index.work.dev') }}
              </p>
            </div>
            <div class="flex flex-col items-center">
              <CardIcon :stick="true">
                <Icon name="ic:outline-design-services" size="42px" />
              </CardIcon>
              <p class="subtitle mt-2">
                {{ t('index.work.design') }}
              </p>
            </div>
            <div class="flex flex-col items-center">
              <CardIcon :stick="true">
                <Icon name="uil:comment" size="42px" />
              </CardIcon>
              <p class="subtitle mt-2">
                {{ t('index.work.strategy') }}
              </p>
            </div>
          </div>
          <h1 class="title !mb-0">
            {{ t('index.work.title') }}
          </h1>
        </CardDiv>
      </Card>
      <InstagramCard />
      <Card>
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
  @apply mt-4 text-3xl font-bold;
}

.subtitle {
  @apply text-sm text-gray-600 dark:text-gray-400;
}

.bg-photo {
  background-image: url("~/assets/images/hand.png");
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
