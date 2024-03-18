const File = require("../models/File");
const fileSercise = require("../services/file.service");
const fs = require("fs");
const User = require("../models/User");
const mongoose = require("mongoose");

class FileController {
  async createFile(req, res) {
    try {
      const { name, type, parent } = req.body;
      console.log(req.body);
      // Перевірка, чи parent є рядком і перетворення на ObjectId
      // const parentId = new mongoose.Types.ObjectId(parent);
      const file = await new File({
        name,
        type,
        parent,
        user: req.user.id,
      });
      console.log(file);
      const parentFile = await File.findOne({ _id: parent });
      if (!parentFile) {
        file.path = name;
        await fileSercise.createDir(file);
      } else {
        file.path = `${parentFile.path}\\${file.name}`;
        // console.log(file.path, file.name, name);
        await fileSercise.createDir(file);
        parentFile.chailds.push(file._id);
        await parentFile.save();
      }
      await file.save();
      return res.json(file);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
  async getAllFiles(req, res) {
    try {
      const { parent } = req.query;
      if (!parent) {
        const files = await File.find({ user: req.user.id });
        return res.status(200).json(files);
      } else {
        const files = await File.find({ parent });
        return res.status(200).json(files);
      }
    } catch (error) {
      console.log("Error getAll", error);
      return res.status(400).jsonn({ message: "GetAllFeild" });
    }
  }
}

module.exports = new FileController();
