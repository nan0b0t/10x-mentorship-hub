
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Tech Innovations",
    content: "Grant's mentorship transformed our business strategy. His insights helped us scale from $1M to $10M in revenue within 18 months.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Forex Trader",
    content: "The Forex Trading program provided me with a clear framework for success. Grant's strategies are practical and results-driven.",
    rating: 5
  },
  {
    name: "Rachel Brooks",
    role: "Startup Founder",
    content: "The Business Scaling Mastery program gave me the confidence and tools I needed to expand my business internationally.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-primary-light">
      <div className="container max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Success Stories</h2>
          <p className="body-base text-muted-foreground max-w-3xl mx-auto">
            Hear from our community of successful entrepreneurs and traders who have transformed their businesses through our programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-lg relative transform transition-all duration-300 hover:scale-105"
            >
              <Quote className="absolute top-4 right-4 text-secondary/20" size={40} />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-secondary" size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-white/90 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <h4 className="font-semibold text-white">{testimonial.name}</h4>
                <p className="text-secondary text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
