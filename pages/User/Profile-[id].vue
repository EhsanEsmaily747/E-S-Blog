<script setup>
 definePageMeta({
        middleware:'authen',
    })

const route = useRoute()

const { showEditModal } = useModal();
let userInfo = ref({})

const data=await useFetch(`/api/posts/post?name=${route.params.id}`)
const posts=ref(toRaw(data.data.value.posts))
console.log(posts);

const user = await useFetch(`/api/users/user?id=${route.params.id}`)
userInfo.value = toRaw(user.data.value[0])

const handleModal = () => {

    showEditModal.value = false
}

const refresh = (user) => {
    userInfo.value.picture = user.picture,
        userInfo.value.username = user.username,
        userInfo.value.email = user.email,
        userInfo.value._id = user._id,
        userInfo.value.password=user.password
}

// console.log(userInfo);

// console.log(typeof userInfo);


// console.log(post);
</script>

<template>
    <div>

        <UserNav :id="userInfo._id" />
        <div class="container">
    
            <div class="content">
                <div class="Profile-Container">
                    <div class="editInfo">
                        <Icon class="icon" name='mdi:account-edit-outline' @click="showEditModal = true" />
                    </div>
                    <img :src="userInfo.picture" class="Ppic" alt="">
    
                    <div class="editpost">
                        <Icon class="icon" name="material-symbols:edit-outline" @click="navigateTo(`/User/EditPost-${userInfo._id}`)"/>
                    </div>
                </div>
                <transition name="fade">
                    <EditModal :datas="userInfo" v-if="showEditModal" @refresh-data="refresh" @close-modal="handleModal">
                    </EditModal>
    
                </transition>
    
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

<style src="../../assets/transition.css"></style>

<style scoped>
.Profile-Container {
    margin-inline: auto;
    display: flex;
    width: 50%;
    justify-content: space-evenly;
    align-items: center;
}

.icon {
    width: 25px;
    height: 25px;
    filter: drop-shadow(0 10px 4px gray);
    cursor: pointer;
    transition: transform 100ms ease-in;
}

.icon:hover {
    transform: scale(1.1);
}

.editInfo,
.editpost {
    /* background: yellow; */
    border-radius: 50%;
    padding: .6em;
}

.content {
    margin-inline: auto;
}

.container {
    min-height: 72vh;
    margin-top: 4rem;
    margin-bottom: 2rem;
    width: 70%;
    text-align: center;
    margin-inline: auto;
}

.Ppic {

    width: 8rem;
    aspect-ratio: 1;
    border-radius: 50%;
    box-shadow: 0 15px 20px gray;
}

.email {
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