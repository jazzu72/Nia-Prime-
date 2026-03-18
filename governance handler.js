const governance = require("../../services/vault/governance");

module.exports = (event) => {
  if (event.event === "RuleSetUpdated") {
    governance.updateRules(event.version, event.changes);
  }
};
