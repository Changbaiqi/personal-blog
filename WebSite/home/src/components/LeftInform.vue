<template>
    <div :class="exp_class == true ?'left_navigation_inform':'loading_left_navigation_inform'" id="left_navigation_inform">
        <div>
            <img src="../assets/images/通知公告.png" alt="">
            <span>通知公告</span>
            </div>
            <div class="inform_content">欢迎各位道友前来互相学习~</div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    name: 'LeftInform',
    data(){
        return{
            exp_class: false,
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
            var exp_height = $('.loading_left_navigation_inform').offset().top;
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
/* 通知公告 */
#left_navigation_inform{
    width: 300px;
    min-height: 300px;
    background-color: rgb(21, 20, 20);
    border-radius: 10px;
    overflow: hidden;
}

.loading_left_navigation_inform{
    transform: scale(0);
}

.left_navigation_inform{
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

#left_navigation_inform div img{
    height: 30px;
    width: 30px;
    position: relative;
    top: 30px;
    left: 30px;
}

#left_navigation_inform div span{
    height: 100%;
    width: 100%;
    margin-left: 10px;
    font-size: 18px;
    color: aliceblue;
    position: relative;
    top: 30px; bottom: 5px;
    left: 30px;
    font-family: hyhg;
}

#left_navigation_inform .inform_content{
    color: aliceblue;
    text-indent: 2em;
    position: relative;
    top: 40px; bottom: 30px;
    font-family: hyhg;
    width: 80%;
    left: 50%;
    transform: translate(-50%);
    word-break: break-all;
}

</style>