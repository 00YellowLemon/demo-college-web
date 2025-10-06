# Campus Website Blueprint

## Overview
A comprehensive higher education institution website built with Next.js 15 (App Router), TypeScript, and TailwindCSS 4. The website showcases academic programs (Undergraduate, Postgraduate, Masters), campus facilities, events, student life, and provides admissions information with a modern, responsive design.

## Purpose & Capabilities
- Provide prospective students with comprehensive information about academic programs, admissions, and campus life
- Showcase institutional strengths: accreditation, experienced faculty, modern facilities, research opportunities
- Enable easy navigation through program offerings with detailed information including fees, duration, and entry requirements
- Display upcoming events, news, and academic calendar
- Present staff/faculty profiles and student testimonials
- Facilitate contact and inquiries through integrated contact forms
- Fully responsive design optimized for mobile and desktop experiences

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
    /gallery
      page.tsx              # Gallery page
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
    EventCard.tsx           # Event card component
    TestimonialCard.tsx     # Testimonial component
    StaffCard.tsx           # Staff profile card
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
  - Internationally Accredited
  - 200+ Experienced Faculty
  - State-of-the-Art Labs
  - Leading Research Opportunities
- Grid layout with cards

**Programs Overview:**
- Three main categories with cards:
  - Undergraduate Programs
  - Masters Programs
  - Short Courses & Certificates
- Each with icon, description, and "Learn More" link

**Upcoming Events Preview:**
- Showcase 3 upcoming events
- Event cards with date, title, and description
- Link to full Events page

**Testimonials:**
- Student and alumni quotes
- Profile images (placeholders)
- Name, program, and graduation year
- Carousel/grid layout

**Footer:**
- Contact information
- Quick navigation links
- Social media icons
- Copyright notice

### 2. About Page (/about)
- Campus history and founding story
- Mission: Educational excellence and innovation
- Vision: Leading institution in East Africa
- Core values: Excellence, Integrity, Innovation, Community
- Leadership message from Chancellor/Dean
- Facility photos grid (library, labs, campus grounds)
- Statistics: student population, programs, research output
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

### 5. Events & News Page (/events)
**Upcoming Events:**
- Research Symposium
- Open Day for Prospective Students
- Graduation Ceremony
- Guest Lectures & Seminars
- Sports Day
- Career Fair

**Event Details:**
- Date and time
- Location
- Brief description
- Registration/RSVP option

**News & Announcements:**
- Recent achievements
- New program launches
- Research breakthroughs
- Campus updates

**Academic Calendar Highlights:**
- Semester dates
- Exam periods
- Holiday breaks
- Important deadlines

### 6. Gallery Page (/gallery)
**Photo Categories:**
- Campus Facilities (library, labs, lecture halls)
- Student Activities (clubs, sports, events)
- Graduation Ceremonies
- Research & Innovation
- Campus Life

**Layout:**
- Responsive grid (masonry or uniform)
- Lightbox/modal for full-size viewing
- Placeholder images with proper aspect ratios
- Captions for context

### 7. Student Life Page (/student-life)
**Clubs & Societies:**
- Academic clubs (IT Club, Business Club)
- Cultural societies
- Debate and Drama clubs
- Environmental groups

**Sports & Recreation:**
- Football, Basketball, Volleyball teams
- Athletics and Track
- Fitness center
- Intramural competitions

**Arts & Culture:**
- Music and Dance groups
- Theater productions
- Art exhibitions
- Cultural festivals

**Student Accommodation:**
- On-campus hostels
- Room types and amenities
- Booking process

**Student Leadership:**
- Student council
- Class representatives
- Peer mentorship programs

### 8. Staff/Faculty Page (/staff)
**Faculty Profiles:**
- Profile photo (placeholder)
- Full name and title (Dr., Prof.)
- Department/School
- Specialization/Research interests
- Email contact

**Departments:**
- School of Computing & IT
- School of Business
- School of Health Sciences
- School of Engineering
- School of Education

**Layout:**
- Grid of profile cards
- Filterable by department
- Search functionality
- 20-30 sample faculty members

### 9. Contact Page (/contact)
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
   - ProgramCard, EventCard, TestimonialCard, StaffCard
5. Update root layout with Navbar and Footer
6. Create Homepage with all sections
7. Build About page with mission/vision
8. Build Academics page with program listings
9. Build Admissions page with process steps
10. Build Events page with upcoming events
11. Build Gallery page with image grid
12. Build Student Life page with activities
13. Build Staff page with faculty profiles
14. Build Contact page with form and map
15. Test responsive design and accessibility
16. Run linting and fix issues
17. Verify all routes and navigation work

## Design Philosophy
The website embodies modern educational excellence through:
- **Clean & Professional:** Sophisticated design that inspires confidence
- **Accessible Information:** Clear hierarchy and easy navigation
- **Engaging Visuals:** Strategic use of color, imagery, and whitespace
- **Mobile-First:** Seamless experience across all devices
- **Action-Oriented:** Clear CTAs guiding users to apply and explore
- **Trustworthy:** Academic credibility through design and content
