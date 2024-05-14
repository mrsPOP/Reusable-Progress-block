// import { validateInputValue } from "./validateHelper";

const validateInputValue = (value) => {
  value = String(value).replace(/^0+/g, "");
  if (value === "") {
    value = 0;
  }
  if (value > 100) {
    value = value.slice(0, 2);
  } else if (value < 0) {
    value = 0;
  }
  return value;
};

/**
 * Класс для создания и управления прогресс-блоком в виде круга.
 * ProgressCircle() constructor - возвращает новый экземпляр ProgressCircle.
 * @class ProgressCircle
 * @param {string} parentElementId - ID родительского элемента, к которому будет прикреплен прогресс-блок.
 * @param {number} [value=0] - Начальное значение прогресса (от 1 до 100).
 * @param {boolean} [isAnimated=false] - Флаг, указывающий, должен ли прогресс-бар анимироваться.
 * @param {boolean} [isHidden=false] - Флаг, указывающий, должен ли прогресс-бар быть скрыт.
 */

export default class ProgressPrototype {
  constructor(
    parentElementId,
    value = 0,
    isAnimated = false,
    isHidden = false
  ) {
    this.progressElement = document.createElement("div");
    this.progressElement.classList.add("progress");

    try {
      this.parentElement = document.getElementById(parentElementId);
      this.parentElement.appendChild(this.progressElement);
    } catch (error) {
      if (parentElementId === "") {
        throw new Error("Parent element's id cannot be empty");
      } else if (!this.parentElement) {
        throw new Error("Parent element doesn't exist");
      }
    }

    [this.value, this.isAnimated, this.isHidden] = [
      value,
      isAnimated,
      isHidden,
    ];

    this.updateValue();
    this.updateAnimation();
    this.updateVisibility();
  }

  setValue(value) {
    this.value = validateInputValue(value);
    this.updateValue();
  }

  animate() {
    this.isAnimated = true;
    this.updateAnimation();
  }

  stopAnimation() {
    this.isAnimated = false;
    this.updateAnimation();
  }

  hide() {
    this.isHidden = true;
    this.updateVisibility();
  }

  show() {
    this.isHidden = false;
    this.updateVisibility();
  }

  updateVisibility() {
    if (this.isHidden) {
      this.progressElement.style.opacity = "0";
    } else {
      this.progressElement.style.opacity = "1";
    }
  }

  updateAnimation() {
    if (this.isAnimated) {
      this.progressElement.style.animation = "1.5s rotate linear infinite";
    } else {
      this.progressElement.style.animation = null;
    }
  }

  updateValue() {
    this.progressElement.style.setProperty("--fraction", `${this.value}%`);
  }
}
