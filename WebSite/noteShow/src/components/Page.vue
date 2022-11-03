<template>
  <div id="page">
    <div id="title">基于Vue-cli脚手架技术的个人博客搭建</div>
    <div id="message_1">发表于2022-06-05 | 更新于2022-10-30</div>
    <div id="message_2">字数总计：999 | 阅读量：9999</div>
  </div>
</template>

<script>
export default {
    name: 'Page'
}
</script>

<style scoped>
#page{
    background-image: url(../assets/images/4c33f9df3f514027cb1b31bf2e123d66.jpg);
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 40vh;
    width: 100%;
    border: none;
    text-align: center;
    justify-self: center;
    align-items: center;
    align-content: center;
    justify-items: center;
}
#title{
    font-size: 40px;
    position: relative;
    top: 20vh;
    color: #f1ecec;
}
#message_1{
    position: relative;
    top: 22vh;
    color: #838383cd;
}
#message_2{
    position: relative;
    top: 22.5vh;
    color: #838383cd;
}
</style>