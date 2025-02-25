
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-bold">Contact Us</h3>
            <div className="space-y-4">
              <a href="mailto:contact@gcmentorship.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail size={20} />
                <span>contact@gcmentorship.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone size={20} />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Miami, Florida, USA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-bold">Quick Links</h3>
            <div className="space-y-3">
              <a href="#about" className="block hover:text-secondary transition-colors">About</a>
              <a href="#programs" className="block hover:text-secondary transition-colors">Programs</a>
              <a href="#testimonials" className="block hover:text-secondary transition-colors">Testimonials</a>
              <a href="#contact" className="block hover:text-secondary transition-colors">Contact</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-bold">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-300 mt-4">
              Subscribe to our newsletter for the latest updates and exclusive content.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} GC Mentorship. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
