const WalletUpdated = require("../models/WalletUpdated");
const eventBus = require("../bus/eventBus");
const ledger = require("../../services/vault/ledger");
const wallets = require("../../services/vault/wallets");

module.exports = (event) => {
  if (event.event === "DistributionApplied") {
    ledger.recordDistribution(event);

    const updatedWallets = wallets.recalculateAll();

    updatedWallets.forEach((w) => {
      const walletEvent = WalletUpdated.create({
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        wallet: w.name,
        balance: w.balance,
        currency: "USD",
        source: "DistributionApplied"
      });

      eventBus.publish(walletEvent);
    });
  }
};
