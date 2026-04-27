import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Pasante (Intern)",
    company: "CAM Software",
    period: "Aug 2025 – Apr 2026",
    description: "Contributing to technology solutions and engaging in dynamic learning across new technologies to build robust applications.",
    isUpcoming: true
  },
  {
    role: "Municipal Security",
    company: "Ayuntamiento Municipal de Santo Domingo Este",
    period: "Apr 2024 – Aug 2025",
    description: "Exercised civic responsibility and provided citizen support, honing communication, conflict resolution, and situational adaptability.",
    isUpcoming: false
  },
  {
    role: "Chef's Assistant",
    company: "D' Santana Picalonga Restaurante Gourmet",
    period: "2021 – 2022",
    description: "Delivered excellent customer service, organized operations, and maintained menu updates in a fast-paced environment.",
    isUpcoming: false
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24" data-testid="section-experience">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Journey</h2>
          <p className="text-muted-foreground text-lg">A diverse background spanning technology, civic duty, and high-pressure service.</p>
        </motion.div>

        <div className="relative border-l-2 border-border ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
              data-testid={`experience-item-${index}`}
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 bg-background ${exp.isUpcoming ? 'border-accent shadow-[0_0_10px_rgba(var(--accent),0.5)]' : 'border-primary'}`} />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2 gap-2 sm:gap-4">
                <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                  {exp.role}
                  {exp.isUpcoming && (
                    <span className="text-xs bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded-full ml-2">Upcoming</span>
                  )}
                </h3>
                <div className="flex items-center text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                  <Calendar size={14} className="mr-2" />
                  {exp.period}
                </div>
              </div>
              
              <div className="flex items-center text-primary font-medium mb-4">
                <Briefcase size={16} className="mr-2" />
                {exp.company}
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
