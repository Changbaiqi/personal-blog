<template>
  <div id="app">
    <HeadNavigationVue></HeadNavigationVue>
    <Page></Page>
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
*{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body,html{
  scroll-behavior: smooth;
}
body{
  background-color: black;
  position: relative;
  z-index: -1;
}
@font-face {
    font-family: czsbmjf;
    src: url(./assets/ttf/潮字社北冥简繁.ttf);
}

</style>
