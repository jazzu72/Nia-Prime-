function money(amount) {
  return `$${amount.toFixed(2)}`;
}

function timestamp(ts) {
  return new Date(ts).toLocaleString();
}

module.exports = { money, timestamp };
