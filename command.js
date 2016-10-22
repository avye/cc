var fs = require('fs');

var filename = process.argv[2];

if (filename) {
  var filePath = './input/' + filename;

  // Check if the file is there, will throw an error if it is not
  fs.accessSync(filePath)

  // Bring in the file
  var file = require(filePath);

  console.log('The file ', file);
} else {
  console.log('***** ERROR! You need to pass in the filename! *****');
}
