<script setup>

const { signIn } = useAuth()

const userUsername = ref('')
const userPassword = ref('')

const LoginUser = async (event) => {
    event.preventDefault();
    const password = userPassword.value
    const username = userUsername.value

    let data = {}

    const user = await useFetch(`/api/users/user?username=${username}`)
    // console.log(user);
    if (typeof user.data.value[0] === 'string') {
        alert('User Does not exist')
    } else if (user) {
        data = toRaw(user.data.value[0])

        if (data.password == password) {
            const id = data._id
            const isAdmin = data.isAdmin
            const pic = data.picture
            const name = data.username
            await signIn('credentials', { id, isAdmin, pic, name , redirect: false })

            if (data.isAdmin) {
                navigateTo(`/AdminPanel`)
            } else {
                navigateTo(`/User/Profile-${data._id}`)
            }

        } else {
            alert('Wrong Password')
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

            <!-- <div class="remember">
                <div class="checkbox">
                    <input type="checkbox"><label for="checkbox">Remember me</label>
                </div>
                <a href="" class="forgot-pass">Forgot Password ?</a>
            </div> -->

            <button class="login-btn" @click="LoginUser">Login</button>
            <div class="register-part">
                <label for="">Don't have an account?</label><span @click="$emit('open-register')">Register</span>
            </div>
        </form>
</div></template>

<style src="../assets/modal.css"></style>