
<script setup>

     definePageMeta({
        middleware:'auth'
    })
    const {getSession}=useAuth()
    const dataSession=await getSession()


    const route=useRoute()

    let userInfo = ref({})

const data=await useFetch(`/api/posts/post?name=${route.params.id}`)
const posts=ref(toRaw(data.data.value.posts))


const user = await useFetch(`/api/users/user?id=${route.params.id}`)
userInfo.value = toRaw(user.data.value[0])

    // console.log(post);
</script>

<template>
    <div>
        <AdminNav v-if="dataSession.user.name.isAdmin=='true'"></AdminNav>
        <UserNav v-else :id="dataSession.user.name.id"></UserNav>
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
        <Footer></Footer>
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


.posts{
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: left;
}
</style>