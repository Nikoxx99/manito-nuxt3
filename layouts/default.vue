<template>
  <div class="dark:bg-zinc-800 h-full dark:text-white">
    <Header />
    <slot />
  </div>
</template>

<script setup>
const { readUserFromCookieAndSetSharedState } = useAuthStore()
onMounted(() => {
  readUserFromCookieAndSetSharedState()
})
</script>

<style lang="scss" scoped>

</style>