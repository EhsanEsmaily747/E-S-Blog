<script setup>

const { decode } = useAuth()


const userUsername = ref('')
const userPassword = ref('')

const LoginUser = async (event) => {
    event.preventDefault();

    const userData = {
        username:userUsername.value,
        password:userPassword.value
    }
    const {data} = await useFetch('api/users/login',{
        method : 'POST' ,
        body :{
            userData
        } 
    })
    if (data.value == 'Wrong Password') {
        alert('Wrong Password')
    }else if(data.value == 'Invalid Username'){
        alert('Invalid Username')
    }else{
        const user = JSON.stringify(data.value)
        localStorage.setItem('token',user)
        
        const userInfo = decode(user)
        
        if (userInfo.isAdmin) {
            navigateTo('/AdminPanel')
        }else{
            navigateTo(`/User/Profile-${userInfo.id}`)
        }

    }
    
}
    </script>
<template>
    <!-- LoginForm -->


    <div class="ModalContainer">
        <form class="ModalForm">
            <Icon name="material-symbols:close" class="closeModal" @click="$emit('close-modal')"></Icon>
            <h2 class="Login-title">Login</h2>

            <div class="input-field">
                <input class="input" type="text" v-model="userUsername" required><label for="Email">Username</label><span
                    class="icon">
                    <Icon name="material-symbols:person-rounded" />
                </span>

            </div>

            <div class="input-field">
                <input class="input" type="password" v-model="userPassword" required><label
                    for="password">Password</label><span class="icon">
                    <Icon name="material-symbols:lock" />
                </span>
            </div>


            <button class="login-btn" @click="LoginUser">Login</button>
            <div class="register-part">
                <label for="">Don't have an account?</label><span @click="$emit('open-register')">Register</span>
            </div>
        </form>
</div></template>

<style src="../assets/modal.css"></style>