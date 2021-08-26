const request = require('request');

const fetchBreedDescription = function (breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function (error, response, body) {
    if (error) {
      // console.log(error);
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    // console.log(data);

    if (data.length === 0) {
      // console.log();
      callback(`No information found for ${breedName}`, null);
      return;
    }

    const catDesc = data[0].description;

    return callback(null, catDesc);

  });
}

module.exports = { fetchBreedDescription };