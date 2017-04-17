$(".loading").hide();
$("#click").on("click", function() {
  $(".container").remove();
  $(".loading").show();
  var keyword=$("#keyword").val();
  
  var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+keyword+'&limit=10&namespace=0&format=json&callback=?';
   var title,content,link;
  $.getJSON(url,function(data){
    for(var i=0;i<data[1].length;i++)
    {
    title = data[1][i];
   
    content=data[2][i];
    $("#content").html(content);
     link=data[3][i];
    $("#link").attr("href",link);
     $(".loading").hide();
      $("#result").append("<div class='container'><a target='_blank' id='title' href="+link+"><h1>"+title+"</h1></a>"+"<p>"+content+"</p></div>");
      
      
    }
 
  })
  
  
});

$("#clickchinese").on("click", function() {
  $(".container").remove();
  $(".loading").show();
  var keyword=$("#keyword").val();
  var url = 'https://zh.wikipedia.org/w/api.php?action=opensearch&search='+keyword+'&limit=10&namespace=0&format=json&callback=?';
   var title,content,link;
  $.getJSON(url,function(data){
    for(var i=0;i<data[1].length;i++)
    {
    title = data[1][i];
   
    content=data[2][i];

     link=data[3][i];
    
      $(".loading").hide();
      $("#result").append("<div class='container'><a target='_blank' id='title' href="+link+"><h1>"+title+"</h1></a>"+"<p>"+content+"</p></div>");
      
      
    }
  })
  
  
});





/*  随机生成wiki页面    */
function clickIt(data)
{
  var url,a,wikiurl;
  
  if(data==0)
    {
   url="https://en.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=1&format=json&callback=?";
       
       
      
    }
  else {
  var url="https://zh.wikipedia.org/w/api.php?action=query&list=random&rnnamespace=0&rnlimit=1&format=json&callback=?";
    
  }
  
  
  $.getJSON(url,function(w){
          
    var a=w.query.random[0].title;
    
  
         if(data==0){ 
     wikiurl="http://en.wikipedia.org/wiki/"+a;
               $("#btntext").attr("href",wikiurl);
         }
        else{
       wikiurl="http://zh.wikipedia.org/wiki/"+a;   
       $("#btntext2").attr("href",wikiurl);   
        }  

    
            })
  }






/*

看一下为什么使用$.ajax的形式为什么我不能得到正确的api相应。
  $.ajax({
    type: "GET",
    url: url,
   // dataType:"json",
   // timeout: 50,
    success: function() {
      alert("success");
     // console.log(w[0][0]);
    },
    error: function() {
      alert("error");
      //console.log(data[0][1]);
    }

  });
  边框最后再加，先处理数据，再处理CSS布局。
  */