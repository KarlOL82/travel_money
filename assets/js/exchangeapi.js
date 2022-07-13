// Fetch exchange rate based on currency selection.

// Event selector for the dropdown event

// Event selector for the submission click
var repoList = document.querySelector("dropdown-menu");
var searchButton = document.getElementById("searchButton");

function getApi() {
  var requestUrl =
    "https://v6.exchangerate-api.com/v6/9ffdf9b7d17e2ab7e04ed8ff/latest/USD";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement("dropdown-item");
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

searchButton.addEventListener("click", getApi);
