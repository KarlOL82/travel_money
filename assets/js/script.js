var searchBtnEl = document.querySelector("#search-btn");
var citySearchEl = document.querySelector("#city-search");
var citySearch = "";
var articlesEl = document.querySelector("#articles");
var resultsEl = document.querySelector("#results");
var favEl = document.querySelector("#favBtn");
var favRenderEl = document.querySelector("#favList");

var savedLocationJSON = localStorage.getItem("favorites");
var readyToDisplay = savedLocationJSON ? JSON.parse(savedLocationJSON) : [];
// console.log(readyToDisplay);

// This is our Event listener for the click event.  It also clears the previous search information.
searchBtnEl.addEventListener("click", function () {
  // console.log("Clicked");
  var citySearch = citySearchEl.value;
  articlesEl.innerHTML = ``;
  resultsEl.innerHTML = ``;
  // console.log(citySearch);
  getOpenTripApi(citySearch);
});

citySearchEl.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-btn").click();
    // console.log("enter");
  }
});

// This function takes the attractions names and kinds and creates a template literal that is injected into the html code.
function displayNamesKinds(data) {
  var docFrag = document.createDocumentFragment();

  for (var i = 0; i < data.length; i++) {
    var divEl = document.createElement("div");
    divEl.setAttribute("class", "box is-flex container");

    var template = ` <article class="media is-fullwidth">
    <div class="media-content">
      <div class="content">
        <h5>${data[i].name}</h5>
        <p>${getCategory(data[i].kinds)}</p>
        <a data-id="${data[i].xid}">Details</a>
      </div>
    </div>
    <button class="saveButton" onclick="favBtn(event)" id="favBtn" data-id="${data[i].xid}" data-name="${data[i].name}" data-kinds="${data[i].kinds}">Add to Favorites!</button>
  </article>
  `;

    divEl.innerHTML = template;
    docFrag.append(divEl);
  }
  articlesEl.append(docFrag);
  // console.log(template);
}

function detailResults(event) {
  var detailsUrl =
    apiBaseUrl +
    "/xid/" +
    event.target.getAttribute("data-id") +
    "?apikey=5ae2e3f221c38a28845f05b6b20dacbb21b5be1ba73523de4298d37a";

  return fetch(detailsUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var docFrag = document.createDocumentFragment();
      // console.log(data);
      var divEl = document.createElement("div");
      divEl.setAttribute("class", "box is-flex");

      var template = `<article class="media is-flex">
    <div class="media-content">
      <div class="content">
        <h5>${data.name}</h5>
        ${data.wikipedia_extracts.html}
        <a href="${data.wikipedia}" target="_blank">wikipedia Link</a>
      </div>
    </div>
   </article>
    `;
      divEl.innerHTML = template;
      docFrag.append(divEl);
      resultsEl.append(docFrag);
    });
}

articlesEl.addEventListener("click", function (event) {
  // console.log("click");
  resultsEl.innerHTML = ``;
  detailResults(event);
});

// This function takes the category or Kind data and display the first kind as a string.
function getCategory(data) {
  var categoryText = data;
  // console.log(categoryText);
  var kindArray = categoryText.split(",");
  // console.log(kindArray);
  var kindTextRaw = kindArray[0];
  // console.log(kindTextRaw);
  // console.log(kindTextRaw.length);
  if (kindArray[0].length < 10) {
    return kindTextRaw;
  } else {
    // console.log(kindTextSplit);
    var kindText = kindArray[0].split("_");
    var kindConcat = kindText[0] + " " + kindText[1];
    return kindConcat;
  }
}

function favBtn(event) {

  var favorites = JSON.parse(localStorage.getItem("favorites"));
  var favoriteData = {
    name: event.target.getAttribute("data-name"),
    kinds: event.target.getAttribute("data-kinds"),
    xid: event.target.getAttribute("data-id"),
  };
  // console.log(favoriteData);

  if (favorites === null) {
    favorites = [favoriteData];
  } else if (!favorites.some((item) => item.name === favoriteData.name)) {
    favorites.push(favoriteData);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  // console.log(localStorage);
  event.preventDefault();
}

// Display the Favorites to the html
function displayFavorites(){
  var docFragTwo = document.createDocumentFragment();

  for (var i = 0; i < readyToDisplay.length; i++) {
    var divElTwo = document.createElement("div");
    divElTwo.setAttribute("class", "box is-flex container");

    var template = ` <article class="media is-fullwidth">
    <div class="media-content">
      <div class="content">
        <h5>${readyToDisplay[i].name}</h5>
        <p>${getCategory(readyToDisplay[i].kinds)}</p>
      </div>
    </div>
    <button class="saveButton">X</button>
  </article>
  `;

    divElTwo.innerHTML = template;
    docFragTwo.append(divElTwo);
    // console.log(docFragTwo);
    favRenderEl.append(docFragTwo);
    console.log(favRenderEl);
  }
}
 








// function displayFavorite(data) {
//   var docFrag = document.createDocumentFragment();

//   for (var i = 0; i < data.length; i++) {
//     var divEl = document.createElement("div");
//     divEl.setAttribute("class", "box is-flex container");

//     var template = ` <article class="media is-fullwidth">
//     <div class="media-content">
//       <div class="content">
//         <h5>${data[i].name}</h5>
//         <p>${getCategory(data[i].kinds)}</p>
//         <a data-id="${data[i].xid}">Details</a>
//       </div>
//     </div>
//     <button class="saveButton" onclick="favBtn(event)" id="favBtn" data-id="${data[i].xid}" data-name="${data[i].name}" data-kinds="${data[i].kinds}">Add to Favorites!</button>
//   </article>
//   `;

//     divEl.innerHTML = template;
//     docFrag.append(divEl);
//   }
//   articlesEl.append(docFrag);
//   // console.log(template);
// }