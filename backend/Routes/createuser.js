const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { body, validationResult } = require("express-validator");
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
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(res.json({ success: true }));
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
// const express = require('express');
// const router = express.Router();
// const User = require('../models/user');

// // Route to create a new user
// router.post('/CreateUser', async (req, res) => {
//   try {
//     User.create({
//       "name": "Ash",
//       "email": "ashi@g.com",
//       "password": "hi123"
//     }
//   )
//     // Log the incoming request body for debugging
//     console.log('Request body:', req.body);

//     // Destructure the request body
//     const { name, email, password } = req.body;

//     // Validate that all required fields are present
//     if (!name || !email || !password) {
//       return res.status(400).json({ success: false, message: 'All fields are required' });
//     }

//     // Check if the user already exists (based on email)
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ success: false, message: 'User already exists' });
//     }

//     // Create a new user in the database
//     const newUser = await User.create({ name, email, password });

//     // Send a success response with the created user
//     res.status(201).json({
//       success: true,
//       message: 'User created successfully',
//       user: {
//         id: newUser._id,
//         name: newUser.name,
//         email: newUser.email,
//       },
//     });
//   } catch (error) {
//     // Log the error for debugging
//     console.error('Error creating user:', error.message);

//     // Send an error response
//     res.status(500).json({
//       success: false,
//       message: 'Server error',
//       error: error.message,
//     });
//   }
// });

// module.exports = router;
