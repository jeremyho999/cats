const fs = require('fs');

const breedDetailsFromFile = function(breed, callbackToRunWhenReadFileIsDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) callbackToRunWhenReadFileIsDone(data);
  });
};

//const bombay = breedDetailsFromFile('Bombay');
//console.log('Return Value: ', bombay);

const printOutCatBreed = data => {
  console.log("Return Value: ", data);
};

breedDetailsFromFile("Bombay", printOutCatBreed);