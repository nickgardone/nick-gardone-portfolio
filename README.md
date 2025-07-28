# Nick Gardone - Portfolio Website

A responsive, dark-themed portfolio website for Nick Gardone, a Senior Product Manager. Built with modern web technologies and designed to showcase professional experience, projects, and skills to recruiters and hiring managers.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark Theme**: Sleek, professional dark theme with gradient accents
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Modern Stack**: Built with Next.js 14, React 18, and Tailwind CSS
- **Performance Optimized**: Fast loading times and smooth scrolling
- **SEO Friendly**: Proper meta tags and structured data
- **Accessible**: WCAG compliant design and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
Portfolio_Website/
├── public/
│   └── profile.jpg          # Profile headshot image
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.jsx       # Root layout
│   │   ├── page.jsx         # Home page
│   │   ├── portfolio/       # Portfolio page
│   │   ├── about/           # About page
│   │   ├── resume/          # Resume page
│   │   └── contact/         # Contact page
│   ├── components/          # Reusable components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Site footer
│   │   ├── ProjectTeaser.jsx # Project preview cards
│   │   └── CaseStudyPage.jsx # Detailed project pages
│   ├── pages/               # Page components
│   │   ├── index.jsx        # Home page component
│   │   ├── portfolio.jsx    # Portfolio page component
│   │   ├── about.jsx        # About page component
│   │   ├── resume.jsx       # Resume page component
│   │   └── contact.jsx      # Contact page component
│   └── styles/
│       └── globals.css      # Global styles and Tailwind imports
├── tailwind.config.js       # Tailwind CSS configuration
├── next.config.js           # Next.js configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Accent**: Purple gradient (#d946ef to #c026d3)
- **Dark Theme**: Various shades of dark grays (#020617 to #64748b)
- **Text**: White and gray variations for hierarchy

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono (for code snippets)
- **Weights**: 300, 400, 500, 600, 700, 800

### Components
- **Buttons**: Primary and secondary variants with hover effects
- **Cards**: Consistent card design with hover animations
- **Navigation**: Fixed header with mobile menu
- **Forms**: Styled form inputs with focus states

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio_Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Personal Information
Update the following files with your information:
- `src/pages/index.jsx` - Hero section and featured projects
- `src/pages/about.jsx` - Experience, skills, and education
- `src/pages/resume.jsx` - Detailed resume information
- `src/pages/contact.jsx` - Contact details and availability

### Profile Image
Replace `public/profile.jpg` with your professional headshot.

### Projects
Update the projects array in:
- `src/pages/index.jsx` (featured projects)
- `src/pages/portfolio.jsx` (all projects)

### Contact Form Configuration
To enable the contact form functionality, you need to set up environment variables:

1. For development, copy `.env.local.example` to `.env.local` and the form will simulate sending emails
2. For production deployment, follow the detailed [Production Setup Guide](PRODUCTION_SETUP.md)

For development, you can use reCAPTCHA's test keys:
- Site Key: `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`
- Secret Key: `6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe`

If you encounter issues with the contact form in production, refer to the [Contact Form Troubleshooting Guide](CONTACT_FORM_TROUBLESHOOTING.md) for detailed debugging steps.

You can also use the provided [test script](test-contact-form.js) to verify the contact form functionality:
```bash
# Test against your deployed site
SITE_URL=https://your-domain.vercel.app node test-contact-form.js

# Or edit the script to set your site URL directly
node test-contact-form.js
```

### Styling
Modify `tailwind.config.js` to customize:
- Color palette
- Typography
- Spacing
- Animations

## 🎯 Key Features

### Home Page
- Hero section with animated profile image
- Statistics showcase
- Featured projects grid
- About preview section

### Portfolio Page
- Project filtering by category
- Search functionality
- Responsive project grid
- Project teaser cards with hover effects

### About Page
- Professional experience timeline
- Skills and expertise breakdown
- Education and certifications
- Personal philosophy section

### Resume Page
- Downloadable PDF resume
- Detailed work experience
- Skills categorization
- Contact information

### Contact Page
- Interactive contact form
- Contact information cards
- Social media links
- FAQ section

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style
- ESLint configuration included
- Prettier formatting recommended
- Component-based architecture
- Responsive design patterns

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with zero configuration

### Other Platforms
The site can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

This is a personal portfolio website, but suggestions and improvements are welcome!

## 📞 Contact

For questions about this portfolio template or to discuss collaboration opportunities, reach out to Nick Gardone at nick@nickgardone.com.

---

Built with ❤️ using Next.js, React, and Tailwind CSS
