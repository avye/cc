var fs = require('fs');
var deduplicate = require('./dist/deduplicate').deduplicate;
var createOutput = require('./dist/createOutput').createOutput;
var makeLog = require('./dist/makeLog').makeLog;

var filename = process.argv[2];

// Create an optional output filename
var outputFilename = process.argv[3] || filename

if (filename) {
  var filePath = './input/' + filename;
  var outputPath = './output/' + outputFilename
  // Check if the file is there, will throw an error if it is not
  fs.accessSync(filePath)

  // Bring in the file
  var file = require(filePath);

  // Could have option flag to alter if the structure of the json changes
  var deduplicatedFile = deduplicate(file.leads);
  var data = {leads: deduplicatedFile}
  createOutput(outputPath, data);
  makeLog(outputPath, file, data);
} else {
  console.log('***** ERROR! You need to pass in the filename! *****');
}
