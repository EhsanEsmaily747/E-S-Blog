<script setup>
    const error=useError()
    const handleError=()=>{
        clearError(
            {
                redirect:"/"
            }
        )
    }
</script>

<template>
    <div>

        <div class="container">
            <h1 class="textXl">
                {{ error.statusCode }}
            </h1>
            <p class="error">{{ error.message }}</p>
    
            <button @click="handleError"
            class="goBack">
                Go Back
            </button>
        </div>
    </div>
</template>

<style scoped>
    .container{
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .textXl{
        font-size: 4rem;
    }

    .error{
        margin-top: 10px;
        font-size: 1.3rem;
    }

    .goBack{
        border-radius: rounded;
        margin-top: 30px;
        font-size: 1.2rem;
        background: rgb(85, 134, 241);
        box-shadow: 0 4px 4px 4px lightblue;
        padding-inline: 30px;
        padding-block: 15px;
        border-radius: 1rem;
        color: white;
        cursor: pointer;
        outline: none;
        border: none;
    }
</style>