<template>
  <Card order="first">
    <CardLink class="flex" target="_blank" href="https://www.instagram.com/arthur.dnj/">
      <CardIcon>
        <Icon name="mdi:instagram" size="42px" />
      </CardIcon>
      <div class="flex flex-col space-y-4">
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
