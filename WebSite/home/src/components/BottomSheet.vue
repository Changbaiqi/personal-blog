<template>
  <div class="bottomSheet">
    <p>©2022 - 2025 长白崎</p>
    <p>网页设计：长白崎|制作：长白崎</p>
    <p>Believe in a better future tomorrow.</p>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
    name:"ButtomSheet",
    mounted(){

    },
    ethods:{

    }
}
</script>

<style>
.bottomSheet{
    width: 100%;
    height: 200px;
    background-color: rgb(28, 28, 28);
    position: relative;
    top: 50px;
    text-align: center;
}
.bottomSheet p{
  width: 100%;
  position: relative;
  top: 30%;
  font-size: 18px;
  margin-top: 10px;
  color: rgb(129, 129, 129);
  font-family: hyhg;
  /* transform: translate(-50%,-50%); */
}
</style>