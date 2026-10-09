# 🎵 MoodLink — Multi-Sensory Playlist Vibe & Energy Analyzer

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![Google Gemini](https://img.shields.io/badge/AI-Gemini%20Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**MoodLink** is a glassmorphic web application that decodes the emotional DNA of your Spotify and YouTube playlists. Powered by the **Google Gemini API**, MoodLink transforms raw song lists into a multi-sensory **"Vibe Profile"**—complete with poetic aesthetic narratives, dynamic color palettes, energy scores, and visual mood boards.

---

## ✨ Features

* 🎨 **Dynamic Glassmorphic Vibe Profiling:** Translates track titles, artists, and tempos into rich mood interpretations and evocative color palettes.
* ⚡ **Energy & Intensity Scoring:** Quantitative audio metric scoring (Melancholy vs. Euphoria, Chill vs. Intense).
* 📜 **Poetic Aesthetic Synthesizer:** Generates evocative micro-poetry and cinematic mood tags matching your current playlist rotation.
* 🎧 **Multi-Platform Support:** Ingests Spotify playlist links and custom track lists.

---

## 🛠️ Architecture & Tech Stack

```
[ User inputs Playlist URL / Tracklist ]
                   |
                   v
+-------------------------------------------------------------+
|                     MoodLink React Client                   |
|          (React 18, TypeScript, Tailwind Glassmorphism)     |
+-------------------------------------------------------------+
                   |
                   v
+-------------------------------------------------------------+
|                     Gemini Service Layer                    |
|             `services/geminiService.ts`                     |
|        Prompt Engineering for Valence, Color & Energy       |
+-------------------------------------------------------------+
                   |
                   v
+-------------------------------------------------------------+
|             Interactive Vibe Profile Dashboard              |
|        Dynamic Color Hexes, Energy Arc & Mood Card          |
+-------------------------------------------------------------+
```

* **Frontend:** React 18, TypeScript, Tailwind CSS, Lucide React.
* **AI Engine:** Google Gemini API (`@google/genai`).
* **Tooling:** Vite, ESLint.

---

## 📁 Repository Structure

```text
MoodLink/
├── App.tsx             # Main application container & vibe display
├── index.tsx           # React DOM root render
├── index.html          # HTML5 entry with font & glassmorphic styles
├── components/         # Playlist input, VibeCard, ColorPalette display
├── services/           # Gemini API integration & prompt templates
├── metadata.json       # Project manifest
├── package.json        # Dependencies & scripts
├── LICENSE             # MIT License
└── README.md
```

---

## 🚀 Quick Start

### 1. Installation
```bash
git clone https://github.com/Tarunjit45/MoodLink.git
cd MoodLink

npm install
```

### 2. Configure Environment
Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).
