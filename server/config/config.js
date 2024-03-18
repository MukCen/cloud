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
  FILE_PATH:
    process.env.FILE_PATH ||
    "D:\\3  Frontend\\14   Ulbi TV       Ноуд Джс Теорія іпракт Redux Toolkit Бекенд\\1.0 Cod\\07\\1 MERN cloud-disk\\server\\Files",
};
