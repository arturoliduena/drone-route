const readline = require("readline");
const colors = require('colors');
const drones = require('./index.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is the drones plan? ", function (rules) {
  const result = drones(rules)
  console.log(`for this ${rules.blue.bold} input, the drones will end up in these positions: ${result.black.bgGreen.bold}`);
  rl.close();
});

rl.on("close", function () {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});