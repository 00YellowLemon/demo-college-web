import { Target, Eye, Heart, Users, Building, Microscope, BookOpen, Award } from 'lucide-react';
import { programs } from '@/lib/data';
import ProgramCard from '@/components/ProgramCard';

export const metadata = {
  title: 'About Us - Horizon University',
  description: 'Learn about Horizon University - our history, mission, vision, values, and leadership.',
};

export default function AboutPage() {
  const mastersPrograms = programs.filter((program) => program.category === 'masters');
  const degreePrograms = programs.filter((program) => program.category === 'undergraduate');
  const diplomaPrograms = programs.filter((program) => program.category === 'postgraduate');

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Horizon University</h1>
          <p className="text-xl">Discover our story, values, and commitment to excellence</p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
              <div className="prose prose-lg">
                <p className="text-gray-700 mb-4">
                  Founded in 1985, Horizon University has been at the forefront of higher education in East Africa for nearly four decades. What began as a small college with just 200 students has grown into a comprehensive university serving over 15,000 students from across the region and beyond.
                </p>
                <p className="text-gray-700 mb-4">
                  Our journey has been marked by continuous innovation in teaching methods, curriculum development, and research excellence. From our humble beginnings, we have expanded to include five schools offering diverse programs from undergraduate to doctoral levels.
                </p>
                <p className="text-gray-700">
                  Today, Horizon University stands as a beacon of educational excellence, recognized internationally for our commitment to producing graduates who are not only academically sound but also ethically grounded and socially responsible.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 text-center shadow-md">
                  <p className="text-4xl font-bold text-indigo-600 mb-2">1985</p>
                  <p className="text-gray-700 text-sm">Year Founded</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-md">
                  <p className="text-4xl font-bold text-indigo-600 mb-2">15,000+</p>
                  <p className="text-gray-700 text-sm">Students</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-md">
                  <p className="text-4xl font-bold text-indigo-600 mb-2">50+</p>
                  <p className="text-gray-700 text-sm">Programs</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-md">
                  <p className="text-4xl font-bold text-indigo-600 mb-2">200+</p>
                  <p className="text-gray-700 text-sm">Faculty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide transformative education that empowers students with knowledge, skills, and values to become leaders and innovators who contribute positively to society and the global community.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading university in East Africa, recognized globally for excellence in teaching, research, and innovation, while maintaining our commitment to accessibility and inclusivity.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Excellence in all we do
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Integrity and Ethics
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Innovation and Creativity
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Community Engagement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 text-white flex flex-col justify-center items-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4">
                  <Users className="h-16 w-16 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Prof. Elizabeth Muthoni</h3>
                <p className="text-indigo-200">Vice Chancellor</p>
              </div>
              <div className="lg:col-span-2 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Message from the Vice Chancellor</h2>
                <div className="prose prose-lg">
                  <p className="text-gray-700 mb-4">
                    Welcome to Horizon University, where we are committed to shaping the leaders of tomorrow. As Vice Chancellor, I am proud to lead an institution that has consistently demonstrated excellence in academic achievement, research innovation, and community service.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our university is more than just a place of learning; it is a vibrant community where students from diverse backgrounds come together to pursue their dreams, challenge themselves, and prepare for meaningful careers. We provide a supportive environment that fosters intellectual curiosity, critical thinking, and personal growth.
                  </p>
                  <p className="text-gray-700">
                    Whether you are a prospective student, current student, parent, or partner, I invite you to explore the opportunities that Horizon University offers. Together, we will continue to empower minds and shape futures for generations to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              State-of-the-art infrastructure designed to enhance your learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <BookOpen className="h-20 w-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Library</h3>
                <p className="text-gray-600">Over 100,000 books and digital resources with 24/7 access</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <Microscope className="h-20 w-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Research Labs</h3>
                <p className="text-gray-600">Cutting-edge laboratories for science and engineering programs</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
                <Building className="h-20 w-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lecture Halls</h3>
                <p className="text-gray-600">Smart classrooms equipped with multimedia technology</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                <Award className="h-20 w-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sports Complex</h3>
                <p className="text-gray-600">Comprehensive facilities for athletics and recreation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Programmes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of programs tailored for your success.
            </p>
          </div>

          {/* Masters Programs */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Masters Programmes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mastersPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>

          {/* Degree Programs */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Degree Programmes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {degreePrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>

          {/* Diploma Programs */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Diploma Programmes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {diplomaPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
