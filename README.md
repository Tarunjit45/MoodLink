# 🎶 MoodLink: The Aesthetic Playlist Decoder

> **"What does your music actually look like?"**

MoodLink is a premium, glassmorphic web application that utilizes the **Google Gemini API** to analyze Spotify and YouTube playlists and generate a multi-sensory "Vibe Profile." It decodes the energy of your curated sounds into poetic descriptions, visual palettes, and intensity scores.

---

## ✨ Features

- 🧠 **Multi-Platform AI Analysis**: Leverages `gemini-3-flash-preview` to interpret both **Spotify** and **YouTube** playlist metadata.
- 🌫️ **Glassmorphic UI**: A high-end design aesthetic using backdrop blurs, translucent layers, and radial gradients.
- 🎨 **Dynamic Palette Generation**: Produces a set of 5 hex codes that visually represent the playlist's "soul."
- 📊 **Energy vs. Chill Meter**: A custom-built slider that visualizes the intensity balance of your music.
- 📜 **Poetic Summaries**: AI-generated, high-impact descriptions of the playlist's emotional landscape.
- 🐦 **Social Integration**: One-click sharing to X (formerly Twitter).

---

## 🛠️ Technical Stack

- **Framework**: [React 19](https://react.dev/) (via ESM modules)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI Engine**: [@google/genai](https://www.npmjs.com/package/@google/genai)
- **Design Philosophy**: Glassmorphism (Backdrop-filter, RGBA borders, Inter & Playfair Display typography)

---

## 📂 Project Structure

```text
.
├── App.tsx                  # Root component, state management & layout
├── components/
│   └── GlassCard.tsx        # Reusable glassmorphic container
├── services/
│   └── geminiService.ts     # Google Gemini API integration & prompt logic
├── types.ts                 # TypeScript interfaces for Vibe results
├── index.tsx                # Application entry point
├── index.html               # Base template with fonts and Tailwind
└── metadata.json            # App metadata
```

---

## 🛠️ Usage

1. Paste a public Spotify or YouTube Playlist URL.
2. Click **Vibe Check**.
3. View your generated profile and share it with the world.

---

*Developed with the Google Gemini SDK for next-generation web experiences.*
