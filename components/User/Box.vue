<script setup>
    const props = defineProps({
        user:Object
    })
</script>

<template>
    <div>
        <div class="user">
                <Icon class="delete" name="material-symbols:delete-outline" ></Icon>
                <img :src="user.picture" alt="">
                <p class="userName">{{ user.username }}</p>
                <p class="email">{{ user.email }}</p>

            </div>
    </div>
</template>

<style scoped>
    .user{
    width: 220px;
    height: 220px;
    box-sizing: border-box;
    margin: 1em;
    position: relative;
    padding: .8rem;
    border-radius: .5rem;
    /* width: fit-content; */
    box-shadow: 0 10px 12px gray;
    /* background: lightblue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform ease-in-out .2s;
}

.delete{
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    width: 20px;
}


.user img{
    width: 100px;
    border-radius: 1rem;
    margin-block: 1rem;
    box-shadow: 0 10px 12px lightgray;

}
.user .userName{
    font-size: large;
    font-weight: bold;
    font-style: italic;
    margin-bottom: .3em;

}

.user .email{
    color: gray;
    margin-bottom: 1rem;
}
</style>