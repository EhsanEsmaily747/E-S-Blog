<script setup>
    const post={
        pProfile:"/man.jpg",
        pWriter:"Brad Hussey",
        pTitle:"SunShine Rainbow",
        pContent:`I was 17 when I first read The Fig Tree. I was just about to graduate school and 
                begin my life. My mind was overflowing with ideas, countries, and careers I wanted 
                to pursue. But the overwhelm of choosing hadn’t yet kicked in. I was spinning 
                around in possibilities, like a giddy child on Christmas day examining unopened 
                presents.<br>
                
                And then I read this poem. And I stopped spinning. I sat down and read it again. And 
                again. I had never heard of Sylvia Plath before. How could she have written such a 
                relatable story? The muscles on my shoulders tensed as I realized that I would 
                indeed have to choose something. One day.<br><br>
                
                “I saw my life branching out before me like the green fig tree in the story. From the 
                tip of every branch, like a fat purple fig, a wonderful future beckoned and winked. 
                One fig was a husband and a happy home and children, and another fig was a 
                famous poet, and another fig was a brilliant professor, and another fig was Ee Gee, 
                the amazing editor, and another fig was Europe and Africa and South America, and 
                another fig was Constantin and Socrates and Attila and a pack of other lovers with 
                queer names and offbeat professions, and another fig was an Olympic lady crew 
                champion, and beyond and above these figs were many more figs I couldn’t quite 
                make out. I saw myself sitting in the crotch of this fig tree, starving to death, just 
                because I couldn’t make up my mind which of the figs I would choose. I wanted 
                each and every one of them, but choosing one meant losing all the rest, and as I sat 
                there, unable to decide, the figs began to wrinkle and go black, and, one by one, they 
                plopped to the ground at my feet.”
                
                ― Sylvia Plath, The Bell Jar`,
        pImage:"/benz.jpg",
    }
</script>

<template>
    <div>
        <AdminNav/>
        <div class="container">
            <Search placeholder="Search By Title....."/>
            <div class="posts" >
                <Post :post="post" showDelete='true'/>
                <Post :post="post" showDelete='true'/>
                <Post :post="post" showDelete='true'/>
                <Post :post="post" showDelete='true'/>
                
            </div>
        </div>
        <Footer/>
    </div>
</template>


<style scoped>
.posts{
    margin-top: 3em;
    display: flex;
    justify-content: center;
    flex-flow: wrap;
}

.container{
    width: 70%;
    margin-inline: auto;
    margin-top: 5rem;
    min-height: 74vh;
}
</style>