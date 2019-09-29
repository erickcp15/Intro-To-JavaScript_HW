// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

var row = tbody.append("tr")

var cell = row.append("td").text()

var button = d3.select("#filter-btn");

button.on("click", function() {

    var inputElement = d3.select(".form-control");

    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(stuff => stuff.datetime === inputValue);

    console.log(filteredData)

    awe_table(filteredData)


});

function awe_table(tables) {
    tables.forEach(function(aliens) {
        var row = tbody.append("tr");
        Object.entries(aliens).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        })
    })
}
