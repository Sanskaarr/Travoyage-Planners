import express from 'express';

const router = express.Router();

// Example route
router.post('/', (req, res) => {
  res.send('Contact form received');
});

export default router;