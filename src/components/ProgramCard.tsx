import { Program } from '@/lib/data';
import { Clock, DollarSign, BookOpen, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  const totalTuition = program.tuitionPerSemester * program.semesters;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
      <div className="bg-gradient-to-r from-green-600 to-red-600 p-4">
        <h3 className="text-xl font-bold text-white">{program.name}</h3>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4 text-sm">{program.description}</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="h-5 w-5 text-green-600 flex-shrink-0" />
            <div>
              <span className="font-semibold">KES {program.tuitionPerSemester.toLocaleString()}</span>
              <span className="text-gray-600"> per semester</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-5 w-5 text-green-600 flex-shrink-0" />
            <div>
              <span className="font-semibold">{program.duration}</span>
              <span className="text-gray-600"> ({program.semesters} semesters)</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <BookOpen className="h-5 w-5 text-green-600 flex-shrink-0" />
            <div>
              <span className="font-semibold">Total: KES {totalTuition.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-4 mb-6 border border-green-100">
          <div className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Entry Requirements:</p>
              <p className="text-sm text-gray-700">{program.entryRequirements}</p>
            </div>
          </div>
        </div>

        <Link
          href="/contact"
          className="block w-full text-center bg-gradient-to-r from-green-600 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}
