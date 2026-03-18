const handlers = [];

module.exports = {
  publish: (event) => {
    handlers.forEach((h) => h(event));
  },
  subscribe: (handler) => {
    handlers.push(handler);
  }
};
const radarHandler = require("../handlers/radarHandler");
const vaultInflowHandler = require("../handlers/vaultInflowHandler");
const distributionHandler = require("../handlers/distributionHandler");
const walletUpdateHandler = require("../handlers/walletUpdateHandler");
const governanceHandler = require("../handlers/governanceHandler");

handlers.push(radarHandler);
handlers.push(vaultInflowHandler);
handlers.push(distributionHandler);
handlers.push(walletUpdateHandler);
handlers.push(governanceHandler);
