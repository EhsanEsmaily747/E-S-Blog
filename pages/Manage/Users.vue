<template>
    <div>
        <AdminNav/>
        <div class="container">
            <Search placeholder="Search By Name....."/>
            <div class="users" >
                <UserBox/>
                <UserBox/>
                <UserBox/>
                <UserBox/>
                <UserBox/>
                <UserBox/>
                
            </div>
        </div>
        <Footer/>
    </div>
</template>


<style scoped>
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