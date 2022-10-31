<template>
  <div :class="exp_class == true ?'contentChild' : 'loading_contentChild'" id="contentChild">
    <div id="contentChildImg">
        <img id="showImg">
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

<style>
#contentChild{
    width: 100%;
    height: 300px;
    background: rgb(21, 20, 20);
    border-radius: 10px;
    border: 0;
    box-shadow: none;
    margin-bottom: 30px;
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
}



#contentChildImg{
    width: 45%;
    height: 100%;
    border-radius: 10px 0px 0px 10px;
    overflow: hidden;
}
#showImg{
    width: 100%;
    height: 100%;
    border-radius: 10px 0px 0px 10px;
    content: url(../assets/images/89938429686470d440d6fea7fc9e7c81.jpeg);
    cursor: pointer;
    transform: all 0.6s;    
    transition-duration: 1s;
}
</style>