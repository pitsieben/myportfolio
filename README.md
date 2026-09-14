# Pit Siebenaler — Portfolio & Robotics

An interactive, high-performance portfolio web application showcasing work across architecture, computational design, and robotics in construction.

Built with **React**, **Vite**, **Three.js / React Three Fiber**, and **OGL**.

---

## ✨ Features

- **Faulty Terminal Background:** WebGL CRT/scanline shader backdrop with interactive mouse distortion and glitch effects built with `ogl`.
- **Interactive 3D Robotics Viewer:** Centered 3D robotic arm model (`.obj`) rendered via `@react-three/fiber` and `@react-three/drei`, with auto-centering, studio lighting, smooth parallax, and orbital interaction controls.
- **Dynamic Projects Archive:** Multi-project portfolio loaded from salvaged archival data (`projects.json`), featuring card overviews and a detailed view with rich technical descriptions and high-resolution photo galleries.
- **Interactive Line Sidebar:** Minimalist interactive navigation sidebar with smooth proximity-based marker indicators.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **3D Graphics:** [Three.js](https://threejs.org/) + [@react-three/fiber](https://r3f.docs.pmnd.rs/) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Shader Effects:** [OGL](https://github.com/oframe/ogl) (minimal WebGL library)
- **Styling:** Custom CSS with CSS variables & responsive layout

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm`

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd "Portfolio website"
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
   *(Note: `--legacy-peer-deps` is used to ensure compatibility across React 19 and Three.js peer packages).*

### Development

Run the local development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

To build the static production bundle:
```bash
npm run build
```
Preview the built bundle locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```text
├── public/
│   ├── models/           # 3D models (.obj, .mtl)
│   └── projects/         # High-resolution project image assets
├── src/
│   ├── assets/           # General asset imports
│   ├── components/
│   │   ├── FaultyTerminal/   # WebGL terminal background shader
│   │   ├── LineSidebar/      # Interactive dynamic sidebar
│   │   ├── ModelViewer/      # Three.js 3D model canvas & controls
│   │   └── ProjectsGallery/  # Projects grid & detail view
│   ├── data/
│   │   └── projects.json     # Project descriptions, metadata & image links
│   ├── App.jsx               # Main application layout & tab state
│   ├── App.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🌐 Deployment

This project can be deployed easily on **Vercel** or **Netlify**:

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install --legacy-peer-deps`
