function sumWithCallback(arr, callback) {
  // Initialize the running sum to 0
  let runningSum = 0;

  // Iterate over the array and use the callback to compute the sum
  for (let i = 0; i < arr.length; i++) {
    runningSum = callback(runningSum, arr[i]);
  }

  // Return the final running sum
  return runningSum;
}

function multiplyByTwo(runningSum, num) {
  // Add the current number multiplied by 2 to the running sum
  return runningSum + num * 2;
}

const readline = require("readline");

const input = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (cmd) {
  input.push(cmd);
});

rl.on("close", function (cmd) {
  Main(input);
});

function Main(input) {
  const arr = JSON.parse(input[0]);
  console.log(sumWithCallback(arr, multiplyByTwo));
}
