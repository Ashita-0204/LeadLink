const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = "MYPASSWORDISSECRET";
router.post(
  "/CreateUser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "Incorrect Password")
      .isLength({ min: 5 })
      .isAlphanumeric(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const secPassword = await bcrypt.hash(req.body.password, salt);

      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
      });

      res.json({ success: true });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(400).json({ success: false, error: error.message });
    }
  }
);

router.post(
  "/login",
  [
    body("email").isEmail(),
    body("password", "Incorrect Password")
      .isLength({ min: 5 })
      .isAlphanumeric(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ error: "Try logging with correct credentials" });
      }

      const pwdCompare = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (!pwdCompare) {
        return res
          .status(400)
          .json({ error: "Try logging with correct credentials" });
      }
      const data = {
        user: {
          id: userData._id,
        },
      };

      const authToken = jwt.sign(data, jwtSecret, { expiresIn: "1h" });

      return res.json({ success: true, authToken: authToken });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  }
);

module.exports = router;
