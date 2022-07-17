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

function displayAttractions(data) {
  var docFrag = document.createDocumentFragment();

  for (var i = 0; i < 5; i++) {
    var divEl = document.createElement("div");

    var template = `<div class="box is-flex">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
           <img src="${data.image}" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
             <strong>${data.name}</strong> 
             <br>
              ${data.wikipedia_extracts.text}
            </p>
          </div>
          <button class="saveButton">Add to Favorites!</button>    
        </div>
      </article>
    </div>`;

    divEl.innerHTML = template;
    docFrag.append(divEl);
  }
  articlesEl.append(docFrag);
  console.log(template);
}
