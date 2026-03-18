module.exports = {
  event: "OpportunityDetected",
  create: ({ id, timestamp, region, category, score, metadata }) => ({
    id,
    timestamp,
    region,
    category,
    score,
    metadata
  })
};
