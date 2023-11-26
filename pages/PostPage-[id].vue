<script setup>
const route = useRoute()
const { status, data } = useAuth()
const { loginopener, signupopener, showLogin, showSign } = useModal()

const postData = await useFetch(`/api/posts/post?id=${route.params.id}`)
const post = toRaw(postData.data.value).posts[0]
const commentData = await useFetch(`/api/comments/comment?id=${post._id}`)
const cmts = toRaw(commentData.data.value).comments
// let sessionData = await getSession()

console.log(cmts);

// console.log(post);
// console.log(data);

const like = ref(false)
const showCmt = ref(false)
let updatedPost = {}
const postInfo = ref({
    likes: post.likes.length,
    comments: post.comments.length,
})


if (status.value == 'authenticated') {
    post.likes.includes(data.value.user.name.id) ? like.value = true : like.value = false
}

const handleLike = async () => {
    if (status.value == 'authenticated') {

        if (like.value) {
            postInfo.value.likes--
            like.value = false
            const index = post.likes.indexOf(data.value.user.name.id)
            post.likes.splice(index, 1)
        } else {
            postInfo.value.likes++
            like.value = true
            post.likes.push(data.value.user.name.id)
        }

        updatedPost = post
        console.log(updatedPost);
        await useFetch(`/api/posts/post?id=${post._id}`, {
            method: 'PUT',
            body: {
                updatedPost
            }
        })
    } else {
        alert('You must be Logged In')
        showLogin.value = true
    }
}


const showComments = () => {
    if (status.value == 'authenticated') {
        showCmt.value = !showCmt.value
    }else{
        alert('You must be Logged In')
        showLogin.value = true
    }
}



//                                              COMMENT SCRIPTS                                  //


const comments = ref(cmts)
// console.log(comments);
// console.log(post);

postInfo.value.comments = computed(() => {
    return comments.value.length

})
const comment = ref('')

const addComment = async () => {
    if (status.value == 'authenticated') {


        let newCmt = {
            content: comment.value,
            author: data.value.user.name.id,
            postId: route.params.id
        }
        const res = await useFetch('/api/comments/comment', {
            method: 'POST',
            body: {
                newCmt
            }
        })
        const createdComment = toRaw(res.data.value).newComment
        // console.log(createdComment);
        const newComment = {
            author: {
                _id: data.value.user.name.id,
                username: data.value.user.name.name,
                picture: data.value.user.name.pic
            },
            _id: createdComment._id,
            content: comment.value
        }
        comments.value.push(newComment)
        
        comment.value = ''
        updatedPost = post
        updatedPost.comments.pop()
        updatedPost.comments.push(createdComment._id)

        console.log(updatedPost.comments);
        await useFetch(`/api/posts/post?id=${post._id}`, {
            method: 'PUT',
            body: {
                updatedPost
            },
        }
        )

    } else {
        alert('You must be logged in')
        showLogin.value = true
    }


}


const handleDelete = async (data) => {
    const index = comments.value.findIndex((cmt) => {
        return cmt.comment == data.comment
    })
    comments.value.splice(index, 1)
    await useFetch(`/api/comments/comment?id=${data._id}`,{
        method: 'DELETE'
    })
}



</script>

<template>
    <div>

        <NavBar v-if="status == 'unauthenticated'" @open-sign="signupopener()" @open-login="loginopener()" />
        <UserNav v-else-if="data.user.name.isAdmin == 'false'" :id="data.user.name.id" />
        <AdminNav v-else />

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
                            <Icon class="icon" @click="handleLike" :name="like ? 'mdi:like' : 'mdi:like-outline'" />{{
                                postInfo.likes }}
                        </li>
                        <li>
                            <Icon class="icon" @click="showComments" name="memory:message" />{{ postInfo.comments }}
                        </li>

                    </ul>
                </div>
            </div>

            <transition name="drop">
                <div v-if="showCmt" style="margin-bottom: 1rem;">

                    <section class="comment">
                        <Comment v-for="comment in comments" :data="comment" :user="data.user.name.id"
                            @deleteCmt="handleDelete" />
                    </section>

                    <div class="input">
                        <input class="textInput" type="text" v-model="comment">
                        <Icon class="sendIcon" @click="addComment" name="lucide:send" />
                    </div>
                </div>
            </transition>

            <PostText :text="post.content" :subTitle="post.subtitle" />

        </div>

        <Footer />
    </div>
</template>

<style src="../assets/transition.css"></style>
<style scoped>

.drop-enter-active{
  animation: bounce-in 0.4s;
}
.drop-leave-active {
  animation: bounce-in 0.4s reverse;
}

@keyframes bounce-in {
  0%{
    transform: scaleY(0);
  }
  50%{
    transform:  scaleY(.5);
    
  }
  100%{
    transform:  scaleY(1);
  }
}


/* COMMENT STYLES START */

.sendIcon {
    width: 20px;
    margin-inline: .5rem;
    cursor: pointer;
}

.sendIcon:focus {
    transform: scale(1.2);
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

.comment::-webkit-scrollbar {
    background: white;
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
    /* background: #000; */

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
    /* box-shadow: 0 0 6px black; */
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