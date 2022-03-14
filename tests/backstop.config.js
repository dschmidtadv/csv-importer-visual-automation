// Get default config from backstopJS
const defaultConfig = require("../backstop.json");
// Get user defined scenario json
const scenarioJSON = require("../data/scenarios.json");

let testScenarios = [];

scenarioJSON.map((s) => {
  const obj = {
    cookiePath: "backstop_data/engine_scripts/cookies.json",
    readyEvent: "",
    readySelector: "",
    delay: 0,
    hideSelectors: [],
    removeSelectors: [],
    hoverSelector: "",
    clickSelector: "",
    postInteractionWait: 0,
    selectors: [],
    selectorExpansion: true,
    expect: 0,
    misMatchThreshold: 0.1,
    requireSameDimensions: true,
  };
  testScenarios.push({ ...obj, ...s }); // merging url,obj
});

module.exports = {
  ...defaultConfig,
  scenarios: testScenarios,
};
