export default defineNuxtRouteMiddleware((from,to)=>{
    const {status}=useAuth()
    if (status.value=='authenticated') {
        return
    }else{
        return navigateTo('/')
    }
    
})