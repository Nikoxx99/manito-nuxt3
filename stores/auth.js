import { difineStore } from 'pinia'
export const useAuthStore = difineStore('auth', () => {
    const isAuth = ref(false)
    function setAuth(auth) {
      isAuth.value = auth
    }
    
    function $reset () {
      isAuth.value = false
    }

    return {
      isAuth,
      setAuth,
      $reset
    }
})
  