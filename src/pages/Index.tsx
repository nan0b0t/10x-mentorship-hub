
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary-light">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
