<template>
    <!--  主内容-->
    <div id="main" class="main">
        <!-- 左侧用户信息导航栏 -->
        <LeftUserNavigation></LeftUserNavigation>
        <!-- 左侧导航栏 -->
        <div class="left_navigation">
            <LeftInform></LeftInform>
        </div>
        <!-- 主要内容展示 -->
        <div class="content">
            <div v-highlight id="note" class="article_message hljs renderNav" v-html="article" width="100%">
            </div>
        </div>

    </div>
</template>

<script>
import LeftUserNavigation from './LeftUserNavigation.vue';
import LeftInform from './LeftInform.vue';
import { marked } from 'marked';
import hljs from 'highlight.js';
import "highlight.js/styles/monokai-sublime.css"; // 引入高亮样式 这里我用的是sublime样式
import 'animate.css'

export default {
    name: 'Main',
    data() {
        return {
            article: "# 这是一个MarkDown文档\n"+
                " ```\n" +
                "System.out.println(\"测试成功\");" +
                "```"
        }
    },
    methods: {

    },
    mounted() {
        var rendererMD = new marked.Renderer();
        var myMarked = require('marked');
        marked.setOptions({
            renderer: rendererMD,
            highlight: function (code) {
                return hljs.highlightAuto(code).value;
            },
            pedantic: false,
            gfm: true,
            tables: true,
            breaks: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false
        });
        this.article = marked(this.article);
    },
    components: {
        LeftUserNavigation,
        LeftInform
    }
}
</script>



<style>
.mainBody {
    height: 100%;
    width: 100%;
    
}

.main {
    height: auto;
    width: 100%;
    /* margin-top: 100vh; */
    position: relative;
    /* background-color: aliceblue; */
    display: flex;
}


@media screen and (max-width:400px) {
    .main {
        left: 80px;
    }
}




/* ------左侧导航栏------ */
.left_navigation {
    height: 500px;
    width: 17%;
    position: relative;
    left: 18%;
    top: 550px;
    border-radius: 10px;
}


/* ------主要内容展示------ */

.content {
    /* height: 100vh; */
    min-height: 100vh;
    max-height: auto;
    width: 46%;
    min-width: 200px;
    max-width: 80%;
    background-color: rgb(21, 20, 20);
    margin-right: 1px;
    position: relative;
    left: 42%;
    top: 32px;
    overflow: hidden;
    transform: translate(-50%);
    border-radius: 10px;
    animation: contentloading 1s;
}

.content #note {
    margin-top: 50px;
    margin-left: 40px;
    margin-right: 40px;
    overflow: hidden;
    word-wrap: break-word;
}

@keyframes contentloading {
    0% {
        position: relative;
        left: 42%;
        top: 70px;
        opacity: 0;
        /* transform: scale(0); */
    }

    100% {
        position: relative;
        left: 42%;
        top: 32px;
        opacity: 1;
        /* transform: scale(1); */
    }
}

/* 替换相应的MarkDown转换背景 */
.hljs {
    background-color: #151414;
    padding: 10px 10px 50px 30px;
    border-radius: 10px;

}
/* 对应代码块的背景设置 */
code{
    background-color: #000;
    padding: 10px 10px 10px 30px;
    border-radius: 10px;
    position: relative;
    top: 30px;
}

</style>