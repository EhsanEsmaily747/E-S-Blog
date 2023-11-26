<script setup>
definePageMeta({
    middleware: 'authen'
})
let posts = ref({})
const searchInput = ref('')
const handleSearch = async () => {
    if (searchInput.value.length > 1) {
        const postData = await useFetch(`/api/posts/post?searchTerm=${searchInput.value}`)
        posts.value = toRaw(postData.data.value.posts)
        // console.log(posts.value);
    }
}
const handleDelete = (id) => {
    const index = posts.value.findIndex((post)=>{
        return post._id==id
    })
    posts.value.splice(index,1)
}

</script>

<template>
    <div>
        <AdminNav />
        <div class="container">
            <div class="searchBar">
                <input type="search" class="search" v-model="searchInput" @keydown="handleSearch"
                    placeholder="Search By Title">
            </div>

            <div class="posts">
                <Post v-for="post in posts" :post="post" :show-delete="'true'" @handle-delete="handleDelete" />
            </div>
        </div>
        <Footer />
    </div>
</template>


<style scoped>
.searchBar {
    margin-top: -15px;
    display: flex;
    justify-content: center;

}

.search {
    width: 60%;
    padding: .7rem 1rem;
    border-radius: 1rem;
    border: solid 1px lightgray;
    box-shadow: 0 0 2px gray;
    transition: all 100ms ease-in-out;
    outline: none;
    font-size: 1em;
}

.search:focus {
    box-shadow: 0 0 2px lightblue;
    border-color: lightblue;
}

.posts {
    margin-inline: auto;
    /* background: #000; */
    width: 85%;
    margin-top: 3em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.container {
    width: 70%;
    margin-inline: auto;
    margin-top: 5rem;
    min-height: 74vh;
}
</style>