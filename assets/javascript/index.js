var cityName = $(".cityName");
var date = $(".date");
var icon = $(".icon");
var temperature = $(".temperature");
var wind = $(".wind");
var humidity = $(".humidity");


// $(".searchButton").on("click", function() {
//     var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=london&appid=1750d64b9b244e082f61b1c95f2ee8c2';
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             var dateValue = data['name'];
//             var iconValue = data['weather'][0]['description'];
//             var temperatureValue = data['main']['temp'];
//             var windValue = data['wind']['speed'];
//             var humidityValue = data['main']['humidity'];

//             date.innerHTML = dateValue;
//             icon.innerHTML = iconValue;
//             temperature.innerHTML = temperatureValue;
//             wind.innerHTML = windValue;
//             humidity.innerHTML = humidityValue;

//     })
//     .catch(error => alert("City not found! Please enter a new city."))

// });
function displayWeather( d ) {
    var celsius = Math.round((parseFloat(d.main.temp)-32)*.5556);

    document.querySelector(".wind").innerHTML = "Wind Speed: " +  d.wind.speed;
    document.querySelector(".temperature").innerHTML = "Temperature: " +  d.main.temp + '&deg;' + " Fahrenheit " + " / " + celsius + '&deg;' + " Celsius";
    document.querySelector(".humidity").innerHTML = "Humidity: " + d.main.humidity + "%";
}

$(".searchButton").on("click", function() {
var getCoordinates = function(cityName) {
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=1750d64b9b244e082f61b1c95f2ee8c2&units=imperial';
    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    displayWeather(data);
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