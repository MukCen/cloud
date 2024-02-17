const { Schema, model, ObjectId } = require("mongoose");

const User = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  diskSpace: { type: Number, default: 1024 ** 3 * 10 },
  usedSpace: { type: Number, default: 0 },
  avatar: { type: String },
  files: [{ type: Schema.Types.ObjectId, ref: "File" }],
});

module.exports = model("User", User);

// const { Schema, model, Objectid } = require("mongoose");

// const User = new Schema({
//   email: { type: String, require: true, Unique: true },
//   password: { type: String, require: true },
//   diskSpace: { type: Number, default: 1024 ** 3 * 10 },
//   usedSpace: { type: Number, default: 0 },
//   avatar: { type: String },
//   files: [{ type: Objectid, ref: "File" }],
// });
// module.exports = model("User", User);
