<template>
  <div class="page">
    <a id="text" href="#main">长白崎の博客</a>
    <a id="next" href="#main"><img></a>
  </div>
</template>

<script>
export default {
    name: 'Page'
}
</script>

<style>
.page{
    height: 100vh;
    width: 100%;
    background-image: url(../assets/images/1f54c5ab85845cd6c2e29ee5a109605a.jpeg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    top: 0px;
    z-index: 1;
    filter: blur(0px);
    animation: page_loading 2s;
}
@keyframes page_loading {
    0%{
        filter: blur(3px);
    }
    100%{
        filter: blur(0px);
    }
}
.page #next{
    height: 200px;
    width:  100%;
    position: absolute;
    top: 80%;
    /* background-color: aliceblue; */
}

.page img{
    content: url(../assets/images/向下.png);
    height: 35px;
    width: 35px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    filter: opacity(0.4) drop-shadow(0 0 0 rgba(0, 0, 0, 0.392));
    animation: fontam 0.6s ease 0s infinite alternate;
}

.page #text{
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-block;
    transform: translate(-50%,-50%);
    font-size: 50px;
    color: rgba(239, 240, 242, 0.878);
    text-shadow: 1px 5px 5px #000;
    font-family: czsbmjf;
    text-decoration: none;
} 

@keyframes fontam {
    from{
        position: relative;
        top: 60%;
        left: 50%;
        transform: translate(-50%,-50%);
        transition-duration: 1s;
        filter: opacity(0.9) drop-shadow(0 0 0 rgb(0, 0, 0));
    }  
    to{
        position: relative;
        top: 80%;
        left: 50%;
        transform: translate(-50%,-50%);
        transition-duration: 1s;
        filter: opacity(0.2) drop-shadow(0 0 0 rgba(27, 27, 27, 0.392));
    } 
}
</style>