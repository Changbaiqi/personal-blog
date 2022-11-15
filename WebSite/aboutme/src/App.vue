<template>
  <div id="app">
    <div class="head">
      <Page id="page"></Page>
      <HeadNavigation id="headNavigation"></HeadNavigation>
    </div>
    <Main id="main"></Main>
  </div>
</template>

<script>
import HeadNavigation from './components/HeadNavigation.vue';
import Main from './components/Main.vue';
import Page from './components/Page.vue';

// import hljs from 'highlight.js';



export default {
  name: 'App',
  components: {
    HeadNavigation,
    Page,
    Main
  },
}
</script>

<style>
/* 消除默认样式 */
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  outline: none;
  font-family: hyhg;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  /* position: relative; */
}

body {
  background-color: black;
  position: relative;
  z-index: -1;
  -ms-overflow-style: none;
  overflow: auto;
}

html {
  overflow: -moz-hidden-unscrollable;
  height: 100%;
}

body::-webkit-scrollbar {
  display: none;
}

.head {
  height: 40vh;
  position: relative;
  overflow: hidden;
}

.head #page {
  position: absolute;
}

.head #headNavigation {
  position: absolute;
}


@font-face {
  font-family: hyhg;
  src: url(./assets/font/汉仪花冠.ttf);
}
</style>
