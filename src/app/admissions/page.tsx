import { CheckCircle, FileText, Download, Calendar } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Admissions - Kilele University',
  description: 'Learn about the admission process, requirements, and key dates for Kilele University programs.',
};

export default function AdmissionsPage() {
  const admissionSteps = [
    {
      step: 1,
      title: 'Choose Your Program',
      description: 'Browse our academic programs and select the one that aligns with your career goals.',
    },
    {
      step: 2,
      title: 'Check Entry Requirements',
      description: 'Review the specific entry requirements for your chosen program to ensure you qualify.',
    },
    {
      step: 3,
      title: 'Complete Application Form',
      description: 'Fill out the online application form with accurate personal and academic information.',
    },
    {
      step: 4,
      title: 'Submit Required Documents',
      description: 'Upload all necessary documents including transcripts, certificates, and identification.',
    },
    {
      step: 5,
      title: 'Pay Application Fee',
      description: 'Complete payment of the non-refundable application fee (KES 2,000) via M-PESA or bank transfer.',
    },
    {
      step: 6,
      title: 'Await Admission Decision',
      description: 'Applications are reviewed within 2-3 weeks. You will receive notification via email.',
    },
    {
      step: 7,
      title: 'Accept Offer & Register',
      description: 'If admitted, accept your offer and complete registration to secure your place.',
    },
  ];

  const generalRequirements = [
    'Completed application form',
    'Original and copies of academic certificates and transcripts',
    'Copy of National ID or Passport',
    'Two recent passport-size photographs',
    'Two recommendation letters (for postgraduate programs)',
    'Personal statement (500-1000 words)',
    'Proof of application fee payment',
  ];

  const keyDates = [
    { title: 'September Intake Application Deadline', date: 'July 31, 2025' },
    { title: 'September Semester Starts', date: 'September 8, 2025' },
    { title: 'January Intake Application Deadline', date: 'November 30, 2025' },
    { title: 'January Semester Starts', date: 'January 12, 2026' },
    { title: 'May Intake Application Deadline', date: 'March 31, 2026' },
    { title: 'May Semester Starts', date: 'May 4, 2026' },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-green-700 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl">Your journey to excellence begins here</p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left md:text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to apply to Kilele University
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {admissionSteps.map((item) => (
              <div 
                key={item.step}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-600 to-red-600 rounded-full mb-4 text-white text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">General Requirements</h2>
              <p className="text-gray-700 mb-6">
                All applicants must submit the following documents with their application. 
                Specific programs may have additional requirements.
              </p>
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-3">
                  {generalRequirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Downloadable Resources</h2>
              <p className="text-gray-700 mb-6">
                Access important documents and forms to help you with your application.
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <FileText className="h-8 w-8 text-green-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">Application Form</h3>
                      <p className="text-sm text-gray-600">Download the official application form</p>
                    </div>
                    <Download className="h-6 w-6 text-gray-400" />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <FileText className="h-8 w-8 text-green-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">Admission Policy</h3>
                      <p className="text-sm text-gray-600">Complete admission guidelines (PDF)</p>
                    </div>
                    <Download className="h-6 w-6 text-gray-400" />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <FileText className="h-8 w-8 text-green-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">Fee Structure Guide</h3>
                      <p className="text-sm text-gray-600">Detailed breakdown of program fees</p>
                    </div>
                    <Download className="h-6 w-6 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Dates */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Important Dates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mark your calendar with these crucial admission and academic dates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyDates.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <Calendar className="h-10 w-10 text-green-700 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-2xl font-bold text-green-700">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Apply?
          </h2>
          <p className="text-xl mb-8">
            Start your application today and join our community of scholars
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-800 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Submit Application
          </Link>
        </div>
      </section>
    </div>
  );
}