<template>
  <div id="app">
    <HeadNavigation></HeadNavigation>
    <Main></Main>
  </div>
</template>

<script>
import HeadNavigation from './components/HeadNavigation.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    HeadNavigation,
    Main
  }
}
</script>

<style>
/* 消除默认样式 */
*{
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
}

body {
  background-color: black;
  position: relative;
  z-index: -1;
  -ms-overflow-style: none;
  overflow: auto;
}

@font-face {
  font-family: hyhg;
  src: url(./assets/font/汉仪花冠.ttf);
}
</style>
