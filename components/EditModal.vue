<script setup>
    const emit=defineEmits(['close-modal','refresh-data'])
    const loading=ref(false)
    const props=defineProps({
        datas:Object
    })

    const supabase=useSupabaseClient()
    const{file,generateUrl,uploadFile}=useImg()
    
    const fileName=Math.floor(Math.random()*10000000000000)
    
    const editUser=ref({
        picture:props.datas.picture,
        username:props.datas.username,
        email:props.datas.email,
        password:props.datas.password
    })
    
    
    const handleEdit=async(event)=>{
        loading.value=true
           
        event.preventDefault();
        
        
            const url=ref(props.datas.picture)
            if (file.value) {
                
                const {error,data}=await supabase.storage.from("Images").upload('public/'+fileName,file.value)
                 url.value=`https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/${data.path}`
            }

        
        const updatedUser={
            _id:props.datas._id,
            username:editUser.value.username,
            email:editUser.value.email,
            password:editUser.value.password,
            picture:url.value,
            isAdmin:props.datas.isAdmin
        }
        emit('refresh-data',updatedUser)
        
        const res=await useFetch(`/api/users/user?id=${updatedUser._id}`,{
            method:'PUT',
            body:{
                updatedUser
            }
        })

        setTimeout(() => {
            
            loading.value=false
        }, 4000);
        emit('close-modal')
      
    }


</script>

<template>
    <div class="ModalContainer">
        <form class="ModalForm">
            <div class="load" v-if="loading" >
            <Icon class='loadIcon'  name="svg-spinners:wind-toy"/>
        </div>
            <Icon name="material-symbols:close" class="closeModal" @click="$emit('close-modal')" ></Icon>
            <h2 class="Login-title">Edit Info</h2>
            <div class="imgInput">

                <label class="pInput" for="img" v-show="!file">
                    <input @change="uploadFile($event)" type="file" name="img" id="img" hidden="true"> + </label>
                    
                    <div v-show="file" class="imgContainer">

                        <img  :src="generateUrl(file)" alt="">
                        <Icon class="iconX" name="material-symbols:close"  @click="file=null" ></Icon>

                    </div>
            </div>
            
            <div class="input-field">
                <input class="input" v-model="editUser.username" type="text" required>
                <label for="Email">Username</label>
                <span class="icon"><Icon name="material-symbols:person-rounded"/></span>
            </div>
            <div class="input-field">
                <input class="input" v-model="editUser.email" type="email" required>
                <label for="Email">Email Address</label>
                <span class="icon"><Icon name="material-symbols:mail-rounded"/></span>
            </div>

            <div class="input-field">
                <input class="input" v-model="editUser.password" type="text" required>
                <label for="password">Password</label>
                <span class="icon"><Icon name="material-symbols:lock"/></span>
            </div>

                <button class="login-btn" @click="handleEdit">Edit</button>
            
        </form>
    </div>
    
</template>

<style src="../assets/modal.css"></style>


<style scoped>
.load{

position: absolute;
top: 0;
z-index: 100;
left: 0;
width: 100%;
height: 100%;
background: transparent;
backdrop-filter:blur(20px);

}

.loadIcon{
position: absolute;
top: 50%;
left: 50%;
transform: translateX(-50%);
width: 50px;
height: 50px;
}


.iconX{
    
    position: relative;
    top: -75px;
    left: -5px;
    font-size: smaller;
    cursor: pointer;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    box-shadow: 0 0 4px black;
}
.imgInput{
    position: relative;
}
              

.pInput{
        position: relative;
        top: -20px;
        font-size: 40px;
        padding-inline: .4em;
        cursor: pointer;
        border-radius: 50%;
        border: solid 1px black;
    }
    img{
        width: 65px;
        height: 65px;
        position:relative; 
        top: -20px; 
         box-shadow: 0 2px 10px black;
        border-radius: 50%;
    }
</style>