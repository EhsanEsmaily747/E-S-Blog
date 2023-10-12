<script setup>
    const props=defineProps({
        text:String
    })
</script>

<template>
                
            
                    <button class="btn">
                        {{ text }}
                    </button>



</template>

<style scoped >



.btn{
    position: relative;
    font-size: 15px;
    border: none;
    background: rgba(255, 217, 0, 0.781);
    padding-block: .6rem;
    padding-inline: 1.3rem;
    font-weight: 500;
    border-radius: 1.5rem;
    cursor: pointer;
    box-shadow: 0px 3px 2px lightgrey;
    transition: transform 200ms ease-in-out;
    /* margin-left: 1rem; */
}

.btn:hover{
    /* box-shadow: 0px 5px 3px gray;   */
    transform: translateY(-5px)  
}

.btn:active{
    outline: solid 2px lightblue;
}

</style>