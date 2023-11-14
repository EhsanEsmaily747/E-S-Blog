<script setup>

definePageMeta({
        middleware:'auth'
    })

    
const {getSession}=useAuth()
const userData=await getSession()
const route = useRoute()
const data=await useFetch(`/api/posts/post?name=${route.params.id}`)
const posts=ref(toRaw(data.data.value.posts))
    
const editPost = ref({
    title: '',
    subtitle: '',
    author: '',
    content: '',
    picture: '',
    category: '',
    editing:false
})


const addPost=(post)=>{
    posts.value.push(post)
}


const handleEdit = (id) =>{

    const index=posts.value.findIndex((post)=> post._id==id)
    editPost.value=toRaw(posts.value.splice(index,1))
    editPost.value=editPost.value[0]
    editPost.value.editing=true
    console.log(editPost.value);
}

const handleDelete=(id)=>{
    const index=posts.value.findIndex((post)=>post._id==id)
    posts.value.splice(index,1)
}

</script>
<template>
    <div>
        <UserNav :id="userData.user.name.id"/>
        <div class="Container">

            <EditPost :post="editPost" :id="$route.params.id"  @post-add="addPost"/>

            <div class="posts">
                <UserPost v-for="post in posts" :post="post" @onUpdate="handleEdit" @delete-post="handleDelete"/>
                
            </div>
        </div>
        <Footer/>
    </div>
</template>

<style scoped>
.Container {
    position: relative;
    width: 70%;
    margin-inline: auto;
    display: flex;
    margin-top: 3rem;
    justify-content: space-evenly;
    min-height: 78vh;
}

.posts {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}


@media (max-width:988px) {

    .Container {
        flex-direction: column-reverse;
    }
}
</style>