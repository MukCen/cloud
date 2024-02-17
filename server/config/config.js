module.exports = {
  DB_URL:
    process.env.DB_URL ||
    "mongodb+srv://user:user@cluster0.lhohu5k.mongodb.net/cloud/?retryWrites=true&w=majority",
  SERVER_PORT: process.env.SERVER_PORT || 5000,
};
