var searchBtnEl = document.querySelector("#search-btn");
var citySearchEl = document.querySelector("#city-search");
var citySearch = "";
var articlesEl = document.querySelector("#articles");

searchBtnEl.addEventListener("click", function (event) {
  console.log("Clicked");
  var citySearch = citySearchEl.value;
  console.log(citySearch);
  getOpenTripApi(citySearch);
});

function displayNamesKinds(data) {
  var docFrag = document.createDocumentFragment();

  for (var i = 0; i < 5; i++) {
    var divEl = document.createElement("div");
    divEl.setAttribute("data-id", data[i].xid);
    divEl.setAttribute("class", "box is-flex");

    var template = `<article class="media">
            <div class="media-left">
          
            </div>
            <div class="media-content">
              <div class="content">
             <h5 class="list-group-item-heading">${data[i].name}</h5>
                <p class="list-group-item-text">${data[i].kinds}</p>
              </div>
              <button class="saveButton">Add to Favorites!</button>    
            </div>
          </article>`;

    divEl.innerHTML = template;
    docFrag.append(divEl);
  }
  articlesEl.append(docFrag);
  // console.log(template);
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
// }
