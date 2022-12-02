<script setup lang="ts">
import type { PropType } from '@vue/runtime-core'
import type { Talent } from '~/types/types'
import { computed, useSupabase, useTalent } from '#imports'

const props = defineProps({
  talent: Object as PropType<Talent>,
})

const { isAdmin } = useSupabase()
const { toggleFavorite } = await useTalent()
const getLink = computed(() => props.talent?.website.includes('https://') ? props.talent?.website : `https://${props.talent?.website}`)
</script>

<template>
  <Card v-if="talent">
    <CardLink :href="getLink" target="_blank" class="p-0">
      <div class="h-full flex flex-col justify-between">
        <Icon
          v-if="isAdmin && talent.favorite"
          class="absolute -top-1 right-2 text-amber-300 hover:text-red-400 duration-500"
          name="material-symbols:bookmark"
          size="24"
          @click.prevent="toggleFavorite(talent, false)"
        />
        <Icon
          v-else-if="isAdmin && !talent.favorite"
          class="absolute -top-3 right-2 text-black dark:text-white hover:(text-amber-300 -top-1) duration-500"
          name="material-symbols:bookmark"
          size="24"
          @click.prevent="toggleFavorite(talent, true)"
        />
        <Icon
          v-else-if="talent.favorite"
          class="absolute -top-1 right-2 text-amber-300"
          name="material-symbols:bookmark"
          size="24"
        />
        <!-- todo: Add tooltip for favorite -->
        <div class="p-4 flex items-center justify-center space-x-4 h-full">
          <img :src="talent.logo" alt="Talent Logo" height="28" width="28" class="rounded-lg">
          <div>
            <h1 class="text-3xl font-bold text-center">
              {{ talent.name }}
            </h1>
            <h3 class="flex items-center text-sm text-gray-600 dark:text-gray-400 text-center group-hover:text-black dark:group-hover:text-white duration-300">
              {{ talent.website }}
              <Icon class="ml-2 opacity-0 duration-300 group-hover:opacity-100 text-black dark:text-white" name="ph:arrow-up-right-bold" size="16" />
            </h3>
          </div>
        </div>
        <div class="bg-white dark:bg-dark-900 px-4 py-2 flex justify-between text-sm text-gray-600 dark:text-gray-400 border-t border-dark">
          <p>
            Notable Work
          </p>
          <p>
            {{ talent.work }}
          </p>
        </div>
      </div>
    </CardLink>
  </Card>
</template>
