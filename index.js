// Get references to the buttons
const yesButton = document.querySelector(".yesButton");
const noButton = document.querySelector(".noButton");

// Function to increase the size of the "Yes" button by 5%
function increaseYesButtonSize() {
  // Get the current width and height of the "Yes" button
  const currentWidth = parseFloat(window.getComputedStyle(yesButton).width);
  const currentHeight = parseFloat(window.getComputedStyle(yesButton).height);

  // Calculate the new size (5% bigger)
  const newWidth = currentWidth * 1.25;
  const newHeight = currentHeight * 1.25;

  // Apply the new size to the "Yes" button
  yesButton.style.width = `${newWidth}px`;
  yesButton.style.height = `${newHeight}px`;
}

// Add an event listener to the "No" button
noButton.addEventListener("click", increaseYesButtonSize);

const image = document.querySelector(".poza-titlu img");

// Function to handle the "Yes" button click
function handleYesButtonClick() {
  // Hide the buttons
  yesButton.style.display = "none";
  noButton.style.display = "none";
  document.querySelector(".willYou").innerHTML = "Thanks Bibi! Love you!";

  // Change the image source
  image.src = "./media/tomKiss.jpg"; // Replace with the path to your new image
}

// Add an event listener to the "Yes" button
yesButton.addEventListener("click", handleYesButtonClick);
