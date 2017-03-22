
﻿# 本练习来自图解CSS第八章


* 使用最新的标准，通过使用autoprefixer这个sublime text插件，来实现自动增加其他浏览器私有属性的功能。

* 认识最常用到的flex

	display:flex; //启用伸缩容器布局
	order:1; //各个伸缩项目的顺序
	flex:1; //比例
	justify-pack:flex-end; //主轴对齐方式
	align-items:stretch;//侧轴对齐方式
	


* https://gist.github.com/zhangolve/0c44a4228d8c15da9861452f8639d25e

上面的这个gist 的布局并不适用于IE10及以下。所以还应该对之有所修改。
事实上，在添加了-ms-的私有前缀之后，flexbox是可以用的，只是说，由于设置的中间部分宽度为main，造成了一些问题，浏览器认为这个main是剩余的部分。因此出现了截图中所示的场景。


当在文档中设置了正确的文档流，order 顺序之后，也就告诉浏览器，我这三部分是要排在一起的，我们是这样的顺序，我的main部分是要占据中间部分，你给我留出剩下的空间来。


	