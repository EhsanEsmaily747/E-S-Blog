<script setup>



const { status, getSession } = useAuth()
const data = await getSession()
console.log(data);
const { loginopener, signupopener, showLogin, showSign } = useModal()
</script>


<template>
    <div>

        <NavBar v-if="status == 'unauthenticated'" @open-sign="signupopener()" @open-login="loginopener()" />
        <UserNav v-else-if=" data.user.name.isAdmin=='false'" :id="data.user.name.id"></UserNav>
        <AdminNav v-else/>

        <transition name="fade">
            <Login v-show="showLogin" @close-modal="showLogin = false" @open-register="signupopener()" />

        </transition>
        <transition name="fade">
            <Signup v-show="showSign" @close-modal="showSign = false" @open-login="loginopener()" />

        </transition>

        <div class="container1">
            <h1 class="title"> OUR STORY</h1>


            <p> Welcome to our blog platform! We are excited to share our story with you. It all began with a passion for
                writing and a love for connecting with people through the power of words. Our journey started as a small
                team of like-minded individuals who believed in the importance of creating a platform where individuals
                could express their thoughts, share experiences, and engage in meaningful conversations.
                <br><br>
                Our story is one of perseverance and dedication. We faced numerous challenges along the way, but our passion
                for creating a space where voices could be heard kept us going. We believe that everyone has a story to
                tell, and it is our mission to provide a platform that amplifies those voices, regardless of background or
                expertise.

                <br><br>
                As we grew, we realized the significance of building a community around our blog platform. We wanted to
                create a space where individuals could not only share their stories but also connect with others who have
                had similar experiences or hold different perspectives. Our community has evolved into a vibrant and diverse
                group of individuals who support and inspire one another.

                <br><br>
                Our journey has been filled with countless inspiring moments. From reading heartwarming stories of personal
                triumphs to witnessing the power of collective action, we have been privileged to be a part of this
                incredible blogging community. Each day, we are reminded of the impact that sharing our stories can have on
                others and the world around us.

                We are committed to continuously improving our blog platform and providing the best possible experience for
                our users. We value your feedback and suggestions as we strive to create a space that nurtures creativity,
                fosters meaningful connections, and promotes positive change.
            </p>
        </div>
        <Footer></Footer>
    </div>
</template>

<style src="../assets/transition.css"></style>

<style scoped>
.container1 {
    width: 70%;
    margin-inline: auto;
    padding-block: 7.5vh;
}

.title {
    filter: drop-shadow(0px 3px 3px gray);
    margin-left: 2rem;
    font-size: 2.5rem;
    margin-bottom: 2rem;
}

p {
    text-indent: 3rem;
    font-size: large;
    line-height: 1.5rem;
}</style>