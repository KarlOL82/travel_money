// Static api url to test for 10 attractions in a 3000m radius around Seattle.
var requestUrl = 'https://api.opentripmap.com/0.1/en/places/radius?radius=3000&lon=-122.33207&lat=47.60621&kinds=baths_and_saunas,bridges&format=json&limit=10&apikey=5ae2e3f221c38a28845f05b6b20dacbb21b5be1ba73523de4298d37a';
var apiBaseUrl = 'https://api.opentripmap.com/0.1/en/places/radius'


// Basic fetch function to verify we are accessing the json data and console logging.
function getApi() {
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
}