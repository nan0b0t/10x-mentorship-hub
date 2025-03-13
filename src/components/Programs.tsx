
import { BookOpen, TrendingUp, LineChart } from 'lucide-react';

const programs = [
  {
    icon: BookOpen,
    title: "Business Scaling Mastery",
    description: "Learn proven strategies to scale your business, optimize operations, and increase revenue through systematic growth approaches.",
    price: "$997/month"
  },
  {
    icon: TrendingUp,
    title: "Cryptocurrency Trading",
    description: "Master the art of cryptocurrency trading with expert insights on market analysis, trading strategies, and risk management.",
    price: "$897/month"
  },
  {
    icon: LineChart,
    title: "Forex Trading Excellence",
    description: "Develop professional forex trading skills with comprehensive training on currency pairs, market analysis, and trading psychology.",
    price: "$797/month"
  }
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-primary">
      <div className="container max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full font-medium mb-4">Expert Programs</span>
          <h2 className="heading-lg mb-4">Our Premium Programs</h2>
          <p className="body-base text-white/70 max-w-3xl mx-auto">
            Choose from our specialized programs designed to accelerate your success in business and trading.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="glass-card rounded-lg p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:translate-y-[-8px] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="mb-6 bg-secondary/20 p-4 rounded-full">
                <program.icon size={40} className="text-secondary" />
              </div>
              <h3 className="heading-md mb-4">{program.title}</h3>
              <p className="body-base mb-6">{program.description}</p>
              <span className="text-secondary font-semibold text-xl mb-6">{program.price}</span>
              <button className="btn-secondary mt-auto w-full border border-secondary/30 hover:bg-secondary/20">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
