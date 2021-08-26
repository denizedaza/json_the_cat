const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, function(error, response, body) {
  if (error) {
    console.log(error);
    process.exit();
    // throw new Error;
  }
  const data = JSON.parse(body);
  // console.log(data);

  if (data.length === 0) {
    console.log(`No information found for ${args}`);
    process.exit();
  }

  const catDesc = data[0].description;
  
  // console.log(typeof catDesc);
  console.log(catDesc);

});