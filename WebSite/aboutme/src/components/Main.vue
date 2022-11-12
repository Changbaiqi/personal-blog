<template>
    <div class="main">
        <div id="head">
            <UserNavigation id="userNavigation"></UserNavigation>
            <ContactNavigation id="contactNavigation"></ContactNavigation>
        </div>
    </div>
</template>

<script>
import UserNavigation from './UserNavigation.vue';
import ContactNavigation from './ContactNavigation.vue';
export default {
    name: 'Main',
    components:{
        UserNavigation,
        ContactNavigation
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
    top: 100px;
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
/* 
@media screen and (max-width: 1790px){
    #head{
        display: block;
    }
} */

</style>