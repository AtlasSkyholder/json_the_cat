const request = require('request');
const breed = process.argv[2];

console.log(breed);
let address = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

request(address, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  //console.log(typeof body);
  console.log(response.statusCode);
  let newBody = JSON.parse(body);
  if (error) {
    console.log("There was an error when trying to search for " + breed);
  } else if (JSON.stringify(newBody) === '[]') {
    console.log("The particular breed " + breed + " could not be found.");
  } else {
    console.log(newBody);
    console.log(newBody[0].name);
  }
});