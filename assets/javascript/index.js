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
    
}

// pulls data from API onecall
function displayForecast( d ) {
    // prints UV Index to DOM and syles background based on uvIndex burn times
    document.querySelector(".uvIndex").innerHTML = d.current.uvi;
    if (d.current.uvi < 1){
    document.querySelector(".uvIndex").style.cssText = `background-color: #00ff55;`
    } else if (d.current.uvi > 1 && d.current.uvi< 2) {
    document.querySelector(".uvIndex").style.cssText = `background-color: #9dff00;`
    } else if (d.current.uvi > 2 && d.current.uvi< 3) {
    document.querySelector(".uvIndex").style.cssText = `background-color: #fffb00;`
    } else if (d.current.uvi > 3 && d.current.uvi< 4) {
    document.querySelector(".uvIndex").style.cssText = `background-color: #ffc400;`
    } else if (d.current.uvi > 4 && d.current.uvi< 5) {
    document.querySelector(".uvIndex").style.cssText = `background-color: #ff9d00;`
    } else if (d.current.uvi > 5 && d.current.uvi< 6) {
    document.querySelector(".uvIndex").style.cssText = `background-color: #ff8800;`
    } else if (d.current.uvi > 6 && d.current.uvi< 7) {
    document.querySelector(".uvIndex").style.cssText = `background-color: #ff0000;`
    } else if (d.current.uvi > 7 && d.current.uvi< 8) {
    document.querySelector(".uvIndex").style.cssText = `background-color: #bd0909;`
    } else if (d.current.uvi > 8 && d.current.uvi< 9) {
    document.querySelector(".uvIndex").style.cssText = `background-color: #bd0969;`
    } else if (d.current.uvi > 9 && d.current.uvi< 10) {
    document.querySelector(".uvIndex").style.cssText = `background-color: #ff058a;`
    }

    //performs math function to convert Fahrenheit into Celsius
    var celsius = Math.round((parseFloat(d.daily[1].temp.day)-32)*.5556);
    
    document.querySelector(".date1").innerHTML = moment().add(1, 'day').format('l');
    $(".icon1").attr("src", "http://openweathermap.org/img/wn/" + d.daily[1].weather[0].icon + "@2x" + ".png");
    document.querySelector(".wind1").innerHTML = "Wind Speed: " +  d.daily[1].wind_speed + " mph";
    document.querySelector(".temperature1").innerHTML = "Temperature: " +  d.daily[1].temp.day.toFixed(0) + '&deg;' + " F " + " / " + celsius + '&deg;' + " C";
    document.querySelector(".humidity1").innerHTML = "Humidity: " + d.daily[1].humidity + "%";

    var celsius = Math.round((parseFloat(d.daily[2].temp.day)-32)*.5556);
    
    document.querySelector(".date2").innerHTML = moment().add(2, 'day').format('l');
    $(".icon2").attr("src", "http://openweathermap.org/img/wn/" + d.daily[2].weather[0].icon + "@2x" + ".png");
    document.querySelector(".wind2").innerHTML = "Wind Speed: " +  d.daily[2].wind_speed + " mph";
    document.querySelector(".temperature2").innerHTML = "Temperature: " +  d.daily[2].temp.day.toFixed(0) + '&deg;' + " F " + " / " + celsius + '&deg;' + " C";
    document.querySelector(".humidity2").innerHTML = "Humidity: " + d.daily[2].humidity + "%";

    var celsius = Math.round((parseFloat(d.daily[3].temp.day)-32)*.5556);
    
    document.querySelector(".date3").innerHTML = moment().add(3, 'day').format('l');
    $(".icon3").attr("src", "http://openweathermap.org/img/wn/" + d.daily[3].weather[0].icon + "@2x" + ".png");
    document.querySelector(".wind3").innerHTML = "Wind Speed: " +  d.daily[3].wind_speed + " mph";
    document.querySelector(".temperature3").innerHTML = "Temperature: " +  d.daily[3].temp.day.toFixed(0) + '&deg;' + " F " + " / " + celsius + '&deg;' + " C";
    document.querySelector(".humidity3").innerHTML = "Humidity: " + d.daily[3].humidity + "%";

    var celsius = Math.round((parseFloat(d.daily[4].temp.day)-32)*.5556);
    
    document.querySelector(".date4").innerHTML = moment().add(4, 'day').format('l');
    $(".icon4").attr("src", "http://openweathermap.org/img/wn/" + d.daily[4].weather[0].icon + "@2x" + ".png");
    document.querySelector(".wind4").innerHTML = "Wind Speed: " +  d.daily[4].wind_speed + " mph";
    document.querySelector(".temperature4").innerHTML = "Temperature: " +  d.daily[4].temp.day.toFixed(0) + '&deg;' + " F " + " / " + celsius + '&deg;' + " C";
    document.querySelector(".humidity4").innerHTML = "Humidity: " + d.daily[4].humidity + "%";

    var celsius = Math.round((parseFloat(d.daily[5].temp.day)-32)*.5556);
    
    document.querySelector(".date5").innerHTML = moment().add(5, 'day').format('l');
    $(".icon5").attr("src", "http://openweathermap.org/img/wn/" + d.daily[5].weather[0].icon + "@2x" + ".png");
    document.querySelector(".wind5").innerHTML = "Wind Speed: " +  d.daily[5].wind_speed + " mph";
    document.querySelector(".temperature5").innerHTML = "Temperature: " +  d.daily[5].temp.day.toFixed(0) + '&deg;' + " F " + " / " + celsius + '&deg;' + " C";
    document.querySelector(".humidity5").innerHTML = "Humidity: " + d.daily[5].humidity + "%";
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
                    getFutureForecast(data);

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

    var getFutureForecast = function(data) {
        var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&exclude=hourly,minutely&units=imperial&appid=1750d64b9b244e082f61b1c95f2ee8c2";
        fetch(apiUrl)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function(data) {
                        console.log(data);
                        displayForecast(data);
                    })
                } else {
                    alert("City not found! Please enter a new city.");
                }
            })
            .catch(function(error) {
                alert("Connection error. Unable to connect to API");
            });
        }
});

