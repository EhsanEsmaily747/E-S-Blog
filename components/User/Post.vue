<script setup>
    const emit=defineEmits(['delete-post'])
    const props=defineProps({
        post:Object
    })

const handleDelete=async()=>{
    emit('delete-post',props.post._id)

    try {
        const res=await useFetch(`/api/posts/post?id=${props.post._id}`,{
            method:'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

</script>

<template>
    <div class="main">

        <div class="post" @click="navigateTo('/PostPage')">
            <div class="postbody">
                    <p class="title">{{post.title}}</p>
                    <p class="desc">{{ post.content }}</p>
            </div>
            <img class="postpic" :src="post.picture" alt="">
        </div>
        <div class="options">
            <Icon class="icon" name="mdi-light:pencil" @click="$emit('onUpdate' , post._id)"/>
            <Icon class="icon" name="mdi-light:delete" @click="handleDelete"/>
        </div>
    </div>
</template>

<style src="../../assets/post.css"></style>
<style scoped>
.main{
    display: flex;
}
.icon{
    width: 18px;
    transition: transform 100ms ease-in-out;
}
.icon:hover{
    transform: scale(1.1);
}

.options{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-block: 6px;
}
.options>*{
    cursor: pointer;
    margin-bottom: 10px;
}

    </style>
