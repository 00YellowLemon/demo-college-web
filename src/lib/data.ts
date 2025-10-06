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
    description: 'Comprehensive program covering software development, algorithms, databases, and emerging technologies.',
  },
  {
    id: 'bsc-business',
    name: 'BSc in Business Administration',
    category: 'undergraduate',
    tuitionPerSemester: 75000,
    semesters: 8,
    duration: '4 years',
    entryRequirements: 'KCSE Mean Grade B (Plain) with at least C+ in Mathematics and English',
    description: 'Develop strong business acumen in management, finance, marketing, and entrepreneurship.',
  },
  {
    id: 'bsc-nursing',
    name: 'BSc in Nursing',
    category: 'undergraduate',
    tuitionPerSemester: 95000,
    semesters: 8,
    duration: '4 years',
    entryRequirements: 'KCSE Mean Grade B (Plain) with B in Biology and Chemistry',
    description: 'Professional nursing education with clinical practice and patient care excellence.',
  },
  {
    id: 'beng-civil',
    name: 'BEng in Civil Engineering',
    category: 'undergraduate',
    tuitionPerSemester: 100000,
    semesters: 10,
    duration: '5 years',
    entryRequirements: 'KCSE Mean Grade B+ with A- in Mathematics and Physics',
    description: 'Design and construction of infrastructure including buildings, roads, and bridges.',
  },
  {
    id: 'ba-economics',
    name: 'BA in Economics',
    category: 'undergraduate',
    tuitionPerSemester: 70000,
    semesters: 8,
    duration: '4 years',
    entryRequirements: 'KCSE Mean Grade B (Plain) with at least C+ in Mathematics',
    description: 'Study economic theory, policy analysis, and quantitative methods for solving real-world problems.',
  },
  {
    id: 'bsc-education',
    name: 'BSc in Education (Science)',
    category: 'undergraduate',
    tuitionPerSemester: 68000,
    semesters: 8,
    duration: '4 years',
    entryRequirements: 'KCSE Mean Grade B- with B in two teaching subjects',
    description: 'Prepare to become a qualified science teacher with modern pedagogical skills.',
  },

  // Masters Programs
  {
    id: 'msc-data-science',
    name: 'MSc in Data Science',
    category: 'masters',
    tuitionPerSemester: 120000,
    semesters: 4,
    duration: '2 years',
    entryRequirements: 'Bachelor\'s degree (Second Class Upper) in Computer Science, IT, Mathematics, or related field',
    description: 'Advanced training in machine learning, big data analytics, and statistical modeling.',
  },
  {
    id: 'mba',
    name: 'Master of Business Administration (MBA)',
    category: 'masters',
    tuitionPerSemester: 150000,
    semesters: 4,
    duration: '2 years',
    entryRequirements: 'Bachelor\'s degree (Second Class Lower minimum) plus 2 years work experience',
    description: 'Strategic leadership and management skills for senior executive roles.',
  },
  {
    id: 'msc-public-health',
    name: 'MSc in Public Health',
    category: 'masters',
    tuitionPerSemester: 110000,
    semesters: 4,
    duration: '2 years',
    entryRequirements: 'Bachelor\'s degree in Health Sciences or related field (Second Class Lower minimum)',
    description: 'Advance your career in healthcare policy, epidemiology, and community health.',
  },
  {
    id: 'msc-environmental',
    name: 'MSc in Environmental Management',
    category: 'masters',
    tuitionPerSemester: 105000,
    semesters: 4,
    duration: '2 years',
    entryRequirements: 'Bachelor\'s degree in Environmental Science, Biology, or related field',
    description: 'Sustainable resource management and environmental conservation strategies.',
  },
  {
    id: 'med',
    name: 'Master of Education (M.Ed)',
    category: 'masters',
    tuitionPerSemester: 95000,
    semesters: 4,
    duration: '2 years',
    entryRequirements: 'Bachelor of Education degree (Second Class Lower minimum)',
    description: 'Advanced pedagogical skills and educational leadership for school administrators.',
  },

  // Postgraduate Diplomas
  {
    id: 'pgd-project-management',
    name: 'Postgraduate Diploma in Project Management',
    category: 'postgraduate',
    tuitionPerSemester: 75000,
    semesters: 3,
    duration: '1.5 years',
    entryRequirements: 'Bachelor\'s degree in any field',
    description: 'Professional certification in project planning, execution, and monitoring.',
  },
  {
    id: 'pgd-hr',
    name: 'Postgraduate Diploma in Human Resource Management',
    category: 'postgraduate',
    tuitionPerSemester: 70000,
    semesters: 3,
    duration: '1.5 years',
    entryRequirements: 'Bachelor\'s degree in any field',
    description: 'Strategic HR practices including recruitment, training, and organizational development.',
  },
  {
    id: 'pgd-accounting',
    name: 'Postgraduate Diploma in Accounting & Finance',
    category: 'postgraduate',
    tuitionPerSemester: 80000,
    semesters: 3,
    duration: '1.5 years',
    entryRequirements: 'Bachelor\'s degree in Business, Economics, or related field',
    description: 'Advanced financial management, auditing, and accounting principles.',
  },
];





export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-3',
    name: 'Faith Wanjiku',
    program: 'BSc in Nursing',
    year: 'Current Student',
    quote: 'The clinical exposure and modern simulation labs have given me confidence in my nursing practice. The lecturers are supportive and truly care about our success.',
    role: 'Student',
  },
  {
    id: 'testimonial-4',
    name: 'Brian Korir',
    program: 'BEng in Civil Engineering',
    year: 'Current Student',
    quote: 'From day one, we are challenged to think critically and solve real engineering problems. The practical projects and site visits make learning exciting and relevant.',
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
    title: 'Undergraduate Programs',
    description: 'Bachelor\'s degree programs designed to build strong foundational knowledge and skills for your career.',
    icon: 'graduate',
  },
  {
    id: 'masters',
    title: 'Masters Programs',
    description: 'Advanced postgraduate degrees for specialized expertise and leadership in your field.',
    icon: 'award',
  },
  {
    id: 'postgraduate',
    title: 'Short Courses & Certificates',
    description: 'Professional development programs and postgraduate diplomas for career advancement.',
    icon: 'certificate',
  },
];





export const contactInfo = {
  address: 'Horizon University\nUniversity Road, Off Thika Superhighway\nP.O. Box 12345-00100\nNairobi, Kenya',
  phone: '+254 712 345 678',
  admissionsPhone: '+254 733 456 789',
  email: 'info@horizon.ac.ke',
  admissionsEmail: 'admissions@horizon.ac.ke',
  supportEmail: 'support@horizon.ac.ke',
  socialMedia: {
    facebook: 'https://facebook.com/horizonuniversity',
    twitter: 'https://twitter.com/horizonuni',
    instagram: 'https://instagram.com/horizonuniversity',
    linkedin: 'https://linkedin.com/school/horizon-university',
    youtube: 'https://youtube.com/horizonuniversity',
  },
};
