import ProgressPrototype from "./ProgressPrototype.js";

const progressElement = new ProgressPrototype("id");

if (
  progressElement.value ||
  progressElement.isAnimated ||
  progressElement.isHidden
) {
  document.getElementById("value").value = progressElement.value;
  document.getElementById("animate").checked = progressElement.isAnimated;
  document.getElementById("hide").checked = progressElement.isHidden;
}

document.getElementById("value").addEventListener("input", (event) => {
  progressElement.setValue(event.target.value);
  event.target.value = progressElement.value;
});
document.getElementById("animate").addEventListener("click", (event) => {
  progressElement.toggleAnimation();
});

document.getElementById("hide").addEventListener("click", (event) => {
  progressElement.toggleVisibility();
});
