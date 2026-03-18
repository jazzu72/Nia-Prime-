module.exports = {
  event: "DistributionApplied",
  create: ({ id, timestamp, inflowId, totalAmount, breakdown, rulesVersion }) => ({
    id,
    timestamp,
    inflowId,
    totalAmount,
    breakdown,
    rulesVersion
  })
};
