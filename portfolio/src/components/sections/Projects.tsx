import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, LayoutTemplate } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Full Stack CRUD Application",
    description: "A comprehensive data management system demonstrating end-to-end architecture. Handles classic CRUD operations with robust API integration and state management.",
    tech: ["React.JS", "ASP.NET Core", "SQL Server", "C#"],
    icon: Code2,
    color: "from-primary/20 to-primary/5",
    border: "border-primary/20"
  },
  {
    title: "Academic Web Interfaces",
    description: "A collection of responsive, interactive web development projects built during my coursework. Focuses on device adaptability, clean UI/UX, and semantic markup.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    icon: LayoutTemplate,
    color: "from-accent/20 to-accent/5",
    border: "border-accent/20"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/30 border-t border-border/50 relative" data-testid="section-projects">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Featured Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">Academic and independent projects showcasing full-stack capabilities and attention to detail.</p>
          </div>
          <Button variant="outline" className="w-fit" asChild data-testid="projects-btn-github">
            <a href="https://github.com/joel-gil" target="_blank" rel="noopener noreferrer">
              <Github size={16} className="mr-2" />
              View Full GitHub
            </a>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-full flex flex-col"
                data-testid={`project-card-${index}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`relative h-full flex flex-col bg-background rounded-3xl border ${project.border} p-8 shadow-sm overflow-hidden z-10 transition-transform duration-300 group-hover:-translate-y-1`}>
                  
                  <div className="w-14 h-14 rounded-2xl bg-card flex items-center justify-center border border-border mb-6 shadow-sm">
                    <Icon size={28} className="text-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-border/50">
                      <span className="text-sm font-medium text-muted-foreground">Available on request</span>
                      <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                        <ExternalLink size={18} />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
