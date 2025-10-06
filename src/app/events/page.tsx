import { events } from '@/lib/data';
import EventCard from '@/components/EventCard';
import { Newspaper, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Events & News - Horizon University',
  description: 'Stay updated with the latest events, news, and announcements from Horizon University.',
};

export default function EventsPage() {
  const newsItems = [
    {
      id: 1,
      title: 'Horizon University Ranks Top 5 in East Africa',
      date: 'January 15, 2025',
      excerpt: 'We are proud to announce that Horizon University has been ranked among the top 5 universities in East Africa by the Times Higher Education rankings.',
      category: 'Achievement',
    },
    {
      id: 2,
      title: 'New MSc in Artificial Intelligence Program Launched',
      date: 'January 10, 2025',
      excerpt: 'The School of Computing & IT introduces a cutting-edge Masters program in Artificial Intelligence, starting September 2025.',
      category: 'Academic',
    },
    {
      id: 3,
      title: 'Research Grant Award for Climate Change Study',
      date: 'December 28, 2024',
      excerpt: 'Faculty members from the School of Environmental Sciences receive $500,000 grant for groundbreaking climate change research.',
      category: 'Research',
    },
    {
      id: 4,
      title: 'Student Team Wins National Hackathon',
      date: 'December 15, 2024',
      excerpt: 'A team of Computer Science students from Horizon University took first place in the Kenya National Coding Challenge 2024.',
      category: 'Student Success',
    },
    {
      id: 5,
      title: 'New Partnership with Leading Tech Companies',
      date: 'December 5, 2024',
      excerpt: 'Horizon University signs MOU with Microsoft and Google to provide students with industry certifications and internship opportunities.',
      category: 'Partnership',
    },
    {
      id: 6,
      title: 'Campus Expansion Project Begins',
      date: 'November 20, 2024',
      excerpt: 'Construction begins on new state-of-the-art engineering complex, expected to be completed by 2026.',
      category: 'Infrastructure',
    },
  ];

  const academicCalendar = [
    { event: 'Semester 1 Begins', date: 'September 8, 2025' },
    { event: 'Mid-Semester Break', date: 'October 20-27, 2025' },
    { event: 'Semester 1 Ends', date: 'December 12, 2025' },
    { event: 'Semester 1 Exams', date: 'December 15-22, 2025' },
    { event: 'Holiday Break', date: 'December 23 - January 11' },
    { event: 'Semester 2 Begins', date: 'January 12, 2026' },
    { event: 'Mid-Semester Break', date: 'March 16-23, 2026' },
    { event: 'Semester 2 Ends', date: 'April 30, 2026' },
    { event: 'Semester 2 Exams', date: 'May 4-11, 2026' },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & News</h1>
          <p className="text-xl">Stay connected with what&apos;s happening at Horizon University</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mark your calendar and join us for these exciting events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* News & Announcements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest News & Announcements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recent achievements, updates, and important information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <div 
                key={news.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-semibold uppercase">
                      {news.category}
                    </span>
                    <Newspaper className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{news.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{news.date}</p>
                  <p className="text-gray-600">{news.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Academic Calendar 2025/2026
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Important dates for the academic year
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="divide-y divide-gray-200">
                {academicCalendar.map((item, index) => (
                  <div 
                    key={index}
                    className="p-6 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <Calendar className="h-8 w-8 text-indigo-600 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900">{item.event}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-indigo-600 font-semibold">{item.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
