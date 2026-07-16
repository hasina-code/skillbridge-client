# 🎓 SkillBridge

## 📖 Project Purpose

SkillBridge is a modern Learning Management System (LMS) built with **Next.js 16, TypeScript, MongoDB, and Better Auth**. It enables students to explore online courses, manage their learning journey, and access a personalized dashboard with analytics. The application follows a modern, responsive design with secure authentication and efficient API handling using Next.js API Routes.

# 🌐 Live Site

https://skillbridge-client-one.vercel.app

# ✨ Key Features

- Authentication with Email & Password using Better Auth
- Browse All Courses
- Search, Filter & Sort Courses
- Course Details Page
- Add New Course
- Update Existing Course
- Delete Course
- Analytics Dashboard with Recharts
- Statistics Cards & Charts
- User Profile Management
- Update Profile Image
- Settings Page
- Dark & Light Theme
- Fully Responsive Design
- Protected Dashboard Routes
- Modern UI with Tailwind CSS
- React Hot Toast Notifications
- Loading & Custom Error Pages
- MongoDB Database Integration
- Secure API Routes using Next.js API

# 🛠️ Technologies Used

## Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts
- React Hook Form
- React Hot Toast
- Lucide React
- Next Themes

## Backend

- Next.js API Routes
- Better Auth
- MongoDB
- TypeScript

# 📦 NPM Packages Used

@better-auth/mongo-adapter
better-auth
mongodb
axios
framer-motion
lucide-react
next-themes
react-hook-form
react-hot-toast
recharts

# 🚀 API Routes

## Authentication

/api/auth/[...all]

## Courses

GET /api/courses
GET /api/courses/[id]
POST /api/courses
PUT /api/courses/[id]
DELETE /api/courses/[id]

## Users

GET /api/users
PATCH /api/users

## Dashboard

GET /api/dashboard/stats

# Environment Variables

MONGODB_URI=

BETTER_AUTH_SECRET=

BETTER_AUTH_URL=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_SERVER_URL=

GOOGLE_CLIENT_ID=

GOOGLE_CLIENT_SECRET=

# 📱 Pages

## Public Pages

- Home
- About
- Contact
- Courses
- Course Details
- Login
- Register

## Protected Pages

- Dashboard
- Analytics
- My Courses
- Manage Courses
- Add Course
- Profile
- Settings

# 👤 Demo Credentials

## Demo User

**Email**

hasina.demo@gmail.com

**Password**

Hasina123@
