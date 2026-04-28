import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CV_PATH = "/assets/CV-Joel_Aristides_Gil_Jackson.pdf";

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="top" 
      className="relative min-h-[100dvh] flex flex-col justify-center pt-16 overflow-hidden"
      data-testid="section-hero"
    >
      {/* Background Elements - Optimized for Mobile Performance */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex justify-center items-center">
        <div className="absolute w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-primary/10 rounded-full blur-[60px] md:blur-[120px] opacity-40 md:opacity-50 -top-20 -right-20 md:-top-40 md:-right-40" />
        <div className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent/10 rounded-full blur-[50px] md:blur-[100px] opacity-40 md:opacity-50 bottom-0 -left-10 md:-left-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for work
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Joel Arístides <br className="hidden md:block" />
            Gil Jackson.
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A <span className="text-foreground font-semibold">Front-End / Full Stack Developer</span> crafting clean, precise, and adaptive digital experiences from Santo Domingo, DR.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" className="rounded-full gap-2 text-base h-12 px-8" onClick={scrollToContact} data-testid="hero-btn-contact">
              Let's Build Together <ArrowRight size={18} />
            </Button>
            
            <div className="flex items-center gap-3 mt-4 sm:mt-0">
              <a href="https://github.com/DUkE-01" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:text-primary transition-all" data-testid="hero-link-github">
                <Github size={20} />
              </a>
              <a href="www.linkedin.com/in/joel-gil-softwaredev" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:text-primary transition-all" data-testid="hero-link-linkedin">
                <Linkedin size={20} />
              </a>
              <a href="mailto:Joel.Gil2025@hotmail.com" className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:text-primary transition-all" data-testid="hero-link-email">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
