webpackJsonp([38],{

/***/ "./site/components/radio/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"单选框","category":"组件","order":0},"catalogs":[],"contents":"<h2 id='header-Radio%20%E5%8D%95%E9%80%89%E6%A1%86'>Radio 单选框</h2>基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。<h2 id='header-%E7%A4%BA%E4%BE%8B'>示例</h2><div class=\"example\"></div>\n\n<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">var</span> Radio = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'kpc/components/radio'</span>);\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Radio</span> /&gt;</span>单选框\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span>\n</code></pre>\n<h2 id='header-%E5%B8%B8%E8%A7%84%E5%B1%9E%E6%80%A7'>常规属性</h2><code>disabled</code> 是否禁用(默认启用)<ul>\n<li>@type <code>{Boolean}</code></li>\n<li>@default <code>false</code></li>\n</ul>\n<div class=\"example\"></div>\n\n<pre><code class=\"hljs jsx\">var Radio = require('kpc/components/radio');\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Radio</span> <span class=\"hljs-attr\">disabled</span>=<span class=\"hljs-string\">{true}/</span>&gt;</span>禁用\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Radio</span> <span class=\"hljs-attr\">disabled</span>=<span class=\"hljs-string\">{false}/</span>&gt;</span>启用\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n</code></pre>\n<code>value</code> radio值<ul>\n<li>@type 无具体类型</li>\n<li>@default <code>false</code>\n使用<code>v-model</code>可以双向绑定数据。是否选中会与组件的<code>trueValue</code>值做比较(绝对等于<code>===</code>)</li>\n</ul>\n<div class=\"example\"></div>\n\n<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">var</span> Radio = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'kpc/components/radio'</span>);\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Radio</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">{true}/</span>&gt;</span>单选框\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span>\n</code></pre>\n<code>trueValue</code> radio实际值<ul>\n<li>@type 无具体类型</li>\n<li>@default <code>true</code></li>\n</ul>\n<div class=\"example\"></div>\n\n<pre><code class=\"hljs jsx\">var Radio = require(<span class=\"hljs-string\">'kpc/components/radio'</span>);\n\n&lt;div&gt;\n    &lt;Radio <span class=\"hljs-keyword\">value</span>={true} trueValue={<span class=\"hljs-number\">1</span>} disabled={true}/&gt;<span class=\"hljs-keyword\">value</span>值与trueValue值不相等\n    &lt;Radio <span class=\"hljs-keyword\">value</span>={<span class=\"hljs-number\">1</span>} trueValue={<span class=\"hljs-number\">1</span>} disabled={true}/&gt;<span class=\"hljs-keyword\">value</span>值与trueValue值相等\n&lt;/div&gt;\n</code></pre>\n<h2 id='header-%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7'>自定义属性</h2>你可以自定义任何属性，这些属性会挂载到<code>input</code>标签上<div class=\"example\"></div>\n\n<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">var</span> Radio = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'kpc/components/radio'</span>);\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Radio</span> <span class=\"hljs-attr\">disabled</span>=<span class=\"hljs-string\">{false}</span>  \n        <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{function()</span> {<span class=\"hljs-attr\">alert</span>(<span class=\"hljs-attr\">this.element.innerHTML</span>);}<span class=\"hljs-attr\">.bind</span>(<span class=\"hljs-attr\">self</span>)}\n    /&gt;</span>点我查看DOM结构\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span>\n</code></pre>\n","codes":[{"language":"jsx","content":"var Radio = require('kpc/components/radio');\n\n<div>\n    <Radio />单选框\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"},{"language":"jsx","content":"var Radio = require('kpc/components/radio');\n\n<div>\n    <Radio disabled={true}/>禁用\n    <Radio disabled={false}/>启用\n</div>"},{"language":"jsx","content":"var Radio = require('kpc/components/radio');\n\n<div>\n    <Radio value={true}/>单选框\n</div>"},{"language":"jsx","content":"var Radio = require('kpc/components/radio');\n\n<div>\n    <Radio value={true} trueValue={1} disabled={true}/>value值与trueValue值不相等\n    <Radio value={1} trueValue={1} disabled={true}/>value值与trueValue值相等\n</div>"},{"language":"jsx","content":"var Radio = require('kpc/components/radio');\n\n<div>\n    <Radio disabled={false}  \n        ev-click={function() {alert(this.element.innerHTML);}.bind(self)}\n    />点我查看DOM结构\n</div>"}],"index":34,"sideBars":{"组件":[{"title":"面包屑","path":"components/breadcrumb/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"按钮","path":"components/button/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Button","path":"#header-Button","level":2,"content":"<h2 id='header-Button'>Button</h2>","text":"Button","children":[]},{"title":"ButtonGroup","path":"#header-ButtonGroup","level":2,"content":"<h2 id='header-ButtonGroup'>ButtonGroup</h2>","text":"ButtonGroup","children":[]}]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Button","path":"#header-Button","level":2,"content":"<h2 id='header-Button'>Button</h2>","text":"Button","children":[]}]}]},{"title":"复选框","path":"components/checkbox/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"日期选择","path":"components/datepicker/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"弹窗","path":"components/dialog/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"下拉菜单","path":"components/dropdown/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Dropdown","path":"#header-Dropdown","level":2,"content":"<h2 id='header-Dropdown'>Dropdown</h2>","text":"Dropdown","children":[]},{"title":"DropdownItem","path":"#header-DropdownItem","level":2,"content":"<h2 id='header-DropdownItem'>DropdownItem</h2>","text":"DropdownItem","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":2,"content":"<h2 id='header-%E4%BA%8B%E4%BB%B6'>事件</h2>","text":"事件","children":[]},{"title":"DropdownItem","path":"#header-DropdownItem","level":2,"content":"<h2 id='header-DropdownItem'>DropdownItem</h2>","text":"DropdownItem","children":[]}]}]},{"title":"分页","path":"components/pagination/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Pagination","path":"#header-Pagination","level":2,"content":"<h2 id='header-Pagination'>Pagination</h2>","text":"Pagination","children":[]}]}]},{"title":"单选框","path":"components/radio/index.md","children":[{"children":[{"title":"Radio 单选框","path":"#header-Radio%20%E5%8D%95%E9%80%89%E6%A1%86","level":2,"content":"<h2 id='header-Radio%20%E5%8D%95%E9%80%89%E6%A1%86'>Radio 单选框</h2>","text":"Radio 单选框","children":[]},{"title":"示例","path":"#header-%E7%A4%BA%E4%BE%8B","level":2,"content":"<h2 id='header-%E7%A4%BA%E4%BE%8B'>示例</h2>","text":"示例","children":[]},{"title":"常规属性","path":"#header-%E5%B8%B8%E8%A7%84%E5%B1%9E%E6%80%A7","level":2,"content":"<h2 id='header-%E5%B8%B8%E8%A7%84%E5%B1%9E%E6%80%A7'>常规属性</h2>","text":"常规属性","children":[]},{"title":"自定义属性","path":"#header-%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7","level":2,"content":"<h2 id='header-%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7'>自定义属性</h2>","text":"自定义属性","children":[]}]}]}]},"highlighted":[{"language":"jsx","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">var</span> Radio = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'kpc/components/radio'</span>);\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Radio</span> /&gt;</span>单选框\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"},{"language":"jsx","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">var</span> Radio = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'kpc/components/radio'</span>);\n\n&lt;div&gt;\n    &lt;Radio disabled={true}/&gt;禁用\n    &lt;Radio disabled={false}/&gt;启用\n&lt;/div&gt;</code></pre>"},{"language":"jsx","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">var</span> Radio = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'kpc/components/radio'</span>);\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Radio</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">{true}/</span>&gt;</span>单选框\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"jsx","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">var</span> Radio = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'kpc/components/radio'</span>);\n\n&lt;div&gt;\n    &lt;Radio value={true} trueValue={1} disabled={true}/&gt;value值与trueValue值不相等\n    &lt;Radio value={1} trueValue={1} disabled={true}/&gt;value值与trueValue值相等\n&lt;/div&gt;</code></pre>"},{"language":"jsx","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">var</span> Radio = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'kpc/components/radio'</span>);\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Radio</span> <span class=\"hljs-attr\">disabled</span>=<span class=\"hljs-string\">{false}</span>  \n        <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{function()</span> {<span class=\"hljs-attr\">alert</span>(<span class=\"hljs-attr\">this.element.innerHTML</span>);}<span class=\"hljs-attr\">.bind</span>(<span class=\"hljs-attr\">self</span>)}\n    /&gt;</span>点我查看DOM结构\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"}]}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvcmFkaW8vaW5kZXguanNvbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtCQUFrQixXQUFXLHdDQUF3QyxtWUFBbVkscURBQXFELHdDQUF3QywwQ0FBMEMsNENBQTRDLHlDQUF5Qyx5Q0FBeUMsb0pBQW9KLFFBQVEsc0tBQXNLLGlDQUFpQyx3Q0FBd0MsMENBQTBDLDhHQUE4RyxLQUFLLFlBQVksNENBQTRDLDhHQUE4RyxNQUFNLFlBQVksd0NBQXdDLHlDQUF5QywyYUFBMmEscURBQXFELHdDQUF3QywwQ0FBMEMsMkdBQTJHLEtBQUssWUFBWSx5Q0FBeUMseUNBQXlDLG9SQUFvUixRQUFRLE9BQU8sVUFBVSxpREFBaUQsS0FBSyxZQUFZLHFDQUFxQyxXQUFXLEtBQUssS0FBSyxrRUFBa0UsaURBQWlELHFDQUFxQyxZQUFZLHFDQUFxQyxXQUFXLEtBQUssS0FBSyw2REFBNkQsUUFBUSx3VkFBd1YscURBQXFELHdDQUF3QywwQ0FBMEMsOEdBQThHLE1BQU0sMEZBQTBGLG1CQUFtQixpR0FBaUcsOEVBQThFLFdBQVcsK0NBQStDLHlDQUF5QywyQ0FBMkMsd0VBQXdFLHFDQUFxQyxFQUFFLHVEQUF1RCxxQ0FBcUMseUNBQXlDLHlEQUF5RCxHQUFHLEVBQUUsRUFBRSx3RUFBd0UsZ0NBQWdDLEtBQUssMkJBQTJCLE1BQU0sY0FBYyxFQUFFLHdFQUF3RSw2QkFBNkIsS0FBSyxlQUFlLEVBQUUsd0VBQXdFLDZCQUE2QixLQUFLLFlBQVksRUFBRSxXQUFXLEtBQUssMENBQTBDLEVBQUUsWUFBWSxFQUFFLFdBQVcsS0FBSywrQkFBK0IsRUFBRSx3RUFBd0UsZ0NBQWdDLE1BQU0sc0JBQXNCLFlBQVksK0JBQStCLFlBQVksMkJBQTJCLHlCQUF5QixPQUFPLG1FQUFtRSw0SUFBNEksRUFBRSxFQUFFLDhEQUE4RCwySUFBMkksZ0lBQWdJLEVBQUUseUpBQXlKLEVBQUUsRUFBRSwySUFBMkksZ0lBQWdJLEVBQUUsRUFBRSxFQUFFLGlFQUFpRSw0SUFBNEksRUFBRSxFQUFFLG9FQUFvRSw0SUFBNEksRUFBRSxFQUFFLDhEQUE4RCw0SUFBNEksRUFBRSxpS0FBaUssRUFBRSw0SUFBNEksRUFBRSw0SUFBNEksRUFBRSxFQUFFLGtFQUFrRSwySUFBMkksMElBQTBJLEVBQUUsOEpBQThKLEVBQUUsNElBQTRJLEVBQUUsOEpBQThKLEVBQUUsRUFBRSxFQUFFLGtFQUFrRSw0SUFBNEksRUFBRSwySUFBMkksb0pBQW9KLEVBQUUsRUFBRSxFQUFFLDhEQUE4RCxhQUFhLG1NQUFtTSxFQUFFLDRJQUE0SSxFQUFFLHNMQUFzTCxFQUFFLDJNQUEyTSxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsa05BQWtOLHFEQUFxRCx3Q0FBd0MsMENBQTBDLDRDQUE0Qyx5Q0FBeUMseUNBQXlDLDZCQUE2QixFQUFFLCtMQUErTCxnSkFBZ0osNlBBQTZQLDZGQUE2RixHQUFHLGVBQWUsRUFBRSxrTkFBa04sUUFBUSxPQUFPLFVBQVUsZ0JBQWdCLEtBQUssS0FBSyxZQUFZLGdCQUFnQixNQUFNLEtBQUssUUFBUSxRQUFRLGVBQWUsRUFBRSxrTkFBa04scURBQXFELHdDQUF3QywwQ0FBMEMsMkdBQTJHLEtBQUssWUFBWSx5Q0FBeUMseUNBQXlDLDZCQUE2QixFQUFFLGtOQUFrTixRQUFRLE9BQU8sVUFBVSxhQUFhLEtBQUssWUFBWSxFQUFFLFdBQVcsS0FBSyxLQUFLLDhCQUE4QixhQUFhLEVBQUUsWUFBWSxFQUFFLFdBQVcsS0FBSyxLQUFLLHlCQUF5QixRQUFRLGVBQWUsRUFBRSxrTkFBa04scURBQXFELHdDQUF3QywwQ0FBMEMsOEdBQThHLE1BQU0sMEZBQTBGLG1CQUFtQixpR0FBaUcsOEVBQThFLFdBQVcsK0NBQStDLHlDQUF5Qyw2QkFBNkIsRSIsImZpbGUiOiJzdGF0aWMvY2h1bmsvNzIxMGRmZGU2NThhYzg2YjlhODYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcInNldHRpbmdcIjp7XCJ0aXRsZVwiOlwi5Y2V6YCJ5qGGXCIsXCJjYXRlZ29yeVwiOlwi57uE5Lu2XCIsXCJvcmRlclwiOjB9LFwiY2F0YWxvZ3NcIjpbXSxcImNvbnRlbnRzXCI6XCI8aDIgaWQ9J2hlYWRlci1SYWRpbyUyMCVFNSU4RCU5NSVFOSU4MCU4OSVFNiVBMSU4Nic+UmFkaW8g5Y2V6YCJ5qGGPC9oMj7ln7rmnKznu4Tku7Yt5Y2V6YCJ5qGG44CC5Li76KaB55So5LqO5LiA57uE5Y+v6YCJ6aG55Y2V6aG56YCJ5oup77yM5oiW6ICF5Y2V54us55So5LqO5YiH5o2i5Yiw6YCJ5Lit54q25oCB44CCPGgyIGlkPSdoZWFkZXItJUU3JUE0JUJBJUU0JUJFJThCJz7npLrkvos8L2gyPjxkaXYgY2xhc3M9XFxcImV4YW1wbGVcXFwiPjwvZGl2PlxcblxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganN4XFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj52YXI8L3NwYW4+IFJhZGlvID0gPHNwYW4gY2xhc3M9XFxcImhsanMtYnVpbHRfaW5cXFwiPnJlcXVpcmU8L3NwYW4+KDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2twYy9jb21wb25lbnRzL3JhZGlvJzwvc3Bhbj4pO1xcblxcbjxzcGFuIGNsYXNzPVxcXCJ4bWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5SYWRpbzwvc3Bhbj4gLyZndDs8L3NwYW4+5Y2V6YCJ5qGGXFxuPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPjwvc3Bhbj5cXG48L2NvZGU+PC9wcmU+XFxuPGgyIGlkPSdoZWFkZXItJUU1JUI4JUI4JUU4JUE3JTg0JUU1JUIxJTlFJUU2JTgwJUE3Jz7luLjop4TlsZ7mgKc8L2gyPjxjb2RlPmRpc2FibGVkPC9jb2RlPiDmmK/lkKbnpoHnlKgo6buY6K6k5ZCv55SoKTx1bD5cXG48bGk+QHR5cGUgPGNvZGU+e0Jvb2xlYW59PC9jb2RlPjwvbGk+XFxuPGxpPkBkZWZhdWx0IDxjb2RlPmZhbHNlPC9jb2RlPjwvbGk+XFxuPC91bD5cXG48ZGl2IGNsYXNzPVxcXCJleGFtcGxlXFxcIj48L2Rpdj5cXG5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGpzeFxcXCI+dmFyIFJhZGlvID0gcmVxdWlyZSgna3BjL2NvbXBvbmVudHMvcmFkaW8nKTtcXG5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5kaXY8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+UmFkaW88L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmRpc2FibGVkPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPnt0cnVlfS88L3NwYW4+Jmd0Ozwvc3Bhbj7npoHnlKhcXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+UmFkaW88L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmRpc2FibGVkPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPntmYWxzZX0vPC9zcGFuPiZndDs8L3NwYW4+5ZCv55SoXFxuPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbjwvY29kZT48L3ByZT5cXG48Y29kZT52YWx1ZTwvY29kZT4gcmFkaW/lgLw8dWw+XFxuPGxpPkB0eXBlIOaXoOWFt+S9k+exu+WeizwvbGk+XFxuPGxpPkBkZWZhdWx0IDxjb2RlPmZhbHNlPC9jb2RlPlxcbuS9v+eUqDxjb2RlPnYtbW9kZWw8L2NvZGU+5Y+v5Lul5Y+M5ZCR57uR5a6a5pWw5o2u44CC5piv5ZCm6YCJ5Lit5Lya5LiO57uE5Lu255qEPGNvZGU+dHJ1ZVZhbHVlPC9jb2RlPuWAvOWBmuavlOi+gyjnu53lr7nnrYnkuo48Y29kZT49PT08L2NvZGU+KTwvbGk+XFxuPC91bD5cXG48ZGl2IGNsYXNzPVxcXCJleGFtcGxlXFxcIj48L2Rpdj5cXG5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGpzeFxcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+dmFyPC9zcGFuPiBSYWRpbyA9IDxzcGFuIGNsYXNzPVxcXCJobGpzLWJ1aWx0X2luXFxcIj5yZXF1aXJlPC9zcGFuPig8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidrcGMvY29tcG9uZW50cy9yYWRpbyc8L3NwYW4+KTtcXG5cXG48c3BhbiBjbGFzcz1cXFwieG1sXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5kaXY8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+UmFkaW88L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnZhbHVlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPnt0cnVlfS88L3NwYW4+Jmd0Ozwvc3Bhbj7ljZXpgInmoYZcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPlxcbjwvY29kZT48L3ByZT5cXG48Y29kZT50cnVlVmFsdWU8L2NvZGU+IHJhZGlv5a6e6ZmF5YC8PHVsPlxcbjxsaT5AdHlwZSDml6DlhbfkvZPnsbvlnos8L2xpPlxcbjxsaT5AZGVmYXVsdCA8Y29kZT50cnVlPC9jb2RlPjwvbGk+XFxuPC91bD5cXG48ZGl2IGNsYXNzPVxcXCJleGFtcGxlXFxcIj48L2Rpdj5cXG5cXG48cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGpzeFxcXCI+dmFyIFJhZGlvID0gcmVxdWlyZSg8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidrcGMvY29tcG9uZW50cy9yYWRpbyc8L3NwYW4+KTtcXG5cXG4mbHQ7ZGl2Jmd0O1xcbiAgICAmbHQ7UmFkaW8gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+dmFsdWU8L3NwYW4+PXt0cnVlfSB0cnVlVmFsdWU9ezxzcGFuIGNsYXNzPVxcXCJobGpzLW51bWJlclxcXCI+MTwvc3Bhbj59IGRpc2FibGVkPXt0cnVlfS8mZ3Q7PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+dmFsdWU8L3NwYW4+5YC85LiOdHJ1ZVZhbHVl5YC85LiN55u4562JXFxuICAgICZsdDtSYWRpbyA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj52YWx1ZTwvc3Bhbj49ezxzcGFuIGNsYXNzPVxcXCJobGpzLW51bWJlclxcXCI+MTwvc3Bhbj59IHRydWVWYWx1ZT17PHNwYW4gY2xhc3M9XFxcImhsanMtbnVtYmVyXFxcIj4xPC9zcGFuPn0gZGlzYWJsZWQ9e3RydWV9LyZndDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj52YWx1ZTwvc3Bhbj7lgLzkuI50cnVlVmFsdWXlgLznm7jnrYlcXG4mbHQ7L2RpdiZndDtcXG48L2NvZGU+PC9wcmU+XFxuPGgyIGlkPSdoZWFkZXItJUU4JTg3JUFBJUU1JUFFJTlBJUU0JUI5JTg5JUU1JUIxJTlFJUU2JTgwJUE3Jz7oh6rlrprkuYnlsZ7mgKc8L2gyPuS9oOWPr+S7peiHquWumuS5ieS7u+S9leWxnuaAp++8jOi/meS6m+WxnuaAp+S8muaMgui9veWIsDxjb2RlPmlucHV0PC9jb2RlPuagh+etvuS4ijxkaXYgY2xhc3M9XFxcImV4YW1wbGVcXFwiPjwvZGl2PlxcblxcbjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganN4XFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj52YXI8L3NwYW4+IFJhZGlvID0gPHNwYW4gY2xhc3M9XFxcImhsanMtYnVpbHRfaW5cXFwiPnJlcXVpcmU8L3NwYW4+KDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2twYy9jb21wb25lbnRzL3JhZGlvJzwvc3Bhbj4pO1xcblxcbjxzcGFuIGNsYXNzPVxcXCJ4bWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5SYWRpbzwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+ZGlzYWJsZWQ8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+e2ZhbHNlfTwvc3Bhbj4gIFxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+ZXYtY2xpY2s8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+e2Z1bmN0aW9uKCk8L3NwYW4+IHs8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5hbGVydDwvc3Bhbj4oPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dGhpcy5lbGVtZW50LmlubmVySFRNTDwvc3Bhbj4pO308c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj4uYmluZDwvc3Bhbj4oPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+c2VsZjwvc3Bhbj4pfVxcbiAgICAvJmd0Ozwvc3Bhbj7ngrnmiJHmn6XnnItET03nu5PmnoRcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPlxcbjwvY29kZT48L3ByZT5cXG5cIixcImNvZGVzXCI6W3tcImxhbmd1YWdlXCI6XCJqc3hcIixcImNvbnRlbnRcIjpcInZhciBSYWRpbyA9IHJlcXVpcmUoJ2twYy9jb21wb25lbnRzL3JhZGlvJyk7XFxuXFxuPGRpdj5cXG4gICAgPFJhZGlvIC8+5Y2V6YCJ5qGGXFxuPC9kaXY+XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XFxufVwifSx7XCJsYW5ndWFnZVwiOlwianN4XCIsXCJjb250ZW50XCI6XCJ2YXIgUmFkaW8gPSByZXF1aXJlKCdrcGMvY29tcG9uZW50cy9yYWRpbycpO1xcblxcbjxkaXY+XFxuICAgIDxSYWRpbyBkaXNhYmxlZD17dHJ1ZX0vPuemgeeUqFxcbiAgICA8UmFkaW8gZGlzYWJsZWQ9e2ZhbHNlfS8+5ZCv55SoXFxuPC9kaXY+XCJ9LHtcImxhbmd1YWdlXCI6XCJqc3hcIixcImNvbnRlbnRcIjpcInZhciBSYWRpbyA9IHJlcXVpcmUoJ2twYy9jb21wb25lbnRzL3JhZGlvJyk7XFxuXFxuPGRpdj5cXG4gICAgPFJhZGlvIHZhbHVlPXt0cnVlfS8+5Y2V6YCJ5qGGXFxuPC9kaXY+XCJ9LHtcImxhbmd1YWdlXCI6XCJqc3hcIixcImNvbnRlbnRcIjpcInZhciBSYWRpbyA9IHJlcXVpcmUoJ2twYy9jb21wb25lbnRzL3JhZGlvJyk7XFxuXFxuPGRpdj5cXG4gICAgPFJhZGlvIHZhbHVlPXt0cnVlfSB0cnVlVmFsdWU9ezF9IGRpc2FibGVkPXt0cnVlfS8+dmFsdWXlgLzkuI50cnVlVmFsdWXlgLzkuI3nm7jnrYlcXG4gICAgPFJhZGlvIHZhbHVlPXsxfSB0cnVlVmFsdWU9ezF9IGRpc2FibGVkPXt0cnVlfS8+dmFsdWXlgLzkuI50cnVlVmFsdWXlgLznm7jnrYlcXG48L2Rpdj5cIn0se1wibGFuZ3VhZ2VcIjpcImpzeFwiLFwiY29udGVudFwiOlwidmFyIFJhZGlvID0gcmVxdWlyZSgna3BjL2NvbXBvbmVudHMvcmFkaW8nKTtcXG5cXG48ZGl2PlxcbiAgICA8UmFkaW8gZGlzYWJsZWQ9e2ZhbHNlfSAgXFxuICAgICAgICBldi1jbGljaz17ZnVuY3Rpb24oKSB7YWxlcnQodGhpcy5lbGVtZW50LmlubmVySFRNTCk7fS5iaW5kKHNlbGYpfVxcbiAgICAvPueCueaIkeafpeeci0RPTee7k+aehFxcbjwvZGl2PlwifV0sXCJpbmRleFwiOjM0LFwic2lkZUJhcnNcIjp7XCLnu4Tku7ZcIjpbe1widGl0bGVcIjpcIumdouWMheWxkVwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9icmVhZGNydW1iL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLmjInpkq5cIixcInBhdGhcIjpcImNvbXBvbmVudHMvYnV0dG9uL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiQnV0dG9uXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUJ1dHRvblwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItQnV0dG9uJz5CdXR0b248L2gyPlwiLFwidGV4dFwiOlwiQnV0dG9uXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwiQnV0dG9uR3JvdXBcIixcInBhdGhcIjpcIiNoZWFkZXItQnV0dG9uR3JvdXBcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUJ1dHRvbkdyb3VwJz5CdXR0b25Hcm91cDwvaDI+XCIsXCJ0ZXh0XCI6XCJCdXR0b25Hcm91cFwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5pa55rOVXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1Jz7mlrnms5U8L2gxPlwiLFwidGV4dFwiOlwi5pa55rOVXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiQnV0dG9uXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUJ1dHRvblwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItQnV0dG9uJz5CdXR0b248L2gyPlwiLFwidGV4dFwiOlwiQnV0dG9uXCIsXCJjaGlsZHJlblwiOltdfV19XX0se1widGl0bGVcIjpcIuWkjemAieahhlwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9jaGVja2JveC9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5pel5pyf6YCJ5oupXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2RhdGVwaWNrZXIvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuW8ueeql1wiLFwicGF0aFwiOlwiY29tcG9uZW50cy9kaWFsb2cvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLmianlsZXngrlcIixcInBhdGhcIjpcIiNoZWFkZXItJUU2JTg5JUE5JUU1JUIxJTk1JUU3JTgyJUI5XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTYlODklQTklRTUlQjElOTUlRTclODIlQjknPuaJqeWxleeCuTwvaDE+XCIsXCJ0ZXh0XCI6XCLmianlsZXngrlcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLmlrnms5VcIixcInBhdGhcIjpcIiNoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTUnPuaWueazlTwvaDE+XCIsXCJ0ZXh0XCI6XCLmlrnms5VcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLkuovku7ZcIixcInBhdGhcIjpcIiNoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjYnPuS6i+S7tjwvaDE+XCIsXCJ0ZXh0XCI6XCLkuovku7ZcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuS4i+aLieiPnOWNlVwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9kcm9wZG93bi9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkRyb3Bkb3duXCIsXCJwYXRoXCI6XCIjaGVhZGVyLURyb3Bkb3duXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Ecm9wZG93bic+RHJvcGRvd248L2gyPlwiLFwidGV4dFwiOlwiRHJvcGRvd25cIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCJEcm9wZG93bkl0ZW1cIixcInBhdGhcIjpcIiNoZWFkZXItRHJvcGRvd25JdGVtXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Ecm9wZG93bkl0ZW0nPkRyb3Bkb3duSXRlbTwvaDI+XCIsXCJ0ZXh0XCI6XCJEcm9wZG93bkl0ZW1cIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLkuovku7ZcIixcInBhdGhcIjpcIiNoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2XCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjYnPuS6i+S7tjwvaDI+XCIsXCJ0ZXh0XCI6XCLkuovku7ZcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCJEcm9wZG93bkl0ZW1cIixcInBhdGhcIjpcIiNoZWFkZXItRHJvcGRvd25JdGVtXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Ecm9wZG93bkl0ZW0nPkRyb3Bkb3duSXRlbTwvaDI+XCIsXCJ0ZXh0XCI6XCJEcm9wZG93bkl0ZW1cIixcImNoaWxkcmVuXCI6W119XX1dfSx7XCJ0aXRsZVwiOlwi5YiG6aG1XCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3BhZ2luYXRpb24vaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLmlrnms5VcIixcInBhdGhcIjpcIiNoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTUnPuaWueazlTwvaDE+XCIsXCJ0ZXh0XCI6XCLmlrnms5VcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJQYWdpbmF0aW9uXCIsXCJwYXRoXCI6XCIjaGVhZGVyLVBhZ2luYXRpb25cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLVBhZ2luYXRpb24nPlBhZ2luYXRpb248L2gyPlwiLFwidGV4dFwiOlwiUGFnaW5hdGlvblwiLFwiY2hpbGRyZW5cIjpbXX1dfV19LHtcInRpdGxlXCI6XCLljZXpgInmoYZcIixcInBhdGhcIjpcImNvbXBvbmVudHMvcmFkaW8vaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJSYWRpbyDljZXpgInmoYZcIixcInBhdGhcIjpcIiNoZWFkZXItUmFkaW8lMjAlRTUlOEQlOTUlRTklODAlODklRTYlQTElODZcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLVJhZGlvJTIwJUU1JThEJTk1JUU5JTgwJTg5JUU2JUExJTg2Jz5SYWRpbyDljZXpgInmoYY8L2gyPlwiLFwidGV4dFwiOlwiUmFkaW8g5Y2V6YCJ5qGGXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi56S65L6LXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNyVBNCVCQSVFNCVCRSU4QlwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItJUU3JUE0JUJBJUU0JUJFJThCJz7npLrkvos8L2gyPlwiLFwidGV4dFwiOlwi56S65L6LXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5bi46KeE5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCOCVCOCVFOCVBNyU4NCVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItJUU1JUI4JUI4JUU4JUE3JTg0JUU1JUIxJTlFJUU2JTgwJUE3Jz7luLjop4TlsZ7mgKc8L2gyPlwiLFwidGV4dFwiOlwi5bi46KeE5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi6Ieq5a6a5LmJ5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFOCU4NyVBQSVFNSVBRSU5QSVFNCVCOSU4OSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItJUU4JTg3JUFBJUU1JUFFJTlBJUU0JUI5JTg5JUU1JUIxJTlFJUU2JTgwJUE3Jz7oh6rlrprkuYnlsZ7mgKc8L2gyPlwiLFwidGV4dFwiOlwi6Ieq5a6a5LmJ5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfV19XX1dfSxcImhpZ2hsaWdodGVkXCI6W3tcImxhbmd1YWdlXCI6XCJqc3hcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganN4XFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj52YXI8L3NwYW4+IFJhZGlvID0gPHNwYW4gY2xhc3M9XFxcImhsanMtYnVpbHRfaW5cXFwiPnJlcXVpcmU8L3NwYW4+KDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2twYy9jb21wb25lbnRzL3JhZGlvJzwvc3Bhbj4pO1xcblxcbjxzcGFuIGNsYXNzPVxcXCJ4bWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5SYWRpbzwvc3Bhbj4gLyZndDs8L3NwYW4+5Y2V6YCJ5qGGXFxuPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPjwvc3Bhbj48L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBJbnRhY3QgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4naW50YWN0Jzwvc3Bhbj47XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiB0ZW1wbGF0ZSA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPicuL2luZGV4LnZkdCc8L3NwYW4+O1xcblxcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4cG9ydDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZGVmYXVsdDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtY2xhc3NcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmNsYXNzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHRlbmRzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy10aXRsZVxcXCI+SW50YWN0PC9zcGFuPiA8L3NwYW4+e1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+c3RhdGljPC9zcGFuPiB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcbn08L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJqc3hcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganN4XFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj52YXI8L3NwYW4+IFJhZGlvID0gPHNwYW4gY2xhc3M9XFxcImhsanMtYnVpbHRfaW5cXFwiPnJlcXVpcmU8L3NwYW4+KDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2twYy9jb21wb25lbnRzL3JhZGlvJzwvc3Bhbj4pO1xcblxcbiZsdDtkaXYmZ3Q7XFxuICAgICZsdDtSYWRpbyBkaXNhYmxlZD17dHJ1ZX0vJmd0O+emgeeUqFxcbiAgICAmbHQ7UmFkaW8gZGlzYWJsZWQ9e2ZhbHNlfS8mZ3Q75ZCv55SoXFxuJmx0Oy9kaXYmZ3Q7PC9jb2RlPjwvcHJlPlwifSx7XCJsYW5ndWFnZVwiOlwianN4XCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGpzeFxcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+dmFyPC9zcGFuPiBSYWRpbyA9IDxzcGFuIGNsYXNzPVxcXCJobGpzLWJ1aWx0X2luXFxcIj5yZXF1aXJlPC9zcGFuPig8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidrcGMvY29tcG9uZW50cy9yYWRpbyc8L3NwYW4+KTtcXG5cXG48c3BhbiBjbGFzcz1cXFwieG1sXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5kaXY8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+UmFkaW88L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnZhbHVlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPnt0cnVlfS88L3NwYW4+Jmd0Ozwvc3Bhbj7ljZXpgInmoYZcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPjwvY29kZT48L3ByZT5cIn0se1wibGFuZ3VhZ2VcIjpcImpzeFwiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc3hcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPnZhcjwvc3Bhbj4gUmFkaW8gPSA8c3BhbiBjbGFzcz1cXFwiaGxqcy1idWlsdF9pblxcXCI+cmVxdWlyZTwvc3Bhbj4oPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4na3BjL2NvbXBvbmVudHMvcmFkaW8nPC9zcGFuPik7XFxuXFxuJmx0O2RpdiZndDtcXG4gICAgJmx0O1JhZGlvIHZhbHVlPXt0cnVlfSB0cnVlVmFsdWU9ezF9IGRpc2FibGVkPXt0cnVlfS8mZ3Q7dmFsdWXlgLzkuI50cnVlVmFsdWXlgLzkuI3nm7jnrYlcXG4gICAgJmx0O1JhZGlvIHZhbHVlPXsxfSB0cnVlVmFsdWU9ezF9IGRpc2FibGVkPXt0cnVlfS8mZ3Q7dmFsdWXlgLzkuI50cnVlVmFsdWXlgLznm7jnrYlcXG4mbHQ7L2RpdiZndDs8L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJqc3hcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganN4XFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj52YXI8L3NwYW4+IFJhZGlvID0gPHNwYW4gY2xhc3M9XFxcImhsanMtYnVpbHRfaW5cXFwiPnJlcXVpcmU8L3NwYW4+KDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2twYy9jb21wb25lbnRzL3JhZGlvJzwvc3Bhbj4pO1xcblxcbjxzcGFuIGNsYXNzPVxcXCJ4bWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5SYWRpbzwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+ZGlzYWJsZWQ8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+e2ZhbHNlfTwvc3Bhbj4gIFxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+ZXYtY2xpY2s8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+e2Z1bmN0aW9uKCk8L3NwYW4+IHs8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5hbGVydDwvc3Bhbj4oPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dGhpcy5lbGVtZW50LmlubmVySFRNTDwvc3Bhbj4pO308c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj4uYmluZDwvc3Bhbj4oPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+c2VsZjwvc3Bhbj4pfVxcbiAgICAvJmd0Ozwvc3Bhbj7ngrnmiJHmn6XnnItET03nu5PmnoRcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPjwvY29kZT48L3ByZT5cIn1dfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9jb21wb25lbnRzL3JhZGlvL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9jb21wb25lbnRzL3JhZGlvL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAyNyAzOCJdLCJzb3VyY2VSb290IjoiIn0=