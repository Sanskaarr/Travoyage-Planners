import express from 'express';
import Testimonial from '../models/Testimonial.js';
import { protect, adminOnly } from '../middlewares/auth.js';

const router = express.Router();

// @desc    Get all testimonials
// @route   GET /api/testimonials
// @access  Public
// Get all approved testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ approved: true }).sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Submit a new testimonial (Public)
router.post('/', async (req, res) => {
  try {
    const { name, email, rating, comment, testimonial: testimonialText } = req.body;
    const testimonial = new Testimonial({ name, email, comment, rating });
    await testimonial.save();
    res.status(201).json({ message: 'Testimonial submitted. Awaiting approval.' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Approve a testimonial (Admin Only)
router.put('/:id/approve', protect, adminOnly, async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    testimonial.approved = true;
    await testimonial.save();
    res.json({ message: 'Testimonial approved' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a testimonial (Admin Only)
router.delete('/:id', protect, adminOnly, async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    await testimonial.deleteOne();
    res.json({ message: 'Testimonial deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;