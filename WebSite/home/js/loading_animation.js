const $left_user_navigation = $(".left_user_navigation");
const $left_navigation_inform = $(".left_navigation_inform");

function isInViewPort(el){
    //方法1
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight||document.body.clientHeight;
    const offsetTop = el.offsetTop;
    const scollTop = document.documentElement.scrollTop;
    return offsetTop-scollTop <= viewPortHeight;
}

//监听进度条滚动轨迹锚点位置
window.addEventListener("scroll",()=>{
    
        $left_user_navigation.each(
            (index,element)=>{
                if(isInViewPort(element)){
                        $(element).attr("id","left_user_navigation");
                }
        });
        $left_navigation_inform.each(
            (index,element)=>{
                if(isInViewPort(element)){
                        $(element).attr("id","left_navigation_inform");
                }
        });
    });