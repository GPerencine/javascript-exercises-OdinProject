const contains = function (object, value) {
  if (object === value || (Number.isNaN(object) && Number.isNaN(value))) {
    return true;
  }

  if (Array.isArray(object)) {
    return object.some((item) => contains(item, value));
  } else if (object !== null && typeof object === "object") {
    return Object.values(object).some((item) => contains(item, value));
  } else {
    return object === value;
  }
};

// Do not edit below this line
module.exports = contains;
