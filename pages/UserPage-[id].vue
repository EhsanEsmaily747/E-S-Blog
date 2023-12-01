
<script setup>

     definePageMeta({
        middleware:'authen'
    })
    let data = ref({})
const { decode , getToken } = useAuth()
let token = ref('')
onMounted(() => {
    token.value = getToken()
    if(token.value){
        data.value=decode(token.value)
    }
})

    const route=useRoute()

    let userInfo = ref({})

const postData=await useFetch(`/api/posts/post?name=${route.params.id}`)
const posts=ref(toRaw(postData.data.value.posts))

const user = await useFetch(`/api/users/user?id=${route.params.id}`)
userInfo.value = toRaw(user.data.value[0])

</script>

<template>
    <div>
        <AdminNav v-if="data.isAdmin"></AdminNav>
        <UserNav v-else :id="data.id"></UserNav>
        <div class="container">
            <div class="content">
                <div class="">
                    <img :src="userInfo.picture" class="Ppic" alt="">
    
                </div>
                
                <h2 class="name">{{ userInfo.username }}</h2>
                <p class="email">{{ userInfo.email }}</p>
                <div class="posts">
                    <Post v-for="post in posts" :post="post"></Post>
                    
                    
                    
                    
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

.content{
    margin-inline: auto;
}
.container{
    min-height: 74vh;
    margin-top: 4rem;
    margin-bottom: 2rem;
    width: 70%;
    text-align: center;
    margin-inline: auto;
}

.Ppic{
    
    width: 8rem;
    aspect-ratio: 1;
    border-radius: 50%;
    box-shadow: 0 5px 5px black;
}

.email{
    margin-top: -30px;
    color: gray;
}


.posts {
    width: 70vw;
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: left;
    /* background: #000; */
}
</style>