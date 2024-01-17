<template>
  <div>

  </div>
</template>

<script setup>
  const authStore = useAuthStore();
  onMounted(() => {
    authStore.reset()
  })
</script>

<style lang="scss" scoped>

</style>