# 🚀 MongoDB Atlas Setup Guide

## ✅ Configuration Complete!

Your Tour Management System is now connected to **MongoDB Atlas Cloud Database**!

---

## 📋 What's Been Configured

### 1. Backend Connection (`.env` file created)
- **Database**: MongoDB Atlas Cluster
- **Username**: sameerahmad725744_db_user
- **Password**: sameer@123 (URL-encoded in connection string)
- **Connection String**: `mongodb+srv://cluster0.o8izv7k.mongodb.net/tour_management`
- **JWT Secret**: Configured for authentication
- **Port**: 5000
- **Status**: ✅ Connected

### 2. Features Enabled
- ✅ User Registration & Login
- ✅ Admin Dashboard with Live Data
- ✅ Tour Management (Create, Read, Update, Delete)
- ✅ Authentication System
- ✅ Real-time Data Fetching from MongoDB

---

## 🎯 How to Start Your Application

### Step 1: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 2: Start the Backend Server
```bash
# Development mode with auto-restart
npm run dev

# OR Production mode
npm start
```

You should see:
```
MongoDB connected
API listening on http://localhost:5000
```

### Step 3: Install Frontend Dependencies
Open a new terminal:
```bash
cd frontend
npm install
```

### Step 4: Start the Frontend
```bash
npm start
```

Your application will open at: `http://localhost:3000`

---

## 🔐 Default Admin Access

To access the admin panel, you need to:

1. **Register a user** at `http://localhost:3000/register`
2. **Manually update the user role** in MongoDB Atlas to "admin"

### How to Make a User Admin:

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Navigate to **Database** → **Collections**
3. Find the `users` collection
4. Edit your user document
5. Change `role: "user"` to `role: "admin"`
6. Save the changes

Now you can log in and access the admin dashboard at `http://localhost:3000/admin`

---

## 🗄️ Database Collections

Your MongoDB database will automatically create these collections:

### 1. **users**
- Stores user accounts (username, email, password, role)
- Roles: "user" or "admin"

### 2. **tours**
- Tour packages with details
- Fields: title, city, address, distance, photo, description, price, maxGroupSize, featured, reviews

### 3. **reviews**
- User reviews for tours
- Fields: userId, tourId, rating, comment

---

## ✨ Admin Panel Features

Once logged in as admin, you can:

### 📊 View Statistics
- Total Tours
- Featured Tours
- Total Revenue
- Average Rating

### 🎯 Manage Tours
- **View All Tours** - See all tours from database
- **Add New Tour** - Create new tour packages
- **Edit Tours** - Update tour information
- **Delete Tours** - Remove tour packages

### 👥 User Management
- View registered users
- Manage user roles

---

## 🧪 Testing the Connection

### Test Backend API:

1. **Health Check**:
   ```
   GET http://localhost:5000/api/health
   ```

2. **Get All Tours**:
   ```
   GET http://localhost:5000/api/tours
   ```

3. **Register User**:
   ```
   POST http://localhost:5000/api/auth/register
   Body: {
     "username": "testuser",
     "email": "test@example.com",
     "password": "password123"
   }
   ```

4. **Login**:
   ```
   POST http://localhost:5000/api/auth/login
   Body: {
     "email": "test@example.com",
     "password": "password123"
   }
   ```

---

## 🔧 Troubleshooting

### MongoDB Connection Failed?
1. Check your internet connection
2. Verify MongoDB Atlas cluster is running
3. Ensure IP address is whitelisted in Atlas:
   - Go to MongoDB Atlas → Network Access
   - Add IP Address: `0.0.0.0/0` (allow all for development)

### Port Already in Use?
Change the port in `backend/.env`:
```
PORT=5001
```

### CORS Errors?
Update `backend/.env`:
```
CORS_ORIGIN=http://localhost:3000
```

---

## 🌟 Sample Tour Data

To add sample tours, use the Admin Dashboard form or insert directly into MongoDB:

```json
{
  "title": "Western China Tour",
  "city": "Xinjiang",
  "address": "Urumqi",
  "distance": 150,
  "photo": "https://example.com/image.jpg",
  "desc": "Explore the beautiful landscapes of Western China",
  "price": 299,
  "maxGroupSize": 10,
  "featured": true
}
```

---

## 📞 Support

If you encounter any issues:

1. Check MongoDB Atlas dashboard
2. Verify connection string in `.env`
3. Ensure all dependencies are installed
4. Check console logs for errors

---

<div align="center">

**🎉 Your Tour Management System is Ready!**

Made with ❤️ using MERN Stack

</div>
