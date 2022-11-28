// Read file system and process CSV
const fs = require("fs");
const config = require("../package.json");
const parse = require("csv-parser");
const { Transform } = require('stream')

let results = [];

// File system reading on user defined input csv from package.json
fs.createReadStream(config.exclaim.input)
  .pipe(
    parse())
    .pipe(new Transform({ objectMode: true, transform }))
    .on("data", (data) => results.push(data))
  .on("end", () => {
   // console.log(results);
    // After generating the results we are creating a json file
    fs.writeFile(
      "./data/scenarios.json",
      JSON.stringify(results),
      "utf8",
      function (error) {
        console.log("Scenario JSON file generated successfully!");
      }
    );
  });
// Prepend all chunks with `value: `.
// @param {Object} chunk
// @param {String} encoding
// @param {Function} callback
function transform (chunk, enc, cb) {
  //console.log({ referenceHost: process.env.npm_config_referenceHost });
  Object.keys(chunk).forEach((k) => {
    if (k ==   "referenceUrl"){
      chunk[k] = `https://${process.env.npm_config_referenceHost}${chunk[k]}`

    }else if (k ==   "url"){
      chunk[k] = `https://${process.env.npm_config_host}${chunk[k]}`

    } 
    console.log(chunk[k])
  })
  this.push(chunk)
  cb()
}
