<template>
  <div>
    <form id="login_main">
        <div id="title">Login</div>
        <div class="input">
            <div class="account">
                <input id="account" type="text" title="请输入正确的账号或密码" required=""></input>
                <label>请输账号</label>
            </div>
            <div class="password">
                <input id="password" type="password" required="" title="请输入正确的账号或密码"></input>
                <label>请输密码</label>
            </div>
        </div>
        <button id="submit" type="button">登录</button>
    </form>
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
    top: 15%;
}
.input{
    position: relative;
    top: 20%;
    left: 30%;
    transform: translate(-28%);
}

/* 账号输入框 */
.input div input{
    height: 50px;
    width: 300px;
    position: relative;
    border-radius: 8px;
    background-color: rgb(24, 24, 24);
    border-style: none;
    outline: none;
    padding-left: 20px;
    color: aliceblue;
    caret-color: blueviolet;
}
.input .account label{
    position: absolute;
    left: 150px;
    top: 15px;
    color: rgb(100, 99, 99);
    transition-duration: .5s;
    pointer-events: none;
}

.input .account{
    position: relative;
    top: 30px;
}
.input .account #account:focus + label,
.input .account #account:valid + label{
    position: absolute;
    left: 130px;
    top: -25px;
    transition-duration: .5s;
}

/* 密码 */
.input .password{
    position: relative;
    top: 65px;
}
.input .password label{
    position: absolute;
    left: 150px;
    top: 15px;
    transition-duration: .5s;
    pointer-events: none;
    color: rgb(100, 99, 99);
}

.input .password #password:focus + label,
.input .password #password:valid + label{
    position: absolute;
    left: 130px;
    top: -25px;
    transition-duration: .5s;
}


/* 提交按钮 */
#submit{
    position: relative;
    top: 200px;
    width: 200px;
    height: 50px;
    background-color: dimgrey;
    transition-duration: .3s;
    border: none;
    border-radius: 8px;
    color: aliceblue;
}
#submit:hover{
    background-color: rgb(77, 77, 77);
    transition-duration: .3s;
    color: rgb(207, 207, 207);
}
</style>