import { motion } from "framer-motion";
import { Lightbulb, Rocket, Users, Globe, Zap, Network } from "lucide-react";

const reasons = [
  {
    title: "Strong problem-solving instinct",
    description: "I approach challenges methodically, breaking complex issues into manageable components to find optimal solutions.",
    icon: Lightbulb,
  },
  {
    title: "Fast learner, constantly upskilling",
    description: "Technology evolves rapidly, and so do I. I'm always exploring new frameworks and architectural patterns.",
    icon: Rocket,
  },
  {
    title: "Cross-disciplinary background",
    description: "Experience in customer service and civic work gives me a unique perspective on user needs and communication.",
    icon: Network,
  },
  {
    title: "Team-oriented & adaptable",
    description: "I thrive in collaborative environments, easily adapting to different workflows, methodologies, and team dynamics.",
    icon: Users,
  },
  {
    title: "English C1 Level",
    description: "Fluent professional communication allows me to seamlessly integrate into international teams and global projects.",
    icon: Globe,
  },
  {
    title: "Ready from day one",
    description: "Highly motivated to contribute immediate value while continuously growing technically within the organization.",
    icon: Zap,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function WhyMe() {
  return (
    <section id="why-me" className="py-24 relative overflow-hidden" data-testid="section-why-me">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Hire Me?
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Beyond just writing code, here's what I bring to the table as a professional developer.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-card/50 backdrop-blur border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors group relative overflow-hidden"
                data-testid={`why-me-card-${index}`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm relative z-10">
                  <Icon className="text-primary" size={24} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 relative z-10">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">{reason.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
