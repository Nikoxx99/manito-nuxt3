import { defineStore } from 'pinia'
export const useAuthStore = defineStore('auth', () => {
    const isAuth = ref(false)
    const jwt = ref(null)
    const user = ref(null)
    async function login (formData) {
      await useFetch ('http://localhost:1337/api/auth/local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(({ data: { _value: response } }) => {
        console.log('store - auth - login: ', toRaw(response))
        isAuth.value = true
        jwt.value = response.jwt
        user.value = response.user
      })
      .catch(error => {
        console.log('store - auth - login: ', error)
      })
    }

    function readUserFromCookieAndSetSharedState () {
      const cookie = useCookie('auth')
      const jwt = cookie.jwt
      const user = cookie.user
      if (jwt && user) {
        isAuth.value = true
        jwt.value = jwt
        user.value = user
      }
    }
    
    function reset () {
      isAuth.value = false
      jwt.value = null
      user.value = null
    }

    return {
      isAuth,
      jwt,
      user,
      login,
      readUserFromCookieAndSetSharedState,
      reset
    }
},
{
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: 'strict',
    }),
  }
})
  