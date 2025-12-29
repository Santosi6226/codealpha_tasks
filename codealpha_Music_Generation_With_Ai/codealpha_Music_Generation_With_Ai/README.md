# SynthiaAI - AI Music Generation Platform

![SynthiaAI](https://img.shields.io/badge/SynthiaAI-AI%20Music%20Generator-blueviolet)

## Overview

SynthiaAI is a modern AI-powered music generation web application that allows users to create unique music tracks from text prompts. Inspired by platforms like Spotify and Suno, it features a sleek dark theme with neon accents, animated waveforms, and glassmorphism design elements.

## Features

### 🎵 AI Music Generation
- **Text-to-Music**: Generate music by describing what you want to hear
- **Genre Selection**: Choose from multiple genres including Electronic, Lo-Fi, Ambient, Cinematic, Hip-Hop, Jazz, Rock, Classical, and Pop
- **Real-time Generation**: Watch the AI create your track with visual feedback

### 🎨 Modern UI/UX
- **Dark Theme**: Eye-friendly dark interface with neon cyan/purple accents
- **Animated Waveforms**: Dynamic audio visualizations
- **Glassmorphism**: Modern glass-like UI components with blur effects
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### 🎧 Playback Controls
- Play/pause individual tracks
- View track duration and generation details
- Access your recently generated tracks

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)
- **Notifications**: Sonner toast library

## Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── GeneratedTrack.tsx     # Individual track display component
│   ├── GenreChip.tsx          # Genre selection chips
│   ├── MusicGenerator.tsx     # Main music generation interface
│   ├── NavLink.tsx            # Navigation link component
│   └── Waveform.tsx           # Animated waveform visualization
├── hooks/
│   ├── use-mobile.tsx         # Mobile detection hook
│   └── use-toast.ts           # Toast notification hook
├── lib/
│   └── utils.ts               # Utility functions
├── pages/
│   ├── Index.tsx              # Main landing page
│   └── NotFound.tsx           # 404 page
├── App.tsx                    # App router configuration
├── index.css                  # Global styles & design tokens
└── main.tsx                   # Application entry point
```

## Design System

The project uses a custom design system defined in `index.css` and `tailwind.config.ts`:

### Color Palette
- **Primary**: Cyan (`hsl(180, 100%, 50%)`)
- **Secondary**: Purple (`hsl(270, 100%, 65%)`)
- **Background**: Deep dark (`hsl(240, 20%, 4%)`)
- **Accent colors**: Neon gradients and glows

### Custom Animations
- `wave`: Equalizer-style bar animations
- `glow-pulse`: Pulsing glow effects
- `shimmer`: Loading shimmer effects
- `float`: Subtle floating motion

### Button Variants
- `glow`: Glowing primary buttons
- `glass`: Glassmorphism transparent buttons

## Future Enhancements

- **Real AI Integration**: Connect to music generation APIs (ElevenLabs, Suno)
- **User Authentication**: Save and manage personal music libraries
- **Download Feature**: Export generated tracks as audio files
- **Social Sharing**: Share creations with the community
- **Advanced Controls**: Tempo, key, mood, and instrument selection
- **Waveform Editing**: Visual audio editing capabilities

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.


