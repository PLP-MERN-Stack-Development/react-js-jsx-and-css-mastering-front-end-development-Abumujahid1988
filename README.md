# 🧩 PLP Task Manager-React.js and Tailwind CSS

PLP Task Manager is a **responsive React web application** built with **Vite** and **Tailwind CSS v4**.
The app demonstrates component architecture, state management with hooks, and API integration.

---

## 🚀 Features

* Responsive layout (mobile, tablet, and desktop)
* Task management (add, delete, filter, complete tasks)
* Theme toggle (Light/Dark mode)
* Fetch and display posts from a public API (JSONPlaceholder)
* Reusable UI components: Button, Card, Navbar, Footer
* Context API for theme management
* Custom hook for local storage persistence
---

## 🛠️ Project Structure

```
task-manager-dashboard/
├── public/                     # Static assets served directly (e.g., icons, manifest)
│   └── vite.svg
├── src/
│   ├── assets/                 # Icons, images, and screenshots
│   │   ├── react.svg
│   │   └── screenshots/
│   │       ├── TaskManager-1.png
│   │       ├── TaskManager-2.png
│   │       ├── TaskManager-3.png
│   │       └── TaskManager-4.png
│   ├── components/             # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── TaskManager.jsx
│   │   └── Posts.jsx
│   ├── context/                # Context API for theme (dark/light) management
│   │   └── ThemeContext.jsx
│   ├── pages/                  # Route-based page components
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   └── About.jsx
│   ├── utils/                  # Utility functions and API helpers
│   │   └── api.js
│   ├── App.jsx                 # Root component managing routes and layout
│   ├── main.jsx                # Application entry point
│   └── index.css               # Tailwind CSS entry file
├── .env                        # Environment variables
├── .gitignore                  # Git ignored files
├── eslint.config.js            # Linting configuration
├── index.html                  # HTML template
├── jsconfig.json               # JS path and alias configuration
├── package-lock.json           # Dependency lock file
├── package.json                # Project metadata and dependencies
├── tailwind.config.js          # Tailwind CSS configuration file
├── vite.config.js              # Vite build and optimization configuration
└── README.md                   # Project documentation
```

> **Explanation:**
>
> * The **`components/`** folder holds all reusable UI parts like buttons, cards, and layout elements.
> * The **`pages/`** directory contains route-based components representing app views (Home, Dashboard, About).
> * The **`context/`** folder centralizes global state, including theme management.
> * The **`utils/`** folder includes helper functions such as API utilities.
> * The **root files** (`App.jsx`, `main.jsx`, `index.html`) form the entry point and render hierarchy for the entire app.

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-Abumujahid1988.git
cd TaskManager-Dashboard
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
```

Then visit **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## 🌐 Environment Variables

Create a `.env` file in the root of the project with:

```
VITE_API_URL=http://localhost:5000
```

---

## 🌍 Deployment

The project is deployed on **Netlify:**
🔗 [https://taskmanager-dashboard.netlify.app]

---

## 🎨 Technologies Used

* **React 18+**
* **Vite**
* **Tailwind CSS v4**
* **React Router DOM**
* **Context API**
* **JSONPlaceholder API**

---

## ⚖️ License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.
© 2025 Abdullahi Abdulganiyu. All rights reserved.

---

## 👨‍💻 Author

**Abdullahi Abdulganiyu**
Frontend Developer | Power Learn Project Cohort (July 2025)
📧 [abumujahid555@gmail.com](mailto:abumujahid555@gmail.com).
