<template>
  <div>
    <NuxtLink
      to="/animes/1/episodes/1"
      class="hover:text-yellow-600 hover:transition-colors duration-300"
    >
      <NuxtImg
        src="https://placehold.co/256x150"
        alt="placeholder"
        :width="256"
        :height="150"
        class="rounded-lg"
      />
      <div class="mt-2">
        <h3 class="text-lg font-semibold">
            Episode 1
        </h3>
        <p class="text-sm font-normal text-gray-300">
          1 hour ago
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>