var searchBtnEl = document.querySelector("#search-btn");
var citySearchEl = document.querySelector("#city-search");




searchBtnEl.addEventListener("click", function(event) {
    console.log("Clicked");
    var citySearch = citySearchEl.value;
    console.log(citySearch);
  });