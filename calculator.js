const ledger = require("../ledger");
const { wallets } = require("./definitions");

function calculateBalances() {
  const entries = ledger.getEntries();
  const balances = {};

  wallets.forEach((w) => {
    balances[w.name] = 0;
  });

  entries.forEach((entry) => {
    if (entry.type === "DISTRIBUTION") {
      const breakdown = entry.breakdown;

      balances["IRS"] += breakdown.irs || 0;
      balances["Founder"] += breakdown.founder || 0;
      balances["Bills"] += breakdown.bills || 0;
      balances["Growth"] += breakdown.growth || 0;
      balances["Opportunity"] += breakdown.opportunity || 0;
    }
  });

  return balances;
}

module.exports = { calculateBalances };
