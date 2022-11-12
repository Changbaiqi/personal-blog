<template>
  <div id="app">
    <div class="loadingshow">
      <HeadNavigationVue></HeadNavigationVue>
      <Page></Page>
    </div>
    <Main></Main>
    <BottomSheet></BottomSheet>
  </div>
</template>

<script>
import HeadNavigationVue from './components/HeadNavigation.vue';
import Page from './components/Page.vue';
import Main from './components/Main.vue';
import BottomSheet from './components/BottomSheet.vue';

export default {
  name: 'App',
  components: {
    HeadNavigationVue,
    Page,
    Main,
    BottomSheet
  }
}
</script>

<style>
* {
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

body,
html {
  scroll-behavior: smooth;
  cursor: url(./assets/images/favicon.ico), default;
}

html {
  overflow: -moz-hidden-unscrollable;
  height: 100%;
}

body::-webkit-scrollbar {
  display: none;
}

body {
  background-color: black;
  position: relative;
  z-index: -1;
  width: calc(100vw+18px);
  height: 100%;
  -ms-overflow-style: none;
  overflow: auto;
}

/* @font-face {
    font-family: czsbmjf;
    src: url(./assets/ttf/潮字社北冥简繁.ttf);
} */

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
