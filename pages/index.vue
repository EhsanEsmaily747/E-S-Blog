
<script setup>

useFetch('/api/categories/category')
useFetch('/api/comments/comment')
useFetch('/api/posts/getAll')
useFetch('/api/users/getAll')

let data = ref({})
const { decode , getToken } = useAuth()
let token = ref('')
onMounted(() => {
    token.value = getToken()
    if(token.value){
        console.log('token here');

        data.value=decode(token.value)
    }
})

const Categories = await useFetch('/api/categories/category')

let cats = ref(toRaw(Categories.data.value.cats))

const postsRaw = await useFetch('/api/posts/latest')
const posts=toRaw(postsRaw.data.value)


const { loginopener, signupopener, showLogin, showSign } = useModal()


</script>



<template>
    <div>
        <!-- <button @click="useFetch('/api/posts/fake')">addposts</button> -->

        <NavBar v-if="!token" @open-sign="signupopener()" @open-login="loginopener()" />
        <UserNav v-else-if="!data.isAdmin" :id="data.id" @sign-out="token=false"></UserNav>
        <AdminNav v-else @sign-out="token=false" /> 

        <transition name="fade">
            <Login v-show="showLogin" @close-modal="showLogin = false" @open-register="signupopener()" />
        </transition>
        <transition name="fade">
            <Signup v-show="showSign" @close-modal="showSign = false" @open-login="loginopener()" />
        </transition>


        <Hero></Hero>
        <div class="downside">
            <div class="postPart">
                <h2>Latest Added :</h2>
                <div class="posts">
                    <Post v-for="post in posts" :post="post" :showDelete="'false'"></Post>

                </div>

            </div>
            <div style="position: sticky; top: 5rem;">

                <div class="catePart">
                    <h2>Categories :</h2>

                    <div class="cates" style="justify-content: flex-start; flex-wrap: wrap;">
                        <Category v-for="cat in cats" :cat="cat" @click="navigateTo(`/SearchPage?cat=${cat._id}`)"/>
                    </div>
                    <NuxtLink class="searchpagebtn" to="/SearchPage">Search More ...</NuxtLink>
                </div>
            </div>
        </div>
        <!-- <Footer /> -->

    </div>
</template>



<style src="../assets/style.css"></style>
<style src="../assets/transition.css"></style>