$(document).ready(function() {  

    $.getJSON("https://ipinfo.io", function(locationData) {
        var weatherURL = "https://api.forecast.io/forecast/9b6cdb806648ea42b2f2a076e97be283/" + locationData.loc + "?callback=?";
        $.getJSON(weatherURL, function(weatherData) {
            temp = weatherData.currently.temperature;
            tempF ="<h3> Temp: " + Math.floor(temp) + " <span class = \"unit\"> ºF</span>";
            tempC = Math.floor((temp - 32) / 1.8) + " <span class = \"unit\"> ºC</span>";
            $(".location").text(locationData.city + ", " + locationData.region);
            $(".summary").text(weatherData.currently.summary);
            $(".temp").html(tempF);
            $(".weather-icon").html("<i class = \"wi " + "wi-forecast-io-" + weatherData.currently.icon + "\"></i>");
           $('#tweet-weather').attr('href', 'https://twitter.com/intent/tweet?hashtags=weather&related=freecodecamp&text=' + encodeURIComponent("The weather here in " + locationData.city + ", " + locationData.region + " is " + Math.floor(temp) + "ºF , " + weatherData.currently.summary + "."));
            });
    });

    var isC = false;
    $(".temp-toggle").on("click", function() {
        var temp = $(".temp");
        if (isC) {
            temp.html(tempF);
            isC = false;
            } else {
            temp.html(tempC);
            isC = true;
        }
    });
  
});