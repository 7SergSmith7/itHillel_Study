const obj = {
  name: "Alex",
  age: 33,
  adress: { country: "UA", city: "Dnipro" },
};

function copy(objForCopy) {
  let copyOfObj = {};

  Object.keys(objForCopy).forEach((key) =>
    typeof objForCopy[key] === "object"
      ? (copyOfObj[key] = copy(objForCopy[key]))
      : (copyOfObj[key] = objForCopy[key])
  );
  return copyOfObj;
}

const objCopy = copy(obj);
