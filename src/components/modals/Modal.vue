<script setup lang="ts">
import { onClickOutside, ref } from '#imports'

const emit = defineEmits(['close'])
const modal = ref(null)
const close = () => {
  emit('close')
  document.body.classList.remove('overflow-hidden')
}

onClickOutside(modal, () => {
  close()
})

onKeyStroke('Escape', () => {
  close()
})
</script>

<template>
  <ModalBackground />
  <ModalContainer ref="modal">
    <ModalCloseButton @close="close()" />
    <slot />
  </ModalContainer>
</template>
