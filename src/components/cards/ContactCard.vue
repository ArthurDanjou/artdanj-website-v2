<template>
  <Card order="last">
    <CardLink href="contact">
      <CardIcon icon="material-symbols:inbox-outline" />
      <div class="flex flex-col space-y-2 text-center">
        <h1 class="title">
          Get in touch
        </h1>
        <h3 class="subtitle">
          Let's work together
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
