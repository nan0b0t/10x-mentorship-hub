
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
          <h2 className="heading-lg mb-4">Our Programs</h2>
          <p className="body-base text-muted-foreground max-w-3xl mx-auto">
            Choose from our specialized programs designed to accelerate your success in business and trading.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="glass-card rounded-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="mb-6">
                <program.icon size={40} className="text-secondary" />
              </div>
              <h3 className="heading-md mb-4">{program.title}</h3>
              <p className="body-base mb-6">{program.description}</p>
              <span className="text-secondary font-semibold text-xl">{program.price}</span>
              <button className="btn-secondary mt-6 w-full">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
