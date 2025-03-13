
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import TawkToChat, { openTawkToChat } from "../components/TawkToChat";
import { useEffect } from "react";

const Index = () => {
  // Find all "Get Started" buttons and add click listeners to open Tawk.to chat
  useEffect(() => {
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
      if (button instanceof HTMLElement && 
          button.textContent?.includes('Get Started')) {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          openTawkToChat();
        });
      }
    });

    return () => {
      ctaButtons.forEach(button => {
        if (button instanceof HTMLElement && 
            button.textContent?.includes('Get Started')) {
          button.removeEventListener('click', openTawkToChat);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary-light">
      <Navbar />
      <Hero />
      <Programs />
      <About />
      <Testimonials />
      <Footer />
      <TawkToChat />
    </div>
  );
};

export default Index;
