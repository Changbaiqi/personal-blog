<template>
  <div>
    <div id="login_main">
        <div id="title">Login</div>
        <div class="input">
            <input id="account" type="text">
            <input id="password" type="password">
        </div>
        <button id="submit">登录</button>
    </div>
  </div>
</template>

<script scoped>
export default {
    name: 'Login'
}
</script>

<style>
#login_main{
    background-color: rgb(41, 41, 41);
    height: 500px;
    width: 550px;
    border-radius: 15px;
    box-shadow: 0 0 5px 0 rgb(29, 29, 29);
    animation: loading 1s;
}

#title{
    transform: scale(1);
    transition-duration: 1s;
}
#title:hover{
    transform:scale(1.2);
    transition-duration: 1s;
}

@keyframes loading {
    0%{
        transform: scale(0);
    }
    100%{
        transform: scale(1);
    }
}

#title{
    color: aliceblue;
    font-size: 60px;
    position: relative;
    top: 10%;
}
.input{
    position: relative;
    top: 20%;
    left: 47%;
    transform: translate(-28%);
}
.input #account{
    height: 45px;
    width: 300px;
    display: block;
    border-radius: 60px;
    border-style: none;
    outline: none;
    padding-left: 20px;
    padding-right: 20px;
}
.input #password{
    height: 45px;
    width: 300px;
    display: block;
    margin-top: 20px;
    border-radius: 60px;
    border: 0;
    border-style: none;
    outline: none;
    padding-left: 20px;
    padding-right: 20px;
}
#submit{
    position: relative;
    top: 30%;
    border-radius: 13px;
    height:50px;
    width: 250px;
    background-color: rgb(108, 108, 108);
    border: none;
    transition-duration: .3s;
    color: aliceblue;
    font-size: 17px;
}

#submit:hover{
    background-color: rgb(77, 77, 77);
    transition-duration: .3s;
    color: rgb(207, 207, 207);
}
</style>