const jsonwebtoken = require("jsonwebtoken");

const { SECRET_KEY } = require("../config/config");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(400).json({ messages: "Auth error" });
    }
    const decoded = jsonwebtoken.verify(token, SECRET_KEY);
    req.user = decoded;

    next();
  } catch (error) {
    console.error();
    return res.status(400).json({ message: "Token error", error });
  }
};
