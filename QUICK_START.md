# ⚡ Quick Start Guide

## ✅ MongoDB Atlas - Connected & Ready!

---

## 🚀 Start Your Application

### Terminal 1 - Backend (Required First)
```bash
cd backend
npm start
```
**Wait for**: "MongoDB connected" and "API listening on http://localhost:5000"

### Terminal 2 - Frontend
```bash
cd frontend
npm start
```
**Opens**: http://localhost:3000

---

## 🔐 Create Admin Account

1. **Register** at http://localhost:3000/register
   - Username: admin
   - Email: admin@example.com
   - Password: admin123

2. **Make Admin** in MongoDB Atlas:
   - Go to https://cloud.mongodb.com/
   - Click "Database" → "Collections"
   - Find `users` collection
   - Edit your user document
   - Change `"role": "user"` to `"role": "admin"`
   - Save

3. **Login** and access Admin Panel at http://localhost:3000/admin

---

## 📊 What's Working Now

### ✅ Backend
- MongoDB Atlas connected
- User authentication (register/login)
- Tour CRUD operations
- Review system
- JWT protected routes

### ✅ Frontend
- Live data from MongoDB
- Admin dashboard with real stats
- Add/Delete tours
- View all tours from database
- Search functionality

---

## 🎯 Test It Out!

### 1. Add a Tour via Admin Panel
- Login as admin
- Click "Add Tour"
- Fill in the form
- Submit → Saved to MongoDB!

### 2. Verify in MongoDB Atlas
- Go to https://cloud.mongodb.com/
- Database → Collections
- Check `tours` collection
- Your tour should be there!

---

## 🔧 Important Files

- `backend/.env` - MongoDB connection (already configured ✅)
- `frontend/src/Pages/AdminDashboard.jsx` - Admin panel code
- `MONGODB_SETUP_GUIDE.md` - Full documentation
- `DATABASE_SUMMARY.md` - Technical summary

---

## 📡 API Endpoints

Base URL: `http://localhost:5000/api`

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/auth/register` | POST | Register user |
| `/auth/login` | POST | Login |
| `/tours` | GET | Get all tours |
| `/tours` | POST | Add tour (admin) |
| `/tours/:id` | DELETE | Delete tour (admin) |
| `/tours/search` | GET | Search tours |

---

## ❓ Troubleshooting

### MongoDB Connection Failed?
```bash
# Check if backend is running
cd backend
npm start
```

### Can't Access Admin Panel?
Make sure your user role is set to "admin" in MongoDB Atlas

### Port Already in Use?
Change port in `backend/.env`:
```
PORT=5001
```

---

## 🎉 You're All Set!

Your Tour Management System is now:
- ✅ Connected to MongoDB Atlas
- ✅ Running locally
- ✅ Ready for development
- ✅ Pushed to GitHub

**GitHub**: https://github.com/Sameer725744/Tour_Management

---

<div align="center">

Made with ❤️ | MERN Stack | MongoDB Atlas

</div>
