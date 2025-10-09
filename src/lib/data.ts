// Demo data for the campus website

export interface Program {
  id: string;
  name: string;
  category: 'undergraduate' | 'postgraduate' | 'masters';
  tuitionPerSemester: number;
  semesters: number;
  duration: string;
  entryRequirements: string;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  program: string;
  year: string;
  quote: string;
  role: string;
}

export const programs: Program[] = [
  // Undergraduate Programs
  {
    id: 'bsc-cs',
    name: 'BSc in Computer Science',
    category: 'undergraduate',
    tuitionPerSemester: 85000,
    semesters: 8,
    duration: '4 years',
    entryRequirements: 'KCSE Mean Grade B+ (Plus) with at least B in Mathematics',
    description: 'A flagship program focusing on cutting-edge tech in software development, AI, and cybersecurity.',
  },
  {
    id: 'bsc-business',
    name: 'BSc in Business Administration',
    category: 'undergraduate',
    tuitionPerSemester: 75000,
    semesters: 8,
    duration: '4 years',
    entryRequirements: 'KCSE Mean Grade B (Plain) with at least C+ in Mathematics and English',
    description: 'Molding the next generation of ethical business leaders and entrepreneurs.',
  },
  {
    id: 'ba-comm',
    name: 'BA in Communication & Public Relations',
    category: 'undergraduate',
    tuitionPerSemester: 70000,
    semesters: 8,
    duration: '4 years',
    entryRequirements: 'KCSE Mean Grade B (Plain) with at least B in English or Kiswahili',
    description: 'Master the art of strategic communication in the corporate and public sectors.',
  },
];





export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Asha Mohamed',
    program: 'BSc in Computer Science',
    year: 'Pioneer Student',
    quote: 'Being part of the first class at Kilele is so exciting! The energy on campus is incredible, and the lecturers are really focused on helping us succeed from day one. The labs are brand new and have everything we need.',
    role: 'Student',
  },
  {
    id: 'testimonial-2',
    name: 'David Ochieng',
    program: 'BSc in Business Administration',
    year: 'Pioneer Student',
    quote: 'I chose Kilele because I wanted to be part of something new and different. The focus on entrepreneurship and innovation is exactly what I was looking for. We are not just students; we are pioneers building the university\'s culture.',
    role: 'Student',
  },
];

export const highlights = [
  {
    id: 'accreditation',
    title: 'Fully Accredited',
    description: 'Recognized by the Commission for University Education',
  },
  {
    id: 'faculty',
    title: 'Experienced Faculty',
    description: 'Learn from industry experts and leading researchers',
  },
  {
    id: 'labs',
    title: 'State-of-the-Art Labs',
    description: 'Modern facilities equipped with latest technology',
  },
  {
    id: 'research',
    title: 'Exciting Research Opportunities',
    description: 'Engage in impactful research from day one',
  },
];

export const programCategories = [
  {
    id: 'undergraduate',
    title: 'Our Pioneer Programs',
    description: 'Be part of our founding class. These programs are designed to build a strong foundation for your future career.',
    icon: 'graduate',
  },
];





export const contactInfo = {
  address: 'Kilele University\nSummit Building, Kilele Road\nP.O. Box 1-00100\nNairobi, Kenya',
  phone: '+254 799 999 888',
  admissionsPhone: '+254 799 999 777',
  email: 'info@kilele.ac.ke',
  admissionsEmail: 'admissions@kilele.ac.ke',
  supportEmail: 'support@kilele.ac.ke',
  socialMedia: {
    facebook: 'https://facebook.com/kileleuniversity',
    twitter: 'https://twitter.com/kileleuni',
    instagram: 'https://instagram.com/kileleuniversity',
    linkedin: 'https://linkedin.com/school/kilele-university',
    youtube: 'https://youtube.com/kileleuniversity',
  },
};
