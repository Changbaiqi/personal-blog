<template>
  <div :class="exp_class == true ?'contentChild' : 'loading_contentChild'" id="contentChild">
    <div id="contentChildImg_Left" v-show="imgIsLeftOrRight">
        <img id="showImg_Left">
    </div>
    <div id="right" >
            <h2 v-text="title">测试标题</h2>
            <div>发表于2022-06-09|JavaSccript</div>
            <a id="text" v-text="textBody">
            </a>
    </div>
    <div id="contentChildImg_Right" v-show="!imgIsLeftOrRight">
        <img id="showImg_Right">
    </div>
   </div>
</template>

<script>
import $ from 'jquery';

export default {
    name:'ContentChild',
    data(){
        return{
            exp_class: false,
        }
    },
    props:{
        imgIsLeftOrRight: {
            type: Boolean, //所传类型核查定义
            //required: true, //是否必须要传
            default: true, //默认值
        },
        title:{
            type:String,
            default: "无"
        },
        textBody:{
            type:String,
            default:"无"
        }
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll);
    },
    destroyed(){
        window.removeEventListener('scroll',this.handleScroll);
    },
    methods:{
        handleScroll() {
            var exp_height = $('.loading_contentChild').offset().top;
            var clientheight = document.documentElement.clientHeight;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(clientheight+scrollTop > exp_height+200) {
                this.exp_class = true;
                window.removeEventListener('scroll',this.handleScroll);
            }
        }
    }
}
</script>

<style scoped>
#contentChild{
    width: 100%;
    height: 300px;
    background: rgb(21, 20, 20);
    border-radius: 10px;
    border: 0;
    box-shadow: none;
    margin-bottom: 30px;
    display: flex;
    position: relative;
    font-family: hyhg;
}
/* 首次出现的动画 */
.loading_contentChild{
    transform: scale(0);
}


.contentChild{
    animation: loadingAnimation 1s;
}

@keyframes loadingAnimation {
    from{
        transform: scale(0.3);
    }
    to{
        transform:scale(1);
    }
}

#contentChild:hover img{
    transform: scale(1.3);
    transition-duration: 1s;
    /* filter: blur(0px); */
    filter: opacity(1);
}



#contentChildImg_Left{
    width: 45%;
    height: 100%;
    border-radius: 10px 0px 0px 10px;
    overflow: hidden;
    position: relative;
}
#showImg_Left{
    width: 100%;
    height: 100%;
    border-radius: 10px 0px 0px 10px;
    content: url(../assets/images/89938429686470d440d6fea7fc9e7c81.jpeg);
    cursor: pointer;
    transform: all 0.6s;    
    /* filter: blur(10px); */
    filter: opacity(0.7);
    transition-duration: 1s;
    
}

#contentChildImg_Right{
    width: 45%;
    height: 100%;
    border-radius: 0px 10px 10px 0px;
    overflow: hidden;
    position: relative;
}
#showImg_Right{
    width: 100%;
    height: 100%;
    border-radius: 0px 10px 10px 0px;
    content: url(../assets/images/89938429686470d440d6fea7fc9e7c81.jpeg);
    cursor: pointer;
    transform: all 0.6s;    
    /* filter: blur(10px); */
    filter: opacity(0.7);
    transition-duration: 1s;
    
}

#contentChild #right{
    /* background-color: aliceblue; */
    width: 55%;
    border-radius: 0px 10px 10px 0px;
}

#contentChild #right h2{
    position: relative;
    top: 50px;
    left: 50px;
    color: aliceblue;
    font-size: 30px;
    transition-duration: .3s;
}

#contentChild #right h2:hover{
    color: rgb(134, 34, 248);
    transition-duration: .3s;
}

#contentChild #right div{
    position: relative;
    top: 60px;
    left: 50px;
    color:rgb(149, 149, 149);
    font-size: 17px;
}

#contentChild #right a{
    height: 40%;
    width: 80%;
    position: relative;
    top: 70px;
    left: 50px;
    display: block;
    /* overflow: auto; */
    color: rgb(182, 182, 182);
    font-size: 18px;
    line-height: 35px;
    letter-spacing: 3px;
}
</style>