<template>
  <div class="head_navigation">
    <a>长白崎の博客</a>
        <div id="else"><img><span>其他</span>
            <ul>
                <li style="text-align: center;">网址收藏</li>
                <li style="text-align: center;">选项二</li>
                <li style="text-align: center;">选项三</li>
            </ul>
        </div>
        <a id="aboutme"><img><span>关于</span></a>
        <a id="board"><img><span>留言板</span></a>
        <a id="home"><img><span>首页</span></a>
        <a id="search"><img><span>搜索</span></a>
  </div>
</template>

<script>
export default {
    name: 'HeadNavigation',
}
</script>

<style>
/* ---------头部导航栏------------ */
.head_navigation{
    height: 50px;
    width: 100%;
    min-width: 1150px;
    z-index: -1;
    position: absolute;
    z-index: 2;
    font-family: hyhg;
    /* background-color: aliceblue; */
}
.head_navigation a{
    font-size: 18px;
    color: rgba(255, 255, 255, 0.748);
    position: relative;
    top: 10px;
    left: 50px;
    font-size: 23px;
}
.head_navigation div{
    display: inline;
    float: right;
    margin-right: 50px;
    margin-top: 10px;
    color: rgba(21, 21, 21, 0.748);
    font-size: 16px;
}

/* 搜索 */
.head_navigation #search{
    width: 60px;
    float: right;
    position: relative;
    top: 10px;
    margin-right: 50px;
    cursor: url('../assets/images/favicon.ico'),default;
}
.head_navigation #search::before{
    content: "";
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translate(-50%);
    border-bottom:3px solid #9a7bd4;
    width: 0;
    height: 5px;
    transition: 0.2s all linear;
}
.head_navigation #search:hover::before{
    width: 100%;
    transition: 0.2s all linear;
}


.head_navigation #search img{
    content: url(../assets/images/搜索.png);
    
    filter: drop-shadow(0px 0 0 rgb(255, 255, 255));
    width: 16px;
    height: 16px;
}
.head_navigation #search span{
    color: #c6c5cd;
    margin-left: 10px;
    position: absolute;
    top: 5px;
    font-size: 17px;
}

/* 首页 */
.head_navigation #home{
    width: 60px;
    float: right;
    position: relative;
    top: 10px;
    margin-right: 50px;
    cursor: url('../assets/images/favicon.ico'),default;
}
.head_navigation #home::before{
    content: "";
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translate(-50%);
    border-bottom:3px solid #9a7bd4;
    width: 0;
    height: 5px;
    transition: 0.2s all linear;
}
.head_navigation #home:hover::before{
    width: 100%;
    transition: 0.2s all linear;
}


.head_navigation #home img{
    content: url(../assets/images/首页.png);
    
    filter: drop-shadow(0px 0 0 rgb(255, 255, 255));
    width: 16px;
    height: 16px;
}
.head_navigation #home span{
    color: #c6c5cd;
    margin-left: 10px;
    position: absolute;
    top: 5px;
    font-size: 17px;
}
/* 留言板 */
.head_navigation #board{
    width: 80px;
    height: 70px;
    float: right;
    position: relative;
    top: 10px;
    margin-right: 50px;
    cursor: url('../assets/images/favicon.ico'),default;
}
.head_navigation #board::before{
    content: "";
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translate(-50%);
    border-bottom:3px solid #9a7bd4;
    width: 0;
    height: 5px;
    transition: 0.2s all linear;
}
.head_navigation #board:hover::before{
    width: 100%;
    transition: 0.2s all linear;
}


.head_navigation #board img{
    content: url(../assets/images/留言.svg);
    
    filter: drop-shadow(0px 0 0 rgb(255, 255, 255));
    width: 18px;
    height: 18px;
}
.head_navigation #board span{
    color: #c6c5cd;
    margin-left: 10px;
    position: absolute;
    top: 5px;
    font-size: 17px;
}

/* 关于 */
.head_navigation #aboutme{
    width: 65px;
    height: 70px;
    float: right;
    position: relative;
    top: 10px;
    margin-right: 100px;
    cursor: url('../assets/images/favicon.ico'),default;
}

.head_navigation #aboutme::before{
    content: "";
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translate(-50%);
    border-bottom:3px solid #9a7bd4;
    width: 0;
    height: 5px;
    transition: 0.2s all linear;
}
.head_navigation #aboutme:hover::before{
    width: 100%;
    transition: 0.2s all linear;
}

.head_navigation #aboutme img{
    content: url(../assets/images/喜爱.svg);
    
    filter: drop-shadow(0px 0 0 rgb(255, 255, 255));
    width: 17px;
    height: 17px;
}
.head_navigation #aboutme span{
    color: #c6c5cd;
    margin-left: 10px;
    position: absolute;
    top: 5px;
    font-size: 17px;
}

/* 其他 */
.head_navigation #else{
    width: 80px;
    float: right;
    position: relative;
    top: 8px;
    cursor: url('../assets/images/favicon.ico'),default;
}
.head_navigation #else::before{
    content: "";
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translate(-50%);
    border-bottom:3px solid #9a7bd4;
    width: 0;
    height: 5px;
    transition: 0.2s all linear;
}
.head_navigation #else:hover::before{
    width: 100%;
    transition: 0.2s all linear;
}


.head_navigation #else img{
    content: url(../assets/images/杯子.svg);
    
    filter: drop-shadow(0px 0 0 rgb(255, 255, 255));
    width: 16px;
    height: 16px;
}
.head_navigation #else span{
    color: #c6c5cd;
    margin-left: 10px;
    position: absolute;
    top: -3px;
    font-size: 17px;
}
.head_navigation #else span::after{
    /* height: 20px;
    width: 20px; */
    content: '';
    position: absolute;
    top: 5px;
    left: 40px;
    height: 20px;
    width: 20px;
    background: url(../assets/images/向下\ \(1\).png) no-repeat;
    background-size:15px;
    transition-duration: .5s;
}
.head_navigation #else:hover span::after{
    transform: rotateZ(-180deg);
    transition-duration: .5s;
    transform-origin: 40% 35%;
}
.head_navigation #else ul{
    height: 150px;
    width: 130px;
    background-color: #000000;
    position: absolute;
    top: 50px;
    right: 5px;
    overflow: hidden;
    
    box-sizing: border-box;
    box-shadow: 0px 0px 10px 0px #1c1c1c;
    visibility: hidden;
    filter: opacity(0);
    transition-duration: .3s;
    display: inline-block;
    letter-spacing: normal;
}
.head_navigation #else:hover ul{
    visibility: visible;
    filter: opacity(1);
    position: absolute;
    top: 40px;
    right: 5px;
    transition-duration: .3s;
    list-style-type: none;
}
.head_navigation #else ul li{
    color: #c4c4c4;
    width: 130px;
    line-height: 50px;
    /* background-color: #712929; */
    list-style-type: none;
    position: relative;
    /* left: -40px; */
}
.head_navigation #else ul li:hover{
    background-color: #a7a7a744;
}
</style>