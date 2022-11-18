<script setup lang="ts">
import { onClickOutside, ref, useHead, useSupabase, useTalents } from '#imports'

useHead({
  title: 'Manage the talents - Arthur\'s Dashboard',
})

const { getTalents, refreshTalents, deleteTalent } = await useTalents()
const { isAdmin } = useSupabase()

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

const deleteId = ref<null | number>(null)
const startDelete = (id: number) => {
  deleteId.value = id
  setOpened(true)
}

const handleDelete = () => {
  if (deleteId.value !== null) {
    deleteTalent(deleteId.value)
    setOpened(false)
  }
}

const handleEdit = (id: number) => {
  // TODO: edit the talent
}
</script>

<template>
  <DashboardContainer title="Talents Mng.">
    <div>
      <DashboardTitle title="Add a new talent" />
      <DashboardSubTitle subtitle="Fill the following form to add a new talent" />
    </div>
    <Separator>
      <template #icon>
        <Icon name="ph:gear-six-fill" size="24" />
      </template>
      <div>
        <DashboardTitle title="See all talents" />
        <DashboardSubTitle subtitle="Find below all the talents of the web. You can edit them or delete them." />
        <div class="space-y-8">
          <div v-for="talent in getTalents" :key="talent" class="flex flex-col space-y-2">
            <div class="flex items-center space-x-4 h-full">
              <img :src="talent.logo" alt="Talent Logo" height="28" width="28" class="rounded-lg">
              <h1 class="text-xl font-bold text-center">
                {{ talent.name }}
              </h1>
              <h3 class="text-xl text-gray-600 dark:text-gray-400">
                {{ talent.website }}
              </h3>
            </div>
            <div class="flex items-center space-x-8 text-sm">
              <div class="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <p>
                  Notable Work
                </p>
                <span>/</span>
                <p>
                  {{ talent.work }}
                </p>
              </div>
              <div
                class="text-red-500 text-xxs px-1 py-.5 border rounded-md border-red-500 cursor-pointer hover:(bg-red-500 bg-opacity-25) duration-300"
                @click.prevent="startDelete(talent.id)"
              >
                Delete talent
              </div>
              <div
                class="text-gray-500 text-xxs px-1 py-.5 border rounded-md border-gray-500 cursor-pointer hover:(bg-gray-500 bg-opacity-25) duration-300"
                @click.prevent="handleEdit(talent.id)"
              >
                Edit talent
              </div>
            </div>
          </div>
        </div>
      </div>
    </Separator>
    <client-only>
      <transition v-show="open" name="modal">
        <div>
          <ModalBackground />
          <ModalContainer ref="modal">
            <div class="flex flex-col">
              <div class="rounded-t-xl p-4 border-b border-dark rounded-t-lg flex justify-between items-center">
                <h1 class="font-bold text-xl">
                  Delete talent
                </h1>
                <Icon class="cursor-pointer duration-500 text-gray-400 dark:text-dark-100 hover:text-black dark:hover:text-white" name="maki:cross" size="20" @click="setOpened(false)" />
              </div>
              <div class="rounded-b-xl p-4">
                <p class="text-md text-gray-600 dark:text-gray-400 text-justify mb-4">
                  Are you sure you want to delete this talent? This action cannot be undone.
                </p>
                <div class="text-center text-md border border-.5 border-red-500 py-1 px-2 rounded-md bg-red-400/20 text-red-500 cursor-pointer duration-300 font-bold hover:(bg-red-600 text-white)" @click.prevent="handleDelete">
                  Delete talent
                </div>
              </div>
            </div>
          </ModalContainer>
        </div>
      </transition>
    </client-only>
  </DashboardContainer>
</template>

<style scoped lang="scss">

</style>
