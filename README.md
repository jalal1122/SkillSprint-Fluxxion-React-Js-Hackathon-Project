# ⚡ SkillSprint - Fluxxion React JS Hackathon Project

**Live Demo 👉 [mjskillsprint.vercel.app](https://mjskillsprint.vercel.app)**

A React-based Skill Progress Tracker Web App built for the Fluxxion Frontend Hackathon. **SkillSprint** empowers individuals to track, manage, and visualize their skill development through an immersive UI, animated charts, and 3D environments.

---

## 🚀 Problem Statement

In today's fast-paced digital era, tracking skill development is crucial—but often overlooked. Whether you're learning programming, design, or soft skills, visualizing your growth can boost motivation and focus. **SkillSprint** solves this with a beautifully crafted dashboard that makes tracking and improving your skills intuitive and engaging.

---

## 🌟 Features

### ✅ 1. **Interactive Dashboard**

* 📊 Pie and Bar charts powered by `react-chartjs-2`
* Displays:

  * Total skills
  * Average progress
  * Best & weakest skill
* 🔄 Live chart refresh

---

### ➕ 2. **Add New Skills**

* Add skills with title, category, and progress
* Data saved in `localStorage` for persistence
* Form validation and toast notifications

---

### 🔍 3. **Skill Details View**

* Progress slider to update skill
* Real-time pie chart reflecting updates
* Skill-specific breakdown

---

### 🌐 4. **Explore Skills**

* Grid layout for browsing skills
* Category-wise organization
* Clickable cards to view/edit

---

### 🌓 5. **Theme Toggle**

* Light and Dark mode support
* Theme persistence via `localStorage`
* Smooth Framer Motion transitions

---

### 🌌 6. **3D Background Animations**

* **Starry Night** (Dark mode) & **Cloudy Day Sky** (Light mode)
* Built with `@react-three/fiber` & `@react-three/drei`

---

### 📬 7. **Contact Page**

* Email form using `emailjs-com`
* Instant email delivery from browser
* Real-time form validation

---

### ℹ️ 8. **About Page**

* Developer story and project vision
* Project goals and roadmap

---

### 🚫 9. **404 Not Found Page**

* Fully custom error page with fallback navigation
* Clean UX using React Router’s wildcard routes

---

## 🛠️ Tech Stack

* **Frontend**: React, Tailwind CSS, Framer Motion
* **Charts**: Chart.js (via `react-chartjs-2`)
* **3D Animations**: `@react-three/fiber`, `@react-three/drei`
* **State Management**: React Context API
* **Routing**: React Router DOM
* **Persistence**: localStorage
* **Email Handling**: EmailJS
* **Toasts**: `react-hot-toast`

---

## 📁 Folder Structure

```
src/
├── Components/        # Reusable UI components (Navbar, SkillCard, etc.)
├── Context/           # ThemeContext and SkillsContext
├── Pages/             # Dashboard, AddSkill, Contact, etc.
├── Routes/            # App routing config
├── App.jsx            # Main app structure
├── main.jsx           # App entry point
├── index.css          # Tailwind + custom global styles
```

---

## 🧑‍💻 Getting Started

### 1. Clone the repository:

```bash
git clone https://github.com/jalal1122/SkillSprint.git
cd SkillSprint
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Add Environment Variables:

Create a `.env` file:

```env
VITE_APP_SERVICE_KEY=your_emailjs_service_key
VITE_APP_TEMPLATE_ID=your_emailjs_template_id
VITE_APP_PUBLIC_KEY=your_emailjs_public_key
```

### 4. Start development server:

```bash
npm run dev
```

### 5. View it in your browser:

[http://localhost:5173](http://localhost:5173)

---

## 🔮 Future Enhancements

* 🔐 User Authentication & Profiles
* ☁️ Backend Integration (MongoDB, Express)
* 📈 Advanced charts (line, radar)
* 🧲 Drag & Drop skill ordering
* 📆 Skill tracking history/timeline

---

## 🤝 Contributing

We welcome contributions!

1. Fork the repo
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Added feature-name"`
4. Push the branch: `git push origin feature-name`
5. Submit a pull request

---

## 👨‍💻 Developer Info

* **Name**: Muhammad Jalal
* **Email**: [jk4350649@gmail.com](mailto:jk4350649@gmail.com)
* **GitHub**: [@jalal1122](https://github.com/jalal1122)
* **LinkedIn**: [linkedin.com/in/mjdevstudio](https://www.linkedin.com/in/mjdevstudio/)

---

## 🙏 Acknowledgments

* **React** – The backbone of the app
* **Tailwind CSS** – For utility-first styling
* **Chart.js** – For stunning skill charts
* **Framer Motion** – For animation magic
* **EmailJS** – For email functionality
* **Three.js** – For immersive backgrounds
* **ChatGpt** -- For Helping my optimize its performance especially in three js

---
