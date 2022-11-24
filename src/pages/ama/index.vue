<script setup lang="ts">
import { computed, ref, useElementHover, useHead, useMouseInElement, useQuestion } from '#imports'

useHead({
  title: 'Ask Me Anything - Arthur Danjou',
})

const { getAllQuestions } = await useQuestion()

const ama = ref(null)
const isHovered = useElementHover(ama)
const { elementX, elementY } = useMouseInElement(ama)
const mouseStyle = computed(() => ({
  top: `${elementY.value - 75 * 0.5}px`,
  left: `${elementX.value - 75 * 0.5}px`,
  opacity: isHovered.value ? 1 : 0,
}))
</script>

<template>
  <section>
    <PageTitle title="Ask Me" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 grid-flow-row-dense auto-rows-fr">
      <Card ref="ama" width="2" height="2">
        <CardDiv>
          <div class="z-9 mouse-gradient w-[75px] h-[75px] absolute top-0 left-0" :style="mouseStyle" />
          <CardIcon icon="mdi:comment-question-outline" />
          <div class="z-10 absolute left-[45%] top-[10%] mouse-gradient h-[75px] w-[75px]" />
          <div class="z-10">
            <h1 class="font-bold text-4xl leading-12 text-center">
              Ask me anything
            </h1>
            <h3 class="text-sm text-gray-600 dark:text-gray-400 text-center">
              If you have any questions about my knowledge, my stuff or anything else, just create a new question. I will answer it as fast as I can
            </h3>
          </div>
        </CardDiv>
      </Card>
      <QuestionCard v-for="question in getAllQuestions" :key="question.id" :question="question" />
    </div>
  </section>
</template>
