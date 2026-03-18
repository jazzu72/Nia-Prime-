const state = require("./state");
const ledger = require("../ledger");
const wallets = require("../wallets");
const { money, timestamp } = require("./format");

function refresh() {
  const entries = ledger.getEntries();
  state.updateLedger(entries);

  const balances = wallets.recalculateAll();
  Object.keys(balances).forEach((walletName) => {
    state.updateWallet(walletName, balances[walletName]);
  });

  const lastInflow = entries.filter(e => e.type === "INFLOW").slice(-1)[0];
  if (lastInflow) state.updateLastInflow(lastInflow);

  const lastDist = entries.filter(e => e.type === "DISTRIBUTION").slice(-1)[0];
  if (lastDist) state.updateLastDistribution(lastDist);
}

function summary() {
  const s = state.getState();
  const total = Object.values(s.wallets).reduce((a, b) => a + b, 0);

  return {
    totalVaultBalance: money(total),
    wallets: Object.fromEntries(
      Object.entries(s.wallets).map(([k, v]) => [k, money(v)])
    ),
    lastInflow: s.lastInflow
      ? {
          amount: money(s.lastInflow.amount),
          time: timestamp(s.lastInflow.timestamp)
        }
      : null,
    lastDistribution: s.lastDistribution
      ? {
          total: money(s.lastDistribution.totalAmount),
          time: timestamp(s.lastDistribution.timestamp)
        }
      : null,
    rulesVersion: s.rulesVersion
  };
}

module.exports = {
  refresh,
  summary
};
