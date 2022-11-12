<template>
    <div class="contactNavigation">
        <div id="contact">
            <div id="qq"><img src="../assets/images/QQ-circle-fill.svg" height="35px"><span>2084069833</span></div>
        <div id="email"><img src="../assets/images/邮箱.svg" height="35px"><span>changbaiqi@foxmail.com</span></div>
        <div id="github"><img src="../assets/images/github.svg" height="35px"><span>https://github.com/Changbaiqi</span></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactNavigation'
}
</script>

<style scoped>
.contactNavigation{
    height: 200px;
    width: 500px;
    min-width: 500px;
    max-width: 500px;
    background-color: #151414;
    border-radius: 15px;
    box-shadow: 0 3px 10px #151414;
    position: relative;
}

.contactNavigation span{
    position: relative;
    bottom: 10px;
    left: 10px;
}


#contact{
    position: relative;
    top: 45%;
    left: 60%;
    transform: translate(-50%,-50%);
}

.contactNavigation div{
    margin-top: 10px;
}

</style>