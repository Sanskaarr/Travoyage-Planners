import express from 'express';
import Package from '../models/Package.js';

const router = express.Router();

// Get all active packages
router.get('/', async (req, res) => {
  try {
    const packages = await Package.find({ isActive: true }).sort({ createdAt: -1 });

    const updatedPackages = packages.map(pkg => {
      if (pkg.imageUrl && !pkg.imageUrl.startsWith('http')) {
        pkg.imageUrl = `http://localhost:5050/uploads/${pkg.imageUrl}`;
      }
      return pkg;
    });

    res.json(updatedPackages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single package by ID
router.get('/:id', getPackage, (req, res) => {
  res.json(res.pkg);
});

// Create a new package
router.post('/', async (req, res) => {
  const packageData = new Package(req.body);
  try {
    const newPackage = await packageData.save();
    res.status(201).json(newPackage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an existing package
router.put('/:id', getPackage, async (req, res) => {
  Object.assign(res.pkg, req.body);
  try {
    const updatedPackage = await res.pkg.save();
    res.json(updatedPackage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a package by ID
router.delete('/:id', getPackage, async (req, res) => {
  try {
    await res.pkg.deleteOne();
    res.json({ message: 'Package deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get package by ID
async function getPackage(req, res, next) {
  let pkg;
  try {
    pkg = await Package.findById(req.params.id);
    if (pkg == null) {
      return res.status(404).json({ message: 'Cannot find package' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.pkg = pkg;
  next();
}

export default router;