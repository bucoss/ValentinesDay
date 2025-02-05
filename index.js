// Get references to the buttons
const yesButton = document.querySelector(".yesButton");
const noButton = document.querySelector(".noButton");

function increaseYesButtonSize() {
  const currentWidth = parseFloat(window.getComputedStyle(yesButton).width);
  const currentHeight = parseFloat(window.getComputedStyle(yesButton).height);

  const newWidth = currentWidth * 1.25;
  const newHeight = currentHeight * 1.25;

  yesButton.style.width = `${newWidth}px`;
  yesButton.style.height = `${newHeight}px`;

  const currentWidthNo = parseFloat(window.getComputedStyle(noButton).width);
  const currentHeightNo = parseFloat(window.getComputedStyle(noButton).height);

  const newWidthNo = currentWidthNo / 1.25;
  const newHeightNo = currentHeightNo / 1.25;

  noButton.style.width = `${newWidthNo}px`;
  noButton.style.height = `${newHeightNo}px`;
}

noButton.addEventListener("click", increaseYesButtonSize);

const image = document.querySelector(".poza-titlu img");

function handleYesButtonClick() {
  yesButton.style.display = "none";
  noButton.style.display = "none";
  document.querySelector(".willYou").innerHTML = "Thanks Bibi! Love you!";

  image.src = "./media/tomKiss.jpg";
}

yesButton.addEventListener("click", handleYesButtonClick);
