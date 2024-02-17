// const User = require("../models/User");

// module.exports = {
//   createUser: async (req, res) => {
//     try {
//       const { email, password } = req.body;
//       const candidate = await User.findOne({ email });

//       if (candidate) {
//         return res.status(400).json({ message: "User already exists" });
//       }

//       const newUser = new User({ email, password });
//       await newUser.save();

//       return res.status(201).json({ message: "User created successfully" });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Server error" });
//     }
//   },
// };

//   getUserById: async (error, req, res) => {
//     try {
//       const id = req.body.id;
//       const users = await User.findById(id);
//       res.body = users;
//       res.body = Users;
//       if (error) {
//         throw Error("wrong");
//       }
//     } catch (error) {
//       res.send({ message: "server error" });
//     }
//   },
