const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (Validator.isEmpty(data.text)) {
    errors.status = "Text field is required";
  } else if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.status = "Post must be between 10 and 300 chararacters";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
