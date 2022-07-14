// Static api url to test for 10 attractions in a 3000m radius around Seattle.
var requestUrl = 'https://api.opentripmap.com/0.1/en/places/radius?radius=3000&lon=-122.33207&lat=47.60621&kinds=baths_and_saunas,bridges&format=json&limit=10&apikey=5ae2e3f221c38a28845f05b6b20dacbb21b5be1ba73523de4298d37a';
var apiBaseUrl = 'https://api.opentripmap.com/0.1/en/places/radius?radius=16000'
var apiGeoLocUrl = 'https://api.opentripmap.com/0.1/en/places'

var cityLat = "";
var cityLon = "";

// Basic fetch function to verify we are accessing the json data and console logging.
function getOpenTripApi(citySearch) {

var getCityUrl = apiGeoLocUrl + "/geoname";
  getCityUrl += "?name=" + citySearch + "&apikey=5ae2e3f221c38a28845f05b6b20dacbb21b5be1ba73523de4298d37a";
  console.log(getCityUrl);

return fetch(getCityUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function (data){
    console.log(data.lat);
    console.log(data.lon);
var getDestinations = apiBaseUrl+'&lon=${data.lon}&lat=${data.lat}&format=json&limit=10&apikey=5ae2e3f221c38a28845f05b6b20dacbb21b5be1ba73523de4298d37a';
   });
}

// function getDestinations(cityLon, cityLat) {
// var getDestinations = apiBaseUrl+'&lon=${data.lon}&lat=${data.lat}&format=json&limit=10&apikey=5ae2e3f221c38a28845f05b6b20dacbb21b5be1ba73523de4298d37a';
// console.log(getDestinations);

// // return fetch(getDestinations)
// // .then(function(response){
// //  return response.json();
// // })
// // .then(function (data){
// //   console.log(data);
// // })
// }
