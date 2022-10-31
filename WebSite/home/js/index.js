
   

    const school =  Vue.extend({
        name: "school",
        template: `<a>长白崎的博客</a>`,
        comments:{
        }
    });
 

    var app = new Vue({
        el:'#abcd',
        comments:{
           'school':school
        }
    });



