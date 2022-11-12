<template>
  <div class="userNavigation">
    <div>
        <img id="userImage">
        <div id="message">
            <div id="name"><img src="../assets/images/用户名称.svg" height="35px"><span id="label">长白崎</span></div>
            <div id="education"><img src="../assets/images/教育.svg" height="35px"><span id="label">本科</span></div>
            <div id="major"><img src="../assets/images/专业.svg" height="35px"><span id="label">计算机科学与技术</span></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'UserNavigation'
}
</script>

<style>
.userNavigation{
    height: 200px;
    width: 500px;
    min-width: 500px;
    max-width: 500px;
    background-color: #151414;
    border-radius: 15px;
    box-shadow: 0 3px 10px #151414;
    position: relative;
}
.userNavigation #userImage{
    height: 150px;
    width: 150px;
    border-radius: 100%;
    content: url(../assets/images/QQ头像.jpg);
    /* position: relative;
    top: 50%;
    left: 50px;
    transform: translate(0,-50%); */
    position: relative;
    top: 22px;
    margin-left: 50px;
    float: left;
}

.userNavigation #message{
    height: 150px;
    width: 200px;
    float: left;
    margin-left: 50px;
    position: relative;
    top: 35px;
    /* background-color: aliceblue; */
}

.userNavigation #message span{
    text-align: center;
    /* background-color: antiquewhite; */
    position: relative;
    bottom: 10px;
    left: 10px;
    font-size: 20px;
}
</style>