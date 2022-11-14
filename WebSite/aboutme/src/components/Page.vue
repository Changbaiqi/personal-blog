<template>
  <div class="page">
    <span>关于自己</span>
  </div>
</template>

<script>
export default {
  name: 'Page'
}
</script>

<style scoped>
.page {
  height: 40vh;
  width: 100%;
  background-image: url(../assets/images/689e8bf2336de04e6fe27fa428185918.jpg);
  /* background-origin: border-box; */
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

span {
  font-size: 60px;
  color: #d7d6d8;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}
</style>