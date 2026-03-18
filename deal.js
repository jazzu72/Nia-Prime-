module.exports = {
  event: "DealExecuted",
  create: ({ id, timestamp, region, category, revenue, cost, net, metadata }) => ({
    id,
    timestamp,
    region,
    category,
    revenue,
    cost,
    net,
    metadata
  })
};
