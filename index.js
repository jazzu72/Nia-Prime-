const { calculateBalances } = require("./calculator");

function recalculateAll() {
  return calculateBalances();
}

module.exports = {
  recalculateAll
};
