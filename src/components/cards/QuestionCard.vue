<script setup lang="ts">
import type { PropType } from '@vue/runtime-core'
import { useQuestion, useSupabase } from '#imports'
import type { Question } from '~/types/types'

const props = defineProps({
  question: Object as PropType<Question>,
})

// const isAdmin = true // todo remove test
const { isAdmin } = useSupabase()
const { deleteQuestion } = await useQuestion()
</script>

<template>
  <Card>
    <CardLink :href="`/ama/${question.id}`" class="p-0">
      <div class="h-full flex flex-col justify-between">
        <!-- todo: Add tooltip for favorite -->
        <div class="flex items-center justify-center space-x-4 h-full">
          <h1 class="text-lg font-bold px-4 flex relative line-clamp-2">
            {{ question.title }}
          </h1>
        </div>
        <div class="bg-white dark:bg-dark-900 px-4 py-2 flex items-center justify-between text-md text-gray-600 dark:text-gray-400 border-t border-dark">
          <div class="flex space-x-4 items-center">
            <img :src="question.author.avatar" alt="User avatar" height="28" width="28" class="rounded-full">
            <p>
              {{ question.author.username }}
            </p>
          </div>
          <Icon
            v-if="isAdmin"
            name="ph:trash-bold"
            class="text-black dark:text-white hover:text-red-400 duration-500"
            size="20"
            @click.prevent="deleteQuestion(question.id)"
          />
        </div>
      </div>
    </CardLink>
  </Card>
</template>
