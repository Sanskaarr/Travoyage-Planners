// Authentication Routes
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { protect, adminOnly } from '../middlewares/auth.js';

const router = express.Router();

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public

router.post('/register', async (req, res) => {
  console.log("🔥 Register endpoint hit");
  console.log("🧾 Incoming Body:", req.body);
  try {
    const { name, email, password, phone } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password,
      phone
    });

    // Generate token
    const token = user.generateToken();

    res.status(201).json({
      success: true,
      token,
      user
    });
  } catch (error) {
    console.error("❌ Error in register endpoint:", error);
    res.status(400).json({ message: error.message });
  }
});

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check for user
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Generate token
    const token = user.generateToken();

    const { _id, name, phone, role, lastLogin } = user;

    res.json({
      success: true,
      token,
      user: { _id, name, email, phone, role, lastLogin }
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;