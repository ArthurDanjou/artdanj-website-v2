<script setup lang="ts">
import { useStats } from '~/composables/useStats'
import { formatBigNumber } from '~/logic/numbers'

const { getTotalLikes, getMostLiked, getTotalViews, getMostViewed, getTotalComments, getMostCommented } = await useStats()

const mostLiked = await getMostLiked()
const mostViewed = await getMostViewed()
const mostCommented = await getMostCommented()

const totalLikes = await getTotalLikes()
const totalViews = await getTotalViews()
</script>

<template>
  <section>
    <PageTitle title="Stats Page" />
    <CardContainer>
      <DashboardStatsCard v-if="mostViewed && mostViewed[0]" :href="`/blog/${mostViewed[0].slug}`">
        <div class="flex space-x-4 items-center">
          <div class="bg-lime-400 stats-nav">
            <Icon name="ic:sharp-remove-red-eye" size="24" />
          </div>
          <p class="stats-nav-title">
            Most viewed
          </p>
        </div>
        <h1 class="stats-main">
          {{ formatBigNumber(mostViewed[0].views) }}
        </h1>
        <h3 class="stats-subtitle">
          Written by <span class="main">{{ mostViewed[0].author.username }}</span>
        </h3>
      </DashboardStatsCard>
      <DashboardStatsCard>
        <div class="flex space-x-4 items-center">
          <div class="bg-lime-400 stats-nav">
            <Icon name="ic:sharp-remove-red-eye" size="24" />
          </div>
          <p class="stats-nav-title">
            Total views
          </p>
        </div>
        <h1 class="stats-main">
          {{ formatBigNumber(totalViews._sum.views) }}
        </h1>
      </DashboardStatsCard>
      <DashboardStatsCard v-if="mostLiked && mostLiked[0]" :href="`/blog/${mostLiked[0].slug}`">
        <div class="flex space-x-4 items-center">
          <div class="bg-red-400 stats-nav">
            <Icon name="mdi:cards-heart" size="24" />
          </div>
          <p class="stats-nav-title">
            Most Liked
          </p>
        </div>
        <h1 class="stats-main">
          {{ formatBigNumber(mostLiked[0].likes) }}
        </h1>
        <h3 class="stats-subtitle">
          Written by <span class="main">{{ mostLiked[0].author.username }}</span>
        </h3>
      </DashboardStatsCard>
      <DashboardStatsCard>
        <div class="flex space-x-4 items-center">
          <div class="bg-red-400 stats-nav">
            <Icon name="mdi:cards-heart" size="24" />
          </div>
          <p class="stats-nav-title">
            Total likes
          </p>
        </div>
        <h1 class="stats-main">
          {{ formatBigNumber(totalLikes._sum.likes) }}
        </h1>
      </DashboardStatsCard>
      <DashboardStatsCard v-if="mostCommented && mostCommented[0]" :href="`/blog/${mostCommented[0].slug}`">
        <div class="flex space-x-4 items-center">
          <div class="bg-cyan-400 stats-nav">
            <Icon name="ion:chatbubble" size="24" />
          </div>
          <p class="stats-nav-title">
            Most commented
          </p>
        </div>
        <h1 class="stats-main">
          {{ formatBigNumber(mostCommented[0].comments.length) }}
        </h1>
        <h3 class="stats-subtitle">
          Written by <span class="main">{{ mostCommented[0].author.username }}</span>
        </h3>
      </DashboardStatsCard>
    </CardContainer>
  </section>
</template>

<style scoped lang="scss">
.stats-nav {
  @apply p-2 rounded-full flex items-center justify-center text-white dark:text-dark-900;
}
.stats-nav-title {
  @apply text-xl text-gray-600 dark:text-gray-400;
}

.stats-main {
  @apply font-bold text-5xl;
}

.stats-subtitle {
  @apply text-gray-600 dark:text-gray-400;

  .main {
    @apply font-bold text-black dark:text-white;
  }
}
</style>
