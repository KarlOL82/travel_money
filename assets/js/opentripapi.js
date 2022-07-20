// Static api url to test for 10 attractions in a 3000m radius around Seattle.
var requestUrl =
  "https://api.opentripmap.com/0.1/en/places/radius?radius=3000&lon=-122.33207&lat=47.60621&kinds=baths_and_saunas,bridges&format=json&limit=10&apikey=5ae2e3f221c38a28845f05b6b20dacbb21b5be1ba73523de4298d37a";
var apiBaseUrl = "https://api.opentripmap.com/0.1/en/places";

var cityLon;
var cityLat;
var attractionArray;
var uniqueId;

// Main fetch function to geolocate
function getOpenTripApi(citySearch) {
  var getCityUrl = apiBaseUrl + "/geoname";
  getCityUrl +=
    "?name=" +
    citySearch +
    "&apikey=5ae2e3f221c38a28845f05b6b20dacbb21b5be1ba73523de4298d37a";
  // console.log(getCityUrl);

  return fetch(getCityUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data.lat);
      // console.log(data.lon);
      cityLon = data.lon;
      cityLat = data.lat;
      getDestinations();
    });
}

// Fetches the attractions within a ~5 miles from the geolocation with a popularity of 2 or greater.
function getDestinations() {
  var attractionsUrl =
    apiBaseUrl +
    "/radius?radius=8000&lon=" +
    cityLon +
    "&lat=" +
    cityLat +
    "&rate=2&format=json&limit=100&apikey=5ae2e3f221c38a28845f05b6b20dacbb21b5be1ba73523de4298d37a";
  // console.log(attractionsUrl);
  return fetch(attractionsUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayNamesKinds(data);
    });
}

