<script setup>
    const props=defineProps({
        cat:Object
    })

</script>


<template>

        <div class="contain">
            <Icon class="icon" v-if="$route.path.includes('Admin')" @click="$emit('removeCat',cat)" name="ic:round-minus" />
            <CustomBtn style="margin:0.5rem ;background:lightgray;" :text=cat.name></CustomBtn>
        </div>

</template>



<style scoped>
    .contain{
        position: relative;
    }


    .icon{
    position: absolute;
    top: -3px;
    right:-1px;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: lightgray;    
    cursor: pointer;
}
</style>