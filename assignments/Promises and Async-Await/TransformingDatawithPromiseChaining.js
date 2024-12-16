//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
  const input = document.getElementById("ip").value;
  const outputDiv = document.getElementById("output");

  // Function to simulate an asynchronous operation with a delay
  function delayOperation(value, timeInSeconds) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, timeInSeconds * 1000); // Convert seconds to milliseconds
    });
  }

  // Start of promise chain
  delayOperation(Number(input), 2)
    .then((result) => {
      outputDiv.innerHTML = `Result: ${result}`;
      return delayOperation(result * 2, 1); // Multiply by 2
    })
    .then((result) => {
      outputDiv.innerHTML = `Result: ${result}`;
      return delayOperation(result - 3, 1); // Subtract 3
    })
    .then((result) => {
      outputDiv.innerHTML = `Result: ${result}`;
      return delayOperation(result / 2, 1); // Divide by 2
    })
    .then((result) => {
      outputDiv.innerHTML = `Result: ${result}`;
      return delayOperation(result + 10, 1); // Add 10
    })
    .then((finalResult) => {
      outputDiv.innerHTML = `Final Result: ${finalResult}`; // Final result
    })
    .catch((error) => {
      outputDiv.innerHTML = `Error: ${error}`;
    });
});
