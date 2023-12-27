<template>
  <nav class="h-12 flex items-center justify-between bg-zinc-900 border-yellow-500 border-b-2 px-4">
    <div class="flex items-center">
      <NuxtLink to="/" class="mr-4">
        <NuxtImg src="/animemanito.png" alt="logo" class="h-8 ml-2" />
      </NuxtLink>
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
    </div>
    <ul class="list-none">
      <li 
        v-if="!authStore.isAuth"
        class="inline px-2 hover:text-yellow-500 hover:transition-colors duration-300"
      >
        <NuxtLink to="/auth/login">
          {{ $t('navbar.login') }}
        </NuxtLink>
      </li>
      <li 
        v-if="!authStore.isAuth"
        class="inline px-2 hover:text-yellow-500 hover:transition-colors duration-300"
      >
        <NuxtLink to="/auth/register">
          {{ $t('navbar.register') }}
        </NuxtLink>
      </li>
      <li 
        v-if="authStore.isAuth"
        class="inline px-2 hover:text-yellow-500 hover:transition-colors duration-300"
      >
        <NuxtLink to="/profile">
          {{ $t('navbar.profile') }}
        </NuxtLink>
      </li>
      <li 
        v-if="authStore.isAuth"
        class="inline px-2 hover:text-yellow-500 hover:transition-colors duration-300"
      >
        <NuxtLink to="/auth/logout">
          {{ $t('navbar.logout') }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const authStore = useAuthStore();
</script>

<style scoped>

a {
  text-decoration: none;
}
</style>
