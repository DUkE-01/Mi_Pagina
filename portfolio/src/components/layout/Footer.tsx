import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 bg-background relative overflow-hidden" data-testid="footer">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="text-xl font-display font-bold tracking-tighter text-primary mb-2">
              Joel<span className="text-foreground">.dev</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Built with precision and passion. <br className="md:hidden" />
              &copy; {new Date().getFullYear()} Joel Arístides Gil Jackson.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/DUkE-01" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              data-testid="footer-link-github"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/joel-gil-softwaredev/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              data-testid="footer-link-linkedin"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:Joel.Gil2025@hotmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              data-testid="footer-link-email"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
