<template>
  <div class="head_navigation">
    <a>长白崎的博客</a>
        <div><img><span>搜索</span></div>
        <div><img><span>留言板</span></div>
        <div><img><span>首页</span></div>
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
    z-index: -1;
    position: absolute;
    z-index: 2;
    /* background-color: aliceblue; */
}
.head_navigation a{
    font-size: 18px;
    color: rgba(255, 255, 255, 0.748);
    position: relative;
    top: 10px;
    left: 50px;
}
.head_navigation div{
    display: inline;
    float: right;
    margin-right: 50px;
    margin-top: 10px;
    color: rgba(21, 21, 21, 0.748);
    font-size: 16px;
}
</style>