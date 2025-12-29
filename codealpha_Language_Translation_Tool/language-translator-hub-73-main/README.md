# 🌐 Language Translator

A modern, AI-powered language translation application built with React and Lovable Cloud. Translate text instantly between 25+ languages including major Indian languages.

![Language Translator](https://img.shields.io/badge/React-18.3-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-blue) ![Lovable Cloud](https://img.shields.io/badge/Lovable%20Cloud-Enabled-green)

## ✨ Features

- **AI-Powered Translation**: Uses Google Gemini 2.5 Flash for accurate, context-aware translations
- **25+ Languages Supported**: Including English, Spanish, French, German, Hindi, Bengali, Tamil, Telugu, and more
- **Auto-Detection**: Automatically detects the source language
- **Swap Languages**: Quickly swap source and target languages with one click
- **Copy to Clipboard**: Easy one-click copy of translated text
- **Text-to-Speech**: Listen to translations with built-in speech synthesis
- **Character Counter**: Track input length with real-time character count
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Modern UI**: Clean, glass-morphism design with smooth animations

## 🗣️ Supported Languages

### International Languages
| Language | Code | Language | Code |
|----------|------|----------|------|
| English | en | Spanish | es |
| French | fr | German | de |
| Italian | it | Portuguese | pt |
| Russian | ru | Japanese | ja |
| Korean | ko | Chinese | zh |
| Arabic | ar | Dutch | nl |
| Polish | pl | Turkish | tr |
| Vietnamese | vi | Thai | th |
| Indonesian | id | Swedish | sv |

### Indian Languages
| Language | Code | Language | Code |
|----------|------|----------|------|
| Hindi | hi | Bengali | bn |
| Telugu | te | Marathi | mr |
| Tamil | ta | Gujarati | gu |
| Kannada | kn | Malayalam | ml |
| Punjabi | pa | Odia | or |
| Assamese | as | Urdu | ur |
| Sanskrit | sa | | |

## 🏗️ Project Structure

```
├── src/
│   ├── components/
│   │   ├── ui/                    # Shadcn UI components
│   │   ├── Translator.tsx         # Main translator component
│   │   ├── TranslationPanel.tsx   # Text input/output panels
│   │   ├── LanguageSelector.tsx   # Language dropdown selector
│   │   └── NavLink.tsx            # Navigation component
│   ├── hooks/
│   │   ├── use-mobile.tsx         # Mobile detection hook
│   │   └── use-toast.ts           # Toast notification hook
│   ├── integrations/
│   │   └── supabase/
│   │       ├── client.ts          # Supabase client configuration
│   │       └── types.ts           # TypeScript types
│   ├── lib/
│   │   └── utils.ts               # Utility functions
│   ├── pages/
│   │   ├── Index.tsx              # Home page
│   │   └── NotFound.tsx           # 404 page
│   ├── App.tsx                    # Main app component
│   ├── App.css                    # Global styles
│   ├── index.css                  # Tailwind & design tokens
│   └── main.tsx                   # App entry point
├── supabase/
│   ├── functions/
│   │   └── translate/
│   │       └── index.ts           # Translation edge function
│   └── config.toml                # Supabase configuration
├── public/
│   └── robots.txt                 # SEO robots file
├── index.html                     # HTML entry point
├── tailwind.config.ts             # Tailwind configuration
├── vite.config.ts                 # Vite configuration
└── package.json                   # Dependencies
```

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library for building user interfaces |
| **TypeScript** | Type-safe JavaScript |
| **Vite** | Fast build tool and dev server |
| **Tailwind CSS** | Utility-first CSS framework |
| **Shadcn/UI** | Beautiful, accessible UI components |
| **Lovable Cloud** | Backend infrastructure (database, auth, functions) |
| **Lovable AI** | AI gateway for translation (Google Gemini) |
| **Sonner** | Toast notifications |
| **Lucide React** | Icon library |

## 🔧 How It Works

### Translation Flow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   User Input    │────▶│  Edge Function  │────▶│   Lovable AI    │
│  (Source Text)  │     │   (translate)   │     │ (Gemini 2.5)    │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                │                        │
                                │                        │
                                ▼                        ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Display Result │◀────│  Parse Response │◀────│  AI Translation │
│  (Target Text)  │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### Key Components

#### 1. `Translator.tsx`
The main component that orchestrates the translation experience:
- Manages source/target text state
- Handles language selection
- Calls the translation API
- Manages loading states

#### 2. `TranslationPanel.tsx`
Reusable text panel component with:
- Text area for input/output
- Copy to clipboard functionality
- Text-to-speech capability
- Character count display
- Clear text button

#### 3. `LanguageSelector.tsx`
Dropdown component for language selection:
- Searchable language list
- Auto-detect option for source
- Excludes auto-detect for target

#### 4. Edge Function (`translate/index.ts`)
Serverless function that:
- Receives translation requests
- Calls Lovable AI (Google Gemini 2.5 Flash)
- Returns translated text
- Handles errors and rate limits


## 📱 Usage

1. **Enter Text**: Type or paste text in the left panel
2. **Select Languages**: Choose source (or auto-detect) and target languages
3. **Translate**: Click the "Translate" button
4. **View Results**: See the translation in the right panel
5. **Copy/Listen**: Use the copy or speaker buttons to copy or hear the translation

## 🎨 Design System

The app uses a custom design system with:

- **Glass-morphism**: Frosted glass effect on panels
- **Smooth Animations**: Fade-in animations on load
- **Color Tokens**: Semantic color variables for theming
- **Responsive Grid**: Adapts to all screen sizes

### CSS Variables
```css
--background: Primary background color
--foreground: Primary text color
--primary: Brand/accent color
--muted: Subdued elements
--card: Card backgrounds
```

## 🔒 Security

- API keys are stored securely in Cloud secrets
- Edge functions handle all AI API calls server-side
- No sensitive data exposed to the client
- CORS headers configured for security

## 📈 Performance

- **Fast Cold Start**: Edge functions start in <100ms
- **Streaming Ready**: Architecture supports streaming responses
- **Optimized Bundle**: Vite tree-shaking removes unused code
- **Lazy Loading**: Components load on demand

