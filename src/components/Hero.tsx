
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="container max-w-6xl">
        <div className="text-center space-y-8 animate-fadeIn">
          <h1 className="heading-xl max-w-4xl mx-auto">
            Transform Your Business with Expert Mentorship
          </h1>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Join Grant Cardone's exclusive mentorship program and learn the proven strategies for success in cryptocurrency, forex, and business scaling.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#programs" className="btn-primary flex items-center gap-2">
              Explore Programs <ArrowRight size={20} />
            </a>
            <a href="#about" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
