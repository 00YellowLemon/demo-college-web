import { clubs, sports } from '@/lib/data';
import { Users, Trophy, Music, Home, Award } from 'lucide-react';

export const metadata = {
  title: 'Student Life - Horizon University',
  description: 'Discover the vibrant student life at Horizon University - clubs, sports, arts, accommodation, and leadership opportunities.',
};

export default function StudentLifePage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Life</h1>
          <p className="text-xl">Experience a vibrant campus community beyond the classroom</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              More Than Just Academics
            </h2>
            <p className="text-lg text-gray-700">
              At Horizon University, we believe in holistic education. Our vibrant campus life offers 
              countless opportunities for personal growth, leadership development, and building lifelong friendships. 
              Get involved in clubs, sports, arts, and community service to make the most of your university experience.
            </p>
          </div>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Clubs & Societies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join student-led clubs and societies that match your interests and passions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{club}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don&apos;t see a club you&apos;re interested in? Start your own! Contact the Student Affairs Office for guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Sports & Recreation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sports & Recreation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay active and healthy with our comprehensive sports facilities and programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {sports.map((sport, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{sport}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Sports Complex</h3>
            <p className="text-lg mb-6">
              Our state-of-the-art sports complex features a football field, basketball courts, 
              volleyball courts, tennis courts, swimming pool, and a fully-equipped fitness center. 
              All facilities are available to students free of charge.
            </p>
            <p className="text-indigo-200">
              Join inter-faculty competitions, represent the university in national tournaments, 
              or simply stay fit with friends!
            </p>
          </div>
        </div>
      </section>

      {/* Arts & Culture */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4">
              <Music className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Arts & Culture
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Express your creativity through music, drama, dance, and visual arts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Music & Dance</h3>
              <p className="text-gray-600 mb-4">
                Join the university choir, instrumental band, or traditional dance groups. 
                Perform at campus events and compete in national festivals.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Drama & Theater</h3>
              <p className="text-gray-600 mb-4">
                Participate in theatrical productions, poetry slams, and dramatic performances. 
                Develop your acting skills and stage presence.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Art Exhibitions</h3>
              <p className="text-gray-600 mb-4">
                Showcase your artwork in student exhibitions. Explore painting, sculpture, 
                photography, and digital art in our creative spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Accommodation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Student Accommodation</h2>
              <p className="text-gray-700 mb-4">
                We offer comfortable and affordable on-campus accommodation for students. 
                Our hostels provide a safe and supportive living environment that fosters academic success and social connection.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700">Single and shared room options</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700">24/7 security and WiFi access</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700">Common rooms and study areas</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700">On-site laundry facilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Accommodation Fees</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Single Room</span>
                    <span className="text-lg font-bold text-indigo-600">KES 45,000/semester</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Shared Room (2 students)</span>
                    <span className="text-lg font-bold text-indigo-600">KES 30,000/semester</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Shared Room (4 students)</span>
                    <span className="text-lg font-bold text-indigo-600">KES 20,000/semester</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Develop your leadership skills through various opportunities on campus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Student Council</h3>
              <p className="text-gray-600">
                Represent your fellow students, participate in university governance, 
                and organize campus-wide events and initiatives.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Class Representatives</h3>
              <p className="text-gray-600">
                Serve as the voice of your class, coordinate with faculty, 
                and help create a positive learning environment.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Peer Mentorship</h3>
              <p className="text-gray-600">
                Guide and support new students as they transition to university life. 
                Share your experiences and help them succeed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
