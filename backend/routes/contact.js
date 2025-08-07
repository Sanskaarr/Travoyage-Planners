import express from 'express';
import Inquiry from '../models/Inquiry.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Assuming an Inquiry model is defined and imported
    const newInquiry = await Inquiry.create({ name, email, subject, message });
    res.status(201).json({ message: 'Message received!', inquiry: newInquiry });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;