var requestUrl =
  "https://v6.exchangerate-api.com/v6/9ffdf9b7d17e2ab7e04ed8ff/latest/USD";
var locationData = document.getElementById("searchInput");
var dropItem = document.getElementById("moneyItem");
var dropMenu = document.getElementById("dropdownMenu");

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

    var template = `<a href= "#" class="dropdown-item">${key}</a>`;
    console.log(dropItem);
    console.log(template);

    listEl.innerHTML = template;
    listFrag.append(listEl);
  }

  dropItem.append(listFrag);
}
