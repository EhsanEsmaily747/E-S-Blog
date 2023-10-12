<script setup>
    
</script>

<template>
    <header >
        <div class="navbar flex">
        <p class="logo" >E&S BLOG</p >
        <div class="flex rightdev" >
        <ul class="navlist flex">

            <NuxtLink class="navItem" to="/">Home</NuxtLink >
            <NuxtLink class="navItem" to="/StoryPage">Our History</NuxtLink >
            <NuxtLink class="navItem" @click="$emit('open-login')">Sign In</NuxtLink>
        </ul>
        <CustomBtn text="Get Started" @click="$emit('open-sign')"></CustomBtn>
        </div>
    </div>
    </header>
</template>

<style src="../assets/navBar.css">
    

</style>