<template>
  <nav class="h-12 flex items-center justify-between bg-zinc-900 border-yellow-500 border-b-2">
    <div class="flex items-center">
      <NuxtLink to="/">
        <NuxtImg src="/animemanito.png" alt="logo" class="h-8 ml-2" />
      </NuxtLink>
    </div>
    <ul class="list-none">
      <li 
        class="inline px-2 hover:text-yellow-500 hover:transition-colors duration-300"
      >
        <NuxtLink to="/">
          {{ $t('navbar.home') }}
        </NuxtLink>
      </li>
      <li 
        class="inline px-2 hover:text-yellow-500 hover:transition-colors duration-300"
      >
        <NuxtLink to="/animes">
          {{ $t('navbar.animes') }}
        </NuxtLink>
      </li>
    </ul>
    <ul class="list-none">
      <li 
        v-if="!isAuth"
        class="inline px-2 hover:text-yellow-500 hover:transition-colors duration-300"
      >
        <NuxtLink to="/auth/login">
          {{ $t('navbar.login') }}
        </NuxtLink>
      </li>
      <li 
        v-if="!isAuth"
        class="inline px-2 hover:text-yellow-500 hover:transition-colors duration-300"
      >
        <NuxtLink to="/auth/register">
          {{ $t('navbar.register') }}
        </NuxtLink>
      </li>
      <li 
        v-if="isAuth"
        class="inline px-2 hover:text-yellow-500 hover:transition-colors duration-300"
      >
        <NuxtLink to="/profile">
          {{ $t('navbar.profile') }}
        </NuxtLink>
      </li>
      <li 
        v-if="isAuth"
        class="inline px-2 hover:text-yellow-500 hover:transition-colors duration-300"
      >
        <NuxtLink to="/logout">
          {{ $t('navbar.logout') }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  const isAuth = ref(false)
  const isMobile = ref(false)
</script>

<style scoped>

a {
  text-decoration: none;
}
</style>
