# TechWave Home Solutions

A modern, responsive single-page application for a veteran-owned home installation service business with 40+ years of combined experience.

## 🚀 Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** CSS3 with CSS Custom Properties (CSS Variables)
- **Code Quality:** ESLint + TypeScript ESLint
- **Development:** Hot Module Replacement (HMR)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header with logo and menu
│   ├── Hero.tsx        # Hero section with veteran-focused messaging
│   ├── About.tsx       # Veteran-owned business story and values
│   ├── Services.tsx    # Actual services offered (TV mounts, security, etc.)
│   ├── Gallery.tsx     # Portfolio of completed work with image modal
│   ├── Reviews.tsx     # Customer testimonials and ratings
│   ├── Contact.tsx     # Contact form with email functionality
│   └── Footer.tsx      # Footer with links and contact info
├── styles/             # CSS stylesheets
│   ├── index.css       # Global styles and CSS variables
│   ├── App.css         # Main app component styles
│   └── [Component].css # Individual component styles
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared interfaces and types
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## 🎨 Features

- **Responsive Design:** Mobile-first approach with tablet and desktop breakpoints
- **Modern UI:** Clean, professional design with smooth animations
- **Accessibility:** WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance:** Optimized with lazy loading and efficient CSS
- **Type Safety:** Full TypeScript integration for better development experience
- **SEO Ready:** Semantic HTML structure with proper meta tags

### Components Overview

1. **Header** - Fixed navigation with mobile hamburger menu
2. **Hero** - Veteran-focused landing section highlighting 40+ years experience
3. **About** - Veteran-owned business story, military values, and statistics
4. **Services** - Real services: TV mounting, sound systems, mesh networks, Lorex security, lighting, remodeling
5. **Gallery** - Portfolio of completed work with image filtering and modal view
6. **Reviews** - Customer testimonials with star ratings and service categories
7. **Contact** - Contact form configured to send emails to rojelio@techwavehome.work and reggie@techwavehome.work
8. **Footer** - Updated links, contact info, and social media

## 🏠 Business Services

- **TV Mount Installation** - Professional mounting for all TV sizes with cable management
- **Sound System Installation** - Surround sound, soundbars, and multi-room audio
- **Wireless Mesh Networks** - Whole-home WiFi coverage and optimization
- **Security Camera Systems** - Lorex security cameras with mobile monitoring
- **Home Lighting & Fixtures** - Smart lighting systems and electrical work
- **Home Remodel Services** - Kitchen, bathroom, and custom installations

## 🇺🇸 Veteran-Owned Business

TechWave Home Solutions is proudly veteran-owned with:
- 40+ years of combined experience
- Military-trained precision and attention to detail
- Commitment to service, integrity, and excellence
- Professional installations backed by decades of hands-on experience

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd TechWaveHomeSolutions
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

## 🎯 Design Philosophy

### C# Developer Friendly

This project is structured to be familiar to C# developers:

- **Strong Typing:** TypeScript provides compile-time type checking
- **Component Architecture:** Similar to C# classes with props as parameters
- **Separation of Concerns:** Clear separation between logic, styling, and types
- **Interface-First Design:** TypeScript interfaces define component contracts
- **Organized Structure:** Logical folder structure similar to C# namespaces

### Modern CSS Architecture

- **CSS Custom Properties:** Consistent theming and easy maintenance
- **Component-Scoped Styles:** Each component has its own CSS file
- **Responsive Design:** Mobile-first with progressive enhancement
- **Accessibility First:** WCAG 2.1 AA compliant design patterns

## 🎨 Color Palette

- **Primary:** `#2563eb` (Blue)
- **Secondary:** `#1e293b` (Dark Blue)
- **Accent:** `#06b6d4` (Cyan)
- **Success:** `#10b981` (Green)
- **Background:** `#ffffff` / `#f8fafc`

## 📱 Responsive Breakpoints

- **Mobile:** `< 768px`
- **Tablet:** `768px - 1023px`
- **Desktop:** `≥ 1024px`

## 🔧 Customization

### Theming

All colors and spacing are defined as CSS custom properties in `src/styles/index.css`. Update these values to customize the appearance:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e293b;
  --accent-color: #06b6d4;
  /* ... */
}
```

### Content

Update component content by modifying the respective TypeScript files in the `src/components/` directory.

## 🚀 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to your hosting service

### Recommended Hosting

- **Vercel** - Zero-config deployment with GitHub integration
- **Netlify** - Easy drag-and-drop deployment
- **GitHub Pages** - Free hosting for public repositories

## 📄 License

This project is created for demonstration purposes. Feel free to use and modify as needed.

---

**Built with ❤️ for modern web development**
