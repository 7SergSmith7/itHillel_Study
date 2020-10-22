const operationAdd = require("./add");
const operationSub = require("./sub");
const operationMult = require("./mult");
const operationDiv = require("./div");

module.exports = {
  add: (a, b) => operationAdd(a, b),
  sub: (a, b) => operationSub(a, b),
  mult: (a, b) => operationMult(a, b),
  div: (a, b) => operationDiv(a, b),
};
