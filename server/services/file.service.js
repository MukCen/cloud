const fs = require("fs");
const File = require("../models/File");
const { FILE_PATH } = require("../config/config");

class FileServises {
  createDir(file) {
    const filePath = `${FILE_PATH}\\${file.user}\\${file.path}`;
    console.log(filePath);
    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath);
          resolve({ messages: "File wos created" });
        } else {
          resolve({ messages: "Tith File already exist " });
        }
      } catch (error) {
        return reject({ message: "Error create dir" });
      }
    });
  }
}

module.exports = new FileServises();
