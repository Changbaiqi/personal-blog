<template>
    <div class="stackTechnologyNavigation markdown-body">
        <VueMarkdown :source="mdData" v-highlight></VueMarkdown>
    </div>
</template>

<script>



//引入MarkDown
import markdownData from '../assets/markdown/README.md';

import 'github-markdown-css/github-markdown.css';

import hljs from 'highlight.js';
// import 'highlight.js/styles/default.css';
import 'highlight.js/styles/paraiso-dark.css';
import VueMarkdown from 'vue-markdown/src/VueMarkdown';


const highlight = {
    mounted: function (el) {
        const blocks = el.querySelectorAll('pre code')
        blocks.forEach(block => {
            hljs.highlightBlock(block)
        })
    }
}

export default {
    name: 'StackTechnologyNavigation',

    data() {
        return {
            mdData: markdownData
        };
    },

    mounted() {
        hljs.initHighlightingOnLoad();
    },

    methods: {

    },
    components: {
        VueMarkdown
    },
    directives:{
        highlight
    }
};
</script>

<style scoped>
.stackTechnologyNavigation {
    /* min-height: 50vh;
    max-height: 100%; */
    width: 94%;
    background-color: #151414;
    border-radius: 15px;
    margin: 0 auto;
    box-shadow: 0 3px 10px #151414;
    padding: 20px;
}
</style>