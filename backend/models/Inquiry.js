// Contact/Inquiry Model - MongoDB Schema

import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
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
  phone: {
    type: String,
    trim: true,
    maxlength: [20, 'Phone number cannot exceed 20 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    minlength: [10, 'Message must be at least 10 characters'],
    maxlength: [2000, 'Message cannot exceed 2000 characters']
  },
  inquiryType: {
    type: String,
    enum: ['general', 'booking', 'custom_package', 'complaint', 'feedback'],
    default: 'general'
  },
  packageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Package',
    required: false // For package-specific inquiries
  },
  preferredContactMethod: {
    type: String,
    enum: ['email', 'phone', 'whatsapp'],
    default: 'email'
  },
  urgency: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  status: {
    type: String,
    enum: ['new', 'in_progress', 'resolved', 'closed'],
    default: 'new'
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  notes: {
    type: String,
    trim: true,
    maxlength: [1000, 'Notes cannot exceed 1000 characters']
  },
  source: {
    type: String,
    enum: ['website', 'phone', 'email', 'social_media', 'referral'],
    default: 'website'
  },
  isRead: {
    type: Boolean,
    default: false
  },
  responseDate: {
    type: Date
  },
  resolutionDate: {
    type: Date
  }
}, {
  timestamps: true
});

// Index for better query performance
inquirySchema.index({ status: 1, createdAt: -1 });
inquirySchema.index({ assignedTo: 1, status: 1 });
inquirySchema.index({ inquiryType: 1, urgency: 1 });
inquirySchema.index({ email: 1 });

// Pre-save middleware to set response/resolution dates
inquirySchema.pre('save', function(next) {
  if (this.isModified('status')) {
    if (this.status === 'in_progress' && !this.responseDate) {
      this.responseDate = new Date();
    }
    if ((this.status === 'resolved' || this.status === 'closed') && !this.resolutionDate) {
      this.resolutionDate = new Date();
    }
  }
  next();
});

// Method to mark as read
inquirySchema.methods.markAsRead = function() {
  this.isRead = true;
  return this.save();
};

// Method to assign to admin
inquirySchema.methods.assignTo = function(adminId) {
  this.assignedTo = adminId;
  if (this.status === 'new') {
    this.status = 'in_progress';
  }
  return this.save();
};

// Static method to get unread inquiries count
inquirySchema.statics.getUnreadCount = function() {
  return this.countDocuments({ isRead: false });
};

// Static method to get inquiries by status
inquirySchema.statics.getByStatus = function(status, limit = 20) {
  return this.find({ status })
    .populate('packageId', 'title destination')
    .populate('assignedTo', 'name email')
    .sort({ createdAt: -1 })
    .limit(limit);
};

// Virtual for response time (in hours)
inquirySchema.virtual('responseTime').get(function() {
  if (this.responseDate) {
    return Math.round((this.responseDate - this.createdAt) / (1000 * 60 * 60));
  }
  return null;
});

// Virtual for resolution time (in hours)
inquirySchema.virtual('resolutionTime').get(function() {
  if (this.resolutionDate) {
    return Math.round((this.resolutionDate - this.createdAt) / (1000 * 60 * 60));
  }
  return null;
});

export default mongoose.model('Inquiry', inquirySchema);