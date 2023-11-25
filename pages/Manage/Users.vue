<script setup>
    definePageMeta({
        middleware:'auth'
    })

    const searchInput = ref('')
    const users = ref({})
    const handleSearch = async () =>{
    if(searchInput.value.length > 1){
        const userData = await useFetch(`/api/users/user?searchTerm=${searchInput.value}`)
        users.value = toRaw(userData.data.value)
        console.log(users.value);
    }
}

</script>

<template>
    <div>
        <AdminNav/>
        <div class="container">
            <div class="searchBar">
                <input type="search" class="search" v-model="searchInput" @keydown="handleSearch"
                    placeholder="Search By Username">
            </div>
            <div class="users" >
                <UserBox v-for="user in users" :user="user"/>    
            </div>
        </div>
        <Footer/>
    </div>
</template>


<style scoped>

.searchBar{
    margin-top: -15px;
    display: flex;
    justify-content: center;
    
}

.search{
    width: 60%;
    padding: .7rem 1rem;
    border-radius: 1rem;
    border: solid 1px lightgray;
    box-shadow: 0 0 2px gray;
    transition: all 100ms ease-in-out;
    outline: none;
    font-size: 1em;
}

.search:focus{
    box-shadow: 0 0 2px lightblue;
    border-color: lightblue;
}
    .users{
        margin-top: 1em;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: wrap;
}

.container{
    width: 70%;
    margin-inline: auto;
    margin-top: 5rem;
    min-height: 74vh;
}
</style>