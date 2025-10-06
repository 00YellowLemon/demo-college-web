import { StaffMember } from '@/lib/data';
import { Mail, User } from 'lucide-react';

interface StaffCardProps {
  staff: StaffMember;
}

export default function StaffCard({ staff }: StaffCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 h-32 flex items-center justify-center">
        <User className="h-20 w-20 text-white" />
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{staff.name}</h3>
        <p className="text-sm font-semibold text-indigo-600 mb-2">{staff.title}</p>
        <p className="text-sm text-gray-600 mb-3">{staff.department}</p>
        
        <div className="bg-indigo-50 rounded-lg p-3 mb-4">
          <p className="text-xs font-semibold text-gray-700 mb-1">Specialization:</p>
          <p className="text-sm text-gray-900">{staff.specialization}</p>
        </div>
        
        <a 
          href={`mailto:${staff.email}`}
          className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <Mail className="h-4 w-4" />
          <span className="truncate">{staff.email}</span>
        </a>
      </div>
    </div>
  );
}
