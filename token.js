const jwt = require("jsonwebtoken");

module.exports = async function login(req, res) {
  const { username, password } = req.body;

  if (username !== process.env.FOUNDER_USER ||
      password !== process.env.FOUNDER_PASS) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = jwt.sign(
    { role: "founder" },
    process.env.JWT_SECRET,
    { expiresIn: "12h" }
  );

  res.json({ token });
};
