var requestUrl =
  "https://v6.exchangerate-api.com/v6/9ffdf9b7d17e2ab7e04ed8ff/latest/USD";
var locationData = document.getElementById("searchInput");
var dropItem = document.getElementById("moneyItem");
var dropMenu = document.getElementById("dropdownMenu");
var moneyEl = document.getElementById("moneyItem");


fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.conversion_rates);
    var exchangeRates = data.conversion_rates;
    console.log(exchangeRates);

    dropDisplay(exchangeRates);
  });

function dropDisplay(data) {
  var listFrag = document.createDocumentFragment();

  for (var key in data) {
    data[key];
    console.log(key);
    console.log(data[key]);

    var listEl = document.createElement("div");
    listEl.setAttribute("class", "dropdown-item");

    var template = `<a class="data dropdown-item" data-value=${data[key]}>${key}</a>`;
    
    

    listEl.innerHTML = template;
    listFrag.append(listEl);
  }

  dropItem.append(listFrag);
}

function selectCurrency(data) {
  var userCurrency = document.getElementById("currencyDisplay");
  var elEl = document.getElementsByClassName("data"); 
  //console.log(elEl);
  userCurrency.textContent = $(elEl).attr("data-value");
  console.log(userCurrency);
  
    
}
moneyEl.addEventListener("click",function(event) {
  selectCurrency();
  console.log("click")
  var moneyDisplay = event.target;
  console.log(moneyDisplay);
});
