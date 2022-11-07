<template>
  <div :class="exp_class==true? 'left_user_navigation':'loading_left_user_navigation'" id="left_user_navigation">
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
</template>

<script>
import $ from 'jquery';

export default {
    name: 'LeftUserNavigation',
    data(){
        return{
            exp_class: false,
        }
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll);
        scroll(0,1.2);
    },
    destroyed(){
        window.removeEventListener('scroll',this.handleScroll);
    },
    methods:{
        handleScroll() {
            var exp_height = $('.loading_left_user_navigation').offset().top;
            var clientheight = document.documentElement.clientHeight;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(clientheight+scrollTop >= exp_height+200) {
                this.exp_class = true;
                window.removeEventListener('scroll',this.handleScroll);
            }
        }
    }
}
</script>

<style scoped>
/* ------用户信息导航栏------ */
#left_user_navigation{
    height: 500px;
    width: 16.5%;
    background-color: rgb(21, 20, 20);
    margin-top: 30px;
    border-radius: 10px;
    position:absolute;
    left: 18%;
    text-align: center;
}

.loading_left_user_navigation{
    transform: scale(0);
}
.left_user_navigation{
    animation: loadingAnimation 1s;
}

@keyframes loadingAnimation {
    from{
        transform: scale(0.3);
        
    }
    to{
        transform: scale(1);
        
    }
}

#left_user_navigation #head_img{
    height: 100px;
    width: 100px;
    content: url(../assets/images/QQ头像.jpg);
    border-radius: 100%;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%,0);
    box-shadow: 0 1px 5px 1px rgb(144, 144, 144);
    transition-duration: 1s;
}

#left_user_navigation #head_img:hover{
    box-shadow: 7px 7px 7px 1px rgb(144, 144, 144);
    transition-duration: 1s;
}

#left_user_navigation #user_name{
    width: 100%;
    text-align: center;
    color: aliceblue;
    /* background-color: aliceblue; */
    position: absolute;
    top: 33%;
    left: 0%;
    font-size: 30px;
    font-family: 'Courier New', Courier, monospace;
    font-family: hyhg;
}

#left_user_navigation #describe{
    width: 100%;
    color: aliceblue;
    text-align: center;
    position: absolute;
    top: 42%;
    left: 0%;
    font-size: 19px;
    font-family: 'Courier New', Courier, monospace;
    font-family: hyhg;
}

/* 文章标签 */
#left_user_navigation .user_label #label_paper{
    height: 200px;
    width: 30%;
    color: aliceblue;
    position: absolute;
    top: 55%;
    left: 5%;
    display: inline-block;
    text-align: center;
    font-family: hyhg;
}

#left_user_navigation .user_label #label_paper #title{
    font-size: 16px;
    font-family: hyhg;
}

#left_user_navigation .user_label #label_paper #value{
    width: 100%;
    text-align: center;
    font-size: 25px;
    margin-top: 6px;
    font-family: hyhg;
}


/* 标签标签 */
#left_user_navigation .user_label #label_label{
    height: 200px;
    width: 30%;
    color: aliceblue;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%,0);
    display: inline-block;
    text-align: center;
    font-size: 15px;
    font-family: hyhg;
}

#left_user_navigation .user_label #label_label #title{
    font-size: 16px;
    font-family: hyhg;
}

#left_user_navigation .user_label #label_label #value{
    width: 100%;
    text-align: center;
    font-size: 25px;
    margin-top: 6px;
    font-family: hyhg;
}

/* 分类标签 */
#left_user_navigation .user_label #label_class{
    height: 200px;
    width: 30%;
    color: aliceblue;
    position: absolute;
    top: 55%;
    left: 65%;
    display: inline-block;
    text-align: center;
    font-family: hyhg;
}

#left_user_navigation .user_label #label_class #title{
    font-size: 16px;
    font-family: hyhg;
}

#left_user_navigation .user_label #label_class #value{
    width: 100%;
    text-align: center;
    font-size: 25px;
    margin-top: 6px;
    font-family: hyhg;
}

#left_user_navigation .toQQ{
    background-image: url(../assets/images/qq.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50px;
    width: 50px;
    position: absolute;
    top: 75%;
    left: 10%;
    filter: opacity(0.3) drop-shadow(0 0 0 rgb(255, 255, 255));
}

#left_user_navigation .toGitHub{
    background-image: url(../assets/images/GitHub.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 53px;
    width: 53px;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%,0);
    filter: opacity(0.3) drop-shadow(0 0 0 rgb(255,255,255));
}

#left_user_navigation .toEmil{
    background-image: url(../assets/images/emil.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 55px;
    width: 55px;
    position: absolute;
    top: 75%;
    left: 80%;
    transform: translate(-50%,0);
    filter: opacity(0.3) drop-shadow(0 0 0 rgb(255,255,255));
}





</style>