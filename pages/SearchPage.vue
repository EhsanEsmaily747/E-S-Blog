<script setup>
    const {loginopener,signupopener,showLogin,showSign}=useModal()

    const data=await useFetch('/api/categories/category')
    let cats=ref(toRaw(data.data.value.cats))
    

</script>



<template>
    <NavBar 
    @open-sign="signupopener()" 
    @open-login="loginopener()" ></NavBar>
    
    <transition name="fade">
        <Login v-show="showLogin" @close-modal="showLogin=false" @open-register="signupopener()"/>
    
    </transition>
    <transition name="fade">
        <Signup v-show="showSign" @close-modal="showSign=false" @open-login="loginopener()"/>
    
    </transition>
    


        <div class="cates m-block" style="justify-content: center;">        
               <Category v-for="cat in cats" :cat="cat"/>
        </div>

    <Search placeholder="Search By Title....."/>

    <div class="posts m-block">
           
    </div>

    <Footer/>
</template>

<style src="../assets/transition.css"></style>

<style scoped>
    .m-block{
        margin-block: 2rem;
    }
    .posts{
        width: 70%;
        margin-inline: auto;
        justify-content: center;
        min-height: 54vh;
    }
</style>