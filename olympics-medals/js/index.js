var countryList = ['china', 'usa', 'japan', 'canada', 'brazil'];
var medalList = [];
for (var i in countryList) {
  medalList[i] = {
    "country": countryList[i],
    "gold": 0,
    "sliver": 0,
    "copper": 0,
    "sum":0,
  };

}

$(document).ready(function() {

  $("#click").on("click", function() {
    var country = $("#country").val();
    var medal = $("#medal").val();
    if (country != null && medal != null) {
      for (var j in countryList) {
        if (country == countryList[j]) {
          console.log(medal);
          switch (medal) {
            case '1':
              medalList[j].gold++,medalList[j].sum++;
              break;
            case '2':
              medalList[j].sliver++,medalList[j].sum++;
              break;
            case '3':
              medalList[j].copper++,medalList[j].sum++;
              break;

          }

        }

        $("#table").html(function() {
            var table='<thead> <tr><th>国家</th><th>金牌<i class="fa fa-trophy" aria-hidden="true"></i></th> <th>银牌<i class="fa fa-trophy" aria-hidden="true"></i></th><th>铜牌<i class="fa fa-trophy" aria-hidden="true"></i></th><th>奖牌总数<i class="fa fa-trophy" aria-hidden="true"></i></th></tr></thead><tbody>';
            for (var i in medalList) {
              table += '<tr><td>' + medalList[i].country + '</td><td>' + medalList[i].gold + '</td><td>' + medalList[i].sliver + '</td><td>' + medalList[i].copper + '</td><td>'+medalList[i].sum + '</td></tr>';

            }
          table+="</tbody>";
            return table;
          }

        );
      }
      $("#table").DataTable({
       "orderFixed": [ 4, 'desc' ],
         paging: false,
        searching: false,
        retrieve: true,
         "info":  false
      });
    } 
    
    else {
      alert("please select country and medal");

    }

  })

})