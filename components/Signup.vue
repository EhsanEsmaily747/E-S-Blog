<script setup>

const { decode } = useAuth()

const User = ref({
    username: '',
    email: '',
    password: '',
    isAdmin: false
})

const HandleRegister = async (event) => {
    event.preventDefault();
    const newUser = {
        username: User.value.username,
        email: User.value.email,
        password: User.value.password,
        isAdmin: User.value.isAdmin
    }
    const { data } = await useFetch('/api/users/signup', {
        method: 'POST',
        body: {
            newUser
        }
    })

    
    if (data.value == 'User Exist') {
        alert('User Exist')
        User.value.email = User.value.username = User.value.password = ''
    } else {
        const user = JSON.stringify(data.value)
        localStorage.setItem('token', user)

        const userInfo = decode(user)
        navigateTo(`/User/Profile-${userInfo.id}`)
        
    }

}


</script>

<template>
    <div class="ModalContainer" @blur="$emit('close-modal')">
        <form class="ModalForm" action="">
            <Icon name="material-symbols:close" class="closeModal" @click="$emit('close-modal')"></Icon>
            <h2 class="Login-title">Registeration</h2>

            <div class="input-field">
                <input class="input" type="text" v-model="User.username" required><label for="Email">Username</label><span
                    class="icon">
                    <Icon name="material-symbols:person-rounded" />
                </span>
            </div>
            <div class="input-field">
                <input class="input" type="email" v-model="User.email" required><label for="Email">Email
                    Address</label><span class="icon">
                    <Icon name="material-symbols:mail-rounded" />
                </span>
            </div>

            <div class="input-field">
                <input class="input" type="password" v-model="User.password" required><label
                    for="password">Password</label><span class="icon">
                    <Icon name="material-symbols:lock" />
                </span>
            </div>

            <!-- <div class="remember">
                <div class="checkbox">
                    <input type="checkbox"><label for="checkbox" required>Accept the Terms & Conditions</label>
                </div>
                </div> -->

            <button class="login-btn" @click="HandleRegister">Register</button>
            <div class="register-part">
            <label for="">Already have an account?</label><span @click="$emit('open-login')">Log In</span>
        </div>
    </form>
</div></template>

<style src="../assets/modal.css"></style>