// create a clear local storage button
$(".resetButton").click(function() {
    localStorage.clear();
    $(".cityName").val("");
    location.reload();
    savedSearch.classList.add("hide");
}) 


// on page load checks local storage for history
var load = function() {
    var loadCity = JSON.parse(localStorage.getItem("location"));

    // if local storage has data, create button and append to DOM
    for (var i =0; i < loadCity.length; i++) {
        $(".savedSearch").append(`<button class="historyBtn" 
        data-cityName="${loadCity[i]}" 
        value="${loadCity[i]}" 
        style="margin: 8px; 
        color: #000000; 
        backgroundColor: #e7e7e7; 
        padding: 5px; 
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        width: 240px;
        align-items: center;">
        ${loadCity[i]}</button>`);

    }
}

load();

// create on click feature for history button
$(document).on("click", ".historyBtn", function historyButtons (e) {
    e.preventDefault();
    var cityName = $(this).val();
    console.log(cityName);
    
    var getCurrentForecast = function() {
        var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=1750d64b9b244e082f61b1c95f2ee8c2&units=imperial';
        fetch(apiUrl)
            .then(function(response) {
                response.json().then(function(data) {
                    console.log(data);
                    displayWeather(data);
                    getFutureForecast(data);

                    saveArray.push(cityName);
                    localStorage.setItem("location", JSON.stringify(saveArray));
                    var saveInput = JSON.parse(localStorage.getItem("location"));
                        console.log("saveInput", saveInput);

                        console.log("saveArray1: ", saveArray);
                        saveArray= [];
                        
                        // check if anything in local storage, if null skip
                        if (saveInput) {
                            for (var i = 0; i<saveInput.length; i++) {

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

    var getFutureForecast = function(data) {
        var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&exclude=hourly,minutely&units=imperial&appid=1750d64b9b244e082f61b1c95f2ee8c2";
        fetch(apiUrl)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function(data) {
                        console.log(data);
                        displayForecast(data);
                    })
                } else {
                    alert("City not found! Please enter a new city.");
                }
            })
            .catch(function(error) {
                alert("Connection error. Unable to connect to API");
            });
        }
});



