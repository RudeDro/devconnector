const Validator = require("validator");
const isEmpty = require("./is-empty");
const prependHttps = require("./prepend-https");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs to be between 2 and 40 characters";
  } else if (Validator.isEmpty(data.handle)) {
    errors.handle = "Profile handle is required";
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = "Status field is required";
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = "Skills field is required";
  }

  if (!isEmpty(data.website) && !Validator.isURL(data.website)) {
    errors.website = "Not a valid URL";
  } else {
    data.website = prependHttps(data.website);
  }
  if (!isEmpty(data.twitter) && !Validator.isURL(data.twitter)) {
    errors.twitter = "Not a valid URL";
  } else if (!isEmpty(data.twitter)) {
    data.twitter = prependHttps(data.twitter);
  }
  if (!isEmpty(data.youtube) && !Validator.isURL(data.youtube)) {
    errors.youtube = "Not a valid URL";
  } else if (!isEmpty(data.youtube)) {
    data.youtube = prependHttps(data.youtube);
  }
  if (!isEmpty(data.linkedin) && !Validator.isURL(data.linkedin)) {
    errors.linkedin = "Not a valid URL";
  } else if (!isEmpty(data.linkedin)) {
    data.linkedin = prependHttps(data.linkedin);
  }
  if (!isEmpty(data.instagram) && !Validator.isURL(data.instagram)) {
    errors.instagram = "Not a valid URL";
  } else if (!isEmpty(data.instagram)) {
    data.instagram = prependHttps(data.instagram);
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
