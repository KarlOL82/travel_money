var requestUrl =
  "https://v6.exchangerate-api.com/v6/d89c1ffd3333a8d33333a7cf/latest/USD";
var locationData = document.getElementById("searchInput");
var dropItem = document.getElementById("moneyItem");
var dropMenu = document.getElementById("dropdownMenu");
var moneyEl = document.getElementById("moneyItem");


fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
    // console.log(data.conversion_rates);
    var exchangeRates = data.conversion_rates;
    console.log(exchangeRates);

    dropDisplay(exchangeRates);
  });

function dropDisplay(data) {
  var listFrag = document.createDocumentFragment();

  for (var key in data) {
    data[key];
    // console.log(key);
    // console.log(data[key]);

    var listEl = document.createElement("div");
    listEl.setAttribute("class", "dropdown-item");

    var template = `<a class="data dropdown-item" data-value=${data[key]}>${key}</a>`;
    
    

    listEl.innerHTML = template;
    listFrag.append(listEl);
  }

  dropItem.append(listFrag);
}

function selectCurrency(event) {
  var userCurrency = document.getElementById("currencyDisplay");
  var elEl = document.getElementsByClassName("data"); 
  console.log(event.target.getAttribute("data-value") + event.target.textContent);
  //console.log(elEl);
userCurrency.textContent = event.target.getAttribute("data-value") + " " + event.target.textContent;
  // console.log($(elEl).attr("data-value"));
  
    
}
moneyEl.addEventListener("click",function(event) {
  selectCurrency(event);
  // console.log("click")
  
  // console.log(moneyDisplay);
});
