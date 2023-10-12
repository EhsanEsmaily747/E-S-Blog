<script setup>
    const props=defineProps({
        text:String,
        subTitle:String
    })
</script>

<template>

        <div class="context">
            <h3>{{ subTitle }}</h3>
            <p>{{ text }}</p>
        </div>       
</template>

<style scoped>
    
.context h3{
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.context p{
    text-align: left;
    text-justify: inter-word;
    font-size: 1.2rem;
}
</style>