<template>
  <div>
    <NuxtLink
      to="/animes/1"
      style="width:210px;"
      class="hover:text-yellow-600 hover:transition-colors duration-300"
    >
      <NuxtImg
        src="https://placehold.co/210x294"
        alt="placeholder"
        :width="210"
        :height="294"
        class="rounded-lg"
      />
    </NuxtLink>
      <div
        style="width:210px;"
        class="flex items-center mt-2"
      >
        <NuxtLink
          to="/animes/1/episodes/1"
          class="hover:text-yellow-600 hover:transition-colors duration-300"
        >
          <p class="text-sm font-normal text-gray-300 line-clamp-2">
            Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai
          </p>
      </NuxtLink>

        <IconPlus
          class="text-yellow-500 hover:text-white hover:transition-colors duration-300 cursor-pointer mr-1"
          style="width:50px;height:50px;"
        />
      </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>