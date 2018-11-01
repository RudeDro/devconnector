const prependHttps = value => {
  if (value.indexOf("http://") !== 0 && value.indexOf("https://") !== 0) {
    return "https://" + value;
  } else {
    return value;
  }
};

module.exports = prependHttps;
