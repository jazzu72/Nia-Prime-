const auth = require("../auth/middleware");
const dashboard = require("../../../services/vault/founder/dashboard");

app.get("/vault/founder/summary", auth, (req, res) => {
  dashboard.refresh();
  res.json(dashboard.summary());
});
