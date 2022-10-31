<template>
<!--  主内容-->
<div id="main" class="main">
        <!-- 左侧用户信息显示栏 -->
        <div class="left_user_navigation">
            <img id="head_img">
            <a id="user_name">长白崎</a>
            <a id="describe">2022年的理想开始实现了吗？</a>
            <div class="user_label">
                <div id="label_paper">
                    <p id="title">文章</p>
                    <p id="value">100</p>
                </div>
                <div id="label_label">
                    <p id="title">标签</p>
                    <p id="value">75</p>
                </div>
                <div id="label_class">
                    <p id="title">分类</p>
                    <p id="value">19</p>
                </div>
            </div>
            <a class="toQQ" href="http://wpa.qq.com/msgrd?v=3&uin=2084069833&site=qq&menu=yes"></a>
            <a class="toGitHub" href="https://github.com/Changbaiqi"></a>
            <a class="toEmil" href=""></a>
        </div>
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
            
            <div style="
            width: 100%;
            height: 300px;
            background-color: aliceblue;
            border-radius: 10px;
            ">
            <div style="
            width: 45%;
            height: 100%;
            border-radius: 10px;
            margin-left: -1px;
            ">
                <img style="
                width: 100%;
                height: 100%;
                border-radius: 10px 0px 0px 10px;"
                src="../assets/images/89938429686470d440d6fea7fc9e7c81.jpeg">
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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
/* ------用户信息导航栏------ */
.left_user_navigation{
    height: 500px;
    width: 16.5%;
    background-color: rgb(21, 20, 20);
    margin-top: 30px;
    border-radius: 10px;
    position:absolute;
    left: 19%;
    text-align: center;
}

#left_user_navigation{
    animation: loadingAnimation 2s;
}

@keyframes loadingAnimation {
    0%{
        transform: scale(0.1);
        
    }
    100%{
        transform: scale(1);
        
    }
}

.left_user_navigation #head_img{
    height: 100px;
    width: 100px;
    content: url(../assets/images/QQ头像.jpg);
    border-radius: 100%;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%,0);
}

.left_user_navigation #user_name{
    width: 100%;
    text-align: center;
    color: aliceblue;
    /* background-color: aliceblue; */
    position: absolute;
    top: 33%;
    left: 0%;
    font-size: 25px;
    font-family: 'Courier New', Courier, monospace;
}

.left_user_navigation #describe{
    width: 100%;
    color: aliceblue;
    text-align: center;
    position: absolute;
    top: 40%;
    left: 0%;
    font-size: 15px;
    font-family: 'Courier New', Courier, monospace;
}

/* 文章标签 */
.left_user_navigation .user_label #label_paper{
    height: 200px;
    width: 30%;
    color: aliceblue;
    position: absolute;
    top: 50%;
    left: 5%;
    display: inline-block;
    text-align: center;
}

.left_user_navigation .user_label #label_paper #title{
    font-size: 16px;
}

.left_user_navigation .user_label #label_paper #value{
    width: 100%;
    text-align: center;
    font-size: 25px;
    margin-top: 6px;
}


/* 标签标签 */
.left_user_navigation .user_label #label_label{
    height: 200px;
    width: 30%;
    color: aliceblue;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,0);
    display: inline-block;
    text-align: center;
    font-size: 15px;
}

.left_user_navigation .user_label #label_label #title{
    font-size: 16px;
}

.left_user_navigation .user_label #label_label #value{
    width: 100%;
    text-align: center;
    font-size: 25px;
    margin-top: 6px;
}

/* 分类标签 */
.left_user_navigation .user_label #label_class{
    height: 200px;
    width: 30%;
    color: aliceblue;
    position: absolute;
    top: 50%;
    left: 65%;
    display: inline-block;
    text-align: center;
}

.left_user_navigation .user_label #label_class #title{
    font-size: 16px;
}

.left_user_navigation .user_label #label_class #value{
    width: 100%;
    text-align: center;
    font-size: 25px;
    margin-top: 6px;
}

.left_user_navigation .toQQ{
    background-image: url(../assets/images/qq.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50px;
    width: 50px;
    position: absolute;
    top: 70%;
    left: 10%;
    filter: opacity(0.3) drop-shadow(0 0 0 rgb(255, 255, 255));
}

.left_user_navigation .toGitHub{
    background-image: url(../assets/images/GitHub.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 53px;
    width: 53px;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%,0);
    filter: opacity(0.3) drop-shadow(0 0 0 rgb(255,255,255));
}

.left_user_navigation .toEmil{
    background-image: url(../assets/images/emil.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 55px;
    width: 55px;
    position: absolute;
    top: 70%;
    left: 80%;
    transform: translate(-50%,0);
    filter: opacity(0.3) drop-shadow(0 0 0 rgb(255,255,255));
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
    height: 100vh;
    width: 47%;
    min-width: 200px;
    max-width: 80%;
    background-color: rgb(21, 20, 20);
    margin-right: 1px;
    position: absolute;
    top: 30px;
    left: 60%;
    transform: translate(-50%);

    border-radius: 10px;
}


</style>