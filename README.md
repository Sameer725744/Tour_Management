# 🌍 Tour Management System

<div align="center">

![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4.4-green?style=for-the-badge&logo=mongodb)
![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey?style=for-the-badge&logo=express)
![React](https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?style=for-the-badge&logo=node.js)

**Discover Your Next Adventure with Our Premium Travel Platform**

[🚀 Live Demo](#) • [📋 Features](#-features) • [🛠️ Installation](#-installation) • [📸 Gallery](#-gallery)

</div>

---

## 🎯 About The Project

The **Tour Management System** is a full-stack, feature-rich traveling website built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). It provides users with a seamless and intuitive experience for discovering, booking, and managing their travel plans while offering administrators powerful tools to manage tours, bookings, and user reviews.

### ✨ Why Choose Tour Management?

- 🌟 **Modern UI/UX** - Clean, responsive design that works on all devices
- 🔒 **Secure Authentication** - JWT-based authentication system
- ⚡ **Real-time Updates** - Dynamic content loading and instant feedback
- 🎨 **Beautiful Gallery** - Masonry image gallery for tour showcases
- 💬 **Review System** - User reviews and ratings for tours
- 👨‍💼 **Admin Dashboard** - Complete control over tours and bookings

---

## 🚀 Features

### For Users
- 🔐 **User Authentication** - Secure login and registration
- 🔍 **Advanced Search** - Find tours by location, category, or price
- 📋 **Tour Booking** - Easy booking process with confirmation
- ⭐ **Reviews & Ratings** - Share your experience with reviews
- 📸 **Image Galleries** - Beautiful masonry layout of tour images
- 🗺️ **Tour Details** - Comprehensive information about each tour
- 👤 **User Dashboard** - Manage your bookings and profile

### For Admins
- 🎛️ **Admin Dashboard** - Centralized management interface
- ➕ **Tour Management** - Create, edit, delete tours
- 👥 **User Management** - View and manage user accounts
- 📊 **Booking Management** - Track and manage all bookings
- 💬 **Review Moderation** - Monitor and manage reviews
- 📈 **Analytics** - Insights into bookings and popular tours

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React 18** - Modern UI library
- 🎨 **CSS3** - Custom styling with responsive design
- 🔄 **React Router** - Seamless navigation
- 🌐 **Axios** - API communication

### Backend
- 🟢 **Node.js** - Runtime environment
- 🚂 **Express.js** - Web framework
- 🗄️ **MongoDB** - NoSQL database
- 🔑 **JWT** - Authentication
- 🔒 **Bcrypt** - Password hashing

---

## 📸 Gallery

<div align="center">

### Homepage
![Homepage](./frontend/src/assets/images/home.png)
*Explore amazing destinations*

### Tour Listing
![Tours](./frontend/src/assets/images/tour.jpg)
*Browse through our curated tour collection*

### Admin Dashboard
![Admin](./frontend/src/assets/images/customization.png)
*Manage everything from one place*

</div>

---

## 💻 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Configure your MongoDB URI in .env
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

The application will run on:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

---

## 📁 Project Structure

```
tour_management_clean/
├── backend/
│   ├── models/          # Database schemas
│   ├── src/
│   │   ├── config/      # Database configuration
│   │   ├── controllers/ # Business logic
│   │   ├── middleware/  # Auth & error handling
│   │   ├── routes/      # API endpoints
│   │   └── index.js     # Entry point
│   └── .env.example
├── frontend/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── Pages/       # Page components
│   │   ├── components/  # Reusable components
│   │   ├── services/    # API services
│   │   ├── shared/      # Common components
│   │   ├── styles/      # CSS files
│   │   └── utils/       # Helper functions
│   └── package.json
└── README.md
```

---

## 🎨 Key Components

- **Header** - Responsive navigation with hamburger menu
- **Featured Tours** - Highlighted tour packages
- **Search Bar** - Quick tour search functionality
- **Tour Cards** - Beautiful card design with ratings
- **Masonry Gallery** - Pinterest-style image layout
- **Testimonials** - User feedback section
- **Newsletter** - Email subscription
- **Footer** - Links and contact information

---

## 🔧 Environment Variables

Create a `.env` file in the backend directory:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Sameer**
- GitHub: [@Sameer725744](https://github.com/Sameer725744)

---

<div align="center">

### Show some ❤️ by starring this repository!

⭐ Made with love using MERN Stack ⭐

</div>
