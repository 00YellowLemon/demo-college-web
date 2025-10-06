import { Event } from '@/lib/data';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      seminar: 'bg-blue-100 text-blue-800',
      'open-day': 'bg-green-100 text-green-800',
      graduation: 'bg-purple-100 text-purple-800',
      research: 'bg-indigo-100 text-indigo-800',
      sports: 'bg-orange-100 text-orange-800',
      career: 'bg-pink-100 text-pink-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${getCategoryColor(event.category)}`}>
            {event.category.replace('-', ' ')}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4 text-indigo-600" />
            <span>{formatDate(event.date)}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4 text-indigo-600" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4 text-indigo-600" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm">{event.description}</p>
      </div>
    </div>
  );
}
