const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let address = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(address, (error, response, body) => {
    let newBody = JSON.parse(body);
    let desc = newBody[0].description.trim();
    callback(error, desc);
  });
};
// request(address, (error, response, body) => {
//   console.log(response.statusCode);
//   let newBody = JSON.parse(body);
//   if (error) {
//     console.log("There was an error when trying to search for " + breed);
//   } else if (JSON.stringify(newBody) === '[]') {
//     console.log("The particular breed " + breed + " could not be found.");
//   } else {
//     console.log(newBody);
//     console.log(newBody[0].name);
//   }
// });

module.exports = { fetchBreedDescription };