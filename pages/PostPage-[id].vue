<script setup>
const route=useRoute()
const { loginopener, signupopener, showLogin, showSign } = useModal()

const data=await useFetch(`/api/posts/post?id=${route.params.id}`)


const post=toRaw(data.data.value).posts[0]

// console.log(post.author.username);

const info = ref({
    likes: post.likes,
    comments: post.comments.length,
})

const like = ref(false)
const showCmt = ref(false)

const liked = async() => {
    if (like.value) {
        info.value.likes--
        like.value = false
    } else {
        info.value.likes++
        like.value = true
    }
    // const res=await useFetch(`/api/posts/post?id=${post._id}`,{
    //     method:'PUT',
    //     body:{

    //     }
    // })
}

const showComments = () => {
    showCmt.value = !showCmt.value
}



//                                              COMMENT SCRIPTS                                  //


const comments = ref([
    {
        author: 'Ehsan Emaily',
        pic: '/man.jpg',
        comment: 'I loved This post. And I am waiting for more from you '
    },
    {
        author: 'Ehsan Emaily',
        pic: '/man.jpg',
        comment: 'I loved This post. And I am waiting for more from you '
    },
    {
        author: 'Ehsan Emaily',
        pic: '/man.jpg',
        comment: 'I loved This post. And I am waiting for more from you '
    },
])

info.value.comments = computed(() => {
    return comments.value.length

})
const comment = ref('')
// console.log(comment);

const addComment = () => {
    const newComment = {
        author: 'Ehsan',
        pic: '/man.jpg',
        comment: comment.value
    }
    comments.value.push(newComment)
    comment.value = ''
}


const HandleComment = (data) => {
    const index = comments.value.findIndex((cmt) => {
        return cmt.comment == data.comment
    })
    console.log(index);
    comments.value.splice(index, 1)
}



</script>

<template>
    <NavBar @open-sign="signupopener()" @open-login="loginopener()"></NavBar>

    <transition name="fade">
        <Login v-show="showLogin" @close-modal="showLogin = false" @open-register="signupopener()" />

    </transition>
    <transition name="fade">
        <Signup v-show="showSign" @close-modal="showSign = false" @open-login="loginopener()" />

    </transition>

    <div class="container">
        <h2 class="postTitle">{{ post.title }}</h2>

        <div class="writerinfo">
            <img :src="post.author.picture" class="pimage" alt="">
            <p class="user" @click="navigateTo(`/UserPage-${post.author._id}`)">{{ post.author.username }}</p>
        </div>

        <div class="postImage">
            <img :src="post.picture" alt="">
            <div class="icons">
                <ul>
                    <li>
                        <Icon class="icon" @click="liked" :name="!like ? 'mdi:like-outline' : 'mdi:like'" />{{ info.likes }}
                    </li>
                    <li>
                        <Icon class="icon" @click="showComments" name="memory:message" />{{ info.comments }}
                    </li>

                </ul>
            </div>
        </div>


        <div v-if="showCmt" style="
        margin-bottom: 1rem;
        ">
            <section class="comment">

                <Comment v-for="cmt in comments" :data="cmt" @deleteCmt="HandleComment" />

            </section>
            <div class="input">
                <input class="textInput" type="text" v-model="comment">
                <Icon class="sendIcon" @click="addComment" name="lucide:send" />
            </div>
        </div>

        <PostText :text="post.content" :subTitle="post.subTitle"/>

    </div>

    <Footer />
</template>

<style src="../assets/transition.css"></style>
<style scoped>
/* COMMENT STYLES START */

.sendIcon {
    width: 20px;
    margin-inline: .5rem;
}

.input {
    align-items: center;
    border: solid 1px gray;
    margin-inline: auto;
    width: 90%;
    display: flex;

    padding-block: .4em;
    padding-inline: .6em;
    border-radius: .3em;
}

.textInput {
    width: 100%;
    border: none;
    outline: none;
    resize: none;
    /* height: ; */
}

.comment {
    /* border: solid 1px lightgray; */
    margin-block: 1rem;
    max-height: 350px;
    overflow-y: scroll;

    padding: 1rem;
    box-sizing: border-box;
    /* background: gray; */
}


/* COMMENT STYLES END */



.postImage img {
    margin-top: 1rem;
    border: solid 1px gray;
    border-radius: 1.5rem;
    width: 100%;

}

.user {
    text-decoration: none;
    cursor: pointer;
}

.container {
    width: 45%;
    margin-inline: auto;
    margin-block: 2rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    font-family: serif;
    color: rgb(65, 65, 65);
    /* background: gray; */
    /* box-sizing: border-box; */
}

.postTitle {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: bold;
}

.writerinfo {
    display: flex;
    justify-content: flex-start;
    margin-left: .5rem;
    align-items: center;
    margin-bottom: .2rem;
}

.pimage {
    width: 2.2rem;
    height: 2.2rem;
    box-shadow: 0 0 6px black;
    border-radius: 50%;
    margin-right: 1rem;
    margin-left: 0;
}

.postImage {
    margin-bottom: 3rem;
    margin-inline: auto;
}


.icons ul {
    margin-top: .5rem;
    display: flex;
    align-items: center;
    list-style-type: none;
    font-size: 13px;
    justify-content: flex-end;
}

li {
    margin-inline: 10px;
    display: flex;
    align-items: center;
}

.icon1 {
    width: 20px;
    margin-inline: 10px;

}

.icon {
    margin-inline: 10px;
    cursor: pointer;
    width: 20px;
    border: none;
    transition: transform 200ms ease-in-out;
}


.icon:active {
    /* width: 25px; */
    transform: scale(1.3);
}</style>