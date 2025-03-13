
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Tech Innovations",
    content: "Grant's mentorship transformed our business strategy. His insights helped us scale from $1M to $10M in revenue within 18 months.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    name: "Michael Chen",
    role: "Forex Trader",
    content: "The Forex Trading program provided me with a clear framework for success. Grant's strategies are practical and results-driven.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    name: "Rachel Brooks",
    role: "Startup Founder",
    content: "The Business Scaling Mastery program gave me the confidence and tools I needed to expand my business internationally.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-primary-light">
      <div className="container max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full font-medium mb-4">Testimonials</span>
          <h2 className="heading-lg mb-4">Success Stories</h2>
          <p className="body-base text-white/70 max-w-3xl mx-auto">
            Hear from our community of successful entrepreneurs and traders who have transformed their businesses through our programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-lg relative transform transition-all duration-300 hover:translate-y-[-8px] group"
            >
              <Quote className="absolute top-4 right-4 text-secondary/20" size={40} />
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary/30 mr-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-secondary text-sm">{testimonial.role}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-secondary" size={12} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/90 italic relative z-10">"{testimonial.content}"</p>
              <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
