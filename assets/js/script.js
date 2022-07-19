var searchBtnEl = document.querySelector("#search-btn");
var citySearchEl = document.querySelector("#city-search");
var citySearch = "";
var articlesEl = document.querySelector("#articles");
var modalEl = document.querySelector("#modal");
// This is our Event listener for the click event.  It also clears the previous search information.
searchBtnEl.addEventListener("click", function (event) {
  console.log("Clicked");
  var citySearch = citySearchEl.value;
  articlesEl.innerHTML = ``;
  console.log(citySearch);
  getOpenTripApi(citySearch);
});

citySearchEl.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-btn").click();
    console.log("enter");
  }
});

// This function takes the attractions names and kinds and creates a template literal that is injected into the html code.
function displayNamesKinds(data) {
  var docFrag = document.createDocumentFragment();

  for (var i = 0; i < data.length; i++) {
    var divEl = document.createElement("div");
    divEl.setAttribute("data-id", data[i].xid);
    divEl.setAttribute("class", "box is-flex");

    var template = ` <article class="media">
    <div class="media-content">
      <div class="content">
        <h5>${data[i].name}</h5>
        <p>${getCategory(data[i].kinds)}</p>
      </div>
    </div>
    <button class="saveButton is-justified">Add to Favorites!</button>
  </article>
  `;

    divEl.innerHTML = template;
    docFrag.append(divEl);
  }
  articlesEl.append(docFrag);
  // console.log(template);
}

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

// function displayAttractions(data) {
//   var docFrag = document.createDocumentFragment();

//   for (var i = 0; i < 5; i++) {
//     var divEl = document.createElement("div");

//     var template = `<div class="box is-flex">
//       <article class="media">
//         <div class="media-left">
//           <figure class="image is-64x64">
//            <img src="${data.image}" alt="Image">
//           </figure>
//         </div>
//         <div class="media-content">
//           <div class="content">
//             <p>
//              <strong>${data.name}</strong>
//              <br>
//               ${data.wikipedia_extracts.text}
//             </p>
//           </div>
//           <button class="saveButton">Add to Favorites!</button>
//         </div>
//       </article>
//     </div>`;

//     divEl.innerHTML = template;
//     docFrag.append(divEl);
//   }
//   articlesEl.append(docFrag);
//   // console.log(template);

