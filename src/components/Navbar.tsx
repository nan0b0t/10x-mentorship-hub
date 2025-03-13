
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useChatbot } from './ChatbotProvider';
import { openTawkToChat } from './TawkToChat';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openChatbot } = useChatbot();

  const handleGetStarted = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openTawkToChat();
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="relative bg-primary/90 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold font-playfair text-secondary">
            GC Mentorship
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link font-medium transition-all duration-300 hover:text-secondary">About</a>
            <a href="#programs" className="nav-link font-medium transition-all duration-300 hover:text-secondary">Programs</a>
            <a href="#testimonials" className="nav-link font-medium transition-all duration-300 hover:text-secondary">Testimonials</a>
            <a 
              href="#" 
              onClick={handleGetStarted} 
              className="btn-secondary bg-secondary text-white hover:bg-secondary/80 font-medium transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 z-50 bg-primary/95 backdrop-blur-lg shadow-lg border-t border-secondary/20">
            <div className="flex flex-col space-y-4 p-6">
              <a href="#about" className="text-white/90 hover:text-secondary transition-colors font-medium">About</a>
              <a href="#programs" className="text-white/90 hover:text-secondary transition-colors font-medium">Programs</a>
              <a href="#testimonials" className="text-white/90 hover:text-secondary transition-colors font-medium">Testimonials</a>
              <a 
                href="#" 
                onClick={handleGetStarted} 
                className="btn-secondary bg-secondary hover:bg-secondary/80 text-white transition-all duration-300 text-center font-medium"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
