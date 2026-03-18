module.exports = {
  event: "InflowReceived",
  create: ({ id, timestamp, source, amount, currency, category, metadata }) => ({
    id,
    timestamp,
    source,
    amount,
    currency,
    category,
    metadata
  })
};
