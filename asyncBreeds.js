const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {//data is coming fromth file
    // CHANGE 1: Pass data back via callback instead of return.
    console.log('Callback: I have the data!')
    if (!error) callback(data); 
  });
}

// CHANGE 2: Value now comes back via callback, not return value
breedDetailsFromFile('Bombay', (egg) => {
  console.log('Return Value: ', egg) // => print out details correctly.
});
module.exports = breedDetailsFromFile;