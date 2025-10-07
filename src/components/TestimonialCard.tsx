import { Testimonial } from '@/lib/data';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <Quote className="h-10 w-10 text-green-600 opacity-50 mb-4" />
      
      <p className="text-gray-700 mb-6 italic leading-relaxed">
        &quot;{testimonial.quote}&quot;
      </p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {testimonial.name.charAt(0)}
        </div>
        
        <div>
          <p className="font-bold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.program}</p>
          <p className="text-xs text-gray-500">
            {testimonial.role} • {testimonial.year}
          </p>
        </div>
      </div>
    </div>
  );
}
