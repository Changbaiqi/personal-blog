<template>
    <!--  主内容-->
    <div id="main" class="main">
    <!-- 左侧用户信息导航栏 -->
        <LeftUserNavigation></LeftUserNavigation>
        <!-- 左侧导航栏 -->
        <div class="left_navigation">
            <LeftInform></LeftInform>
        </div>
        <!-- 主要内容展示 -->
        <div class="content">
            <ContentChild imgIsLeftOrRight="false"></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
        </div>
        
    </div>
</template>

<script>
import ContentChild from './ContentChild.vue';
import LeftUserNavigation from './LeftUserNavigation.vue';
import LeftInform from './LeftInform.vue';

export default {
    name: 'Main',
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
    width: 100%;
    /* margin-top: 100vh; */
    position: relative;
    /* background-color: aliceblue; */
    display:flex;
}


@media screen and (max-width:400px)  {
    .main{
        left: 80px;
    }
}




/* ------左侧导航栏------ */
.left_navigation{
    height: 500px;
    width: 17%;
    position: relative;
    left: 19%;
    top: 550px;
    border-radius: 10px;
}


/* ------主要内容展示------ */

.content{
    /* height: 100vh; */
    min-height: 100vh;
    max-height: auto;
    width: 47%;
    min-width: 200px;
    max-width: 80%;
    /* background-color: rgb(21, 20, 20); */
    margin-right: 1px;
    position: relative;
    left: 45%;
    top: 32px;
    transform: translate(-50%);

    border-radius: 10px;
}


</style>