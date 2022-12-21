<script setup lang="ts">
import { computed, ref, useElementHover, useHead, useMouseInElement, usePosts } from '#imports'

const { data: posts } = await usePosts()

useHead({
  title: 'My Shelf - Arthur Danjou',
})

const blog = ref(null)
const isHovered = useElementHover(blog)
const { elementX, elementY } = useMouseInElement(blog)
const mouseStyle = computed(() => ({
  top: `${elementY.value - 75 * 0.5}px`,
  left: `${elementX.value - 75 * 0.5}px`,
  opacity: isHovered.value ? 1 : 0,
}))
</script>

<template>
  <section>
    <PageTitle title="My Shelf" />
    <div class="flex justify-center">
      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 grid-flow-row-dense auto-rows-fr">
        <Card ref="blog" width="2">
          <CardDiv>
            <div :style="mouseStyle" class="z-[9] mouse-gradient w-[75px] h-[75px] absolute top-0 left-0"/>
            <CardIcon icon="ph:books-bold"/>
            <div class="z-[10] absolute left-[43%] top-[10%] mouse-gradient h-[75px] w-[75px]"/>
            <div class="z-[10]">
              <h1 class="font-bold text-4xl leading-12 text-center">
                What I have written
              </h1>
              <h3 class="my-4 text-sm text-center text-gray-600 dark:text-gray-400">
                I write articles about my life, development and my passions. I also write about my projects, my
                discoveries and my thoughts. <s>It is sometimes updated.</s>
              </h3>
            </div>
          </CardDiv>
        </Card>
        <BlogCard v-for="post in posts" :key="post.slug" :post="post" />
      </div>
    </div>
  </section>
</template>
