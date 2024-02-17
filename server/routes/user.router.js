const { Router } = require("express");
const express = require("express");
// const { createUser } = require("../controllers/usercontroller");
const User = require("../models/User");
const { check, validationResult } = require("express-validator");

const router = new Router();
// 1 Add router.use(express.json());  and (!errors.isEmpty())
router.use(express.json());

router.post(
  "/registration",
  [
    check("email", "incorrect email").isEmail(),
    check("password", "Password must be longer than 3 symbols").isLength({
      min: 1,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ messages: "Incorect request", errors });
      }
      const { email, password } = req.body;
      const candidate = await User.findOne({ email: email });

      if (candidate) {
        return res.status(400).json({ message: "User already exists" });
      }

      const newUser = new User({ email, password });
      await newUser.save();

      return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

module.exports = router;

// router.get("/user/:id", usersController.getUserById);
