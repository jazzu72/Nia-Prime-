let state = {
  wallets: {},
  lastInflow: null,
  lastDistribution: null,
  ledger: [],
  rulesVersion: null
};

function updateWallet(walletName, balance) {
  state.wallets[walletName] = balance;
}

function updateLedger(entries) {
  state.ledger = entries;
}

function updateLastInflow(event) {
  state.lastInflow = event;
}

function updateLastDistribution(event) {
  state.lastDistribution = event;
}

function updateRulesVersion(version) {
  state.rulesVersion = version;
}

function getState() {
  return state;
}

module.exports = {
  updateWallet,
  updateLedger,
  updateLastInflow,
  updateLastDistribution,
  updateRulesVersion,
  getState
};
