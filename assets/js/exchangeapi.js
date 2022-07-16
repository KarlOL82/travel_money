// Fetch exchange rate based on currency selection.

// Event selector for the dropdown event

// Event selector for the submission click
//var searchList = document.querySelector("dropdown-menu4");

// function getApi() {

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         var listItem = document.textContent("dropdown-item");
//         listItem.textContent = data[i].html_url;
//         searchList.appendChild(listItem);
//       }
//     });
// }
//var  = document.getElementById("dropBtn");
//var moneyList = [];
//var html_Url = "https://v6.exchangerate-api.com/v6/9ffdf9b7d17e2ab7e04ed8ff/latest/USD";
//var exchangeRates = (""); 


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
    
  //   for (var i=0; i < data.length; i++) {
      
  //       dropItem.textContent = data[i].conversion_rates;
  //       console.log(data[i].conversion_rates);
  //       exchangeRates.append(listItem);
  //     dropMenu.append(exchangeRates);
  //   }
  });

function dropDisplay (data) {

var listFrag = document.createDocumentFragment();

  for (var key in data ) {
    data[key];
    console.log(key);
    console.log(data[key]);

  var listEl = document.createElement("div");
  listEl.setAttribute("class","dropdown-item")


  var template = 
  `<a href= "#" class="dropdown-item">${key}</a>`;
  console.log(dropItem);
  console.log(template);

  
  listEl.innerHTML = template;
  listFrag.append(listEl);
  };

  dropItem.append(listFrag);
  
  // listEl.append(dropItem)

  


  // create html template
  // for loop to iterate through data.conversion_rates
  // create html elements in dropdwon <a>conversion</a> 

 
  //   // fetch(data.conversion_rates)
  //   // var currencyEl = event.target;
  //   // moneyList.push(data.conversion_rates);
  //   console.log("click");
  // });

//document.querySelector("#searchButton").addEventListener("click", getLocation)
}