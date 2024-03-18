const { Schema, model } = require("mongoose");
const ObjectId = Schema.ObjectId;
const File = new Schema({
  name: { type: String },
  type: { type: String },
  accessLinck: { type: String },
  size: { type: Number, default: 0 },
  path: { type: String, default: "" },
  date: { type: Date, default: Date.now() },
  user: { type: ObjectId, ref: "User" },
  parent: { type: ObjectId, ref: "File" },
  chailds: [{ type: ObjectId, ref: "File" }],
});

module.exports = model("File", File);

// const { Schema, model, ObjectId } = require("mongoose");

// const File = new Schema({
//   name: { type: String, required: true },
//   type: { type: String, required: true },
//   acccessLinck: { type: String },
//   size: { type: Number, default: 0 },
//   path: { type: String, default: "" },
//   date: { type: Date, default: Date.now() },
//   user: { type: ObjectId, ref: "User" },
//   parent: { type: ObjectId, ref: "File" },
//   chailds: [{ type: ObjectId, ref: "File" }],
// });

// module.exports = model(File, "File");
