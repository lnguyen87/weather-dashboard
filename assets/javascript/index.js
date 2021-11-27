console.log("this is a test");

var getCoordinates = function(locationName) {
    var apiUrl = "http://api.positionstack.com/v1/forward?access_key=87440e36f16f0d6657eecd88d154cc1d&query=" + locationName + "&limit=1&output=json";
    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                })
            } else {
                alert("Location not found");
            }
        })
        .catch(function(error) {
            alert("unable to connect to position stack");
        });
}

getCoordinates("Salt Lake City, UT");

$(".searchBtn").on("click", function() {
    var locationName = formData;
    var locationData = getCoordinates(locationName)
    var newLocation = {
        city: locationData.name,
        lat: locationData.latitude,
        long: locationData.longitude,
    }
    locationArr.push(newLocation);
    var newLocationButton = $("<button>").addClass("btn").attr("id", newLocation.city);
})