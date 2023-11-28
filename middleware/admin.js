export default defineNuxtRouteMiddleware((from,to)=>{
    let data = ref({})
    const { decode , getToken } = useAuth()
    let token = ref('')
    
    token.value = getToken()
    if(token.value){
        data.value=decode(token.value)
    }


    if (token.value && data.value.isAdmin) {
        return
    }else{
        return navigateTo('/')
    }
    
})