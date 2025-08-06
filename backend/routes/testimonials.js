import express from 'express';

const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.send('Testimonials route works');
});

export default router;