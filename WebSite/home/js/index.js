const Student = Vue.extend({
    template: `
    <h1>测试成功</h1>
    <style>
        .h1{
            color: red;
        }
    </style>
    `,
});


new Vue({
    el: '.content',
    components: {
        //  Student
    }
});