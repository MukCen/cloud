module.exports = {
  DB_URL:
    process.env.DB_URL ||
    "mongodb+srv://user:user@cluster0.lhohu5k.mongodb.net/cloud_cloud",
  SERVER_PORT: process.env.SERVER_PORT || 5000,
  SECRET_KEY: process.env.SECRET_KEY || "Heppi",
};
