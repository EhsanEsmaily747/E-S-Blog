<script setup>
    const props=defineProps({
        post:Object,
        showDelete:String
    })

    // console.log(post);
</script>

<template>
    <div style="position: relative;">

        <Icon class="delete" name="material-symbols:delete-outline" v-if="showDelete=='true'"></Icon>
        <div class="post" @click="navigateTo(`/PostPage-${post._id}`)">
    
                        <div class="postbody">
                                <p class="title">{{post.title}}</p>
                                <p class="desc">{{ post.content }}</p>
                        </div>
                        <img class="postpic" :src="post.picture" alt="">
                    </div>
    </div>
</template>

<style src="./../assets/post.css">
</style>
