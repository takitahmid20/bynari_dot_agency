# Bynari.agency

A modern, interactive landing page for Bynari.agency - a digital product design and development agency.

## 🚀 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/takitahmid20/bynari_dot_agency)

## ✨ Features

- **Interactive Hero Section** with draggable, animated title boxes
- **Responsive Design** optimized for all devices
- **Modern UI** with Tailwind CSS and shadcn/ui components
- **Smooth Animations** using custom keyframes
- **Sections**: About, Services, Portfolio, Team, Testimonials, Contact
- **Supabase Integration** for backend functionality

## 🛠️ Tech Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Backend**: Supabase
- **Deployment**: Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/takitahmid20/bynari_dot_agency.git

# Navigate to project directory
cd bynari_dot_agency

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Add your environment variables to .env file
# Required:
# - VITE_SUPABASE_URL
# - VITE_SUPABASE_PUBLISHABLE_KEY
# - VITE_SUPABASE_PROJECT_ID
# - VITE_GOOGLE_MAPS_API_KEY (optional)

# Start development server
npm run dev
```

## 🌐 Deployment on Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables in Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_PROJECT_ID`
   - `VITE_GOOGLE_MAPS_API_KEY` (optional)
6. Click "Deploy"

The `vercel.json` configuration is already included for proper routing.

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🎨 Customization

- Update content in `/src/components/landing/` directory
- Modify colors in `/src/index.css`
- Configure Tailwind in `tailwind.config.ts`

## 📄 License

MIT

---

Built with ❤️ by Bynari.agency
