<template>
  <Card order="first">
    <CardLink class="flex" target="_blank" href="https://twitter.com/ArthurDanj">
      <CardIcon icon="mdi:twitter" />
      <div class="flex flex-col space-y-2 text-center">
        <h1 class="title">
          Twitter
        </h1>
        <h3 class="subtitle">
          @ArthurDanj
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
