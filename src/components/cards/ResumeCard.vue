<template>
  <Card order="last">
    <CardLink href="resume" class="flex flex-col justify-center">
      <CardIcon>
        <Icon name="fluent:person-12-regular" size="42px" />
      </CardIcon>
      <div class="flex flex-col space-y-4">
        <h1 class="title">
          See my resume
        </h1>
        <h3 class="subtitle">
          Learn more about me
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
