console.log("loading javascript");

let d = new Date();
const span = document.createElement('span')
span.innerHTML = "<h1>Today's date is " + d + "</h1>";
document.body.appendChild(span);

fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
  .then(function (response) {
    // The API call was successful!
    return response.json();
  })
  .then(function (data) {
	// This is the JSON from our response
	document.getElementById('name').innerHTML = data.name
	console.log("success!", data);
  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });
