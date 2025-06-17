
# 🌍 World's Marathons

Welcome to **World's Marathons** – a full-featured marathon event management platform. This project includes user authentication, dynamic event listings, admin dashboard, countdown timers, ticket purchase sections, and more!


## 🖼️ Website Preview

- **Navbar**
  - **Left:** Logo + Website Name (**World's Marathons**)
  - **Middle (Guest):** Home | Marathon
  - **Right (Guest):** Login | Register
  - **Middle (Logged-in User):** Home | Marathon | Dashboard
  - **Right (Logged-in User):** User photo | Logout


## 📋 Features

### 🏠 Home Page
- **CarouselSection:** Rotating banner with promotional images
- **Marathon Section:** Displays 6 featured marathon cards with `Details` button
- **Upcoming Events For Section**
- **Marathon Trainers Section**
- **Tickets Section:** 
  - “🎫 Buy Your Early Bird Ticket Now!” CTA

### 🔒 Authentication
- Secure **Login/Register**
- Firebase-based AccessToken Auth system 

### 🏃 Marathon Page
- Public list of marathons
- Anyone can view marathon

### 📂 Dashboard (after login)
- **Add Marathon**
- **My Marathon List**
  - Each item has:
    - Update 🖊️
    - Delete 🗑️
-  **My Apply List** 
    - Update/Cancel Application 
    - Each applied marathon shows:
    - applied marathon details.   
- **Marathon Details page**
    - Show All Marathon Details.   
    - Countdown Timer (if registered)
    - **Register Closed** shown if date is passed
    
   

### ⏱️ Countdown Timer
- Countdown shown only if:
  - User registered for a marathon
  - Event date not over yet
- After date: shows "Register Closed"

### 📦 Admin/User Separation *(Optional)*
- Admin: Full access to manage events
- Users: Apply for marathon, view history

## 📱 Responsive Design
- Fully responsive and mobile-friendly


## 🛠️ Tech Stack

### 🚀 Frontend
- React.jsx
- Tailwind CSS
- DaisyUI
- react toastify
- react-tooltip
- lottie-react
- react-countdown
- React bits
### 🔧 Backend
- Node.js
- Express.js
- cors

### 🗂️ Database & Auth
- MongoDB
- Firebase Authentication

## Installation

Install my-project all package

```bash
npm create vite@latest b11a11-client-side -- --template react
  
```
```bash
cd b11a11-client-side
```

```bash
npm install
```

```bash
npm run dev
```
## DaisyUi

```bash
npm i -D daisyui@latest
```
## TailwindCss
```bash
npm install tailwindcss @tailwindcss/vite
```
## React Router

```bash
npm i react-router

```
## React-Toastify

```bash
npm i react-Toastify
```
## React-tooltip

```bash
npm i react-tooltip
```
## React-lottie

```bash
npm i react-lottie
```
## React Bits

```bash
npm install gsap
```
## Firebase

```bash
npm install firebase
```

## 📎 Links

- [Live Site](https://worldsmarathons-ab5a1.web.app/)
- [Frontend Repo](https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-mdsheikhmohaimenulislam)
- [Backend Repo](https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-mdsheikhmohaimenulislam)


## 🌐 Live Demo

Check out the live version here: [World's Marathons Live](https://worldsmarathons-ab5a1.web.app/)

##  Acknowledgements

- [Firebase](https://firebase.google.com/)
- [React Router](https://reactrouter.com/)
- [Icons8](https://icons8.com/)
- [Heroicons](https://heroicons.com/)
- [Lottiefiles](https://lottiefiles.com/free-animations/react)
- [Tooltip](https://react-tooltip.com/docs/getting-started)

---

##### Copyright © 2025 - All right reserved by ACME Industries Ltd