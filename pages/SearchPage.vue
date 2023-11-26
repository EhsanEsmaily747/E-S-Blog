<script setup>
const { status, data } = useAuth()
// const userData = await getSession()
const route = useRoute()
const words = route.href.split('=')
const category = words[1]

const { loginopener, signupopener, showLogin, showSign } = useModal()
const catsData = await useFetch('/api/categories/category')
let cats = ref(toRaw(catsData.data.value.cats))
let posts=ref({})

if(category){
  const data = await useFetch(`/api/posts/post?category=${category}`)
  posts.value = toRaw(data.data.value.posts)
}

const handleCatSearch = async (id) => {
    const data = await useFetch(`/api/posts/post?category=${id}`)
    posts.value = toRaw(data.data.value.posts)
}

const searchInput=ref('')

const handleSearch = async () =>{
    if(searchInput.value.length > 1){
        const postData = await useFetch(`/api/posts/post?searchTerm=${searchInput.value}`)
        posts.value = toRaw(postData.data.value.posts)
        // console.log(posts.value);
    }
}
</script>



<template>
    <div>
        <NavBar v-if="status == 'unauthenticated'" @open-sign="signupopener()" @open-login="loginopener()" />
        <UserNav v-else-if="data.user.name.isAdmin=='false'" :id="data.user.name.id"></UserNav>
        <AdminNav v-else />

        <transition name="fade">
            <Login v-show="showLogin" @close-modal="showLogin = false" @open-register="signupopener()" />
        </transition>
        <transition name="fade">
            <Signup v-show="showSign" @close-modal="showSign = false" @open-login="loginopener()" />
        </transition>



        <div class="cates m-block" style="justify-content: center;">
            <Category v-for="cat in cats" :cat="cat" @click="handleCatSearch(cat._id)"/>
        </div>
        
        <div class="searchBar">
            <input type="search" class="search" v-model="searchInput" @keydown="handleSearch" placeholder="Search By Title">
        </div>

        <div class="posts m-block" >
            <Post v-for="post in posts" :post="post" />
        </div>
    </div>
</template>

<style src="../assets/transition.css"></style>
<style scoped>


.cates{
    padding-inline: 20px;
    display: flex;
    width: 70vw;
    overflow-x: scroll;
    margin-inline: auto;
}
.cates::-webkit-scrollbar{
    background: white;
}

.searchBar{
    margin-top: -15px;
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
    min-height: 54dvh;
}
</style>