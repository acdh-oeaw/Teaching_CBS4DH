// Define our data source as JSON file
var sourceURL = 'https://raw.githubusercontent.com/acdh-oeaw/Teaching_CBS4DH/master/exercise/lecture4/data.json';
// Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
fetch(sourceURL)
  .then(function (response) {
    // Extract the JSON body content from the response
    return response.json();
  })
  .then(function (data) {
    // Let's do something with the data we received
    var persons = data;
    for (key in persons) {
      outputData(persons[key]);
    }
  });

// Change inside this function
function outputData(person) {
  // Get the name from the link
  var name = person.link.split(/[/]+/).pop();
  // Make the name more readable, test with: document.write(prettyName + "<br />");
  var prettyName = name.replace(/_/g, ' ');
  // Get the table HTML element
  var table = document.getElementById('persons-table');
  // Create an empty <tr> element and add it to the 2st position of the table:
  var row = table.insertRow(1);
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
  // Insert new cells (<td> elements) at the first 4 positions of the "new" <tr> element:
  var cell_1 = row.insertCell(0);
  var cell_2 = row.insertCell(1);
  var cell_3 = row.insertCell(2);
  var cell_4 = row.insertCell(3);
  // Add some text to the new cells:
  cell_1.innerHTML = person.birthyear;
  cell_2.innerHTML = prettyName;
  cell_3.innerHTML = person.profession;
  cell_4.innerHTML = person.day + ' ' + person.month + ' 2011';
  
}

window.onload = function() {
  var buttons = document.getElementsByTagName('button');
  for (var i = 0, length = buttons.length; i < length; i++) {
    buttons[i].addEventListener('click', toggleRows, false);
  }

  function toggleRows() {
    var tableRows = document.getElementsByTagName('tr');
    for (var i = 1, length = tableRows.length; i < length; i++) {
      if (this.value == 'reset') {
        tableRows[i].style.display = "table-row";
      } else if (tableRows[i].classList.contains(this.value)) {
        tableRows[i].style.display = "table-row";
      } else {
        tableRows[i].style.display = "none";
      }
    }
  }
};

