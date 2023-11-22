<script setup>
const { status, getSession } = useAuth()
const userData = await getSession()


const { loginopener, signupopener, showLogin, showSign } = useModal()

const data = await useFetch('/api/categories/category')
let cats = ref(toRaw(data.data.value.cats))


</script>



<template>
    <div>
        <NavBar v-if="status == 'unauthenticated'" @open-sign="signupopener()" @open-login="loginopener()" />
        <UserNav v-else-if="userData.user.name.isAdmin=='false'" :id="userData.user.name.id"></UserNav>
        <AdminNav v-else />

        <transition name="fade">
            <Login v-show="showLogin" @close-modal="showLogin = false" @open-register="signupopener()" />
        </transition>
        <transition name="fade">
            <Signup v-show="showSign" @close-modal="showSign = false" @open-login="loginopener()" />
        </transition>



        <div class="cates m-block" style="justify-content: center;">
            <Category v-for="cat in cats" :cat="cat"/>
        </div>
        
        <div class="searchBar">
            <input type="search" class="search" placeholder="Search By Title">
        </div>

        <div class="posts m-block">

        </div>
        <Footer/>
    </div>
</template>

<style src="../assets/transition.css"></style>

<style scoped>

.cates{
    padding-inline: 20px;
    display: flex;
    width: 70vw;
    /* flex-wrap: wrap; */
    overflow-x: scroll;
    margin-inline: auto;
}
.cates::-webkit-scrollbar{
    background: white;
}

.searchBar{
    display: flex;
    justify-content: center;
    
}

.search{
    width: 60%;
    padding: .7rem 1rem;
    border-radius: 1rem;
    border: solid 1px lightgray;
    box-shadow: 0 0 2px gray;
    transition: all 100ms ease-in-out;
    outline: none;
    font-size: 1em;
}

.search:focus{
    box-shadow: 0 0 2px lightblue;
    border-color: lightblue;
}

.m-block {
    margin-block: 2rem;
}

.posts {
    width: 70%;
    margin-inline: auto;
    justify-content: center;
    min-height: 54vh;
}
</style>