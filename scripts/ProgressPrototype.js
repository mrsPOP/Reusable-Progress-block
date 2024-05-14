import { validateInputValue } from "./validateHelper.mjs";

export default class ProgressPrototype {
  #parent;
  #progressElement;
  #isAnimated;
  #isHidden;

  constructor(parentId, value = 0, isAnimated = false, isHidden = false) {
    this.#parent = document.getElementById(parentId);
    if (!this.#parent) {
      throw new Error(`The element with id "${parentId}" not found.`);
    }

    this.#progressElement = document.createElement("div");
    this.#progressElement.classList.add("progress");
    this.#parent.appendChild(this.#progressElement);

    this.value = validateInputValue(value, this.value);
    this.#isAnimated = isAnimated;
    this.#isHidden = isHidden;

    this.updateValue();
    this.updateAnimation();
    this.updateVisibility();
  }

  setValue(value) {
    this.value = validateInputValue(value, this.value);
    this.updateValue();
  }

  toggleAnimation() {
    this.#isAnimated = !this.#isAnimated;
    this.updateAnimation();
  }

  toggleVisibility() {
    this.#isHidden = !this.#isHidden;
    this.updateVisibility();
  }

  updateValue() {
    this.#progressElement.style.setProperty("--fraction", `${this.value}%`);
  }

  updateAnimation() {
    if (this.#isAnimated) {
      this.#progressElement.style.animation = "rotate 1.7s linear infinite";
    } else {
      this.#progressElement.style.animation = "none";
    }
  }

  updateVisibility() {
    this.#progressElement.style.opacity = this.#isHidden ? "0" : "1";
  }
}
