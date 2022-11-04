<template>
  <Card order="first">
    <CardLink class="flex" target="_blank" href="https://www.instagram.com/arthur.dnj/">
      <CardIcon icon="mdi:instagram" />
      <div class="flex flex-col space-y-2 text-center">
        <h1 class="title">
          Instagram
        </h1>
        <h3 class="subtitle">
          @Arthur.dnj
        </h3>
      </div>
    </CardLink>
  </Card>
</template>

<style scoped lang="scss">
.title {
  @apply text-3xl font-bold;
}

.subtitle {
  @apply text-sm text-gray-600 dark:text-gray-400;
}
</style>
