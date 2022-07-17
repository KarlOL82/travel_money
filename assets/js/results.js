var tableBody = document.getElementById('media-content');

function onShowPOI() {
    var requestUrl = 'https://api.opentripmap.com/0.1/en/places/radius?radius=3000&lon=-122.33207&lat=47.60621&kinds=baths_and_saunas,bridges&format=json&limit=10&apikey=5ae2e3f221c38a28845f05b6b20dacbb21b5be1ba73523de4298d37a';

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        for (var i = 0 ; i < data.length; i++) {

        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');

        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
}});
}
