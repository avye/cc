# The Deduplicater
Be sure to have node installed and then run `npm install` once you have cloned down the repo.

To run the deduplicater place whatever JSON file you'd like to deduplicate in the input folder.  

Then just call the deduplicate script giving it the filename, for example `npm run-script deduplicate leads.json`. You can give it an optional output filename (`npm run-script deduplicate leads.json newLeads.json`), if none is given it will merely be the same as the input filename. After calling that script, your deduplicated file should be in the output folder!

#### Note
This deduplicater prioritizes email duplicates over id duplicates. This is done as an email definitely represents one person/company outside of our database where as a duplicate id could result from a bug within our own code. So the input is first cleared of duplicate email entries, and then any duplicate ids are cleared up afterwards.
