module.exports = {
  event: "WalletUpdated",
  create: ({ id, timestamp, wallet, balance, currency, source }) => ({
    id,
    timestamp,
    wallet,
    balance,
    currency,
    source
  })
};
