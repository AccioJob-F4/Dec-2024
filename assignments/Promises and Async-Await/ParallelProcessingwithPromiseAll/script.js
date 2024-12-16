const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

// Function to download an image
const loadImage = (image) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = image.url;
    img.onload = () => resolve(img); // Resolve the promise when the image is loaded
    img.onerror = () =>
      reject(new Error(`Failed to load image's URL: ${image.url}`)); // Reject if loading fails
  });
};

// Function to handle the click event and download images in parallel
btn.addEventListener("click", () => {
  // Map the array of image URLs into an array of Promises
  const promises = images.map((image) => loadImage(image));

  // Use Promise.all to download all images in parallel
  Promise.all(promises)
    .then((loadedImages) => {
      // Clear any previous images
      output.innerHTML = "";

      // Append all successfully loaded images to the output div
      loadedImages.forEach((img) => {
        output.appendChild(img);
      });
    })
    .catch((error) => {
      // Handle errors if any image fails to load
      console.error(error.message);
    });
});
