<script setup>
    const props=defineProps({
        placeholder:String
    })
</script>


<template>
    <div class="searchBar">
        <input type="search" class="search" :placeholder="placeholder">
    </div>
</template>

<style scoped>
    
.searchBar{
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

</style>
