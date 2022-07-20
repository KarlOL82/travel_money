// Static api url to test for 10 attractions in a 3000m radius around Seattle.
var requestUrl = 'https://api.opentripmap.com/0.1/en/places/radius?radius=3000&lon=-122.33207&lat=47.60621&kinds=baths_and_saunas,bridges&format=json&limit=10&apikey=5ae2e3f221c38a28845f05b6b20dacbb21b5be1ba73523de4298d37a';
var apiBaseUrl = 'https://api.opentripmap.com/0.1/en/places'

var cityLon;
var cityLat;
var attractionArray;
var uniqueId;

// Main fetch function to geolocate
function getOpenTripApi(citySearch) {

var getCityUrl = apiBaseUrl + "/geoname";
  getCityUrl += "?name=" + citySearch + "&apikey=5ae2e3f221c38a28845f05b6b20dacbb21b5be1ba73523de4298d37a";
  // console.log(getCityUrl);

return fetch(getCityUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function (data){
    // console.log(data.lat);
    // console.log(data.lon);
   cityLon = data.lon;
   cityLat = data.lat;
   getDestinations();
   });
}

// Fetches the attractions within a ~5 miles from the geolocation with a popularity of 2 or greater.
function getDestinations(){
  var attractionsUrl = apiBaseUrl+"/radius?radius=8000&lon="+cityLon+"&lat="+cityLat+"&rate=2&format=json&limit=100&apikey=5ae2e3f221c38a28845f05b6b20dacbb21b5be1ba73523de4298d37a";
// console.log(attractionsUrl);
  return fetch(attractionsUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data){
    // console.log("HERE IS OUR HIGH LEVEL DATA");
    // console.log(data);
    displayNamesKinds(data);

  });

}

// function getDetails(){
  
// // for(var i=0; i < data.length; i++) {
//   var  detailsUrl = apiBaseUrl+"/xid/"+uniqueId+"?apikey=5ae2e3f221c38a28845f05b6b20dacbb21b5be1ba73523de4298d37a";
//   // console.log(detailsUrl);
// // }
// var  detailsUrl = apiBaseUrl+"/xid/"+uniqueId+"?apikey=5ae2e3f221c38a28845f05b6b20dacbb21b5be1ba73523de4298d37a";
//   return fetch(detailsUrl)
//   .then(function(response){
//     return response.json();
//   })
//   .then(function(data){
//     console.log(data);
//     // MODAL For INFO Display
//     // displayNamesKinds(data);
//   });
// // }






// var popupWindow = null;
// function centeredPopup(url,winName,w,h,scroll){
// LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
// TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
// settings =
// 'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable'
// popupWindow = window.open(url,winName,settings)
// }
// // function basicPopup(url) {
// //  popupWindow = window.open(url,'popUpWindow','height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
// //    }


// // save locations to local storage
// localStorage.setItem("data, name");

// //rdg local storage
// var savedLocation = localStorage.getItem();


// //removing one item from local storage

// localStorage.removeItem();

