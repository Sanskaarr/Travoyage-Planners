# Travoyage Planners Backend - Node.js Reference

This is a reference implementation of the Travoyage Planners backend using Node.js, Express, and MongoDB.

## 🚀 Quick Setup

### 1. Install Dependencies
```bash
npm install express mongoose cors helmet bcryptjs jsonwebtoken dotenv
```

### 2. Environment Variables (.env)
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/travoyage_planners
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/travoyage_planners

JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d
```

### 3. Start Server
```bash
# Development
npm run dev

# Production
npm start
```

## 📁 Project Structure
```
backend/
├── server.js              # Entry point
├── models/                 # MongoDB schemas
│   ├── User.js
│   ├── Package.js
│   ├── Testimonial.js
│   └── Inquiry.js
├── routes/                 # API routes
│   ├── auth.js
│   ├── packages.js
│   ├── testimonials.js
│   └── contact.js
├── middlewares/            # Custom middleware
│   └── auth.js
└── README.md
```

## 🛠️ API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Travel Packages
- `GET /api/packages` - Get all packages
- `GET /api/packages/:id` - Get single package
- `POST /api/packages` - Create package (admin only)
- `DELETE /api/packages/:id` - Delete package (admin only)

### Testimonials
- `GET /api/testimonials` - Get approved testimonials
- `POST /api/testimonials` - Submit testimonial
- `PUT /api/testimonials/:id/approve` - Approve testimonial (admin only)

### Contact/Inquiries
- `POST /api/contact` - Submit inquiry
- `GET /api/contact` - Get all inquiries (admin only)

## 🔐 Authentication

Uses JWT tokens for authentication. Include in headers:
```
Authorization: Bearer <your_jwt_token>
```

## 📦 MongoDB Setup

### Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/travoyage_planners`

### MongoDB Atlas (Cloud)
1. Create account at mongodb.com
2. Create cluster
3. Get connection string
4. Update MONGODB_URI in .env

## 🧪 Testing with Postman

Import the API endpoints and test:
1. Register/Login to get JWT token
2. Use token for protected routes
3. Test all CRUD operations

This reference shows how to structure a production-ready travel booking backend!