import { motion } from "framer-motion";
import { 
  SiReact, SiJavascript, SiTypescript, SiSharp, SiDotnet, 
  SiMysql, SiGit, SiGithub, SiHtml5, SiCss, SiSupabase
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, level: "Intermediate", color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, level: "Intermediate", color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, level: "Intermediate", color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, level: "Intermediate", color: "#E34F26" },
      { name: "CSS3", icon: SiCss, level: "Intermediate", color: "#1572B6" },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "C#", icon: SiSharp, level: "Intermediate", color: "#239120" },
      { name: ".NET", icon: SiDotnet, level: "Intermediate", color: "#512BD4" },
      { name: "MySQL", icon: SiMysql, level: "Intermediate", color: "#4479A1" },
      { name: "Supabase", icon: SiSupabase, level: "Intermediate", color: "#3ECF8E" },
      { name: "SQL", icon: null, level: "Intermediate", color: "#ffffff" },
    ]
  },
  {
    title: "Tools & Other",
    skills: [
      { name: "Git", icon: SiGit, level: "Advanced", color: "#F05032" },
      { name: "GitHub", icon: SiGithub, level: "Advanced", color: "#ffffff" },
      { name: "Responsive Design", icon: null, level: "Advanced", color: "#ffffff" },
      { name: "Technical Support", icon: null, level: "Professional", color: "#ffffff" },
      { name: "English (C1)", icon: null, level: "Fluent", color: "#ffffff" },
    ]
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

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/50 border-y border-border/50 relative overflow-hidden" data-testid="section-skills">
      {/* Background glow - Optimized */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-primary/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technical Arsenal
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            The tools and technologies I use to bring ideas to life. Always expanding, always refining.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-background rounded-2xl border border-border p-6 shadow-sm flex flex-col h-full"
              data-testid={`skills-category-${catIndex}`}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary rounded-full block" />
                {category.title}
              </h3>
              
              <div className="space-y-4 flex-1">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div 
                      key={skill.name} 
                      variants={itemVariants}
                      className="flex items-center justify-between group p-3 -mx-3 rounded-lg hover:bg-muted/50 transition-colors"
                      data-testid={`skill-item-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-card flex items-center justify-center border border-border group-hover:border-primary/30 transition-colors shadow-sm">
                          {Icon ? (
                            <Icon size={16} style={{ color: skill.color !== '#ffffff' ? skill.color : 'currentColor' }} />
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-primary/50" />
                          )}
                        </div>
                        <span className="font-medium text-sm md:text-base">{skill.name}</span>
                      </div>
                      <span className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                        {skill.level}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
