# The Deduplicater
Place whatever JSON file you'd like to deduplicate in the input folder.  

Then just call the deduplicate script giving it the filename, for example `npm run-script deduplicate leads.json`. You can give it an optional output filename (`npm run-script deduplicate leads.json newLeads.json`), if none is given it will merely be the same as the input filename. After calling that script, your deduplicated file should be in the output folder!
