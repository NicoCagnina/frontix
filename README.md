# Frontix

A modern business platform built with Next.js 15, featuring a comprehensive landing page with contact forms, FAQ sections, and modular architecture.

## Tech Stack

- **Framework**: Next.js 15.4.7 (App Router)
- **Runtime**: React 19.1.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Heroicons
- **Email Service**: Resend
- **Fonts**: Plus Jakarta Sans (custom font family)

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd frontix

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/                   # Next.js App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities and configurations
│   │   └── email.ts       # Email service configuration
│   ├── theme/             # Design system
│   │   ├── colors.ts      # Color palette
│   │   ├── fonts.ts       # Font configurations
│   │   └── spacing.ts     # Spacing system
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── accordion.tsx # FAQ accordion component
│   │   └── carousel.tsx  # Image carousel component
│   ├── AboutFrontix.tsx  # About section
│   ├── Benefits.tsx      # Benefits section
│   ├── ContactForm.tsx   # Contact form
│   ├── FAQ.tsx           # FAQ section
│   ├── Footer.tsx        # Site footer
│   ├── Header.tsx        # Site header
│   ├── Hero.tsx          # Hero section
│   ├── Modules.tsx       # Modules showcase
│   ├── Platform.tsx      # Platform features
│   └── Section.tsx       # Section wrapper
└── middleware.ts         # Next.js middleware
```

## Key Components

### Core Sections
- **Hero**: Landing page hero section with CTA
- **Benefits**: Feature benefits showcase
- **AboutFrontix**: Company/platform information
- **Platform**: Platform capabilities overview
- **Modules**: Modular system presentation
- **FAQ**: Interactive accordion FAQ section
- **ContactForm**: Contact form with email integration

### UI Components
- **Accordion**: Collapsible FAQ items
- **Carousel**: Image/content carousel
- **Section**: Reusable section wrapper with consistent spacing

## API Endpoints

### Contact Form
- **POST** `/api/contact` - Handles contact form submissions
- Uses Resend service for email delivery
- Validates form data and sends confirmation emails

## Configuration

### Environment Variables
Create a `.env.local` file with:

```env
RESEND_API_KEY=your_resend_api_key
```

### Tailwind Configuration
- Custom color palette defined in `src/app/theme/colors.ts`
- Custom spacing system in `src/app/theme/spacing.ts`
- Plus Jakarta Sans font integration in `src/app/theme/fonts.ts`

## Development

### Code Style
- ESLint configuration for code quality
- TypeScript for type safety
- Tailwind CSS for styling consistency

### Custom Hooks
- `useForm`: Form state management and validation

## Deployment

The application is optimized for Vercel deployment:

1. Connect your repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

For other platforms, run `npm run build` and serve the `out` directory.

## Performance Features

- **Font Optimization**: Custom Plus Jakarta Sans fonts with Next.js font optimization
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting with App Router
- **Static Generation**: Optimized for static site generation where possible
