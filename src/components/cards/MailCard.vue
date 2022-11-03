<template>
  <Card width="2">
    <CardLink href="mailto:contact@arthurdanjou.fr">
      <CardIcon icon="material-symbols:alternate-email-rounded" />
      <div class="flex flex-col space-y-4 items-center">
        <Link class="title" link="mailto:contact@arthurdanjou.fr" :group="true">
          contact@arthurdanjou.fr
        </Link>
        <h3 class="subtitle">
          Just want to email me ?
        </h3>
      </div>
    </CardLink>
  </Card>
</template>

<style scoped lang="scss">
.title {
  @apply text-xl lg:text-3xl font-bold;
}

.subtitle {
  @apply text-sm text-gray-600 dark:text-gray-400;
}
</style>
