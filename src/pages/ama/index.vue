<script setup lang="ts">
import {
  computed,
  onClickOutside,
  ref,
  useElementHover,
  useHead,
  useMouseInElement,
  useQuestion,
  useSupabase,
  useSupabaseUser,
} from '#imports'

useHead({
  title: 'Ask Me Anything - Arthur Danjou',
})

const ama = ref(null)
const isHovered = useElementHover(ama)
const { elementX, elementY } = useMouseInElement(ama)
const mouseStyle = computed(() => ({
  top: `${elementY.value - 75 * 0.5}px`,
  left: `${elementX.value - 75 * 0.5}px`,
  opacity: isHovered.value ? 1 : 0,
}))

// todo: change with store users
const user = useSupabaseUser()
const { isLoggedIn } = useSupabase()

const open = ref(false)
const modal = ref(null)
const setOpened = (state: boolean) => {
  if (state)
    document.body.classList.add('overflow-hidden')
  else
    document.body.classList.remove('overflow-hidden')

  open.value = state
}
onClickOutside(modal, () => {
  setOpened(false)
})

const questionForm = ref({
  title: '',
  description: '',
})
const isSendable = computed(() => questionForm.value.title.length >= 5)

const { getAllQuestions, createQuestion } = await useQuestion()
const postQuestion = async () => {
  if (!isSendable.value)
    return

  // todo sendQuestion
  await createQuestion(questionForm.value.title, questionForm.value.description)
  questionForm.value.title = ''
  questionForm.value.description = ''
  setOpened(false)
}

const handleOpening = () => {
  if (!isLoggedIn)
    return
  setOpened(true)
}
</script>

<template>
  <section>
    <PageTitle title="Ask Me" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 grid-flow-row-dense auto-rows-fr">
      <Card ref="ama" :class="isLoggedIn ? 'cursor-pointer' : ''" width="2" height="2" @click.prevent="handleOpening()">
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
            <div v-if="isLoggedIn" class="italic text-xs flex justify-center items-center space-x-1 mt-2">
              <Icon name="majesticons:hand-pointer-event-line" size="16" />
              <h5>
                Click on the card to ask a new question
              </h5>
            </div>
            <div v-else class="italic text-xs flex justify-center items-center space-x-1 mt-2">
              <Icon name="ri:question-line" size="16" />
              <h5>
                You need to be connected to ask your question
              </h5>
            </div>
          </div>
        </CardDiv>
      </Card>
      <QuestionCard v-for="question in getAllQuestions" :key="question.id" :question="question" />
      <client-only>
        <transition v-show="open" name="modal">
          <div>
            <ModalBackground />
            <ModalContainer ref="modal">
              <div class="flex flex-col">
                <div class="rounded-t-xl p-x-4 py-2 border-b border-dark rounded-t-lg flex justify-between items-center">
                  <h1 class="font-bold text-md">
                    Ask me anything
                  </h1>
                  <Icon class="cursor-pointer duration-500 text-gray-400 dark:text-dark-100 hover:text-black dark:hover:text-white" name="maki:cross" size="20" @click="setOpened(false)" />
                </div>
                <div class="rounded-b-xl p-4">
                  <form class="w-full space-y-4">
                    <div class="w-full flex space-x-2 items-center">
                      <div class="w-10 h-10">
                        <img :src="user.user_metadata.avatar_url" alt="User avatar" class="rounded-full">
                      </div>
                      <textarea
                        v-model="questionForm.title"
                        style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 42px;"
                        rows="1"
                        class="block w-full px-4 py-2 bg-stone-200 rounded-md dark:bg-neutral-800 duration-300"
                        placeholder="Ask me anything..."
                      />
                    </div>
                    <div class="pl-11">
                      <textarea
                        v-model="questionForm.description"
                        style="overflow-wrap: break-word; resize: none;"
                        rows="5"
                        class="resize-y block w-full px-4 py-2 bg-stone-200 rounded-md dark:bg-neutral-800 duration-300"
                        placeholder="Optional: add a description with more details..."
                      />
                    </div>
                    <div class="flex justify-end">
                      <div
                        :class="isSendable ? 'button-sendable' : 'button-not-sendable'"
                        class="duration-300 flex items-center justify-center px-6 py-1 rounded-md shadow-xs hover:shadow-sm border border-dark"
                        @click.prevent="postQuestion"
                      >
                        Ask
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </ModalContainer>
          </div>
        </transition>
      </client-only>
    </div>
  </section>
</template>
