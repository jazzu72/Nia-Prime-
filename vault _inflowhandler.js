const DistributionApplied = require("../models/DistributionApplied");
const eventBus = require("../bus/eventBus");
const ledger = require("../../services/vault/ledger");
const governance = require("../../services/vault/governance");

module.exports = (event) => {
  if (event.event === "InflowReceived") {
    ledger.recordInflow(event);

    const rules = governance.getActiveRules();
    const breakdown = governance.applyRules(event.amount);

    const distribution = DistributionApplied.create({
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      inflowId: event.id,
      totalAmount: event.amount,
      breakdown,
      rulesVersion: rules.version
    });

    eventBus.publish(distribution);
  }
};
