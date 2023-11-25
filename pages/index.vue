
<script setup>

const { status, getSession } = useAuth()
const data = await getSession()
const Categories = await useFetch('/api/categories/category')
let cats = ref(toRaw(Categories.data.value.cats))

const postsRaw = await useFetch('/api/posts/latest')
const posts=toRaw(postsRaw.data.value)
// console.log(posts);
// const posts = await 

const { loginopener, signupopener, showLogin, showSign } = useModal()


</script>



<template>
    <div>
        <!-- <button @click="useFetch('/api/posts/fake')">addposts</button> -->

        <NavBar v-if="status == 'unauthenticated'" @open-sign="signupopener()" @open-login="loginopener()" />
        <UserNav v-else-if="data.user.name.isAdmin == 'false'" :id="data.user.name.id"></UserNav>
        <AdminNav v-else />

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
        <Footer />

    </div>
</template>



<style src="../assets/style.css"></style>
<style src="../assets/transition.css"></style>