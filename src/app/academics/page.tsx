import { programs } from '@/lib/data';
import ProgramCard from '@/components/ProgramCard';

export const metadata = {
  title: 'Academic Programs - Kilele University',
  description: 'Explore our wide range of Undergraduate, Masters, and Postgraduate programs with detailed information on fees, duration, and entry requirements.',
};

export default function AcademicsPage() {
  const undergraduatePrograms = programs.filter(p => p.category === 'undergraduate');
  const mastersPrograms = programs.filter(p => p.category === 'masters');
  const postgraduatePrograms = programs.filter(p => p.category === 'postgraduate');

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Programs</h1>
          <p className="text-xl">
            Discover our comprehensive range of programs designed to prepare you for success
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Kilele University offers a diverse portfolio of programs across five schools.
              Each program combines theoretical knowledge with practical skills, ensuring our graduates 
              are well-prepared for the demands of the modern workplace.
            </p>
          </div>
        </div>
      </section>

      {/* Undergraduate Programs */}
      <section id="undergraduate" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Undergraduate Programs
            </h2>
            <p className="text-lg text-gray-600">
              Bachelor&apos;s degree programs that build strong foundational knowledge and prepare you for professional careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {undergraduatePrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Masters Programs */}
      <section id="masters" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Masters Programs
            </h2>
            <p className="text-lg text-gray-600">
              Advanced postgraduate degrees that develop specialized expertise and leadership capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mastersPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Postgraduate Diplomas */}
      <section id="postgraduate" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Postgraduate Diplomas
            </h2>
            <p className="text-lg text-gray-600">
              Professional development programs for career advancement and skill enhancement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postgraduatePrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Apply?
          </h2>
          <p className="text-xl mb-8">
            Take the next step in your educational journey. Our admissions team is here to help you through the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-900 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Apply Now
            </a>
            <a
              href="/admissions"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300"
            >
              View Admission Requirements
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
