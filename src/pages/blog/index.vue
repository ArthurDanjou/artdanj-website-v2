<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { getTextColor } = useTheme()

useHead({
  title: 'My blog - Arthur Danjou',
})
</script>

<template>
  <section>
    <PageTitle title="My Shelf" />
    <CardContainer class="lg:grid-cols-2">
      <Card>
        <CardLink href="/blog/123">
          <h1 class="text-3xl font-bold" :class="getTextColor()">
            TITLE
          </h1>
          <h3 class="text-sm text-gray-600 dark:text-gray-400 mt-2 text-justify">
            DESCRIPTION
            DESCRIPTION
            DESCRIPTION
            DESCRIPTION
            DESCRIPTION
            DESCRIPTION
            DESCRIPTION
            DESCRIPTION
            DESCRIPTION
          </h3>
          <div class="flex items-center justify-between mt-8">
            <button
              class="px-4 py-2 duration-300 cursor-pointer border-2 rounded-full border-dark
                bg-white text-stone-400 dark:(bg-dark-800 text-stone-600) group-hover:(shadow-dark text-black) dark:group-hover:text-white"
            >
              <div class="flex items-center justify-center flex items-center justify-center">
                Read more <PlusIcon class="ml-2" />
              </div>
            </button>
            <p class="ml-4" :class="getTextColor()">
              6 Feb. 2003
            </p>
          </div>
        </CardLink>
      </Card>
      <Card>
        <CardLink href="/blog/123">
          <h1 class="text-3xl font-bold" :class="getTextColor()">
            TITLE
          </h1>
          <h3 class="text-sm text-gray-600 dark:text-gray-400 mt-2 text-justify">
            DESCRIPTION
            DESCRIPTION
            DESCRIPTION
            DESCRIPTION
            DESCRIPTION
            DESCRIPTION
            DESCRIPTION
            DESCRIPTION
            DESCRIPTION
          </h3>
          <div class="flex items-center justify-between mt-4">
            <button
              class="px-4 py-2 duration-300 cursor-pointer border-2 rounded-full border-dark
                bg-white text-stone-400 dark:(bg-dark-800 text-stone-600) group-hover:(shadow-dark text-black) dark:group-hover:text-white"
            >
              <div class="flex items-center justify-center flex items-center justify-center">
                Read more <PlusIcon class="ml-2" />
              </div>
            </button>
            <p class="ml-4" :class="getTextColor()">
              6 Feb. 2003
            </p>
          </div>
        </CardLink>
      </Card>
      <Card>
        <CardLink href="/blog/123">
          <h1 class="text-3xl font-bold" :class="getTextColor()">
            TITLE
          </h1>
          <h3 class="text-sm text-gray-600 dark:text-gray-400 mt-2 text-justify">
            DESCRIPTION
            DESCRIPTION
            DESCRIPTION
            DESCRIPTION
            DESCRIPTION
            DESCRIPTION
            DESCRIPTION
            DESCRIPTION
            DESCRIPTION
          </h3>
          <div class="flex items-center justify-between mt-4">
            <button
              class="px-4 py-2 duration-300 cursor-pointer border-2 rounded-full border-dark
                bg-white text-stone-400 dark:(bg-dark-800 text-stone-600) group-hover:(shadow-dark text-black) dark:group-hover:text-white"
            >
              <div class="flex items-center justify-center flex items-center justify-center">
                Read more <PlusIcon class="ml-2" />
              </div>
            </button>
            <p class="ml-4" :class="getTextColor()">
              6 Feb. 2003
            </p>
          </div>
        </CardLink>
      </Card>
    </CardContainer>
  </section>
</template>
