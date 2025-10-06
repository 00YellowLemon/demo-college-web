import Link from 'next/link';
import { Award, Users, Microscope, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';
import { highlights, programCategories, testimonials } from '@/lib/data';
import TestimonialCard from '@/components/TestimonialCard';

export default function Home() {
  

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-black to-red-800 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Kilele University
          </h1>
          <p className="text-xl md:text-3xl mb-8 font-light">
            A New Peak in Kenyan Education
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-200">
            Welcome to Kilele University, where we&apos;re building a new tradition of excellence from the ground up. Be a part of our founding story and shape the future with us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/academics"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent News
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Kilele University Opens Its Doors!</h3>
            <p className="text-gray-600 mb-4">
              We are thrilled to announce that Kilele University officially opened its doors to our pioneer class of students on September 1st, 2023. After months of preparation, our campus is buzzing with the energy and excitement of our new students.
            </p>
            <p className="text-gray-600 mb-6">
              The first few weeks have been a resounding success, with orientation programs, inaugural lectures, and community-building events. We are incredibly proud of our founding students and look forward to the innovative ideas and vibrant culture they will bring to Kilele University.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors"
            >
              Read More About Our Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const icons = [Award, Users, Microscope, BookOpen];
              const Icon = icons[index];
              
              return (
                <div 
                  key={highlight.id}
                  className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from a wide range of programs designed to equip you with the skills and knowledge needed for success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programCategories.map((category) => (
              <div 
                key={category.id}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4">
                  {category.id === 'undergraduate' && <BookOpen className="h-8 w-8 text-white" />}
                  {category.id === 'masters' && <Award className="h-8 w-8 text-white" />}
                  {category.id === 'postgraduate' && <CheckCircle className="h-8 w-8 text-white" />}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <Link
                  href={`/academics#${category.id}`}
                  className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Words from Our Pioneers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from the first students to walk the halls of Kilele University.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Be a Pioneer?
          </h2>
          <p className="text-xl mb-8">
            Take the first step towards your future. Apply now and join our founding class.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-800 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-green-800 transition-all duration-300"
            >
              Admission Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

