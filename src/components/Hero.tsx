
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary-light/90 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/528830313.sd.mp4?s=2c1a7ffa6c58d70ef6c2e0501097462be435e668&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container max-w-6xl relative z-20">
        <div className="text-center space-y-8 animate-fadeIn">
          <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full font-medium mb-4 animate-float">Premium Mentorship</span>
          <h1 className="heading-xl max-w-4xl mx-auto text-gradient">
            Transform Your Business with Expert Mentorship
          </h1>
          <p className="body-lg text-white/80 max-w-2xl mx-auto">
            Join Grant Cardone's exclusive mentorship program and learn the proven strategies for success in cryptocurrency, forex, and business scaling.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#programs" className="btn-primary flex items-center gap-2 font-medium shadow-lg shadow-secondary/20">
              Explore Programs <ArrowRight size={20} />
            </a>
            <a href="#about" className="btn-secondary font-medium border border-white/10 hover:border-white/20">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
