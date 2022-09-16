<template>
  <Card order="first">
    <CardLink class="flex" target="_blank" href="https://twitter.com/ArthurDanj">
      <CardIcon>
        <Icon name="mdi:twitter" size="42px" />
      </CardIcon>
      <div class="flex flex-col space-y-4">
        <h1 class="title">
          Twitter
        </h1>
        <h3 class="subtitle">
          @ArthurDanj
        </h3>
      </div>
      <CardButton />
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
