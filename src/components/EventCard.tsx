import React from 'react';
import { Event } from '@/lib/data';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-200 hover:shadow-xl">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{event.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar size={16} className="mr-2" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-2" />
          <span>{event.location}</span>
        </div>
        <p className="text-gray-700 mb-4">{event.description}</p>
        <a
          href="#"
          className="inline-flex items-center text-green-700 font-semibold hover:text-green-800"
        >
          Learn More <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default EventCard;
