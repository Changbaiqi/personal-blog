<template>
    <div class="main">
        <div id="head">
            <UserNavigation id="userNavigation"></UserNavigation>
            <ContactNavigation id="contactNavigation"></ContactNavigation>
        </div>
        <StackTechnologyNavigation id="stackTechnologyNavigation"></StackTechnologyNavigation>
    </div>
</template>

<script>
import UserNavigation from './UserNavigation.vue';
import ContactNavigation from './ContactNavigation.vue';
import StackTechnologyNavigation from './StackTechnologyNavigation.vue';

export default {
    name: 'Main',
    components:{
        UserNavigation,
        ContactNavigation,
        StackTechnologyNavigation
    }
}
</script>

<style scoped>
.main{
    height: 100vh;
    width: 1100px;
    min-width: 1100px;

    /* background-color: aliceblue; */
    margin: 0 auto;
    position: relative;
    top: 50px;
}

#head{
    height: 300px;
    /* width: 100%;
    background-color: aqua; */
    display:flex;
    justify-content: space-evenly;
    overflow: hidden;
}

#head #userNavigation{
    margin-top: 10px;
}

#head #contactNavigation{
    margin-top: 10px;
}
#stackTechnologyNavigation{
    /* display: block; */
}

/* 
@media screen and (max-width: 1790px){
    #head{
        display: block;
    }
} */

</style>