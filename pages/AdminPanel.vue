<script setup>
    const data=await useFetch('/api/categories/category')
    let cats=ref(toRaw(data.data.value.cats))
   
    let newCat=ref('')
    
    let showModal=ref(false)

    const AddCategory=async()=>{
        if (newCat.value=='') {
            newCat.value='Enter Name'
        
        }else{
            const name=newCat.value
            const newcate=await useFetch('/api/categories/category',{
                method:'POST',
                body: {
                    name
                }
                
            })
            cats.value.push({name:newCat.value})
            newCat.value=''
            showModal.value=false
        }
    }


    const handCategory=async(cat)=>{
        const index= cats.value.indexOf(cat)
        cats.value.splice(index,1)
        const dCat=await useFetch(`/api/categories/category?id=${cat._id}`,{
            method:'DELETE'
        })
        console.log(dCat);
    }

</script>
<template>

    <AdminNav/>
<div class="container">
    <div class="info">
        <div class="boxInfo">
            <Icon class="infoIcons" name="material-symbols:person-rounded"/>
            <p>123</p>
        </div>
        <div class="boxInfo">
            <Icon class="infoIcons" name="material-symbols:post-add"/>
            <p>123</p>
        </div>
    </div>
    <div class="boxes">
            <div class="box"  @click="navigateTo('/Manage/Users')">
                <Icon class="icon" name="material-symbols:manage-accounts-outline-rounded"/>
                Manage Users</div>
            <div class="box"  @click="navigateTo('/Manage/Posts')">
                <Icon class="icon" name="material-symbols:folder-managed-outline-rounded"/>
                Manage Posts</div>
            <div class="box"  @click="navigateTo('/User/EditPost')">
                <Icon class="icon" name="material-symbols:add-box-outline-rounded"/>
                Create Posts</div>
        </div>
    
    <div class="cats">
        <Category v-for="cat in cats" :cat="cat"  @removeCat="handCategory"/>
        
        <Icon class="add" name="material-symbols:add" @click="showModal=!showModal"/>

        <div class="modal" v-if="showModal">
            <Icon class="cross" @click="showModal=false" name="gridicons:cross-small"/>
            <p>Name:</p>
            <input type="text" v-model="newCat">
            <div>
                <button class="addBtn" @click="AddCategory">Add</button>
            </div>
        
        </div>
    </div>
    </div>

<Footer/>
</template>

<style scoped>

.modal div{
    text-align: center;
}
.modal .addBtn{
    cursor: pointer;
    color: white;
    margin-top: 10px;
    border-radius: .5em;
    background: green;
    padding-block: 5px;
    padding-inline: 30px;
    border:none;

}
.modal .cross{
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
}

.modal input{
    margin-top: .3em;
    border: none;
    outline: none;
    padding: 5px;
    border-radius: .2em;
}
.modal{
    border-radius: 10px;
    position: absolute;
    padding: 20px;
    background: lightgray;
}
 
.add{
    background: transparent;
    border-radius: 50%;
    margin-left: 2rem;
    height: 22px;
    width: 22px;
    padding: 5px;
    background: lightgray;
    cursor: pointer;
}
.container{
    width: 70%;
    margin-inline: auto;
    margin-top: 3.9rem;
    min-height: 76.5vh;
}

.cats{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
}

.boxInfo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.boxInfo p{
    color: gray;
    margin-top: .5em;
    font-size: 1.5rem;
}
.infoIcons{
    width: 90px;
    height: 90px;
}
.icon{
    width: 30px;
    height: 30px;
    margin-bottom: 15px;
}

.info{
    width: 70%;
    margin-inline: auto;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1.5rem;
}
.boxes{
    display: flex;
    justify-content: center;
    align-items: center;
}

.box{
    background: lightgray;
    font-weight: bold;
    margin: 1em;
    position: relative;
    border-radius: .5rem;
    box-shadow: 0 10px 12px gray;
    height: 170px;
    width: 170px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform ease-in-out .2s;
}

.box:hover{
    transform: translateY(-10px);
    cursor: pointer;
}

</style>