const fs = require("fs");
const path = require("path");

const LEDGER_FILE = path.join(__dirname, "ledger.json");

function loadLedger() {
  if (!fs.existsSync(LEDGER_FILE)) {
    return { entries: [] };
  }
  return JSON.parse(fs.readFileSync(LEDGER_FILE, "utf8"));
}

function saveLedger(ledger) {
  fs.writeFileSync(LEDGER_FILE, JSON.stringify(ledger, null, 2));
}

function addEntry(entry) {
  const ledger = loadLedger();
  ledger.entries.push(entry);
  saveLedger(ledger);
}

function recordInflow(event) {
  addEntry({
    type: "INFLOW",
    eventId: event.id,
    timestamp: event.timestamp,
    source: event.source,
    amount: event.amount,
    currency: event.currency,
    category: event.category,
    metadata: event.metadata || {}
  });
}

function recordDistribution(event) {
  addEntry({
    type: "DISTRIBUTION",
    eventId: event.id,
    timestamp: event.timestamp,
    inflowId: event.inflowId,
    totalAmount: event.totalAmount,
    breakdown: event.breakdown,
    rulesVersion: event.rulesVersion
  });
}

function getEntries() {
  return loadLedger().entries;
}

module.exports = {
  recordInflow,
  recordDistribution,
  getEntries
};
