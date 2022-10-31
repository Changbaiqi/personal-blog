<template>
<!--  主内容-->
<div id="main" class="main">
    <!-- 左侧用户信息导航栏 -->
        <LeftUserNavigation></LeftUserNavigation>
        <!-- 左侧导航栏 -->
        <div class="left_navigation">
            <div class="left_navigation_inform">
                <div>
                    <img src="../assets/images/通知公告.png" alt="">
                    <span>通知公告</span>
                </div>
                <div class="inform_content">
                    欢迎各位道友前来互相学习~
                </div>
            </div>
        </div>
        <!-- 主要内容展示 -->
        <div class="content">
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
            <ContentChild></ContentChild>
        </div>
    </div>
</template>

<script>
import ContentChild from './ContentChild.vue';
import LeftUserNavigation from './LeftUserNavigation.vue';

export default {
    name: 'Main',
    components:{
        ContentChild,
        LeftUserNavigation
    }
}
</script>





<style>
.main{
    height: auto;
    width: 100%;
    margin-top: 100vh;
    position: relative;
    background-color: aliceblue;
}


@media screen and (max-width:400px)  {
    .main{
        left: 80px;
    }
}




/* ------左侧导航栏------ */
.left_navigation{
    height: 500px;
    width: 16.5%;
    /* margin-top: 550px; */
    /* background-color: rgb(21, 20, 20); */
    position: absolute;
    left: 19%;
    top: 550px;
    border-radius: 10px;
}

/* 通知公告 */
.left_navigation .left_navigation_inform{
    width: 80%;
    height: 300px;
    background-color: rgb(21, 20, 20);
    border-radius: 10px;
    padding: 30px;
}
.left_navigation #left_navigation_inform{
    animation: loadingAnimation 2s;
    
}

.left_navigation .left_navigation_inform div img{
    height: 30px;
    width: 30px;
}

.left_navigation .left_navigation_inform div span{
    height: 100%;
    margin-left: 10px;
    font-size: 18px;
    color: aliceblue;
    position: relative;
    bottom: 5px;
}

.left_navigation .left_navigation_inform .inform_content{
    position: relative;
    top: 10px;
    color: aliceblue;
    text-indent: 2em;
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
    position: absolute;
    top: 30px;
    left: 60%;
    transform: translate(-50%);

    border-radius: 10px;
}


</style>