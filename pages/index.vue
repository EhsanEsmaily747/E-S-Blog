
<script setup>

const {status,getSession}=useAuth()
const data=await getSession()
console.log( data.user.name.isAdmin=='false');
const Categories=await useFetch('/api/categories/category')
    let cats=ref(toRaw(Categories.data.value.cats))


    const {loginopener,signupopener,showLogin,showSign}=useModal()
    

</script>



<template>
    <div>
        

        <NavBar v-if="status == 'unauthenticated'" @open-sign="signupopener()" @open-login="loginopener()" />
        <UserNav v-else-if=" data.user.name.isAdmin=='false'" :id="data.user.name.id"></UserNav>
        <AdminNav v-else/>

            <transition name="fade">
                <Login v-show="showLogin" @close-modal="showLogin=false" @open-register="signupopener()"/>
            </transition>
            <transition name="fade">
                <Signup v-show="showSign" @close-modal="showSign=false" @open-login="loginopener()"/>
            </transition>
                
        
            <Hero></Hero>
            <div class="downside">
                <div class="postPart" >
                    <h2>Most View :</h2>
                    <div class="posts">
                        <!-- <Post :post="post"></Post>
                        <Post :post="post"></Post>
                        <Post :post="post"></Post>
                        <Post :post="post"></Post>
                        <Post :post="post"></Post>
                        <Post :post="post"></Post>
                        <Post :post="post"></Post> -->
                        
                    </div>
        
                </div>
                <div style="position: sticky; top: 5rem;">
                    
                    <div class="catePart">
                        <h2>Categories :</h2>
                        
                        <div class="cates" style="justify-content: flex-start;">
                            <Category v-for="cat in cats" :cat="cat"/>
                        </div>
                        <NuxtLink class="searchpagebtn" to="/SearchPage">Search More ...</NuxtLink >
                     </div>
                </div>
            </div>
            <Footer/>
        
    </div>
</template>



<style src="../assets/style.css"></style>
<style src="../assets/transition.css">

</style>