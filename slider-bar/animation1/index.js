var bars=document.querySelector('.fa-bars-1');
var bars2=document.querySelector('.fa-bars-2');
var slider=document.querySelector('.slider');
bars.onclick=function(){

	slider.classList.remove("show");
	slider.classList.add("hidden");
	slider.style.visibility="visible";

}

bars2.onclick=function(){
	
	slider.classList.remove("hidden");
	slider.classList.add("show");
	setTimeout(function(){slider.style.visibility="hidden"},300 )  

}


/*
使用setTimeout将延迟时间与动画的时间匹配，造成出场动画之后hidden的现象，是一种比较笨的方法。

我们也可以简单总结一下。

对于display属性来说，CSS3中没有规定他的过渡动画，但是我们可以使用animation来做

对于visibility属性来说，css3中对应的是有过渡的transition
http://stackoverflow.com/questions/3331353/transitions-on-the-display-property

因此，其实我们也是可以直接用animation，而无需使用key frame了，当然对这种动画要求较高就另当别论了。

使用opacity时，透明度为0的时候，依然占据空间。在上层的话，会造成他下面的点击无效。 

*/