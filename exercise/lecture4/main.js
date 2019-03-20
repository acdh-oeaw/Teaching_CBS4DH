// The below code fetches the .json data using a HTTP GET request
// Define our data source as JSON file
var sourceURL = 'https://raw.githubusercontent.com/acdh-oeaw/Teaching_CBS4DH/master/exercise/lecture4/data.json';
// Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
fetch(sourceURL)
  .then(function (response) {
    // Extract the JSON body content from the response
    return response.json();
  })
  .then(function (data) {
    // We have received our data, let's create a variable called persons and which will hold the data of this JSON file
    var persons = data;
    // Below is a for-loop, which iterates through all persons one by one.
    for (key in persons) {
      // For every person we'll call the function "outputData", which will process and display the table rows. See that function below.
      outputData(persons[key]);
    }
  });

// Change inside this function for experimenting
function outputData(person) {
  // POPULATING THE TABLE
  // Get the name from the link
  var name = person.link.split(/[/]+/).pop();
  // Make the name more readable, test with: document.write(prettyName + "<br />");
  var prettyName = name.replace(/_/g, ' ');
  // Get the table HTML element
  var table = document.getElementById('persons-table');
  // Create an empty <tr> element and add it to the 2st position of the table:
  var row = table.insertRow(-1);
  // Insert new cells (<td> elements) at the first 4 positions of the "new" <tr> element:
  var cell_1 = row.insertCell(0);
  var cell_2 = row.insertCell(1);
  var cell_3 = row.insertCell(2);
  var cell_4 = row.insertCell(3);
  // Add some text to the new cells:
  cell_1.innerHTML = person.birthyear;
  cell_2.innerHTML = '<a href="'+person.link+'" target="_blank">'+prettyName+'</a>';
  cell_3.innerHTML = person.profession;
  cell_4.innerHTML = person.day + ' ' + person.month + ' 2011';

  // REGEX RULES AND ADDING CSS CLASSES TO ROWS FOR TOGGLING
  // Add a class to actors
  if ((new RegExp(/schauspieler/gi)).test(person.profession)) {
    row.classList.add('actor');
  }
  // Add a class to Austrians
  if ((new RegExp(/österreich/gi)).test(person.profession)) {
    row.classList.add('austrian');
  }
  // Add a class to Auto*
  if ((new RegExp(/auto/gi)).test(person.profession)) {
    row.classList.add('auto');
  }

}

// The below function will get called when the window finishes loading our data
window.onload = function() {
  // Get all buttons from our index.html
  var buttons = document.getElementsByTagName('button');
  // Add an event listener for the mouse click on these buttons to call the below toggleRows() function
  for (var i = 0, length = buttons.length; i < length; i++) {
    buttons[i].addEventListener('click', toggleRows, false);
  }

  // This function is responsible for toggling the relevant rows visible/hidden
  function toggleRows() {
    // Get all rows of our table
    var tableRows = document.getElementsByTagName('tr');
    // Loop through all of those rows (i.e.: <tr>...</tr> elements)
    for (var i = 1, length = tableRows.length; i < length; i++) {
      // If the button's value is reset show all table rows. "table-row" is here a CSS style attribute for visible rows!
      if (this.value == 'reset') {
        tableRows[i].style.display = "table-row";
      // If the button's value (for example "austrian") is included in the CSS classes of the table row (for example <tr class="austrian actor">...</tr>) then show it
      } else if (tableRows[i].classList.contains(this.value)) {
        tableRows[i].style.display = "table-row";
      } else {
      // If not hide this row, meaning that this row is not matched by the selected button
        tableRows[i].style.display = "none";
      }
    }
  }
};
