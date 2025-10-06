# Campus Website Blueprint

## Overview
A comprehensive higher education institution website for a **newly established university**, built with Next.js 15 (App Router), TypeScript, and TailwindCSS 4. The website showcases academic programs (Undergraduate, Postgraduate, Masters), campus facilities, inaugural events, student life, and provides admissions information with a modern, responsive design.

## Purpose & Capabilities
- Provide prospective students with comprehensive information about academic programs, admissions, and campus life at a new university.
- Establish the university's institutional identity and showcase its founding strengths: accreditation, experienced faculty, and modern facilities.
- Enable easy navigation through program offerings with detailed information including fees, duration, and entry requirements.
- Display upcoming inaugural events, news, and academic calendar.
- Present founding staff/faculty profiles and current student testimonials.
- Facilitate contact and inquiries through integrated contact forms.
- Fully responsive design optimized for mobile and desktop experiences.

## Project Structure
```
/src
  /app
    layout.tsx              # Root layout with navigation
    page.tsx                # Homepage
    /about
      page.tsx              # About page
    /academics
      page.tsx              # Programs/Academics page
    /admissions
      page.tsx              # Admissions page
    /events
      page.tsx              # Events & News page
    /student-life
      page.tsx              # Student Life page
    /staff
      page.tsx              # Staff/Faculty page
    /contact
      page.tsx              # Contact page
  /components
    Navbar.tsx              # Navigation component
    Footer.tsx              # Footer component
    ProgramCard.tsx         # Reusable program card
    TestimonialCard.tsx     # Testimonial component
  /lib
    data.ts                 # Demo data (programs, events, staff, etc.)
```

## Design System

### Color Palette
- Primary: Indigo/Blue tones (academic, trustworthy)
- Secondary: Amber/Gold accents (excellence, achievement)
- Neutral: Gray scale for text and backgrounds
- Success: Green for CTAs and positive actions

### Typography
- Headings: Large, bold, hierarchical (text-4xl to text-6xl)
- Body: Readable, well-spaced (text-base to text-lg)
- Emphasis: Font weight and color variations

### Components Style
- Cards: White background, subtle shadows, rounded corners, hover effects
- Buttons: Bold CTAs with gradient backgrounds, hover animations
- Forms: Clean inputs with focus states
- Navigation: Fixed navbar with smooth scroll, mobile-responsive hamburger menu
- Footer: Multi-column layout with social icons

### Visual Effects
- Drop shadows on cards for depth
- Gradient overlays on hero sections
- Hover transitions on interactive elements
- Smooth scroll behavior
- Icon integration for visual hierarchy

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-friendly interactive elements

## Features Implemented

### 1. Homepage (/)
**Hero Section:**
- Campus name: "Horizon University"
- Tagline: "Empowering Minds, Shaping Futures"
- Gradient background with overlay
- Two prominent CTAs: "Apply Now" and "Explore Programs"

**Highlights Section:**
- Four key strengths with icons:
  - Fully Accredited
  - Experienced Faculty
  - State-of-the-Art Labs
  - Exciting Research Opportunities
- Grid layout with cards

**Programs Overview:**
- Three main categories with cards:
  - Undergraduate Programs
  - Masters Programs
  - Short Courses & Certificates
- Each with icon, description, and "Learn More" link

**Upcoming Events Preview:**
- Showcase 3 upcoming inaugural events
- Event cards with date, title, and description
- Link to full Events page

**Testimonials:**
- Current student quotes
- Profile images (placeholders)
- Name and program
- Carousel/grid layout

**Footer:**
- Contact information
- Quick navigation links
- Social media icons
- Copyright notice

### 2. About Page (/about)
- Founding story
- Mission: Educational excellence and innovation
- Vision: To become a leading institution in East Africa
- Core values: Excellence, Integrity, Innovation, Community
- Leadership message from the Founding Chancellor/Dean
- Facility photos grid (library, labs, campus grounds)
- **Our Programmes**: A new section has been added to showcase the university's programs, categorized into 'Masters', 'Degree', and 'Diploma' programs. Each category displays the relevant program cards.

