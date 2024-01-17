<template>
  <div>
    <section class="w-full mt-5 p-3 bg-zinc-900 rounded-lg">
      {{ title }}
    </section>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
    }
  })
</script>

<style lang="scss" scoped>

</style>