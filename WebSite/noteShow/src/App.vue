<template>
  <div id="app">
    <div class="loadingshow">
      <HeadNavigation></HeadNavigation>
      <page></page>
    </div>
    <Main></Main>
    <BottomSheet></BottomSheet>
  </div>
</template>

<script>

import HeadNavigation from './components/HeadNavigation.vue';
import LeftUserNavigation from './components/LeftUserNavigation.vue';
import Main from './components/Main.vue';
import Page from './components/Page.vue';
import BottomSheet from './components/BottomSheet.vue';

export default {
  name: 'App',
  components: {
    Main,
    Page,
    HeadNavigation,
    BottomSheet
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  outline: none;
  /* font-family: 'Poppins', sans-serif; */
  font-family: hyhg;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body,html{
  scroll-behavior: smooth;
  cursor: url(./assets/images/favicon.ico),default;
}
html{
  overflow: -moz-hidden-unscrollable;
  height: 100%;
}
body::-webkit-scrollbar{
  display: none;
}
body{
  background-color: black;
  position: relative;
  z-index: -1;
  width: calc(100vw+18px);
  height: 100%;
  -ms-overflow-style: none;
  overflow: auto;
}
@font-face {
  font-family: hyhg;
  src: url(./assets/ttf/汉仪花冠.ttf);
}



.loadingshow{
  animation: loadingtop 3s;
}
@keyframes loadingtop {
  0%{
    filter: blur(5px);
  }
  100%{
    filter: blur(0px);
  }
}
</style>
