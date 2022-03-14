// Read file system and process CSV
const fs = require("fs");
const config = require("../package.json");
const csvParser = require("csv-parser");

let testScenarios = [];

fs.createReadStream(config.exclaim.input)
  .pipe(csvParser())
  .on("data", (data) => testScenarios.push(data))
  .on("end", () => {
    fs.writeFile(
      "./data/scenarios.json",
      JSON.stringify(testScenarios),
      "utf8",
      function (error) {
        console.log("Scenario JSON file generated successfully!");
      }
    );
  });
