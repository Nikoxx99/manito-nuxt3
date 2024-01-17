<template>
  <div>
    <LayoutSectionTitle
      title="Latest Episodes"
    />
    <section class="w-full my-5 p-3 bg-zinc-900 rounded-lg">
      <div class="grid grid-cols-7 gap-2">
        <EpisodeCard
          v-for="episode in 21"
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