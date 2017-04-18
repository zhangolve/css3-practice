/*2017/04/18 
offsetX offsetY 是相对于这个元素而言的位置坐标
*/
/**/

var  square=document.getElementById('tran');
var left=document.querySelector('.left');
var right=document.querySelector('.right');
var top2=document.querySelector('.top');
console.log(right);
var bottom=document.querySelector('.bottom');
		square.onmouseover=function(e){
			var  x=e.offsetX;
			var  y=e.offsetY;
			if(y>x){
				if(x+y<100){
					left.style.borderLeft="100px solid black";
					// alert('left');
				}
				else{
					console.log('bottom');
					bottom.style.borderBottom="100px solid black";
				}
			}
			else if(x+y>100){
					console.log('right');
					right.style.borderRight="100px solid black";
			}
			else{
				console.log(x,y);
				top2.style.borderTop="100px solid black";
			}
		}
		square.onmouseout=function(){
			left.style.borderLeft="100px solid red";
			right.style.borderRight="100px solid yellow";
			top2.style.borderTop="100px solid green";
			bottom.style.borderBottom="100px solid blue";

		}