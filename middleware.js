const verifyToken = require("./verifyToken");

module.exports = function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  const decoded = verifyToken(token);

  if (!decoded || decoded.role !== "founder") {
    return res.status(403).json({ error: "Forbidden" });
  }

  next();
};
