<template>
        <div class="container">
        <div class="hero">
            <h1 class="heroh">Learn New Things</h1>
            <p class="herop">Discover stories, thinking, and expertise from  writers on <br>
                any topic.</p>
                <!-- <CustomBtn text="Start Reading"></CustomBtn> -->
                <button>Start Reading Now...</button>
        </div>
        <div>
            <img class="heroimage" src="/5-Benefits-of-Personalized-Learning.jpg" alt="">

        </div>
    </div>

</template>


<style scoped>
    button{
        font-weight: bold;
        padding-inline:2em ;
        box-sizing: border-box;
        padding-block: 1em;
        border: none;
        background:rgba(255, 217, 0, 0.781);
        font-size: 16px;
        /* transform: skewX(-20deg); */
        border-radius: 1.5rem;

    }
    .container{
    justify-content: space-between;
    position: relative;
    margin-top: 1.5rem;
    display: flex;
    width: 70%;
    margin-inline: auto;
    margin-bottom: 3rem;
}
img{
    margin-top:2.5rem ;
    width:390px;
}

.hero{
    color: rgb(59, 59, 59);
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding-block: 4rem;
}

.heroh{
    font-weight: 600;
    font-size: 2.2rem;
    margin-bottom: 1rem;
}

.herop{
    font-weight: 400;
    font-size: 1.3rem;
    margin-bottom: 5rem;
    
}

</style>