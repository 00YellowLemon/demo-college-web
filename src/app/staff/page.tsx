import { staff } from '@/lib/data';
import StaffCard from '@/components/StaffCard';

export const metadata = {
  title: 'Faculty & Staff - Horizon University',
  description: 'Meet our distinguished faculty members and staff at Horizon University - experienced educators and researchers dedicated to your success.',
};

export default function StaffPage() {
  const schools = [
    'School of Computing & IT',
    'School of Business',
    'School of Engineering',
    'School of Health Sciences',
    'School of Education',
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Faculty & Staff</h1>
          <p className="text-xl">Meet our distinguished team of educators and researchers</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Excellence in Teaching & Research
            </h2>
            <p className="text-lg text-gray-700">
              Our faculty members are accomplished scholars, researchers, and industry professionals 
              who bring a wealth of knowledge and real-world experience to the classroom. 
              They are committed to providing personalized attention and mentorship to help you achieve your academic goals.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty by School */}
      {schools.map((school, index) => {
        const schoolStaff = staff.filter(s => s.department === school);
        
        return (
          <section 
            key={school}
            className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{school}</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {schoolStaff.map((member) => (
                  <StaffCard key={member.id} staff={member} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Academic Community
          </h2>
          <p className="text-xl mb-8">
            Learn from the best and become part of our growing community of scholars and innovators
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-900 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Apply Now
            </a>
            <a
              href="/academics"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300"
            >
              View Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
