var cityName = $(".cityName").val();
var date = $(".date");
var icon = $(".icon");
var temperature = $(".temperature");
var wind = $(".wind");
var humidity = $(".humidity");

function displayWeather(d) {
    var celsius = Math.round((parseFloat(d.list[0].main.temp)-32)*.5556);

    document.querySelector(".date0").innerHTML = d.city.name + " " + d.list[0].dt_txt;
    document.querySelector(".wind0").innerHTML = "Wind Speed: " +  d.list[0].wind.speed;
    document.querySelector(".temperature0").innerHTML = "Temperature: " +  d.list[0].main.temp + '&deg;' + " Fahrenheit " + " / " + celsius + '&deg;' + " Celsius";
    document.querySelector(".humidity0").innerHTML = "Humidity: " + d.list[0].main.humidity + "%";
    document.querySelector(".uvIndex").innerHTML = "UV Index: " + d.list[0]
}


function displayForecast( d ) {
    for (var i = 1; i < 6; i++) {
                        
    var celsius = Math.round((parseFloat(d.list[i].main.temp)-32)*.5556);
    
    document.querySelector(".date1").innerHTML = d.list[i].dt_txt;
    document.querySelector(".wind1").innerHTML = "Wind Speed: " +  d.list[i].wind.speed;
    document.querySelector(".temperature1").innerHTML = "Temperature: " +  d.list[i].main.temp + '&deg;' + " Fahrenheit " + " / " + celsius + '&deg;' + " Celsius";
    document.querySelector(".humidity1").innerHTML = "Humidity: " + d.list[i].main.humidity + "%";
    }
}

$(".searchButton").on("click", function() {
var getCoordinates = function(cityName) {
    var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&cnt=6&appid=1750d64b9b244e082f61b1c95f2ee8c2&units=imperial';
    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    displayWeather(data);
                    displayForecast(data);
                })
            } else {
                alert("Location not found");
            }
        })
        .catch(function(error) {
            alert("City not found! Please enter a new city.");
        });
    }
    getCoordinates("Salt Lake City");
})