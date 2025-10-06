import { Image as ImageIcon } from 'lucide-react';

export const metadata = {
  title: 'Gallery - Horizon University',
  description: 'Explore photos of our campus facilities, student activities, and university life at Horizon University.',
};

export default function GalleryPage() {
  const galleryCategories = [
    {
      category: 'Campus Facilities',
      images: [
        { id: 1, title: 'Main Library', description: 'Modern library with over 100,000 books' },
        { id: 2, title: 'Science Laboratory', description: 'State-of-the-art research facilities' },
        { id: 3, title: 'Lecture Hall', description: 'Smart classrooms with multimedia' },
        { id: 4, title: 'Computer Lab', description: 'Latest technology for IT students' },
      ],
    },
    {
      category: 'Student Activities',
      images: [
        { id: 5, title: 'Student Council', description: 'Leadership and governance' },
        { id: 6, title: 'Cultural Day', description: 'Celebrating diversity' },
        { id: 7, title: 'Club Activities', description: 'Various student clubs in action' },
        { id: 8, title: 'Sports Day', description: 'Inter-faculty competitions' },
      ],
    },
    {
      category: 'Graduation Ceremonies',
      images: [
        { id: 9, title: '44th Graduation', description: 'Class of 2024 celebration' },
        { id: 10, title: 'Conferment', description: 'Degrees being conferred' },
        { id: 11, title: 'Graduate Parade', description: 'Proud graduates' },
        { id: 12, title: 'Family Celebration', description: 'Families celebrating success' },
      ],
    },
    {
      category: 'Research & Innovation',
      images: [
        { id: 13, title: 'Research Symposium', description: 'Annual research presentations' },
        { id: 14, title: 'Innovation Hub', description: 'Student startups and projects' },
        { id: 15, title: 'Field Work', description: 'Practical research activities' },
        { id: 16, title: 'Lab Work', description: 'Cutting-edge experiments' },
      ],
    },
    {
      category: 'Campus Life',
      images: [
        { id: 17, title: 'Student Center', description: 'Hub of student activities' },
        { id: 18, title: 'Cafeteria', description: 'Dining and social space' },
        { id: 19, title: 'Campus Grounds', description: 'Beautiful green spaces' },
        { id: 20, title: 'Student Hostels', description: 'Comfortable accommodation' },
      ],
    },
  ];

  const getGradient = (index: number) => {
    const gradients = [
      'from-blue-400 to-blue-600',
      'from-purple-400 to-purple-600',
      'from-indigo-400 to-indigo-600',
      'from-pink-400 to-pink-600',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Campus Gallery</h1>
          <p className="text-xl">Explore life at Horizon University through our photo gallery</p>
        </div>
      </section>

      {/* Gallery Sections */}
      {galleryCategories.map((section, sectionIndex) => (
        <section 
          key={section.category} 
          className={`py-16 ${sectionIndex % 2 === 0 ? '' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{section.category}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.images.map((image, imageIndex) => (
                <div 
                  key={image.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className={`h-56 bg-gradient-to-br ${getGradient(imageIndex)} flex items-center justify-center relative overflow-hidden`}>
                    <ImageIcon className="h-20 w-20 text-white opacity-50 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-600">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Note about images */}
      <section className="py-12 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700">
            <strong>Note:</strong> This is a demonstration gallery with placeholder images. 
            In production, these would be replaced with actual campus photographs showcasing our facilities, 
            students, events, and university life.
          </p>
        </div>
      </section>
    </div>
  );
}
