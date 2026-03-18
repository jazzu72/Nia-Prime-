module.exports = {
  event: "RuleSetUpdated",
  create: ({ id, timestamp, version, changes, approvedBy }) => ({
    id,
    timestamp,
    version,
    changes,
    approvedBy
  })
};
