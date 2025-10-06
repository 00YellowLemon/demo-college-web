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
  time: string;
  location: string;
  description: string;
  category: 'seminar' | 'open-day' | 'graduation' | 'research' | 'sports' | 'career';
}

export interface StaffMember {
  id: string;
  name: string;
  title: string;
  department: string;
  specialization: string;
  email: string;
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

export const events: Event[] = [
  {
    id: 'research-symposium',
    title: 'Annual Research Symposium 2025',
    date: '2025-03-15',
    time: '9:00 AM - 5:00 PM',
    location: 'Main Auditorium',
    description: 'Showcase of cutting-edge research by faculty and postgraduate students across all disciplines.',
    category: 'research',
  },
  {
    id: 'open-day',
    title: 'Open Day for Prospective Students',
    date: '2025-02-20',
    time: '10:00 AM - 4:00 PM',
    location: 'Campus Grounds',
    description: 'Tour our facilities, meet faculty, and learn about our programs. Free registration for all attendees.',
    category: 'open-day',
  },
  {
    id: 'graduation',
    title: '45th Graduation Ceremony',
    date: '2025-06-12',
    time: '8:00 AM - 2:00 PM',
    location: 'University Stadium',
    description: 'Celebrating the achievements of our graduating class. Over 2,500 students receiving their degrees.',
    category: 'graduation',
  },
  {
    id: 'guest-lecture',
    title: 'Guest Lecture: AI & Future of Work',
    date: '2025-02-28',
    time: '2:00 PM - 4:00 PM',
    location: 'Lecture Hall A',
    description: 'Distinguished speaker from industry sharing insights on artificial intelligence and career preparation.',
    category: 'seminar',
  },
  {
    id: 'career-fair',
    title: 'Annual Career Fair 2025',
    date: '2025-04-10',
    time: '9:00 AM - 5:00 PM',
    location: 'Student Center',
    description: 'Connect with 50+ employers seeking interns and graduates. Bring your CV and dress professionally.',
    category: 'career',
  },
  {
    id: 'sports-day',
    title: 'Inter-Faculty Sports Day',
    date: '2025-03-22',
    time: '8:00 AM - 6:00 PM',
    location: 'Sports Complex',
    description: 'Annual sporting competition between faculties. Football, basketball, athletics, and more.',
    category: 'sports',
  },
];

export const staff: StaffMember[] = [
  {
    id: 'prof-kamau',
    name: 'Prof. James Kamau',
    title: 'Professor',
    department: 'School of Computing & IT',
    specialization: 'Artificial Intelligence & Machine Learning',
    email: 'j.kamau@horizon.ac.ke',
  },
  {
    id: 'dr-wanjiru',
    name: 'Dr. Grace Wanjiru',
    title: 'Senior Lecturer',
    department: 'School of Business',
    specialization: 'Strategic Management & Entrepreneurship',
    email: 'g.wanjiru@horizon.ac.ke',
  },
  {
    id: 'dr-ochieng',
    name: 'Dr. Peter Ochieng',
    title: 'Associate Professor',
    department: 'School of Engineering',
    specialization: 'Structural Engineering & Construction',
    email: 'p.ochieng@horizon.ac.ke',
  },
  {
    id: 'dr-akinyi',
    name: 'Dr. Mary Akinyi',
    title: 'Senior Lecturer',
    department: 'School of Health Sciences',
    specialization: 'Public Health & Epidemiology',
    email: 'm.akinyi@horizon.ac.ke',
  },
  {
    id: 'prof-kipchoge',
    name: 'Prof. David Kipchoge',
    title: 'Professor',
    department: 'School of Education',
    specialization: 'Educational Psychology & Curriculum Development',
    email: 'd.kipchoge@horizon.ac.ke',
  },
  {
    id: 'dr-njeri',
    name: 'Dr. Anne Njeri',
    title: 'Lecturer',
    department: 'School of Computing & IT',
    specialization: 'Software Engineering & Web Technologies',
    email: 'a.njeri@horizon.ac.ke',
  },
  {
    id: 'dr-mutua',
    name: 'Dr. Samuel Mutua',
    title: 'Senior Lecturer',
    department: 'School of Business',
    specialization: 'Finance & Investment Management',
    email: 's.mutua@horizon.ac.ke',
  },
  {
    id: 'dr-chebet',
    name: 'Dr. Susan Chebet',
    title: 'Lecturer',
    department: 'School of Health Sciences',
    specialization: 'Nursing Practice & Patient Care',
    email: 's.chebet@horizon.ac.ke',
  },
  {
    id: 'prof-otieno',
    name: 'Prof. Michael Otieno',
    title: 'Professor',
    department: 'School of Engineering',
    specialization: 'Electrical Engineering & Renewable Energy',
    email: 'm.otieno@horizon.ac.ke',
  },
  {
    id: 'dr-mwangi',
    name: 'Dr. John Mwangi',
    title: 'Associate Professor',
    department: 'School of Business',
    specialization: 'Marketing & Consumer Behavior',
    email: 'j.mwangi@horizon.ac.ke',
  },
  {
    id: 'dr-wambui',
    name: 'Dr. Catherine Wambui',
    title: 'Lecturer',
    department: 'School of Education',
    specialization: 'Mathematics Education & STEM',
    email: 'c.wambui@horizon.ac.ke',
  },
  {
    id: 'dr-kimani',
    name: 'Dr. Robert Kimani',
    title: 'Senior Lecturer',
    department: 'School of Computing & IT',
    specialization: 'Cybersecurity & Network Administration',
    email: 'r.kimani@horizon.ac.ke',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Mueni',
    program: 'BSc in Computer Science',
    year: '2023',
    quote: 'The hands-on approach and industry partnerships at Horizon University prepared me perfectly for my career in tech. I landed my dream job even before graduation!',
    role: 'Alumni',
  },
  {
    id: 'testimonial-2',
    name: 'David Omondi',
    program: 'MBA',
    year: '2024',
    quote: 'The MBA program transformed my leadership skills. The faculty brings real-world experience into the classroom, and the networking opportunities are invaluable.',
    role: 'Alumni',
  },
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
    title: 'Internationally Accredited',
    description: 'Recognized by leading educational bodies worldwide',
  },
  {
    id: 'faculty',
    title: '200+ Experienced Faculty',
    description: 'Learn from industry experts and leading researchers',
  },
  {
    id: 'labs',
    title: 'State-of-the-Art Labs',
    description: 'Modern facilities equipped with latest technology',
  },
  {
    id: 'research',
    title: 'Leading Research Opportunities',
    description: 'Engage in cutting-edge research projects',
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

export const clubs = [
  'IT & Innovation Club',
  'Business & Entrepreneurship Society',
  'Drama & Theatre Club',
  'Debate Society',
  'Environmental Club',
  'Music & Arts Society',
  'Photography Club',
  'Student Christian Fellowship',
  'Muslim Students Association',
];

export const sports = [
  'Football (Men & Women)',
  'Basketball',
  'Volleyball',
  'Athletics & Track',
  'Rugby',
  'Table Tennis',
  'Chess Club',
  'Fitness & Gym',
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
