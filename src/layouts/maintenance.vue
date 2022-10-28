<template>
  <main class="px-2">
    <NavBar />
    <div class="height">
      <slot />
    </div>
    <Footer />
  </main>
</template>

<style>
.height {
  padding: 1rem;
  height: calc(100vh - 165px)
}

@media (max-width: 768px) {
  .height {
    height: calc(100vh - 350px)
  }
}
</style>
