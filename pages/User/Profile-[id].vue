<script setup>

const route = useRoute()

const { showEditModal } = useModal();
let userInfo = ref({})

const data=await useFetch(`/api/posts/post?name=${route.params.id}`)
const posts=ref(toRaw(data.data.value.posts))


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


const post = {
    pProfile: "/man.jpg",
    pWriter: "Brad Hussey",
    pTitle: "SunShine Rainbow",
    pContent: `I was 17 when I first read The Fig Tree. I was just about to graduate school and 
                begin my life. My mind was overflowing with ideas, countries, and careers I wanted 
                to pursue. But the overwhelm of choosing hadn’t yet kicked in. I was spinning 
                around in possibilities, like a giddy child on Christmas day examining unopened 
                presents.<br>
                
                And then I read this poem. And I stopped spinning. I sat down and read it again. And 
                again. I had never heard of Sylvia Plath before. How could she have written such a 
                relatable story? The muscles on my shoulders tensed as I realized that I would 
                indeed have to choose something. One day.<br><br>
                
                “I saw my life branching out before me like the green fig tree in the story. From the 
                tip of every branch, like a fat purple fig, a wonderful future beckoned and winked. 
                One fig was a husband and a happy home and children, and another fig was a 
                famous poet, and another fig was a brilliant professor, and another fig was Ee Gee, 
                the amazing editor, and another fig was Europe and Africa and South America, and 
                another fig was Constantin and Socrates and Attila and a pack of other lovers with 
                queer names and offbeat professions, and another fig was an Olympic lady crew 
                champion, and beyond and above these figs were many more figs I couldn’t quite 
                make out. I saw myself sitting in the crotch of this fig tree, starving to death, just 
                because I couldn’t make up my mind which of the figs I would choose. I wanted 
                each and every one of them, but choosing one meant losing all the rest, and as I sat 
                there, unable to decide, the figs began to wrinkle and go black, and, one by one, they 
                plopped to the ground at my feet.”
                
                ― Sylvia Plath, The Bell Jar`,
    pImage: "/benz.jpg",
}
// console.log(post);
</script>

<template>
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
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: left;
}
</style>