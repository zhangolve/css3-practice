* position:fixed relative absolute static  这几种。其中postion:fixed 经常可以用来固定导航栏或者是类似于网易云音乐那种底边栏。
* float:left 在左侧浮动,clear:both; 清除浮动。 在没有出现css3之前经常被用来进行页面布局。

* [git-push-error-could-not-resolve-host-name 问题 ](http://stackoverflow.com/questions/25931684/git-push-error-could-not-resolve-host-name) ,也可能是网络问题，先检查网络是否正常。
* z-index http://www.w3school.com.cn/tiy/t.asp?f=csse_zindex
* css 中的布局，我们其实可以类比photoshop来进行研究，如同photoshop中有图层的概念那样，在css中，也常常因为各种需要要设置上层图层，下层图层，置顶图层等。这个时候实际上，也就用到了css中的 position了，z-index等概念了。
* [navbar fixed](https://gist.github.com/zhangolve/64c3bf90b318c7026f81cd55bb32a888)
* ::ater ,::before 伪选择器，类似于jquery 中的$().after() 的使用 ，但是用的是css。
Note: IE8 and Opera 4-6 only support the old, single-colon CSS2 syntax (:after). Newer versions support the standard, double-colon CSS3 syntax (::after).


HTML CODE


	<div>

	<p>
	   <h1>how are you </h1> 
	</p>

	<em>I am fine <em>
	</div>
	
CSS CODE

	h1:hover::after{
	  content:'where are you going';
	  color:red
	 
	}

	/*使用伪选择器hover配合after选择器*/
	
	
