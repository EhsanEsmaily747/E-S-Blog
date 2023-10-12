<script setup>

    const loginInfo=ref({
        username:'',
        password:''
    })

    const handleLogin=async(event)=>{
        event.preventDefault();
        let data={}
        
        const user=await useFetch(`/api/users/user?username=${loginInfo.value.username}`)
        // console.log(user);
        if(typeof user.data.value[0]==='string'){
            alert('User Does Not Exist')
        }else if (user) {
            data=toRaw(user.data.value[0])
            // console.log( data);
            if (data.password==loginInfo.value.password) {
                navigateTo(`/User/Profile-${data._id}`)
            }else{
                alert('Wrong Password')
            }
        }
        }


</script>

<template>
     <!-- LoginForm -->


     <div class="ModalContainer" >
        <form class="ModalForm">
            <Icon name="material-symbols:close" class="closeModal" @click="$emit('close-modal')" ></Icon>
            <h2 class="Login-title">Login</h2>
            
            <div class="input-field">
                <input class="input" type="text" v-model="loginInfo.username" required><label for="Email">Username</label><span class="icon"><Icon name="material-symbols:person-rounded"/></span>
            </div>

            <div class="input-field">
                <input class="input" type="password" v-model="loginInfo.password" required><label for="password">Password</label><span class="icon"><Icon name="material-symbols:lock"/></span>
            </div>

            <div class="remember">
                <div class="checkbox">
                    <input type="checkbox"><label for="checkbox">Remember me</label>
                </div>
                <a href="" class="forgot-pass">Forgot Password ?</a>
            </div>

                <button class="login-btn" @click="handleLogin">Login</button>
            <div class="register-part">
                <label for="">Don't have an account?</label><span  @click="$emit('open-register')">Register</span>
            </div>
        </form >
    </div>

</template>

<style src="../assets/modal.css"></style>