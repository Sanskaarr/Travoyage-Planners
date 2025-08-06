// Testimonial Model - MongoDB Schema

import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  location: {
    type: String,
    trim: true,
    maxlength: [100, 'Location cannot exceed 100 characters']
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot exceed 5']
  },
  comment: {
    type: String,
    required: [true, 'Comment is required'],
    trim: true,
    minlength: [10, 'Comment must be at least 10 characters'],
    maxlength: [1000, 'Comment cannot exceed 1000 characters']
  },
  packageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Package',
    required: false // Testimonials can be general or package-specific
  },
  approved: {
    type: Boolean,
    default: false
  },
  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  approvedAt: {
    type: Date
  },
  featured: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: String,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(v);
      },
      message: 'Please provide a valid avatar URL'
    }
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for better query performance
testimonialSchema.index({ approved: 1, featured: 1, isActive: 1 });
testimonialSchema.index({ packageId: 1, approved: 1 });
testimonialSchema.index({ rating: -1, createdAt: -1 });

// Pre-save middleware to set approval date
testimonialSchema.pre('save', function(next) {
  if (this.isModified('approved') && this.approved && !this.approvedAt) {
    this.approvedAt = new Date();
  }
  next();
});

// Method to approve testimonial
testimonialSchema.methods.approve = function(adminId) {
  this.approved = true;
  this.approvedBy = adminId;
  this.approvedAt = new Date();
  return this.save();
};

// Static method to get approved testimonials
testimonialSchema.statics.getApproved = function(limit = 10) {
  return this.find({ approved: true, isActive: true })
    .populate('packageId', 'title destination')
    .sort({ featured: -1, createdAt: -1 })
    .limit(limit);
};

// Static method to get testimonials for a specific package
testimonialSchema.statics.getForPackage = function(packageId, limit = 5) {
  return this.find({ 
    packageId, 
    approved: true, 
    isActive: true 
  })
  .sort({ rating: -1, createdAt: -1 })
  .limit(limit);
};

export default mongoose.model('Testimonial', testimonialSchema);