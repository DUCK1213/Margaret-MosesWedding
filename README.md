# Wedding Invitation - Margaret & Moses

A beautiful and elegant wedding invitation website featuring modern 3D animations and responsive design.

## Project Overview

This wedding invitation website celebrates the union of Margaret and Moses, featuring an elegant design with golden and emerald color themes, interactive 3D elements, and smooth animations.

## Technologies Used

This project is built with:

- **React** - Modern JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **shadcn/ui** - Modern UI component library
- **Custom 3D Animations** - CSS-based 3D transforms and animations

## Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd invitation-craft-wedding
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── 3DElements.tsx  # Custom 3D animation components
│   ├── Hero.tsx        # Main landing section
│   ├── OurStory.tsx    # Love story section
│   ├── WeddingDetails.tsx # Wedding information
│   ├── RSVP.tsx        # RSVP form
│   └── Footer.tsx      # Footer with contact info
├── assets/             # Static assets (images, etc.)
├── lib/               # Utility functions
└── styles/           # Global styles and Tailwind config
```

## Features

- ✨ **3D Animations** - Beautiful floating particles, rotating elements, and hover effects
- 🎨 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 💫 **Interactive Elements** - Smooth hover animations and transitions
- 🌟 **Elegant Typography** - Custom fonts and styling for wedding aesthetic
- 📱 **Modern UI** - Clean, professional design with attention to detail

## Customization

The website uses CSS custom properties for easy theming. Main colors can be modified in `src/index.css`:

```css
:root {
  --gold: 45 90% 60%;
  --emerald: 160 60% 25%;
  --cream: 45 100% 95%;
}
```

## Deployment

This project can be deployed to any static hosting service:

- **Vercel** - Recommended for React apps
- **Netlify** - Great for static sites
- **GitHub Pages** - Free hosting for public repositories

Simply run `npm run build` and upload the `dist` folder to your preferred hosting platform.

## Support

For questions or issues, please contact the development team or refer to the component documentation within the codebase.