### 3. Academics/Programs Page (/academics)
**Program Categories:**
- Undergraduate Programs
- Postgraduate Programs
- Masters Programs

**Program Details (for each):**
- Program name (e.g., BSc in Computer Science, MBA, MSc Data Science)
- Tuition fee per semester (KES format)
- Total number of semesters
- Minimum entry requirements (KCSE grade, degree classification)
- Program duration
- "Apply Now" CTA button

**Display Format:**
- Organized by category with tabs/sections
- Card-based layout or detailed tables
- Filterable by category
- Clear visual hierarchy

**Sample Programs:**
- BSc Computer Science, BSc Business Administration, BSc Nursing
- MSc Data Science, MSc Public Health, MBA
- Postgraduate Diploma options

### 4. Admissions Page (/admissions)
**Step-by-Step Process:**
1. Choose your program
2. Check entry requirements
3. Complete application form
4. Submit required documents
5. Pay application fee
6. Await admission decision
7. Accept offer and register

**General Requirements:**
- Academic transcripts
- National ID/Passport
- Recommendation letters
- Personal statement
- Application fee

**Downloadable Resources:**
- Application form (PDF placeholder)
- Admission policy document
- Fee structure guide

**Key Dates:**
- Application deadlines
- Semester start dates
- Orientation schedules

**CTA:** Prominent "Apply Now" button linking to contact form






### 8. Contact Page (/contact)
**Contact Form:**
- Name (required)
- Email (required)
- Phone number
- Program of Interest (dropdown)
- Message (textarea)
- Submit button with loading state

**Contact Information:**
- Physical address
- Phone numbers (Main line, Admissions)
- Email addresses (General, Admissions, Support)
- Office hours

**Location:**
- Google Maps embed or static map placeholder
- Directions from major landmarks

**Social Media:**
- Facebook, Twitter/X, Instagram, LinkedIn, YouTube links
- WhatsApp contact option

## Technical Implementation

### Dependencies
- Next.js 15.5.4 with App Router
- React 19.1.0
- TypeScript 5
- TailwindCSS 4
- Lucide React (for icons)
- React Hook Form (for form management)

### Key Technical Features
- Server Components by default for optimal performance
- Client Components only where interactivity needed
- File-based routing with nested layouts
- SEO-optimized with metadata
- Responsive images with Next.js Image component
- Form validation
- Smooth scrolling navigation
- Accessibility (A11Y) compliant

### Performance Optimizations
- Static generation where possible
- Optimized images with placeholder blur
- Minimal JavaScript bundle
- Efficient CSS with TailwindCSS purging
- Fast page transitions

## Current Plan: Initial Website Build

### Steps to Complete:
1. ✅ Create project blueprint
2. Install required dependencies (lucide-react for icons)
3. Create data file with demo content (programs, events, staff, testimonials)
4. Build reusable components:
   - Navbar with mobile menu
   - Footer with social links
   - ProgramCard, TestimonialCard
5. Update root layout with Navbar and Footer
6. Create Homepage with all sections
7. Build About page with mission/vision
8. Build Academics page with program listings
9. Build Admissions page with process steps
10. Build Events page with upcoming events
11. Build Student Life page with activities
12. Build Staff page with faculty profiles
13. Build Contact page with form and map
14. Test responsive design and accessibility
15. Run linting and fix issues
16. Verify all routes and navigation work

## Design Philosophy
The website embodies modern educational excellence through:
- **Clean & Professional:** Sophisticated design that inspires confidence
- **Accessible Information:** Clear hierarchy and easy navigation
- **Engaging Visuals:** Strategic use of color, imagery, and whitespace
- **Mobile-First:** Seamless experience across all devices
- **Action-Oriented:** Clear CTAs guiding users to apply and explore
- **Trustworthy:** Academic credibility through design and content
