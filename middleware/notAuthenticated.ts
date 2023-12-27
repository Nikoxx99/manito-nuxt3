export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()
  if (authStore.isAuth) {
    console.log(authStore)
  }
})