import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Horizon University</h3>
            <p className="text-sm mb-4">
              Empowering Minds, Shaping Futures. A leading institution in higher education excellence.
            </p>
            <div className="flex gap-3">
              <a
                href={contactInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={contactInfo.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={contactInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={contactInfo.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={contactInfo.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-indigo-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-indigo-400 transition-colors">
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-indigo-400 transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-indigo-400 transition-colors">
                  Events & News
                </Link>
              </li>
              <li>
                <Link href="/student-life" className="hover:text-indigo-400 transition-colors">
                  Student Life
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/academics#undergraduate" className="hover:text-indigo-400 transition-colors">
                  Undergraduate
                </Link>
              </li>
              <li>
                <Link href="/academics#masters" className="hover:text-indigo-400 transition-colors">
                  Masters Programs
                </Link>
              </li>
              <li>
                <Link href="/academics#postgraduate" className="hover:text-indigo-400 transition-colors">
                  Postgraduate Diplomas
                </Link>
              </li>
              <li>
                <Link href="/staff" className="hover:text-indigo-400 transition-colors">
                  Faculty & Staff
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-indigo-400 transition-colors">
                  Campus Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="whitespace-pre-line">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-indigo-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-indigo-400 transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} Horizon University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
