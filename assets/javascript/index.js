var forecastContainerEl = document.querySelector(".forecastContainer");
var forecastHide = document.querySelector(".forecast");
var resetButton = document.querySelector(".resetButton");
var savedSearch = document.querySelector(".savedSearch");
var saveArray = [];

// pulls data from API getCurrentForecast call and displays to city div
function displayWeather(d) {
    var celsius = Math.round((parseFloat(d.main.temp)-32)*.5556);

    var img = document.createElement("img");
    img.src = "http://openweathermap.org/img/wn/" + d.weather[0].icon + "@2x" + ".png";
    document.querySelector(".date0").innerHTML = d.name + ", " + d.sys.country + " " + moment().format('LL');
    document.querySelector(".date0").appendChild(img);
    document.querySelector(".wind0").innerHTML = "Wind Speed: " +  d.wind.speed + " mph";
    document.querySelector(".temperature0").innerHTML = "Temperature: " +  d.main.temp.toFixed(0) + '&deg;' + " F " + " / " + celsius + '&deg;' + " C";
    document.querySelector(".humidity0").innerHTML = "Humidity: " + d.main.humidity + "%";
    // document.querySelector(".uvIndex").innerHTML = "UV Index: " + d.list[0]

    var lat = d.coord.lat;
    console.log(lat);
    var lon = d.coord.lon;
    console.log(lon);
}

// pulls data from API get
function displayForecast( d ) {
    // for (var i = 1; i < 6; i++) {
                        
    var celsius = Math.round((parseFloat(d.list[4].main.temp)-32)*.5556);
    
    document.querySelector(".date1").innerHTML = moment().add(1, 'day').format('l');
    $(".icon1").attr("src", "http://openweathermap.org/img/wn/" + d.list[4].weather[0].icon + "@2x" + ".png");
    document.querySelector(".wind1").innerHTML = "Wind Speed: " +  d.list[4].wind.speed + " mph";
    document.querySelector(".temperature1").innerHTML = "Temperature: " +  d.list[4].main.temp.toFixed(0) + '&deg;' + " F " + " / " + celsius + '&deg;' + " C";
    document.querySelector(".humidity1").innerHTML = "Humidity: " + d.list[4].main.humidity + "%";

    // create a div element to hold 5 day forecast
    // var forecastEl = document.querySelector(".forecast");
    // forecastEl.createElement("<div>").addClass("forecastDetail");
    // }

    var celsius = Math.round((parseFloat(d.list[12].main.temp)-32)*.5556);
    
    document.querySelector(".date2").innerHTML = moment().add(2, 'days').format('l');
    $(".icon2").attr("src", "http://openweathermap.org/img/wn/" + d.list[12].weather[0].icon + "@2x" + ".png");
    document.querySelector(".wind2").innerHTML = "Wind Speed: " +  d.list[12].wind.speed + " mph";
    document.querySelector(".temperature2").innerHTML = "Temperature: " +  d.list[12].main.temp.toFixed(0) + '&deg;' + " F " + " / " + celsius + '&deg;' + " C";
    document.querySelector(".humidity2").innerHTML = "Humidity: " + d.list[12].main.humidity + "%";

    var celsius = Math.round((parseFloat(d.list[20].main.temp)-32)*.5556);
    
    document.querySelector(".date3").innerHTML = moment().add(3, 'days').format('l');
    $(".icon3").attr("src", "http://openweathermap.org/img/wn/" + d.list[20].weather[0].icon + "@2x" + ".png");
    document.querySelector(".wind3").innerHTML = "Wind Speed: " +  d.list[20].wind.speed + " mph";
    document.querySelector(".temperature3").innerHTML = "Temperature: " +  d.list[20].main.temp.toFixed(0) + '&deg;' + " F " + " / " + celsius + '&deg;' + " C";
    document.querySelector(".humidity3").innerHTML = "Humidity: " + d.list[20].main.humidity + "%";

    var celsius = Math.round((parseFloat(d.list[28].main.temp)-32)*.5556);
    
    document.querySelector(".date4").innerHTML = moment().add(4, 'days').format('l');
    $(".icon4").attr("src", "http://openweathermap.org/img/wn/" + d.list[28].weather[0].icon + "@2x" + ".png");
    document.querySelector(".wind4").innerHTML = "Wind Speed: " +  d.list[28].wind.speed + " mph";
    document.querySelector(".temperature4").innerHTML = "Temperature: " +  d.list[28].main.temp.toFixed(0) + '&deg;' + " F " + " / " + celsius + '&deg;' + " C";
    document.querySelector(".humidity4").innerHTML = "Humidity: " + d.list[28].main.humidity + "%";

    var celsius = Math.round((parseFloat(d.list[36].main.temp)-32)*.5556);
    
    document.querySelector(".date5").innerHTML = moment().add(5, 'days').format('l');
    $(".icon5").attr("src", "http://openweathermap.org/img/wn/" + d.list[36].weather[0].icon + "@2x" + ".png");
    document.querySelector(".wind5").innerHTML = "Wind Speed: " +  d.list[36].wind.speed + " mph";
    document.querySelector(".temperature5").innerHTML = "Temperature: " +  d.list[36].main.temp.toFixed(0) + '&deg;' + " F " + " / " + celsius + '&deg;' + " C";
    document.querySelector(".humidity5").innerHTML = "Humidity: " + d.list[36].main.humidity + "%";
}

$(".userInput").submit(function(e) {
    e.preventDefault()
    
    var cityName = $(".cityName").val()
    console.log(cityName);
    var getCurrentForecast = function() {
        var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=1750d64b9b244e082f61b1c95f2ee8c2&units=imperial';
        fetch(apiUrl)
            .then(function(response) {
                response.json().then(function(data) {
                    console.log(data);
                    displayWeather(data);
                    saveArray.push(cityName);
                    localStorage.setItem("location", JSON.stringify(saveArray));
                    var saveInput = JSON.parse(localStorage.getItem("location"));
                        console.log("saveInput", saveInput);

                        console.log("saveArray1: ", saveArray);
                        saveArray= [];
                        
                        // check if anything in local storage, if null skip
                        if (saveInput) {
                            for (var i = 0; i<saveInput.length; i++) {
                            // console.log("test", saveInput[i]);
                            saveArray.push(saveInput[i]);
                            console.log("saveArray2: ", saveArray);

                            var cityEl = saveInput[i];
                            var cityBtn = document.createElement("button");
                            cityBtn.textContent = cityEl;
                            cityBtn.style.cssText = `margin: 8px; 
                            color: #000000; 
                            backgroundColor: #e7e7e7; 
                            padding: 5px; 
                            border-radius: 5px`; 
                            }
                        }

                        console.log("saveArray3: ", saveArray);
                    // save data to local storage
                    
                        // CREATE A FOR LOOP WITH A SPLIT FUNCTION TO CREATE A NEW BUTTON EVERY TIME IT'S CALLED

                    // displays cityName to DOM
                    savedSearch.after(cityBtn);
                })

                // displays reset search button
                resetButton.classList.remove("hide");

                $(".cityName").val("");
            })
    }
    forecastHide.classList.remove("hide");
    getCurrentForecast();

    var getFutureForecast = function() {
        var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=1750d64b9b244e082f61b1c95f2ee8c2&units=imperial';
        fetch(apiUrl)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function(data) {
                        console.log(data);
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
        getFutureForecast();
});

// create a clear local storage button
$(".resetButton").click(function() {
    localStorage.clear();
    $(".cityName").val("");
    location.reload();
    savedSearch.classList.add("hide");
}) 