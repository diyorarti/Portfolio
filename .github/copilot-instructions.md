# GitHub Copilot Instructions for Portfolio

## Project Overview
This is a 3D personal portfolio website built with Next.js, React, Tailwind CSS, Three.js, and Framer Motion. It showcases a data scientist's projects, skills, education, and experience.

## Tech Stack
- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, @react-three/drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS with custom glassmorphism effects
- **Hosting**: Vercel or Render

## Project Structure

```
Portfolio/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── Navigation.tsx           # Navigation bar
│   ├── Hero.tsx                 # Hero section with 3D
│   ├── Globe3D.tsx              # 3D globe component
│   ├── About.tsx                # About me section
│   ├── Skills.tsx               # Skills section
│   ├── Projects.tsx             # Projects showcase
│   ├── Education.tsx            # Education section
│   └── Contact.tsx              # Contact section
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
└── README.md
```

## Key Features
1. **3D Hero Section**: Interactive rotating globe with Three.js
2. **Glassmorphism UI**: Modern frosted glass card design
3. **Responsive Design**: Mobile-first, works on all devices
4. **Smooth Animations**: Framer Motion throughout
5. **Dark Theme**: Easy on eyes with neon accents
6. **Complete Sections**: All necessary portfolio sections

## Installation & Setup

1. Install Node.js 18+
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start development server
4. Visit http://localhost:3000

## Common Tasks

### Add a New Project
Edit `components/Projects.tsx`:
```typescript
{
  id: 7,
  title: 'Project Name',
  description: 'Project description',
  tech: ['Tech1', 'Tech2'],
  problem: 'Problem solved',
  github: 'github-link',
  featured: false,
}
```

### Update Personal Info
- **Name & Bio**: `components/Hero.tsx`
- **About Section**: `components/About.tsx`
- **Education**: `components/Education.tsx`
- **Contact Info**: `components/Contact.tsx`

### Customize Colors
Edit `tailwind.config.js` in the `colors` section:
```javascript
colors: {
  primary: '#0F172A',
  secondary: '#1E293B',
  accent: '#3B82F6',
  neon: '#00D9FF',
}
```

## Build & Deployment

```bash
# Development
npm run dev

# Production build
npm run build
npm start

# Linting
npm run lint
```

## Deployment Options
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Render**
- **AWS Amplify**

## Important Notes
- All components use 'use client' for client-side rendering
- Three.js globe is suspended with Suspense for better UX
- Mobile menu is implemented in Navigation component
- Forms are placeholder - implement backend if needed
- Ensure responsive design testing on mobile devices

## Performance Tips
- 3D scene auto-rotates but doesn't zoom to save performance
- CSS animations are GPU-accelerated
- Images should be optimized with Next.js Image component if added
- Consider lazy loading for below-the-fold sections

## Future Enhancements
- Add backend for contact form
- Integrate CMS for project updates
- Add more 3D elements
- Implement dark/light theme toggle
- Add blog section
- Performance monitoring

## Contact & Support
- Email: diyorarti@gmail.com
- GitHub: https://github.com/diyorarti
- LinkedIn: https://www.linkedin.com/in/diyorarti/
