var city = ["New York City", "San Francisco", "Los Angeles", "Austin", 
            "Sydney"];

$(document).ready(function() {
   var options = '';
   for (var i = 0; i < city.length; i++) {
       options += '<option value="'+ city[i] + '">' + city[i] + '</option>';
       }
       $("#city-type").append(options);  
   $("select").change(function() {
       var city = $("#city-type").val();
	   
       if (city == "New York City"){
           $('body').attr('class','nyc');
       } else if (city == "San Francisco"){
           $('body').attr('class','sf');
       } else if (city == "Los Angeles"){
           $('body').attr('class','la');
       } else if (city == "Austin"){
           $('body').attr('class','austin');
       } else if (city == "Sydney"){
           $('body').attr('class','sydney');
       }

   });
});