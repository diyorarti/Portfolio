# Diyorbek's 3D Data Scientist Portfolio

A modern, fully responsive 3D personal portfolio website built with cutting-edge web technologies. Showcasing data science projects, skills, education, and experience with smooth animations and interactive 3D elements.

## 🌟 Features

- **3D Hero Section**: Rotating 3D globe with interactive controls
- **Smooth Animations**: Framer Motion animations throughout
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark Modern Theme**: Glassmorphism UI with neon accents
- **Complete Sections**:
  - Hero with 3D visualization
  - About Me with personal story
  - Skills with proficiency levels
  - Featured Projects showcase
  - Education & Learning journey
  - Contact form

## 🛠️ Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Advanced animations
- **Three.js**: 3D graphics library
- **React Three Fiber**: React renderer for Three.js
- **@react-three/drei**: Useful helper components

### Development
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│
├── components/
│   ├── Navigation.tsx      # Navigation bar with mobile menu
│   ├── Hero.tsx            # Hero section with 3D globe
│   ├── Globe3D.tsx         # 3D globe component
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills with categories & levels
│   ├── Projects.tsx        # Projects showcase
│   ├── Education.tsx       # Education & learning path
│   └── Contact.tsx         # Contact form section
│
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Update Your Information

Edit these files to add your personal information:

**Hero Section** - [app/components/Hero.tsx](components/Hero.tsx)
- Update name, title, bio
- Customize buttons

**About Section** - [app/components/About.tsx](components/About.tsx)
- Update personal story
- Change achievements

**Skills Section** - [app/components/Skills.tsx](components/Skills.tsx)
- Modify skill categories
- Update proficiency levels

**Projects Section** - [app/components/Projects.tsx](components/Projects.tsx)
- Add/remove projects
- Update tech stacks
- Add GitHub links

**Education** - [app/components/Education.tsx](components/Education.tsx)
- Update university name
- Change degree/field
- Modify certifications

**Contact** - [app/components/Contact.tsx](components/Contact.tsx)
- Update email and social links
- Customize contact methods

### Styling

Colors and theme can be customized in [tailwind.config.js](tailwind.config.js):

```javascript
colors: {
  primary: '#0F172A',      // Main background
  secondary: '#1E293B',    // Secondary bg
  accent: '#3B82F6',       // Primary accent
  neon: '#00D9FF',         // Neon accent
}
```

## 🎨 Design Features

- **Dark Theme**: Easy on the eyes with modern aesthetics
- **Glassmorphism**: Frosted glass effect on cards
- **Neon Accents**: Cyan/blue highlighting
- **Responsive**: Works seamlessly on all screen sizes
- **Smooth Scrolling**: Integrated scroll behavior
- **Dynamic Animations**: Using Framer Motion for interactive elements

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Vercel automatically detects Next.js
4. Your site is live!

Other hosting options:
- Netlify
- Render
- AWS Amplify

## 🔧 Environment Variables

Create a `.env.local` file if needed for API keys or configuration:

```
# Example - currently not needed
NEXT_PUBLIC_API_URL=your_api_url
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎬 Performance

- Optimized images with Next.js Image component
- Code splitting with Next.js
- CSS-in-JS with Tailwind
- Fast 3D rendering with Three.js WebGL

## 📄 License

This project is personal. Feel free to use it as a template.

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize it for your own use!

## 📞 Questions?

- Email: diyorarti@gmail.com
- LinkedIn: [Diyorbek's Profile](https://www.linkedin.com/in/diyorarti/)
- GitHub: [GitHub Profile](https://github.com/diyorarti/)

---

**Built with ❤️ using Next.js, React Three Fiber, and Framer Motion**

Last Updated: April 2026
