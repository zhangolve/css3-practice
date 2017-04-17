$(function() {
    var $city=$("#city");
    


  var getLocalWeather = function() {
    $.when(
        // get user ip and location api

        $.ajax({
          type: 'GET',
          url: 'https://freegeoip.net/json/',
           dataType:'jsonp'
          //{"ip":"101.20.208.2","country_code":"CN","country_name":"China","region_code":"13","region_name":"Hebei","city":"Hebei","zip_code":"","time_zone":"Asia/Shanghai","latitude":39.8897,"longitude":115.275,"metro_code":0} 上面就是这个api得到的地理位置的情况
        })
     
      )
    //http://stackoverflow.com/questions/16076009/confused-on-jquery-ajax-done-function 关于done函数,done是配合着ajax使用的，如果ajax的抓取api完成，则执行done没有问题，这里面的data就是api中的数据。我们需要某一个值的话，就直接找到调用即可了。
    .done(function(data){
      
      var 
      city=data.city,
      country=data.country_name,
               key = '3f5fa17bde53dec55c587fd804a25df0',
          url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&units=metric' + '&appid='+ key; $("#city").html(city+'<br>'+country);
      $.ajax({
        type:"GET",
        url:url,
        datatype:"jsonp",
        success:function(w){
         var state=w.weather[0].description;
         var main=w.weather[0].main;
  
         var temp =w.main.temp; 
          
          $("#wea").html(state);
          $("#wea").append(" "+temp+"  ℃");
          
          switch (main){
            case  "Clear": $("#wi").addClass("wi-day-sunny");
            case "Rain" : $("#wi").addClass("wi-day-rain");
            case "Snow":$("#wi").addClass("wi-day-snow");
              case 
"Mist": $("#wi").addClass("wi-fog");
              //$("i:first").addClass("wi-day-rain");添加到第一个i标签中相应的类，如果是要第二个i标签又该怎么办呢？我们考虑可以不使用i标签来选择dom，而是使用id的形式
              
              
          }
        }
        
        
      })
       
    })
    //除了done之外，还有success、always等，在这里我们为了确定是否已经成功
    .fail(function(){
      
      
      
    })
    
  }
      
      getLocalWeather();
});


//类似的，使用google map api
//https://maps.googleapis.com/maps/api/geocode/json?latlng=39.9,116.3&key=AIzaSyBUmxn8RqqIs74jh1wRup-FxpYNBUht4wg
//上面就是google map 的api的一个例子，我们在这里的参数是经纬度，key=后面是我个人的google 密钥，由于这个经纬度是北京市的经纬度，因此最后得出的结果是在北京，更精确的是公主坟太平东路，我们也可以做一个实验，输入任意的一个经纬度，得到相应的详细地址。

//var main=w.weather[0].main; main的正确表达形式          
//var base= w.base; base的正确表达形式


// 注意这里为什么要加上一个[], var state=w.weather[0].description;因为本身在json文件里面就有[]
//"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],