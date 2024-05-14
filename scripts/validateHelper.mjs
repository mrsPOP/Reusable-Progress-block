export const validateInputValue = (value) => {
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
