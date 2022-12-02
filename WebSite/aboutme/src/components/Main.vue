<template>
    <div class="main">
        <div id="head">
            <transition name="userNav" appear>
                <UserNavigation id="userNavigation"></UserNavigation>
            </transition>
            <transition name="contactNav" appear>
                <ContactNavigation id="contactNavigation"></ContactNavigation>
            </transition>
        </div>
        <transition name="stackTechnologyNav" appear>
            <StackTechnologyNavigation id="stackTechnologyNavigation"></StackTechnologyNavigation>
        </transition>
    </div>
</template>

<script>
import UserNavigation from './UserNavigation.vue';
import ContactNavigation from './ContactNavigation.vue';
import StackTechnologyNavigation from './StackTechnologyNavigation.vue';

export default {
    name: 'Main',
    components: {
        UserNavigation,
        ContactNavigation,
        StackTechnologyNavigation
    }
}
</script>

<style scoped>
.main {
    min-height: 30vh;
    width: 1100px;
    min-width: 1100px;

    /* background-color: aliceblue; */
    margin: 0 auto;
    position: relative;
    top: 50px;
}

.userNav-enter-active {
    animation: userNavEnter 1s;
}

.contactNav-enter-active {
    animation: contactNavEnter 1s;
}

.stackTechnologyNav-enter-active{
    animation: stackTechnologyNavEnter 1s;
}

@keyframes userNavEnter {
    from {
        position: relative;
        right: 30px;
        opacity: 0.3;
    }

    to {
        position: relative;
        right: 0px;
        opacity: 1;
    }
}

@keyframes contactNavEnter {
    from {
        position: relative;
        left: 30px;
        opacity: 0.3;
    }

    to {
        position: relative;
        left: 0px;
        opacity: 1;
    }
}

@keyframes stackTechnologyNavEnter {
    from{
        position: relative;
        top: 30px;
        opacity: 0.3;
    }
    to{
        position: relative;
        top: 0px;
        opacity: 1;
    }
}

#head {
    height: 300px;
    /* width: 100%;
    background-color: aqua; */
    display: flex;
    justify-content: space-evenly;
    overflow: hidden;
}

#head #userNavigation {
    margin-top: 10px;
}

#head #contactNavigation {
    margin-top: 10px;
}

#stackTechnologyNavigation {
    /* display: block; */
    margin-top: -70px;
}
</style>