
# TerraBuild Experts - Real Estate Website

![TerraBuild Experts Logo](public/logo.png)

A modern, responsive React website for TerraBuild Experts - a premier real estate company specializing in property rental, sales, investment, and construction services in Greater Noida.

## 🌟 Features

### ✨ **Modern Design**
- Clean, professional black and white theme
- Responsive design for all devices (mobile, tablet, desktop)
- Smooth animations and transitions
- Modern typography with Montserrat font

### 🏗️ **Core Sections**
- **Hero Section** - Eye-catching landing with call-to-action buttons
- **Services** - Four main service categories with interactive cards
- **Features** - Company highlights with icons and statistics
- **About Us** - Company information and achievements
- **Contact** - Contact form with Google Sheets integration
- **Popup Form** - Timed popup for lead generation

### 📱 **Interactive Elements**
- Smooth scroll navigation
- Animated service cards with hover effects
- Mobile-responsive hamburger menu
- Contact form with validation
- Success/error message handling

### 🔧 **Technical Features**
- React 18 with functional components and hooks
- Tailwind CSS for styling
- Lucide React icons
- Google Sheets integration for form submissions
- Session-based popup management
- Error handling and fallbacks

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ installed
- npm or yarn package manager
- Basic knowledge of React and JavaScript

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/terrabuild-experts.git
   cd terrabuild-experts
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Tailwind CSS**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Start development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
terrabuild-experts/
├── public/
│   ├── index.html
│   ├── logo.png                 # Company logo
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.js             # Navigation header with logo
│   │   ├── Hero.js               # Landing section
│   │   ├── Features.js           # Company features & stats
│   │   ├── Apartments.js         # Services section (renamed)
│   │   ├── About.js              # Company information
│   │   ├── Contact.js            # Contact form
│   │   ├── Footer.js             # Footer with logo & links
│   │   └── Popup.js              # Lead generation popup
│   ├── data/
│   │   └── apartmentData.js      # Service data (legacy name)
│   ├── App.js                    # Main application component
│   ├── index.js                  # Application entry point
│   └── index.css                 # Global styles & Tailwind imports
├── package.json                  # Dependencies and scripts
├── tailwind.config.js            # Tailwind configuration
├── postcss.config.js             # PostCSS configuration
└── README.md                     # This file
```

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--black: #000000
--white: #ffffff
--gray-50: #f9fafb
--gray-100: #f3f4f6
--gray-600: #4b5563
--green-600: #059669  /* Accent color */
```

### Typography
- **Font Family**: Montserrat (Google Fonts)
- **Headings**: Bold weights (600-800)
- **Body Text**: Regular weight (400)
- **Buttons**: Semi-bold weight (600)

### Components
- **Buttons**: Rounded-full with hover animations
- **Cards**: Rounded-2xl with shadow and hover effects
- **Forms**: Border-2 with focus states
- **Icons**: Lucide React icon library

## ⚙️ Configuration

### Tailwind CSS Setup

**tailwind.config.js**
```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
    },
  },
  plugins: [],
}
```

### Google Sheets Integration

1. **Create Google Apps Script**
   - Go to [script.google.com](https://script.google.com)
   - Create new project and paste the provided Apps Script code
   - Deploy as web app with "Anyone" access

2. **Update Popup.js**
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_APPS_SCRIPT_URL_HERE';
   ```

3. **Test the integration**
   - Submit form and check Google Sheets for data
   - Monitor browser console for debugging info

## 🔧 Customization

### Adding Your Logo
1. **Save logo as `public/logo.png`**
2. **Update alt text in components:**
   ```javascript
   alt="Your Company Name"
   ```

### Updating Company Information
1. **Edit contact details in:**
   - `src/components/Header.js`
   - `src/components/Footer.js`
   - `src/components/Contact.js`
   - `src/components/Popup.js`

2. **Update company name throughout:**
   ```bash
   # Find and replace "TerraBuild Experts" with your company name
   ```

### Modifying Services
1. **Edit `src/components/Apartments.js`**
2. **Update the services array:**
   ```javascript
   const services = [
     {
       title: "Your Service",
       description: "Service description",
       img: "service-image-url",
       highlight: false,
     }
   ];
   ```

### Changing Colors
1. **Update Tailwind config**
2. **Modify CSS custom properties in `src/index.css`**
3. **Update component class names**

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
sm: '640px'   /* Small devices (phones) */
md: '768px'   /* Medium devices (tablets) */
lg: '1024px'  /* Large devices (laptops) */
xl: '1280px'  /* Extra large devices (desktops) */
```

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject (not recommended)
npm run eject
```

### Code Quality

**ESLint Configuration**
```json
{
  "extends": ["react-app", "react-app/jest"],
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "warn"
  }
}
```

**Prettier Configuration**
```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true
}
```

## 🚀 Deployment

### Netlify (Recommended)
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop `build` folder to Netlify
   - Or connect GitHub repository for auto-deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

npm run deploy
```

### Custom Server
1. **Upload `build` folder contents to web server**
2. **Configure server for SPA routing**
3. **Set up SSL certificate**

## 🔍 SEO Optimization

### Meta Tags
Update `public/index.html`:
```html
<meta name="description" content="TerraBuild Experts - Premier real estate services in Greater Noida">
<meta name="keywords" content="real estate, property, Greater Noida, construction, investment">
<meta property="og:title" content="TerraBuild Experts">
<meta property="og:description" content="Your trusted real estate partner">
```

### Structured Data
Add JSON-LD structured data for better search visibility:
```javascript
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "TerraBuild Experts",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ecotech-7",
    "addressLocality": "Greater Noida",
    "addressRegion": "Uttar Pradesh",
    "addressCountry": "India"
  }
}
```

## 🐛 Troubleshooting

### Common Issues

**1. Tailwind CSS not working**
```bash
# Check if PostCSS config exists
cat postcss.config.js

# Restart development server
npm start
```

**2. Images not loading**
```javascript
// Use public folder for static assets
src="/logo.png"  // ✅ Correct
src="./assets/logo.png"  // ❌ Wrong
```

**3. Google Sheets integration failing**
- Check Apps Script deployment settings
- Verify script permissions
- Check browser console for CORS errors

**4. Mobile responsive issues**
```css
/* Ensure viewport meta tag exists */
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### Debug Mode
Enable console logging:
```javascript
// Add to component for debugging
console.log('Component mounted');
console.log('Props:', props);
```

## 📞 Support

### Getting Help
- **Documentation**: Check React and Tailwind CSS docs
- **Community**: Stack Overflow, Reddit r/reactjs
- **Issues**: Create GitHub issues for bugs


## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For utility-first CSS framework
- **Lucide React** - For beautiful icons
- **Google Fonts** - For Montserrat typography
- **Unsplash/Picsum** - For placeholder images

## 📈 Roadmap

### Phase 1 (Current)
- [x] Basic website structure
- [x] Responsive design
- [x] Contact form integration
- [x] Lead generation popup

### Phase 2 (Upcoming)
- [ ] Property listing pages
- [ ] Advanced search functionality
- [ ] User authentication
- [ ] Admin dashboard

### Phase 3 (Future)
- [ ] Virtual property tours
- [ ] Payment integration
- [ ] Mobile app development
- [ ] AI-powered recommendations

---



*Last updated: September 2025*
