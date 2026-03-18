const founderDashboard = require("../../services/vault/founder/dashboard");

module.exports = (event) => {
  if (event.event === "WalletUpdated") {
    founderDashboard.update(event.wallet, event.balance);
  }
};
