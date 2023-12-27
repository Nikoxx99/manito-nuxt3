<template>
  <div>
    <LayoutSectionTitle
      title="Trending"
    />
    <section class="w-full my-5 p-3 bg-zinc-900 rounded-lg overflow-hidden">
      <div class="grid grid-flow-col auto-cols-max gap-2">
        <SerieCard
          v-for="episode in 10"
          :key="episode"
        />
      </div>
    </section>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>