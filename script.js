console.log("loading javascript")

fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur").then(function (response) {
	// The API call was successful!
	console.log('success!', response);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

