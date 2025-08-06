// Travel Package Model - MongoDB Schema

import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Package title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Package description is required'],
    trim: true,
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  imageUrl: {
    type: String,
    required: [true, 'Package image URL is required'],
    validate: {
      validator: function(v) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(v);
      },
      message: 'Please provide a valid image URL'
    }
  },
  duration: {
    type: String,
    required: [true, 'Package duration is required'],
    trim: true,
    maxlength: [50, 'Duration cannot exceed 50 characters']
  },
  price: {
    type: Number,
    required: [true, 'Package price is required'],
    min: [0, 'Price cannot be negative'],
    max: [999999, 'Price cannot exceed 999,999']
  },
  destination: {
    type: String,
    required: [true, 'Destination is required'],
    trim: true,
    maxlength: [100, 'Destination cannot exceed 100 characters']
  },
  highlights: [{
    type: String,
    trim: true,
    maxlength: [200, 'Highlight cannot exceed 200 characters']
  }],
  inclusions: [{
    type: String,
    trim: true,
    maxlength: [200, 'Inclusion cannot exceed 200 characters']
  }],
  exclusions: [{
    type: String,
    trim: true,
    maxlength: [200, 'Exclusion cannot exceed 200 characters']
  }],
  category: {
    type: String,
    enum: ['adventure', 'beach', 'cultural', 'luxury', 'budget', 'family', 'romantic'],
    default: 'adventure'
  },
  maxGroupSize: {
    type: Number,
    min: [1, 'Group size must be at least 1'],
    max: [50, 'Group size cannot exceed 50']
  },
  difficulty: {
    type: String,
    enum: ['easy', 'moderate', 'challenging'],
    default: 'easy'
  },
  rating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot exceed 5'],
    default: 4.5
  },
  reviewCount: {
    type: Number,
    default: 0,
    min: [0, 'Review count cannot be negative']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

// Index for better query performance
packageSchema.index({ destination: 1, category: 1, price: 1 });
packageSchema.index({ featured: 1, isActive: 1 });
packageSchema.index({ title: 'text', description: 'text', destination: 'text' });

// Calculate average rating (if you have reviews collection)
packageSchema.methods.calculateAverageRating = async function() {
  // This would require a Reviews model
  // const stats = await this.model('Review').aggregate([
  //   { $match: { package: this._id } },
  //   { $group: { _id: '$package', avgRating: { $avg: '$rating' }, numRatings: { $sum: 1 } } }
  // ]);
  // 
  // if (stats.length > 0) {
  //   this.rating = stats[0].avgRating;
  //   this.reviewCount = stats[0].numRatings;
  //   await this.save();
  // }
};

export default mongoose.model('Package', packageSchema);