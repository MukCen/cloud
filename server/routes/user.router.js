const { Router } = require("express");
// const { createUser } = require("../controllers/usercontroller");
const User = require("../models/User");
const { check, validationResult } = require("express-validator");

const router = new Router();

router.post(
  "/registration",
  [
    check("email", "Encorect email").isEmail(),
    check("password", "password mast be longer then 3 symbol").isLength({
      min: 3,
      max: 12,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors) {
        res.status(400).json({ messages: "Encorect request", errors });
      }
      const { email, password } = req.body;
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: "User already exists" });
      }

      const newUser = new User({ email, password });
      await newUser.save();

      // return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

module.exports = router;

// router.get("/user/:id", usersController.getUserById);
