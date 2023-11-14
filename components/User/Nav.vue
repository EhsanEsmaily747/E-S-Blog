<script setup>
    const {signOut}=useAuth()
    const props=defineProps({
        id:String
    })
</script>

<template>
    <header>
        <div class="navbar flex">
        <p class="logo" >E&S BLOG</p >
        <div class="flex rightdev" >
        <ul class="navlist flex">

            <NuxtLink class="navItem" to="/">Home</NuxtLink >
            <NuxtLink class="navItem" to="/StoryPage">Our History</NuxtLink >
            <p class="navItem" @click="navigateTo(`/User/Profile-${id}`)">Profile</p>
            <NuxtLink class="navItem" to="/" @click="signOut({redirect:false})">Log Out <span><Icon class="logOut" name="material-symbols-light:logout"/></span></NuxtLink>
        </ul>
        <!-- <CustomBtn text="Get Started" @click="$emit('open-sign')"></CustomBtn> -->
        </div>
    </div>
    </header>
</template>

<style src="../../assets/navBar.css">

</style>