<template>
    <!--  主内容-->
    <div id="main" class="main">
    <!-- 左侧用户信息导航栏 -->
        <LeftUserNavigation class="left_userNavigation"></LeftUserNavigation>
        <!-- 左侧导航栏 -->
        <div class="left_navigation">
            <LeftInform></LeftInform>
        </div>
        <!-- 主要内容展示 -->
        <div class="content">
            <ContentChild v-on:Test="demo" v-for="index in 10" :imgIsLeftOrRight="index%2!=0? true : false" title="标题" textBody="本系列文章旨在带给读者地道的前端基础知识体系，深入底层原理，了解最权威的前端基础，循序渐进，带领读者领略正确学习方法的独特魅力。"></ContentChild>
        </div>
        
    </div>
</template>

<script>
import ContentChild from './ContentChild.vue';
import LeftUserNavigation from './LeftUserNavigation.vue';
import LeftInform from './LeftInform.vue';

export default {
    name: 'Main',
    mounted(){
        this.addChild
    },
    methods:{
        addChild(){
        },
        demo(title){
            window.alert(title.title);
        }
    },
    components:{
        ContentChild,
        LeftUserNavigation,
        LeftInform
    }
}
</script>





<style>
.mainBody{
    height: 100%;
    width: 100%;
}

.main{
    height: auto;
    min-width: 1150px;
    max-width: 1150px;
    /* margin-top: 100vh; */
    position: relative;
    left: 50%;
    transform: translate(-50%);
    /* background-color: aliceblue; */
    display:flex;
}


@media screen and (max-width:400px)  {
    .main{
        left: 80px;
    }
}

.left_userNavigation{
    position: relative;
    left: 10px;
}


/* ------左侧导航栏------ */
.left_navigation{
    height: 500px;
    width: 300px;
    position: relative;
    top: 550px;
    left: 10px;
    border-radius: 10px;
}


/* ------主要内容展示------ */

.content{
    /* height: 100vh; */
    min-height: 100vh;
    max-height: auto;
    width: 800px;
    min-width: 200px;
    max-width: 80%;
    /* background-color: rgb(21, 20, 20); */
    margin-right: 1px;
    position: relative;
    left: 38%;
    top: 32px;
    transform: translate(-50%);

    border-radius: 10px;
}


</style>