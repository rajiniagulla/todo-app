# React TODO App

A sleek, modern task management application built with **React 18** and **Vite**. Features a clean user interface, responsive layout, dynamic filtering, task progress metrics, and persistent storage via `localStorage`.

## 🚀 Live Demo

Check out the live application on GitHub Pages:
**[https://rajiniagulla.github.io/todo-app/](https://rajiniagulla.github.io/todo-app/)**

---

## ✨ Features

- **Task Management**: Seamlessly add, complete, and delete tasks.
- **Dynamic Filtering**: Easily filter tasks by status: `All`, `Active`, and `Completed`.
- **Progress Tracking**: Real-time counter of remaining and completed tasks.
- **Bulk Action**: Clear all completed tasks with a single click.
- **Persistent Storage**: Retains tasks across browser refreshes via `localStorage`.
- **Responsive & Accessible**: Optimized for mobile and desktop screens with keyboard accessibility.
- **Modular Component Architecture**: Broken down into clean, reusable React components (`Header`, `TaskForm`, `Stats`, `Filters`, `TaskList`, `TaskItem`, `EmptyState`, `CardFooter`).
- **Automated CI/CD**: Automatic build and deployment to GitHub Pages via GitHub Actions.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, CSS Grid)
- **Deployment**: GitHub Actions & GitHub Pages

---

## 📁 Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   └── favicon.svg             # App favicon
├── src/
│   ├── components/
│   │   ├── CardFooter.jsx      # Bottom summary & clear completed button
│   │   ├── EmptyState.jsx      # Placeholder when no tasks are found
│   │   ├── Filters.jsx         # Status filter navigation buttons
│   │   ├── Header.jsx          # App header with branding
│   │   ├── Stats.jsx           # Task counter metrics
│   │   ├── TaskForm.jsx        # Input form to add new tasks
│   │   ├── TaskItem.jsx        # Individual task row item
│   │   └── TaskList.jsx        # List container mapping tasks
│   ├── App.css                 # Main application styling
│   ├── App.jsx                 # Modularized root component
│   ├── App.standalone.jsx      # Original monolithic standalone component
│   ├── index.css               # Global baseline typography & resets
│   └── main.jsx                # React DOM entry point
├── .gitignore                  # Git ignore rules
├── index.html                  # HTML entry template
├── package.json                # Project dependencies and npm scripts
├── README.md                   # Documentation
└── vite.config.js              # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18+ or 22 recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/rajiniagulla/todo-app.git
cd todo-app

# Install dependencies
npm install
```

### Development

Run the development server locally:

```bash
npm run dev
```

### Production Build

Compile and bundle for production:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

---

## 🔄 Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys changes on any push to the `main` branch to GitHub Pages.

---

## Contributors
- [<rajiniagulla>](https://github.com/<rajiniagulla>)

