const { Router } = require("express");
const express = require("express");
// const { createUser } = require("../controllers/usercontroller");
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/config");
const config = require("../config/config");
const authMiddleware = require("../middleware/auth.middleware");
const File = require("../models/File");
const fileService = require("../services/file.service");

const router = new Router();
// 1 Add router.use(express.json());  and (!errors.isEmpty())
router.use(express.json());

router.post(
  "/registration",
  [
    check("email", "incorrect email").isEmail(),
    check("password", "Password must be longer than 3 symbols").isLength({
      min: 1,
      max: 12,
    }),
  ],
  async (req, res) => {
    try {
      console.log(req.body);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ messages: "Incorect request", errors });
      }
      const { email, password } = req.body;
      const candidate = await User.findOne({ email: email });

      if (candidate) {
        return res.status(400).json({ message: "User already exists" });
      }
      const hashPassword = await bcrypt.hash(password, 10);

      const newUser = new User({ email, password: hashPassword });
      await newUser.save();

      await fileService.createDir(new File({ user: newUser.id, name: "" }));

      return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "User notfaund" });
    }
    const bcryptPassport = await bcrypt.compareSync(password, user.password);
    if (!bcryptPassport) {
      res.status(400).json({ message: "Passport wrong" });
    }
    const token = await JWT.sign({ id: user.id }, config.SECRET_KEY, {
      expiresIn: "1h",
    });
    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        password: user.password,
        diskSpace: user.diskSpace,
        usedSpac: user.usedSpac,
        files: user.files,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/auth", authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    console.log(user);
    if (!user) {
      res.status(400).json({ messages: "User not faund" });
    }
    const token = JWT.sign({ id: user.id }, SECRET_KEY, {
      expiresIn: "1h",
    });
    return res.json({
      token,
      user,
      // user: {
      //   id: user.id,
      //   email: user.email,
      //   password: user.password,
      //   diskSpace: user.diskSpace,
      //   usedSpac: user.usedSpac,
      //   files: user.files,
      // },
    });
  } catch (error) {
    return res.status(500).json({ messages: "Server token erroe", error });
  }
});
module.exports = router;

// router.get("/user/:id", usersController.getUserById);
