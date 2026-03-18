const InflowReceived = require("../models/InflowReceived");
const eventBus = require("../bus/eventBus");

module.exports = (event) => {
  if (event.event === "DealExecuted") {
    const inflow = InflowReceived.create({
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      source: "Radar",
      amount: event.revenue,
      currency: "USD",
      category: "RadarRevenue",
      metadata: {
        dealId: event.id,
        region: event.region,
        category: event.category
      }
    });

    eventBus.publish(inflow);
  }
};
