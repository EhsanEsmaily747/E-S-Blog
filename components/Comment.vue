<script setup>
const props = defineProps({
    data: Object,
    user: String
})
</script>

<template>
    <div class="cmtcontainer">

        <div class="cmtItem">
            <div class="writer">
                <img :src="data.author.picture" alt="" class="picture">
                <p class="name">{{ data.author.username }}</p>
            </div>
            <p class="content">{{ data.content }}</p>
            <Icon v-if="data.author._id==user" name="fluent:delete-48-filled" class="icon" @click="$emit('deleteCmt',data)"/>
        </div>
    </div>
</template>


<style scoped>
.icon {
    width: 18px;
    position: absolute;
    right: 0px;
    top: 10px;
    cursor: pointer;
}

.cmtcontainer {
    border-radius: .5rem;
    margin-bottom: 1em;
    background: rgb(240, 240, 240);
    padding-inline: 1em;
    padding-block: .5em;
}

.cmtItem {
    position: relative;
}

.cmtItem .writer {
    display: flex;
    align-items: center;
}

.cmtItem .writer .name {
    margin-left: 10px;
    font-size: 13px;
    /* font-weight: bold; */
}

.cmtItem .content {
    margin-top: 3px;
    font-size: 14px;
    text-indent: 40px;
    color: rgb(37, 37, 37);
}


.cmtItem .writer .picture {
    width: 23px;
    height: 23px;
    border: none;
    border-radius: 50%;
}</style>