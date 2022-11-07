import Vue from 'vue';
import App from './App.vue';
import hljs from 'highlight.js';
Vue.use(hljs);
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')

//封装成一个指令

//封装成一个指令,highlight是指令的名称
Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {

	// 创建ol标签元素
	let ol = document.createElement("ol");

    // 2.根据换行符获取行数，根据获取的行数生成行号
    let rowCount = block.outerHTML.split('\n').length;
    for(let i=1;i < rowCount;i++){
      // 创建li标签元素
      let li = document.createElement("li");
      let text = document.createTextNode(i);
      // 将生成的行号添加到li标签中
      li.appendChild(text);
      // 将li标签添加到ol标签中
      ol.appendChild(li);
    }
    // 为ol标签添加class名
    ol.className = 'pre-numbering';
    block.parentNode.appendChild(ol);

    hljs.highlightBlock(block)
})
});
