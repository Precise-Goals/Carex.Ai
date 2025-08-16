# 🏥 Carex AI - Medical Assistant

[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.10.1-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6B46C1?style=for-the-badge)](https://clerk.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **AI-powered medical assistant with real-time voice conversation capabilities**

Carex AI is a cutting-edge medical consultation platform that leverages artificial intelligence to provide real-time voice conversations with specialized medical AI agents. Built with modern web technologies, it offers an intuitive interface for users to discuss health concerns and receive AI-powered medical guidance.


## ✨ Features

### 🎤 **Real-time Voice Conversation**

- Advanced speech recognition using AssemblyAI
- Natural turn-taking conversation flow
- High-accuracy voice-to-text conversion
- Seamless audio processing

### 🤖 **AI Medical Specialists**

- Multiple AI doctor agents with different specializations
- Comprehensive medical knowledge base
- Context-aware responses
- Personalized consultation experience

### 🎨 **Interactive 3D Experience**

- Immersive 3D scenes using Spline
- Visual medical consultations
- Engaging user interface
- Modern design aesthetics

### 🔐 **Secure Authentication**

- Clerk-powered user authentication
- Secure session management
- User profile management
- Privacy-focused design

### 📊 **Session Management**

- Complete consultation history
- Session tracking and analytics
- Progress monitoring
- Data persistence

## 🛠️ Tech Stack

### **Frontend**

- **Next.js 15.3.4** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5.0** - Type safety
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives

### **Backend & APIs**

- **OpenAI/OpenRouter** - AI conversation engine
- **AssemblyAI** - Speech-to-text processing
- **Murf AI** - Text-to-speech synthesis
- **Socket.IO** - Real-time communication

### **Database & ORM**

- **Prisma 6.10.1** - Database toolkit
- **PostgreSQL** - Primary database
- **SQLite** - Development database

### **Authentication & Security**

- **Clerk** - User authentication
- **Next.js Middleware** - Route protection
- **JWT** - Session management

### **Development Tools**

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Bun** - Package manager & runtime
- **Turbopack** - Fast bundler

## 📁 Project Structure

```
carex-ai/
├── 📁 app/                          # Next.js App Router
│   ├── 📁 (auth)/                   # Authentication routes
│   │   ├── sign-in/                 # Sign in pages
│   │   └── sign-up/                 # Sign up pages
│   ├── 📁 (routes)/                 # Protected routes
│   │   └── dashboard/               # Main dashboard
│   │       ├── 📁 _components/      # Dashboard components
│   │       │   ├── AppHeader.tsx    # Dashboard header
│   │       │   ├── AddNewSession.tsx # Session creation
│   │       │   ├── DoctorsList.tsx  # AI doctors list
│   │       │   ├── HistoryList.tsx  # Session history
│   │       │   └── drawer.tsx       # Mobile navigation
│   │       └── 📁 medical-agent/    # Voice conversation
│   │           ├── 📁 [sessionId]/  # Dynamic session pages
│   │           ├── 📁 components/   # Voice components
│   │           │   ├── AudioProcessor.tsx
│   │           │   ├── ConversationManager.tsx
│   │           │   ├── TextToSpeech.tsx
│   │           │   └── VoiceRecordButton.tsx
│   │           └── 📁 services/     # API services
│   ├── 📁 api/                      # API routes
│   │   ├── chat/                    # Chat endpoints
│   │   ├── session-chat/            # Session management
│   │   ├── suggest-doctors/         # Doctor suggestions
│   │   ├── transcribe/              # Speech transcription
│   │   ├── tts/                     # Text-to-speech
│   │   └── users/                   # User management
│   ├── globals.css                  # Global styles
│   ├── layout.tsx                   # Root layout
│   ├── page.tsx                     # Home page
│   └── provider.tsx                 # Context providers
├── 📁 components/                   # Shared components
│   ├── 📁 ui/                       # UI components
│   │   ├── button.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── 📁 sections/                 # Page sections
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   ├── pricing.tsx
│   │   └── ...
│   └── 📁 magicui/                  # Advanced UI components
├── 📁 lib/                          # Utility libraries
│   ├── 📁 hooks/                    # Custom hooks
│   ├── 📁 generated/                # Generated files
│   ├── config.tsx                   # App configuration
│   └── utils.ts                     # Utility functions
├── 📁 prisma/                       # Database schema
│   ├── schema.prisma               # Database schema
│   └── 📁 migrations/              # Database migrations
├── 📁 public/                       # Static assets
│   ├── 📁 fonts/                   # Custom fonts
│   ├── carex.splinecode            # 3D scene file
│   └── ...                         # Images and icons
├── 📁 context/                      # React contexts
├── 📁 shared/                       # Shared utilities
├── middleware.ts                    # Next.js middleware
├── next.config.ts                   # Next.js configuration
├── tailwind.config.ts              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies
```

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18+ or Bun
- PostgreSQL database
- API keys for external services

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/carex-ai.git
   cd carex-ai
   ```

2. **Install dependencies**

   ```bash
   # Using Bun (recommended)
   bun install

   # Or using npm
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in your environment variables:

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/carex_ai"

   # Authentication (Clerk)
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # AI Services
   OPEN_ROUTER_API_KEY=your_openrouter_api_key
   NEXT_PUBLIC_ASSEMBLYAI_API_KEY=your_assemblyai_api_key
   MURF_API_KEY=your_murf_api_key

   # App Configuration
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Set up the database**

   ```bash
   # Generate Prisma client
   bun run prisma generate

   # Run migrations
   bun run prisma migrate dev
   ```

5. **Start the development server**

   ```bash
   bun run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Usage

### **For Users**

1. **Sign up/Login** - Create an account or sign in
2. **Choose a Doctor** - Select from available AI medical specialists
3. **Start Consultation** - Begin a voice conversation
4. **Speak Naturally** - Discuss your health concerns
5. **Review History** - Access past consultations

### **For Developers**

1. **API Integration** - Use the provided API endpoints
2. **Custom Components** - Extend the UI components
3. **Database Schema** - Modify Prisma schema as needed
4. **AI Models** - Integrate different AI providers

## 🌟 Key Features Explained

### **Voice Conversation Flow**

```
User Speech → AssemblyAI → Text → OpenAI → Response → Murf AI → Audio
```

### **Session Management**

- **Real-time tracking** of conversation progress
- **Automatic session creation** and management
- **Persistent storage** of consultation data
- **User-specific history** and analytics

### **AI Doctor Specialization**

- **Cardiology** - Heart and cardiovascular health
- **Neurology** - Brain and nervous system
- **Dermatology** - Skin conditions
- **Pediatrics** - Child health
- **General Medicine** - General health concerns

## 🔒 Security & Privacy

- **End-to-end encryption** for voice conversations
- **Secure API endpoints** with authentication
- **Data privacy compliance** (GDPR, HIPAA-ready)
- **Regular security audits** and updates
- **User data protection** and anonymization

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### **Development Workflow**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Team Falcons** - Development team
- **OpenAI** - AI conversation capabilities
- **AssemblyAI** - Speech recognition technology
- **Clerk** - Authentication services
- **Spline** - 3D design tools

## 📞 Support

- **Documentation**: [docs.carex-ai.com](https://docs.carex-ai.com)
- **Issues**: [GitHub Issues](https://github.com/your-username/carex-ai/issues)
- **Discord**: [Join our community](https://discord.gg/carex-ai)
- **Email**: support@carex-ai.com

## 🚀 Deployment

### **Vercel (Recommended)**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Docker**

```bash
# Build image
docker build -t carex-ai .

# Run container
docker run -p 3000:3000 carex-ai
```

---

**Made with ❤️ by Team Falcons**

[![GitHub stars](https://img.shields.io/github/stars/your-username/carex-ai?style=social)](https://github.com/your-username/carex-ai)
[![GitHub forks](https://img.shields.io/github/forks/your-username/carex-ai?style=social)](https://github.com/your-username/carex-ai)
[![GitHub issues](https://img.shields.io/github/issues/your-username/carex-ai)](https://github.com/your-username/carex-ai/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/your-username/carex-ai)](https://github.com/your-username/carex-ai/pulls)

this is my crm report for my project so remember the context for this chat
