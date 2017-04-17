var footballQuotes = [{
  quote: "Future Primitive",
  author: "Papercuts",
  link:" http://music.163.com/#/song?id=18060580 "
}, {
  quote: "The Scientist",
  author: "Coldplay",
  link:" http://music.163.com/#/song?id=17177367 "
  
}, {
  quote: "Stay Here Forever",
  
  author: "jewel",
  link:"http://music.163.com/#/song?id=18836961"
  
}, {
  quote: "Satisfied",
  author: "Jewel",
  link:"http://music.163.com/#/song?id=18836965"
}, {
  quote: "天空之城",
  author: "李志",
  link:"http://music.163.com/#/song?id=26508186"
}, {
  quote: "执着",
  author: "许巍",
  link:"http://music.163.com/#/song?id=168038"
}, {
  quote: "Lost Stars",
  
  author: "Adam Levin",
  link:"http://music.163.com/#/song?id=28737747"
}, {
  quote: "Viva la Vida",
  author: "Coldplay",
  link:"http://music.163.com/#/song?id=3986017"
  
}, {
  quote: "What You Are",
  author: "Jewel",
  link:"http://music.163.com/#/song?id=18836960"
  
}, {
  quote:"Yellow",
  author:"Coldplay",
  link:"http://music.163.com/#/song?id=17177324"
  
},{
  quote:"Fix you",
  author:"Coldplay",
  link:"http://music.163.com/#/song?id=3986326"
  
}]

function newQuote() {
  if (footballQuotes.length == 0) {
    document.getElementById("quoteMe").innerHTML = "click here"
    $("#quoteMe").attr("href","http://music.163.com/#/user/home?id=2645832")
    $("#quoteMe").fadeIn(1000);
    document.getElementById("author").innerHTML = "You've read all my TOP 10 favourite songs,you can get more "
    
    document.getElementById("moreQuotes").disabled = true;
    document.getElementById("twitter").disabled = true;
    
    
  $("#moreQuotes").fadeOut("slow")
  $("#twitter").fadeOut("slow")
  } 
  
  else {
    var randNum = Math.floor(Math.random() * footballQuotes.length);
    document.getElementById("quoteMe").innerHTML = footballQuotes[randNum].quote;
    $("#quoteMe").attr("href",footballQuotes[randNum].link);
      document.getElementById("author").innerHTML = footballQuotes[randNum].author;
    footballQuotes.splice(randNum, 1);
  }
};
document.onload = newQuote();




$("#moreQuotes").click(function() {
  $("#quoteMe").fadeOut("slow", function() {
    newQuote();
  });
  $("#quoteMe").fadeIn("slow");
});

  $(".tweet").on("click", function() {
    var tweet = '"' + $("#quoteMe").text() + '"'+ " " + $("#author").text() ;  //这里用到的不就是javascript最简单的变量赋值的语法吗？可见，在这里不是只用到jquery的。这里的‘“’表示的是添加一个”。
    $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + tweet);
  });