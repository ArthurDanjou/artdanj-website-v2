<script setup lang="ts">
import { computed, definePageMeta, ref, useElementHover, useMouseInElement } from '#imports'

definePageMeta({
  middleware: 'navigation',
})

const dashboard = ref(null)
const isHovered = useElementHover(dashboard)
const { elementX, elementY } = useMouseInElement(dashboard)
const mouseStyle = computed(() => ({
  top: `${elementY.value - 75 * 0.5}px`,
  left: `${elementX.value - 75 * 0.5}px`,
  opacity: isHovered.value ? 1 : 0,
}))
</script>

<template>
  <section>
    <PageTitle title="Dashboard" />
    <CardContainer>
      <Card ref="dashboard" width="2" height="3">
        <CardDiv>
          <div class="z-9 mouse-gradient w-[75px] h-[75px] absolute top-0 left-0" :style="mouseStyle" />
          <CardIcon icon="ph:gear-bold" />
          <div class="z-10 absolute left-[45%] top-[25%] mouse-gradient h-[75px] w-[75px]" />
          <div class="z-10">
            <h1 class="font-bold my-2 text-4xl leading-12 text-center">
              Dashboard main page
            </h1>
            <h3 class="text-sm text-gray-600 dark:text-gray-400 text-center">
              Manage the website, users and see new statistiques
            </h3>
          </div>
        </CardDiv>
      </Card>
      <Card>
        <CardLink href="/dashboard/stats">
          <div class="flex flex-col items-center space-y-8">
            <Icon name="akar-icons:statistic-up" size="52" />
            <p class="text-xl text-center">
              See statistics
            </p>
          </div>
        </CardLink>
      </Card>
      <Card>
        <CardLink href="/dashboard/maintenance">
          <div class="flex flex-col items-center space-y-8">
            <Icon name="ooui:network-off" size="52" />
            <p class="text-xl text-center">
              Manage the maintenances
            </p>
          </div>
        </CardLink>
      </Card>
      <Card>
        <CardLink href="/dashboard/talents">
          <div class="flex flex-col items-center space-y-8">
            <Icon name="ph:crown-simple-bold" size="52" />
            <p class="text-xl text-center">
              Manage the talents
            </p>
          </div>
        </CardLink>
      </Card>
      <Card>
        <CardLink href="/dashboard/users">
          <div class="flex flex-col items-center space-y-8">
            <Icon name="ri:user-3-line" size="52" />
            <p class="text-xl text-center">
              Manage the users
            </p>
          </div>
        </CardLink>
      </Card>
      <Card>
        <CardLink href="/dashboard/forms">
          <div class="flex flex-col items-center space-y-8">
            <Icon name="material-symbols:markunread-mailbox-outline-rounded" size="52" />
            <p class="text-xl text-center">
              Manage the forms
            </p>
          </div>
        </CardLink>
      </Card>
      <Card>
        <CardLink href="/dashboard/questions">
          <div class="flex flex-col items-center space-y-8">
            <Icon name="mdi:comment-question-outline" size="52" />
            <p class="text-xl text-center">
              Manage the questions
            </p>
          </div>
        </CardLink>
      </Card>
    </CardContainer>
  </section>
</template>
