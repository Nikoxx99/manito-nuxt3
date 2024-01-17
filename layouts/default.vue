<template>
<<<<<<< HEAD
  <v-app>
    <NuxtPage />
  </v-app>
</template>
=======
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
>>>>>>> 9184e31d73f4c48ad9aace621f7ee5daba8bfb08
