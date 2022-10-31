const $container = $(".left_user_navigation");

function isInViewPort(el){
    //方法1
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight||document.body.clientHeight;
    const offsetTop = el.offsetTop;
    const scollTop = document.documentElement.scrollTop;
    return offsetTop-scollTop <= viewPortHeight;
}
window.addEventListener("scroll",()=>{
    
        $container.each(
            (index,element)=>{
                if(isInViewPort(element)){
                    $(element).attr("id","left_user_navigation");
                }
        });
    });