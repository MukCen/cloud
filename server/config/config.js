// const dotenv = require("dotenv");
// dotenv.config();

// module.exports = {
//   DB_URL:
//     process.env.DB_URL ||
//     "mongodb+srv://user:user@cluster0.lhohu5k.mongodb.net/cloud_cloud",
//   SERVER_PORT: process.env.SERVER_PORT || 5001,
//   SECRET_KEY: process.env.SECRET_KEY || "Heppi",
// };
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  DB_URL:
    process.env.DB_URL ||
    "mongodb+srv://user:user@cluster0.lhohu5k.mongodb.net/cloud_cloud",
  SERVER_PORT: parseInt(process.env.SERVER_PORT, 10) || 5000,
  SECRET_KEY: process.env.SECRET_KEY || "Heppi",
};
