
import { Trophy, Users, TrendingUp, Award, Target, BookOpen } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: "25+ Years Experience",
    description: "Consulting fortune 500 companies and entrepreneurs worldwide"
  },
  {
    icon: Users,
    title: "10,000+ Students",
    description: "Transformed through our mentorship programs"
  },
  {
    icon: Award,
    title: "Multiple Best Sellers",
    description: "Author of revolutionary business growth books"
  },
  {
    icon: Target,
    title: "97% Success Rate",
    description: "Our students achieve their business goals"
  },
  {
    icon: BookOpen,
    title: "Custom Curriculum",
    description: "Tailored programs for your specific needs"
  },
  {
    icon: TrendingUp,
    title: "$1B+ Generated",
    description: "Combined revenue growth for our clients"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">About Grant Cardone</h2>
          <p className="body-base text-muted-foreground max-w-3xl mx-auto">
            A renowned business magnate, real estate investor, and sales training expert, Grant Cardone has helped thousands of businesses and individuals achieve extraordinary success through his proven methodologies and mentorship programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-lg text-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <achievement.icon size={40} className="text-primary" />
              </div>
              <h3 className="heading-md mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
