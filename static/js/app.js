// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to append one table row `tr` for each report object
data.forEach((UFOsightings) => {
    var row = tbody.append("tr");
    Object.entries(UFOsightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

// Select the button (id = "filter-btn" in index,html)
var button = d3.select("#filter-btn");

// Select the form (id="form") in index.html
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Filter the tableData for when the datetime value matches the InputVale and store in new variable filteredData
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  
  // Print filteredData to the console log (used a check to ensure filtering was successful and correct)
  console.log(filteredData);

  // Get a reference to the table body
  var tbody = d3.select("tbody");
  
  // Empty the table body before appending the filteredData
  tbody.html("");

  // Use d3 to append one table row `tr` for each report object
  filteredData.forEach((UFOsightings) => {
    var row = tbody.append("tr");
    Object.entries(UFOsightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
