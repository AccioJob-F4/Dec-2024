//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
  const textInput = document.getElementById("text").value;
  const delayInput = document.getElementById("delay").value;
  const outputDiv = document.getElementById("output");

  // Convert the delay to milliseconds (assuming input is in milliseconds)
  const delay = parseInt(delayInput, 10);

  // Reset the output div
  outputDiv.textContent = "";

  // Async function to wait for the specified delay
  const waitForDelay = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  // Await the delay and then display the text
  if (textInput && delay) {
    await waitForDelay(delay);
    outputDiv.textContent = textInput;
  } else {
    outputDiv.textContent = "Please enter valid text and delay.";
  }
});
