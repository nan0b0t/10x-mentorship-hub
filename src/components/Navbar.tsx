
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useChatbot } from './ChatbotProvider';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openChatbot } = useChatbot();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openChatbot();
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold font-playfair">
            GC Mentorship
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#programs" className="nav-link">Programs</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#" onClick={handleGetStarted} className="btn-secondary hover:bg-secondary hover:text-white transition-all duration-300">Get Started</a>
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#2E236C]/95 backdrop-blur-lg shadow-lg border-t">
            <div className="flex flex-col space-y-4 p-6">
              <a href="#about" className="text-white/90 hover:text-white transition-colors">About</a>
              <a href="#programs" className="text-white/90 hover:text-white transition-colors">Programs</a>
              <a href="#testimonials" className="text-white/90 hover:text-white transition-colors">Testimonials</a>
              <a href="#" onClick={handleGetStarted} className="btn-secondary bg-secondary hover:bg-secondary/80 text-white transition-all duration-300 text-center">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
