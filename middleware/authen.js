export default defineNuxtRouteMiddleware((from, to) => {
    
    const { getToken } = useAuth()
    let token = ref('')
        
    token.value = getToken()
    
    if (token.value) {
        return
    } else {
        return navigateTo('/')
    }

})